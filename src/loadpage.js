import Home from './page_elements/home.js'
import Menu from './page_elements/menu.js'
const content = document.querySelector('#content')

export default function loadPage(value) {

    if (value === 'home'){
        // wipe out current content
        content.innerHTML = ''
        // place returned element from page_element into dom
        content.innerHTML = Home();
    }

    else if (value === 'menu'){
        // wipe out current content
        content.innerHTML = Menu();
        // place returned element from page_element into dom
    }

    else if (value === 'about'){
        // wipe out current content

        // place returned element from page_element into dom
    }

}