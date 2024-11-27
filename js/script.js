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

const mobileMenuLinks = document.querySelectorAll('.menuMobileOptions a');

mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const status = mobileMenu.getAttribute('data-status');
        if (status === 'active') {
            mobileMenu.setAttribute('data-status', 'inactive');
        } else {
            mobileMenu.setAttribute('data-status', 'active');
        }
    })
})

/* Modal */

const serviceButtonList = document.querySelectorAll('.serviceButton');
const modalList = document.querySelectorAll('.backgroundModal');
const modalWrapperList = document.querySelectorAll('.servicesModalWrapper');
const closeModalButtonList = document.querySelectorAll('.closeModalButton');
const servicesModalList = document.querySelectorAll('.servicesModalWrapper');

function toggleClass(elementList, index) {
    elementList[index].classList.toggle('open');
}

modalList.forEach((modal, index) => {
    modal.addEventListener('click', () => {
        if(event.target == modal) {
            toggleClass(modalList, index);
            document.body.style.overflow = 'auto'; // This able page scroll
        }
    })
});

serviceButtonList.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        toggleClass(modalList, index);
        document.body.style.overflow = 'hidden'; // This disable page scroll
    })
})

closeModalButtonList.forEach((button, index) => {
    button.addEventListener('click', () => {
        toggleClass(modalList, index);
        document.body.style.overflow = 'auto'; // This able page scroll
    });
})