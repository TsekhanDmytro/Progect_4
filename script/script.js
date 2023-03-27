const signOpen = document.querySelector('.open');
const signClose = document.querySelector('.X');
const form_wrap = document.querySelector('.header_menu')
let form1 = document.form1

form1.onsubmit = function (e) {
    e.preventDefault();
    console.log('click')
};

signOpen.addEventListener('click', function () {
    form_wrap.classList.add('active_form')
})
signClose.addEventListener('click', function () {
    form_wrap.classList.remove('active_form')
})