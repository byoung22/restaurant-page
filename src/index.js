import _ from 'lodash';
import './style.css';
import loadHeader from './header';
import loadAbout from './about';
import removeContainer from './empty';
import loadMenu from './menu';
import loadFind from './find';

// Initialize
function createContent() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
}
createContent();
loadHeader();
loadAbout();

const about = document.querySelector('#about');
about.addEventListener('click', () => {
    removeContainer();
    loadAbout();
});
const menu = document.querySelector('#menu');
menu.addEventListener('click', () => {
    removeContainer();
    loadMenu();

});
const find = document.querySelector('#find');
find.addEventListener('click', () => {
    removeContainer();
    loadFind();
});
