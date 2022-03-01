// NameSpacing 
const portfolio = {};

portfolio.skillsInfo = [
    {
        name: "react",
        description: "Understanding of React concepts (ie. state, props, components, Routing).  Used the React library to create an interactive application."
    },
    {
        name: "css3",
        description: "Understanding of CSS basic styling as well as advanced selectors.  Also Worked with advanced layouts: flex-box, grid systems and CSS grids. "
    },
    {
        name: "sass",
        description: "Used SCSS partials to avoid repeating code by importing into style sheet. Included mixin's and variables to group together consistently used code."
    },
    {
        name: "html5",
        description: "Create well-structured documents with best practices. Use classes and ID's in appropriate settings, along with other semantic elements for page."
    },
    {
        name: "accessibility",
        description: "Made sure all sites are fully accessible to everyone.  Used accessibilty guidelines from sites like WCAG and WebAim to make sure sites are up to standards. "
    },
    {
        name: "firebase",
        description: "Firebase integration into both React and JS. Able to store user data and access it when needed."
    },
    {
        name: "jquery",
        description: "Interact with the DOM using Jquery concepts."
    },
    {
        name: "git",
        description: "Created git init for several different projects on iTerm. Used branching and other methods through git to collaborate with various developers."
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

portfolio.imageArray = [
    {
        name: "image1",
        pics: ["./assets/text1.png", "./assets/text2.png", "./assets/text3.png", "./assets/text4.png", "./assets/text5.png"]
    },
    {
        name: "image2",
        pics: ["./assets/pokemon1.png", "./assets/pokemon2.png", "./assets/pokemon3.png", "./assets/pokemon4.png", "./assets/pokemon5.png"]
    },
    {
        name: "image3",
        pics: ["./assets/movie1.png", "./assets/movie2.png", "./assets/movie3.png", "./assets/movie4.png", "./assets/movie5.png"]
    },
    {
        name: "image4",
        pics: ["./assets/nutriNav1.png", "./assets/nutriNav2.png", "./assets/nutriNav3.png", "./assets/nutriNav4.png", "./assets/nutriNav5.png"]
    }
]

portfolio.slides = document.querySelectorAll('.slides')
portfolio.nextBtn = document.querySelector('.nextBtn')
portfolio.prevBtn = document.querySelector('.prevBtn')
portfolio.skillsBtn = document.querySelectorAll('.skillsBtn')


portfolio.menuBtn = document.querySelector('.hamburgerMenu')
portfolio.slideMenu = document.querySelector('.slideMenu')
portfolio.navBtn = document.querySelectorAll('li')

portfolio.skillTitle = document.querySelector('.skillsTitle')
portfolio.skilldescription = document.querySelector('article')


portfolio.projectImg = document.querySelectorAll('.projectImage')

portfolio.mainPlayer = document.querySelector('.mainPlayer')

portfolio.musicArea = document.querySelector('.musicContainer')

portfolio.track1 = document.querySelector('.track1')
portfolio.track2 = document.querySelector('.track2')
portfolio.track3 = document.querySelector('.track3')

portfolio.tracks = document.querySelectorAll('.tracks')

portfolio.audio1 = document.querySelector('#audio1')
portfolio.audio2 = document.querySelector('#audio2')
portfolio.audio3 = document.querySelector('#audio3')

portfolio.playHover1 = document.querySelector('.playHover1')
portfolio.playHover2 = document.querySelector('.playHover2')
portfolio.playHover3 = document.querySelector('.playHover3')

portfolio.stopHover1 = document.querySelector('.stopHover1')
portfolio.stopHover2 = document.querySelector('.stopHover2')
portfolio.stopHover3 = document.querySelector('.stopHover3')

portfolio.playing1 = document.querySelector('.playing1')
portfolio.playing2 = document.querySelector('.playing2')
portfolio.playing3 = document.querySelector('.playing3')

portfolio.contactArea = document.querySelector('.contactSection')
portfolio.aboutMeArea = document.querySelector('.aboutMeSection')
portfolio.skillsArea = document.querySelector('.skillsSection')
portfolio.aboutMeContent = document.querySelector('.aboutMeContent')

portfolio.formContent = document.querySelector('.formContainer')


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
        console.log(slide)

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
       portfolio.menuBtn.classList.toggle('isActive') 
    })
})

// playing my music 


let count1 = 0;
let count2 = 0;
let count3 = 0;

portfolio.userListen = () => {
    portfolio.track1.addEventListener('click', (event) => {
       
       
        if (count1 === 0) {
            portfolio.mainPlayer.src = portfolio.audio1.src;
            portfolio.mainPlayer.play();
            count1 = 1;
            
            portfolio.playHover1.style.display = 'none'
            portfolio.stopHover1.style.display = 'block'

            portfolio.playHover2.style.display = 'block'
            portfolio.stopHover2.style.display = 'none'
            portfolio.playHover3.style.display = 'block'
            portfolio.stopHover3.style.display = 'none'

            portfolio.playing1.innerHTML = `<em>Playing...</em>`
            portfolio.playing2.innerHTML = `<em>Click Image To Play</em>`
            portfolio.playing3.innerHTML = `<em>Click Image To Play</em>`

            count2 = 0
            count3 = 0 

            
            
        } else if (count1 === 1) {
           
            portfolio.mainPlayer.pause();
            portfolio.mainPlayer.currentTime = 0;
            count1 = 0;

            portfolio.playHover1.style.display = 'block'
            portfolio.stopHover1.style.display = 'none'
            
            portfolio.playing1.innerHTML = `<em>Click Image To Play</em>`
            
        } 
    })

    portfolio.track2.addEventListener('click', () => {
        if (count2 === 0) {
            portfolio.mainPlayer.src = portfolio.audio2.src;
            portfolio.mainPlayer.play();
            count2 = 1;

            portfolio.playHover2.style.display = 'none'
            portfolio.stopHover2.style.display = 'block'

            portfolio.playHover1.style.display = 'block'
            portfolio.stopHover1.style.display = 'none'
            portfolio.playHover3.style.display = 'block'
            portfolio.stopHover3.style.display = 'none'

            portfolio.playing2.innerHTML = `<em>Playing...</em>`
            portfolio.playing1.innerHTML = `<em>Click Image To Play</em>`
            portfolio.playing3.innerHTML = `<em>Click Image To Play</em>`

            count1 = 0
            count3 = 0 

            
            



        } else if (count2 === 1) {

            portfolio.mainPlayer.pause();
            portfolio.mainPlayer.currentTime = 0;
            count2 = 0;

            portfolio.playHover2.style.display = 'block'
            portfolio.stopHover2.style.display = 'none'

            portfolio.playing2.innerHTML = `<em>Click Image To Play</em>`

        } 
    
    })

    portfolio.track3.addEventListener('click', () => {
        if (count3 === 0) {
            portfolio.mainPlayer.src = portfolio.audio3.src;
            portfolio.mainPlayer.play();
            count3 = 1;

            portfolio.playHover3.style.display = 'none'
            portfolio.stopHover3.style.display = 'block'

            portfolio.playHover2.style.display = 'block'
            portfolio.stopHover2.style.display = 'none'
            portfolio.playHover1.style.display = 'block'
            portfolio.stopHover1.style.display = 'none'

            portfolio.playing3.innerHTML = `<em>Playing...</em>`
            portfolio.playing2.innerHTML = `<em>Click Image To Play</em>`
            portfolio.playing1.innerHTML = `<em>Click Image To Play</em>`

            count2 = 0
            count1 = 0 



        } else if (count3 === 1) {

            portfolio.mainPlayer.pause();
            portfolio.mainPlayer.currentTime = 0;
            count3 = 0;

            portfolio.playHover3.style.display = 'block'
            portfolio.stopHover3.style.display = 'none'

            portfolio.playing3.innerHTML = `<em>Click Image To Play</em>`

        } 
    })

}   

window.addEventListener('scroll', () => {
    if (portfolio.musicArea.getBoundingClientRect().top < window.innerHeight) {
        portfolio.mainPlayer.classList.add('playerVisible')
    }
    
    if (portfolio.musicArea.getBoundingClientRect().top > window.innerHeight) {
        portfolio.mainPlayer.classList.remove('playerVisible')
    }
})


window.addEventListener('scroll', ()=> {
    
    if (portfolio.contactArea.getBoundingClientRect().top < window.innerHeight) {
        portfolio.mainPlayer.classList.remove('playerVisible')
        portfolio.formContent.style.opacity = '100%'
    }
    
})

window.addEventListener('scroll', ()=> {
    
    if (portfolio.aboutMeArea.getBoundingClientRect().top < window.innerHeight) {
        portfolio.aboutMeContent.style.opacity = "100%"
    } 
})

window.addEventListener('scroll', ()=> {
    
    if (portfolio.skillsArea.getBoundingClientRect().top < window.innerHeight) {
        portfolio.skillsBtn.forEach( (skill) => {
            skill.style.opacity = "100%"
        })
    } 
})

window.addEventListener('scroll', ()=> {
    portfolio.tracks.forEach( (track) => {
        if (track.getBoundingClientRect().top < window.innerHeight) {
            track.style.opacity = "100%"
        } 
    })
})


portfolio.projectImg.forEach( (project) => {
    portfolio.imageArray.forEach( (imageArray) => {
        if (project.classList.contains(imageArray.name)) {
            setInterval( () => {
                let random = Math.floor(Math.random() * imageArray.pics.length);
               project.src = imageArray.pics[random];

            }, 2000);

        }
    })
    
})




// Init function
portfolio.init = () => {
    portfolio.userSkillsClick();
    portfolio.userListen();
};

// Calling init 
portfolio.init();