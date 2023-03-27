const signOpen = document.querySelector('.open');
const signClose = document.querySelector('.close');
const form_wrap = document.querySelector('.header_menu')


signOpen.addEventListener('click', function () {
    form_wrap.classList.add('active_form')
})
signOpen.addEventListener('click', function () {
    form_wrap.classList.remove('header_menu')
})