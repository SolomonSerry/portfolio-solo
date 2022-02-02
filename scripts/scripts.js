// NameSpacing 
const portfolio = {};

portfolio.slides = document.querySelectorAll('.slides')
portfolio.nextBtn = document.querySelector('.nextBtn')
portfolio.prevBtn = document.querySelector('.prevBtn')

portfolio.slides.forEach( (slide, index) => {
    slide.style.left = `${index * 100}%`;
})

let counter = 0;

portfolio.nextBtn.addEventListener('click', () => {
    counter++;
    portfolio.carousel();
})

portfolio.prevBtn.addEventListener('click', () => {
    counter--;
    portfolio.carousel();
})

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















// Init function
portfolio.init = () => {

};

// Calling init 
portfolio.init();