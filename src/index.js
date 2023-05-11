import _ from 'lodash';
import './style.css';

import Logo from './Photos/logo.png';
const myLogo = new Image();
myLogo.src = Logo;

const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);

content.appendChild(myLogo);
//#0C50B9