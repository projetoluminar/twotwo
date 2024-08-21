const dialogWrapper = document.querySelectorAll('[data-modal="dialog--wrapper"]');
const closeWrapperButton = document.querySelectorAll('[data-modal="close--wrapper"]')
const serviceCardButton = document.querySelectorAll('[data-modal="open--wrapper"]');


function activeWrapper(index) {
    dialogWrapper.forEach((modal) => {
        modal.classList.remove('open')
    })
    dialogWrapper[index].classList.add('open')
}

serviceCardButton.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        activeWrapper(index);
    });
});

function closeWrapper(index) {
    dialogWrapper[index].classList.remove('open');
}

closeWrapperButton.forEach((element, index) => {
    element.addEventListener('click', () => {
        closeWrapper(index);
    });
})