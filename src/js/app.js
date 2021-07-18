let offcanvas = document.querySelector('.offcanvas');
let touchForm = document.forms.touch;

offcanvas.addEventListener('hidden.bs.offcanvas', (event) => {
    event.stopImmediatePropagation();
})

touchForm.addEventListener('onsubmit', (e) => {
    e.preventDefault();
})