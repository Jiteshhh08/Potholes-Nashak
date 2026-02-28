const sideBar = document.querySelector('.sideBar')
const menu = document.querySelector('.menu')
const close = document.querySelector('.closeSideBar')

menu.addEventListener('click', () => {
    sideBar.classList.remove('deActive')
    menu.classList.add('deActive')
})

close.addEventListener('click', () => {
    sideBar.classList.add('deActive')
    menu.classList.remove('deActive')
})