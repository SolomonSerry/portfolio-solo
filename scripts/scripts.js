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
        description: "Used SCSS partials to avoid Repeating code by importing into style sheet. Included mixin's and variables to group together consistently used code."
    },
    {
        name: "html5",
        description: "Create well-structured documents with best practices. Use classes and ID's in appropriate settings and along with other semantic elements for page."
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

portfolio.skillTitle = document.querySelector('.skillsTitle')
portfolio.skilldescription = document.querySelector('article')

portfolio.menuBtn = document.querySelector('.hamburgerMenu')
portfolio.slideMenu = document.querySelector('.slideMenu')

portfolio.audio  = document.querySelectorAll('#audio')
portfolio.playBtn = document.querySelectorAll('.play')
portfolio.stopBtn = document.querySelectorAll('.stop')
portfolio.mainPlayer = document.querySelector('.mainPlayer')

portfolio.navBtn = document.querySelectorAll('li')

portfolio.musicArea = document.querySelector('.musicContainer')
portfolio.contactArea = document.querySelector('.contactSection')
portfolio.imgClick = document.querySelectorAll('.trackArt')

portfolio.hoverPlay = document.querySelectorAll('.playHover')
portfolio.hoverStop = document.querySelectorAll('.stopHover')

portfolio.projectImg = document.querySelectorAll('.projectImage')


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

let play = true;

portfolio.userListen = () => {
    
        portfolio.imgClick.forEach( function(playStop) {
           playStop.addEventListener('click', function() {
            //    console.log(playStop)
               if (play === true) {

                   portfolio.audio.forEach( function(track) {
                       if (playStop.classList.contains(track.title)) {
                           portfolio.hoverPlay.forEach( (hoverPlay) => {
                            if (hoverPlay.offsetParent.classList.contains(track.title)) {
                                console.log(hoverPlay)
                                portfolio.hoverStop.forEach( (hoverStop) => {
                                    if(hoverStop.parentElement.classList.contains(track.title)) {
                                        hoverPlay.style.display = "none"
                                        hoverStop.style.display = "block"
                                        portfolio.mainPlayer.src = track.src;
                                        portfolio.mainPlayer.play();
                                     //    playPause.innerText = "Pause";
                                        play = (!play);

                                    }
                                  
                                })
                            
                            }
                        })

                          
                       }
                    })
                    
                } 
                else if (play === false) {
                    portfolio.audio.forEach(function (track) {
                        if (playStop.classList.contains(track.title)) {
                            portfolio.hoverPlay.forEach( (hoverPlay) => {
                                // console.log(hoverPlay)
                                if(hoverPlay.parentElement.classList.contains(track.title)) {
                                    portfolio.hoverStop.forEach( (hoverStop) => {
                                        if (hoverStop.parentElement.classList.contains(track.title)) {
                                            hoverPlay.style.display = "block"
                                            hoverStop.style.display = "none"
                                            portfolio.mainPlayer.currentTime = 0;
                                            portfolio.mainPlayer.pause()
                                            play = (!play);

                                        }
                                    })
                                }
                            })
                           
                        } 
                    })
                    
                } 
             
            })
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
    }
    
})

portfolio.projectImg.forEach( (project) => {
    portfolio.imageArray.forEach( (imageArray) => {
        if (project.classList.contains(imageArray.name)) {
            setInterval( () => {
                let random = Math.floor(Math.random() * imageArray.pics.length);
               project.src = imageArray.pics[random];

            }, 2500);

        }
    })
    
})




// Init function
portfolio.init = () => {
    portfolio.userSkillsClick();
    portfolio.userListen();
    AOS.init();
};

// Calling init 
portfolio.init();