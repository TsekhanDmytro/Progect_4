const signOpen = document.getElementById('icon_header_on');
const signClose = document.getElementById('icon_header_of');
const signX = document.getElementById('header_m');

signOpen.addEventListener('click', function () {
    signX.classList.add('active_manu')
    signClose.classList.add('fa-bars')
    signOpen.classList.remove('fa-bars')

})
signX.addEventListener('click', function () {
    signX.classList.remove('active_manu')
    signOpen.classList.add('fa-bars')
    signClose.classList.remove('fa-bars')

})
signClose.addEventListener('click', () => {
    signX.classList.remove('active_manu')
    signOpen.classList.add('fa-bars')
    signClose.classList.remove('fa-bars')

})