// const carouselItem = document.querySelectorAll('.carouselWrapper li');
// const carouselWrapper = document.querySelector('.carouselWrapper');
// const stepper = document.querySelectorAll('.carouselStep button');
// const carouselWrapperWidth = carouselWrapper.offsetWidth;

// stepper.forEach((item) => {
//     item.addEventListener('click', function() {
//         carouselItem.forEach((item) => {
//             item.style.transform += 'translateX(-200px)';
//         })
//     })
// })

// const btn = document.querySelectorAll('[data-btn]');
// const carouselWrapper = document.querySelector('.carouselWrapper')
// const carouselItem = document.querySelectorAll('.carouselWrapper li');
// let carouselWrapperWidth = carouselWrapper.offsetWidth;

// window.addEventListener('resize', reportResize)

// function reportResize() {
//     let carouselWrapperWidth = carouselWrapper.offsetWidth;
//     return carouselWrapperWidth
// }

// btn.forEach((item) => {
//     item.addEventListener('click', () => {
//         const btnActionType = item.getAttribute('data-btn')
//         if (btnActionType === 'next') {
//             carouselItem.forEach((carouselElement) => {
//                 carouselElement.style.transform += `translate3d(-${carouselWrapperWidth}px,0,0)`
//             })
//         } else {
//             carouselItem.forEach((carouselElement) => {
//                 carouselElement.style.transform += `translate3d(${carouselWrapperWidth}px,0,0)`
//             })
//         }
//     })
// })


const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.case');
const prevButton = document.querySelector('[data-action="back"]');
const nextButton = document.querySelector('[data-action="next"]');
const steps = document.querySelectorAll('.carouselSteps li');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1; // wrap around to the last slide
    } else if (index >= slides.length) {
        currentIndex = 0; // wrap around to the first slide
    } else {
        currentIndex = index;
    }
    carousel.style.transform = `translate3d(-${currentIndex * 100}% ,0 ,0)`;

    steps.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active')
        }
    })
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});


/* Scroll */
const mobileMenu = document.querySelector('[data-status]');
const closeMobileMenu = document.querySelector('.closeButton');
const buttonMobileMenu = document.querySelector('.btnMenuMobile');

buttonMobileMenu.addEventListener('click', (e) => {
    const status = mobileMenu.getAttribute('data-status');

    if (status === 'active') {
        mobileMenu.setAttribute('data-status', 'inactive');
    } else {
        mobileMenu.setAttribute('data-status', 'active');
    }  
})

closeMobileMenu.addEventListener('click', (e) => {
    const status = mobileMenu.getAttribute('data-status');

    if (status === 'active') {
        mobileMenu.setAttribute('data-status', 'inactive');
    } else {
        mobileMenu.setAttribute('data-status', 'active');
    }    
})

