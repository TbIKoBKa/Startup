let offcanvas = document.querySelector('.offcanvas');
let header = document.querySelector('.header');
let touchForm = document.forms.touch;

function checkScroll(){
    (window.pageYOffset > header.style.height + 200) ? header.classList.add('fixed') : header.classList.remove('fixed');
}

(function(){
    checkScroll()
}())

window.addEventListener('scroll', () => {
    checkScroll()
})

offcanvas.addEventListener('hidden.bs.offcanvas', (event) => {
    event.stopImmediatePropagation();
})

touchForm.addEventListener('onsubmit', (e) => {
    e.preventDefault();
})