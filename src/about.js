import food from './Photos/home.jpg';

function createHeading() {
    const heading = document.createElement('h2');
    heading.textContent = 'Welcome to Baileys: A Culinary Symphony';
    const paragraphContainer = document.querySelector('.container');
    paragraphContainer.appendChild(heading);
}

function createImage() {
    const myHome = new Image();
    myHome.src = food;
    const paragraphContainer = document.querySelector('.container');
    myHome.classList.add('home-image');
    paragraphContainer.appendChild(myHome);
}

function createParagraph(text){
    const paragraph = document.createElement('p');
    paragraph.textContent = text
    const paragraphContainer = document.querySelector('.container');
    paragraphContainer.appendChild(paragraph);
}

export default function loadAbout() {
    createImage();
    createHeading();
    createParagraph(`Baileys is an exquisite Michelin star restaurant that encapsulates the art of fine dining, where culinary craftsmanship meets unparalleled elegance. Nestled in the heart of a bustling metropolis, Baileys invites you to embark on an unforgettable gastronomic journey that transcends the boundaries of taste, texture, and presentation.`);
    createParagraph(`At Baileys, we believe that dining is not merely a necessity, but a form of artistic expression. Our visionary team of award-winning chefs, led by Master Chef André Martin, meticulously crafts each dish to harmonize flavors, textures, and aromas, resulting in a symphony of culinary delights that dance upon your palate.`);
    createParagraph(`Our ever-evolving menu is a testament to our commitment to culinary innovation and the pursuit of perfection. Using only the finest locally sourced ingredients and the rarest international delicacies, Baileys showcases a symphony of flavors that captivate even the most discerning connoisseurs. Each dish is a work of art, meticulously plated to entice your senses and ignite your culinary imagination.`);
    createParagraph(`Step into Baileys and immerse yourself in an ambiance of refined luxury. Our elegant dining room is adorned with sleek modern décor, creating an atmosphere that exudes sophistication and understated opulence. Our attentive and knowledgeable staff, led by Maître d'Hotel Isabella Rossi, provides impeccable service, ensuring that every moment of your dining experience is truly memorable.`);
    createParagraph(`Baileys also boasts an extensive wine cellar, carefully curated with an extraordinary selection of local and international vintages, offering the perfect accompaniment to enhance your culinary journey. Our sommeliers are well-versed in the art of pairing, and they will guide you through a wine list that complements and elevates the flavors of each dish.`);
    createParagraph(`Whether you're celebrating a special occasion, hosting a private event, or seeking an extraordinary dining experience, Baileys surpasses all expectations. We pride ourselves on providing an unforgettable symphony of taste, service, and ambiance that will leave a lasting impression on your palate and your memories.`);
    createParagraph(`Indulge your senses at Baileys, where culinary excellence takes center stage, and every bite is a moment of pure bliss. Reserve your table today and let us orchestrate a dining experience beyond compare.`);
}
