// NameSpacing 
const portfolio = {};

portfolio.skillsInfo = [
    {
        name: "react",
        description: "Learned React concepts (ie. state, props, components, Routing).  Used the React library to create an interactive application."
    },
    {
        name: "css3",
        description: "Learned CSS basic styling as well as advanced selectors.  Also Worked with advanced layouts, flex-box, grid systems and CSS grids. "
    },
    {
        name: "sass",
        description: "Used SCSS partials to avoid Repeating code by impoorting into style sheet.  As well as used mixin's and varibles to group together consistently used code."
    },
    {
        name: "html5",
        description: "Create well structred documents with best practies.  Learn proper uses for classes and ID's and used right semantic elements for page."
    },
    {
        name: "accessibility",
        description: "Made sure all sites are fully accessable to everyone.  Used accessibilty guidelines from sites like WCAG and WebAim to make sure sites are up to standards. "
    },
    {
        name: "firebase",
        description: "Fire Base intigration into both in React and JS.  Able to store user data and acesses it when needed"
    },
    {
        name: "jquery",
        description: "Interact with the DOM using Jquery concepts."
    },
    {
        name: "git",
        description: "Created git init for sevreal different projects on the command line.  Used branching and other methods through git to colaberate with different people."
    },
    {
        name: "github",
        description: "Pushed several projects to github to colaborate and deploy. "
    },
    {
        name: "js",
        description: "Interact with the DOM using Vanilla JS concepts."
    },
]

portfolio.slides = document.querySelectorAll('.slides')
portfolio.nextBtn = document.querySelector('.nextBtn')
portfolio.prevBtn = document.querySelector('.prevBtn')
portfolio.skillsBtn = document.querySelectorAll('.skillsBtn')

portfolio.skillTitle = document.querySelector('.skillsTitle')
portfolio.skilldescription = document.querySelector('article')

portfolio.menuBtn = document.querySelector('.hamburgerMenu')
portfolio.slideMenu = document.querySelector('.slideMenu')

portfolio.audio  = document.querySelectorAll('#audio')
portfolio.playBtn = document.querySelectorAll('.play')
portfolio.stopBtn = document.querySelectorAll('.stop')

portfolio.navBtn = document.querySelectorAll('li')


// setting position on images
portfolio.slides.forEach( (slide, index) => {
    slide.style.left = `${index * 100}%`;
})

// adding eventlister for buttons
let counter = 0;

portfolio.nextBtn.addEventListener('click', () => {
    counter++;
    portfolio.carousel();
})

portfolio.prevBtn.addEventListener('click', () => {
    counter--;
    portfolio.carousel();
})

// carosel function
portfolio.carousel = () => {

    if (counter === portfolio.slides.length) {
        counter = 0;
    }

    if ( counter < 0) {
        counter = portfolio.slides.length - 1;
    }

    portfolio.slides.forEach( (slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`

    })
};

// skills area creating user click function

portfolio.userSkillsClick = () => {
    const pElement = document.createElement('p');

    portfolio.skillsBtn.forEach( function(btn) {
        btn.addEventListener('click', function() {
            portfolio.skillsInfo.forEach( (info) =>  {
                if (btn.classList.contains(info.name)){
                    portfolio.skillTitle.innerHTML = `${info.name}`;

                    
                    pElement.innerHTML = `${info.description}`;

                    portfolio.skilldescription.appendChild(pElement);
                    
                }
            })
        })
        pElement.innerHTML = ''
    })
};

// hamburger toggle 

portfolio.menuBtn.addEventListener('click', ()=> {
    portfolio.menuBtn.classList.toggle('isActive')
    portfolio.slideMenu.classList.toggle('isActive')
})

portfolio.navBtn.forEach( function(btn) {
    btn.addEventListener('click', function() {
       portfolio.slideMenu.classList.remove('isActive') 
    })
})

// playing my music 

let play = 0;

portfolio.userListen = () => {
    
        portfolio.playBtn.forEach( function(playPause) {
           playPause.addEventListener('click', function() {
               if (play === 0) {
                   portfolio.audio.forEach( function(track) {
                       if (playPause.classList.contains(track.title)) {
                           play = 1;
                           track.play();
                           playPause.innerHTML = "Pause";
                        }
                      
                    })

                } else if (play === 1) {
                   portfolio.audio.forEach(function (track) {
                       if (playPause.classList.contains(track.title)) {
                           play = 0;
                           track.pause();
                           playPause.innerHTML = "Play";
                       }

                   })
                }
           })
        })
    
    portfolio.stopBtn.forEach(function (stop) {
        stop.addEventListener('click', function () {
            portfolio.audio.forEach(function (track) {
                if (stop.classList.contains(track.title)) {
                    track.pause();
                    track.currentTime = 0;
                }
            })
        })
    })
}   



















// Init function
portfolio.init = () => {
    portfolio.userSkillsClick();
    portfolio.userListen();
};

// Calling init 
portfolio.init();