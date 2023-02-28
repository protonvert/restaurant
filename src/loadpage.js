import Home from './page_elements/home.js'
import Menu from './page_elements/menu.js'
import About from './page_elements/about.js'
const content = document.querySelector('#content')

export default function loadPage(value) {

    if (value === 'home'){
        content.innerHTML = Home();
    }

    else if (value === 'menu'){
        content.innerHTML = Menu();
    }

    else if (value === 'about'){
        content.innerHTML = About();
    }

}