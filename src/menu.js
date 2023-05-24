import side1 from './Photos/side1.png';
import side2 from './Photos/side2.png';
import side3 from './Photos/side3.png';
import drink1 from './Photos/drink1.jpg';
import drink2 from './Photos/drink2.jpg';
import drink3 from './Photos/drink3.jpg';
import drink4 from './Photos/drink4.jpg';
import drink5 from './Photos/drink5.jpg';
import food1 from './Photos/food1.png';
import food2 from './Photos/food2.png';
import food3 from './Photos/food3.png';
import food4 from './Photos/food4.png';
import food5 from './Photos/food5.png';


const uiRendering = {
    side: [
        ['Golden Symphony', '$105', side1, 'A culinary masterpiece that harmonizes flavors and textures, the Golden Symphony is a symphony of indulgence. Delicate layers of velvety vanilla bean-infused soufflé are interspersed with decadent threads of saffron and crowned with a golden caramel glaze. As you take a spoonful, the soufflé melts on your tongue, releasing a crescendo of sweet notes that linger long after each bite.'],
        ['Crystal Rose Petal', '$125', side2, 'A dessert fit for royalty, the Crystal Rose Petal Parfait is a work of art that combines elegance and opulence. Layers of delicately perfumed rose petal-infused cream alternate with ethereal raspberry mousse, each adorned with edible silver leaf. Nestled within a handcrafted sugar crystal bowl, this masterpiece glistens under the soft glow of candlelight, enchanting the senses with its floral symphony.'],
        ['Salad', '$45', side3, `Step into a gastronomic paradise with the Garden of Eden Salad, a vibrant creation that celebrates nature's bounty. Crisp, handpicked heirloom lettuce leaves form the lush foundation, adorned with a colorful tapestry of jewel-toned edible flowers, delicate microgreens, and an array of seasonal fruits. Tossed in a tangy champagne vinaigrette infused with hints of wild honey, this celestial salad transports your taste buds to a realm of divine freshness and exquisite flavors.`],
    ],
    foods: [
        ['Himalayan Diamond Salmon', '$165', food1, 'A regal masterpiece featuring a fillet of salmon encrusted with crushed diamonds sourced from the majestic Himalayan peaks. The fish is gently poached in a delicate blend of champagne and white truffle oil, creating a luxurious symphony of flavors that dance on your tongue.'],
        ['Regal A5 Wagyu Crown', '$200', food2, `Prepare to indulge in the epitome of culinary opulence with the Regal A5 Wagyu Crown. Meticulously handcrafted, this masterpiece showcases the extraordinary flavors and unparalleled tenderness of the world's most esteemed beef. A majestic cut of A5 wagyu, meticulously marbled with creamy ribbons of fat, is artfully seared to perfection, creating a seductive caramelized crust that locks in its succulent juiciness.`],
        ['King of Steaks', '$165', food3, 'Embark on a regal gastronomic journey with the crown jewel of steaks—the King of Steaks. This extraordinary masterpiece starts with an impeccably aged prime cut of succulent beef, sourced from the most exclusive ranches known only to a privileged few. Expertly dry-aged for months, this steak embodies exceptional marbling, ensuring a buttery tenderness that rivals celestial velvet. This royal steak is then kissed by a flame of pure gold, searing the surface to perfection and creating a caramelized crust that locks in the flavors within.'],
        ['Ruby Beetroot', '$150', food4, `Prepare to be enchanted by the resplendent flavors and vibrant hues of the Ruby Beetroot. A medley of hand-picked heirloom beetroots, each a jewel of nature's palette, takes center stage in this gastronomic masterpiece. The beetroots, gently roasted to unleash their natural sweetness, are elegantly arranged on a canvas of whipped goat cheese and toasted hazelnut crumble.`],
        ['Garden Harvest Artisanal Bread', '$165', food5, `Experience a symphony of flavors with the Garden Harvest Artisanal Bread. This artisanal bread is a fusion of crusty perfection and soft crumb, bursting with the essence of sun-ripened vegetables. Roasted bell peppers, caramelized onions, and charred zucchini create a delightful crunch within the tender loaf. Infused with hand-picked herbs and a drizzle of extra-virgin olive oil, this bread embodies the artistry of nature's bounty in every bite.`],
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
        this.loadFood(this.foods);
        this.loadDrink(this.drinks);
    },
    loadSide: function(side) {
        this.createCardContainer('Sides');
        side.forEach(dish => {
            this.createCard(dish[0], dish[1], dish[2], dish[3], 'Sides');
        });
    },
    loadFood: function(food) {
        this.createCardContainer('Foods');
        food.forEach(dish => {
            this.createCard(dish[0], dish[1], dish[2], dish[3], 'Foods');
        });
    },
    loadDrink: function(drinks) {
        this.createCardContainer('Drinks');
        drinks.forEach(dish => {
            this.createCard(dish[0], dish[1], dish[2], dish[3], 'Drinks');
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