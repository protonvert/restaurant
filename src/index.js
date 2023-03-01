import style from "./styles.less";
import loadPage from './loadpage';

loadPage('home')

// nav buttons ---------------------------------------
const homeButton = document.getElementById('home_button')
const menuButton = document.getElementById('menu_button')
const aboutButton = document.getElementById('about_button')
// ----------------------------------------------------

homeButton.addEventListener('click', () => {
    loadPage('home')
})

menuButton.addEventListener('click', () => {
    loadPage('menu')
})

aboutButton.addEventListener('click', () => {
    loadPage('about')
})