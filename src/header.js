import Logo from './Photos/logo.png';
function createHeader() {
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.setAttribute('id', 'logo')

    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    const content = document.getElementById('content');
    content.appendChild(header);
    header.appendChild(myLogo);
}
function createNav() {
    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav');
    const header = document.getElementById('header');
    header.appendChild(nav);

    const homeButton = document.createElement('button');
    homeButton.classList.add('header-button');
    homeButton.setAttribute('id', 'about');
    homeButton.textContent = 'ABOUT US';
    nav.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.classList.add('header-button');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = 'MENU';
    nav.appendChild(menuButton);

    const findButton = document.createElement('button');
    findButton.classList.add('header-button');
    findButton.setAttribute('id', 'find');
    findButton.textContent = 'FIND US';
    nav.appendChild(findButton);
}
function createContentContainer() {
    const createContentContainer = document.createElement('div');
    createContentContainer.classList.add('container');
    content.appendChild(createContentContainer);
}

export default function loadHeader() {
    createHeader();
    createNav();
    createContentContainer();
}