import side1 from './Photos/side1.png';
import side2 from './Photos/side2.png';
import side3 from './Photos/side3.png';
import drink1 from './Photos/drink1.jpg';
import drink2 from './Photos/drink2.jpg';
import drink3 from './Photos/drink3.jpg';
import drink4 from './Photos/drink4.jpg';
import drink5 from './Photos/drink5.jpg';


const uiRendering = {
    side: [
        ['Golden Symphony', '$105', side1, 'A culinary masterpiece that harmonizes flavors and textures, the Golden Symphony is a symphony of indulgence. Delicate layers of velvety vanilla bean-infused soufflé are interspersed with decadent threads of saffron and crowned with a golden caramel glaze. As you take a spoonful, the soufflé melts on your tongue, releasing a crescendo of sweet notes that linger long after each bite.'],
        ['Crystal Rose Petal', '$125', side2, 'A dessert fit for royalty, the Crystal Rose Petal Parfait is a work of art that combines elegance and opulence. Layers of delicately perfumed rose petal-infused cream alternate with ethereal raspberry mousse, each adorned with edible silver leaf. Nestled within a handcrafted sugar crystal bowl, this masterpiece glistens under the soft glow of candlelight, enchanting the senses with its floral symphony.'],
        ['Salad', '$45', side3, `Step into a gastronomic paradise with the Garden of Eden Salad, a vibrant creation that celebrates nature's bounty. Crisp, handpicked heirloom lettuce leaves form the lush foundation, adorned with a colorful tapestry of jewel-toned edible flowers, delicate microgreens, and an array of seasonal fruits. Tossed in a tangy champagne vinaigrette infused with hints of wild honey, this celestial salad transports your taste buds to a realm of divine freshness and exquisite flavors.`],
    ],
    foods: [
        ['name', 'price', '.png', 'description'],
        ['name', 'price', '.png', 'description'],
        ['name', 'price', '.png', 'description'],
        ['name', 'price', '.png', 'description'],
        ['name', 'price', '.png', 'description'],
    ],
    drinks: [
        ['Royal Elixir of Serendipity', '$135', drink1, 'A mesmerizing blend of rare botanicals and aged spices, infused with hints of ethereal mist. This exquisite elixir tantalizes the palate with a delicate balance of opulent flavors, reminiscent of a moonlit garden at the peak of bloom. Served in a crystal goblet adorned with shimmering gold leaf, it promises an unparalleled sensory journey.'],
        ['Vintage Stardust Champagne', '$75', drink2, `Crafted from the finest celestial grapes, harvested under a shower of shooting stars during a mystical alignment of planets. This effervescent nectar sparkles with celestial radiance, offering notes of ripe starfruit and cosmic citrus, while a whisper of moonlit jasmine adds an ethereal touch. Served in platinum-rimmed flutes, it celebrates life's most extraordinary moments.`],
        ['Essence of Luminous Amber', '$75', drink3, 'An elixir born from the depths of ancient amber mines, where time stands still. This precious potion captures the essence of bygone eras, infusing rare, golden amber with delicate threads of saffron and the faintest whisper of vanilla orchids. Served in a handcrafted crystal decanter, it immerses the senses in an aura of timeless elegance.'],
        ['Diamond Frost Martini', '$95', drink4, 'A jewel of mixology, this captivating martini is a symphony of taste and texture. Created with frozen drops of pristine glacier water, it harmonizes with the subtlest notes of handpicked Nordic berries and a touch of elderflower essence. The glass is rimmed with edible diamond dust, casting a shimmering, celestial glow that illuminates every sip.'],
        ['Phoenix Tears Absinthe', '$105', drink5, 'Crafted from a secret recipe guarded by alchemists for centuries, this legendary absinthe weaves an intoxicating tale of mysticism and transformation. Distilled under the light of a full moon, it entwines bitter wormwood, exotic herbs, and a rare blend of botanicals. As the emerald elixir dances in the glass, it releases the ephemeral essence of the mythical phoenix, captivating the senses with every sip.'],
    ],

    init: function() {
        this.cacheDom();
        this.renderBoard();
    },
    cacheDom: function() {
        this.container = document.querySelector('.container');
        this.cardContainer = document.querySelector('.card-container');
    },
    renderBoard: function() {
        this.loadSide(this.side);
        this.loadDrink(this.drinks);
    },
    loadSide: function(side) {
        this.createCardContainer('Sides');
        side.forEach(dish => {
            this.createCard(dish[0], dish[1], dish[2], dish[3], 'Sides');
        });
    },
    loadDrink: function(drinks) {
        this.createCardContainer('Drinks');
        drinks.forEach(drink => {
            this.createCard(drink[0], drink[1], drink[2], drink[3], 'Drinks');
        });
    },
    createCardContainer: function(headingName) {
        const cardContainer = document.createElement('div');
        cardContainer.setAttribute('id', headingName);
        this.container.appendChild(cardContainer);
        
        const heading = document.createElement('h1');
        heading.classList.add('heading');
        heading.innerText = headingName;
        cardContainer.appendChild(heading);

        this.cacheDom();
    },
    createCard: function(foodName, foodPrice, foodImage, foodDescription, headingName) {
        const card = document.createElement('div');
        card.classList.add('card');
        const cardContainer = document.getElementById(headingName);
        cardContainer.appendChild(card);

        const image = new Image();
        image.src = foodImage;
        image.classList.add('image');
        card.appendChild(image);

        const info = document.createElement('div');
        info.classList.add('info');
        card.appendChild(info);

        const name = document.createElement('h2');
        name.textContent = foodName;
        name.classList.add('name');
        info.appendChild(name);

        const price = document.createElement('div');
        price.textContent = foodPrice;
        price.classList.add('price');
        info.appendChild(price);

        const description = document.createElement('div');
        description.textContent = foodDescription;
        description.classList.add('description');
        info.appendChild(description);
    }
}

export default function loadMenu(){
    uiRendering.init();
}