import location from './Photos/location.png';

function createImage() {
    const locationImage = new Image();
    locationImage.src = location;
    locationImage.classList.add('location-image');
    const paragraphContainer = document.querySelector('.container');
    paragraphContainer.appendChild(locationImage);
}

export default function loadFind() {
    createImage();
};