import location from './Photos/location.png';



function createImage() {
    const locationImage = new Image();
    locationImage.src = location;
    locationImage.classList.add('location-image');
    const paragraphContainer = document.querySelector('.box');
    paragraphContainer.appendChild(locationImage);
}

function createBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    const paragraphContainer = document.querySelector('.container');
    paragraphContainer.appendChild(box);
}

function createInfo(stuff) {
    const info = document.createElement('p');
    info.textContent = stuff;
    const paragraphContainer = document.querySelector('.box');
    paragraphContainer.appendChild(info);
}

export default function loadFind() {
    createBox();
    createImage();
    createInfo('🏠 Hollywood Boulevard 42, Los Angeles, USA');
    createInfo('📞 (902) 109-0210');
};