const products = [
    { id: 1, name: 'Kingfisher Strong', price: 1, category: 'Beer', image: '../Product Images/Beer/KINGFISHER-STRONG-737.jpg', availability: true },
    { id: 2, name: 'Magic Moments Lemon Grass & Ginger', price: 1, category: 'Vodka', image: '../Product Images/Vodka/MAGIC-MOMENTS-LEMON-GRASS--GINGER-286.jpg', availability: false },
    { id: 3, name: 'Old Monk XXX Dark Rum', price: 1, category: 'Rum', image: '../Product Images/Rum/OLD-MONK-XXX-DARK-RUM-476.jpg', availability: true },
    { id: 4, name: 'Jacobs Creek', price: 1, category: 'Wine', image: '../Product Images/Wine/JACOBS-CREEK-CABERNET-SAUVIGNON-1669.jpg', availability: false },
    { id: 5, name: 'Mansion House', price: 1, category: 'Brandy', image: '../Product Images/Brandy/Mansion-House.jpg', availability: true },
    { id: 6, name: 'Blenders Pride Reserve', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/BLENDERS-PRIDE-RESERVE-245.jpg', availability: false },
    { id: 7, name: 'Kingfisher Ultra Beer', price: 1, category: 'Beer', image: '../Product Images/Beer/KINGFISHER-ULTRA-BEER-727.jpg', availability: false },
    { id: 8, name: 'Kingfisher Ultra Max', price: 1, category: 'Beer', image: '../Product Images/Beer/KINGFISHER-ULTRA-MAX-1340.jpg', availability: true },
    { id: 9, name: 'Heineken India Lager', price: 1, category: 'Beer', image: '../Product Images/Beer/HEINEKEN-INDIA-LAGER-652.jpg', availability: true },
    { id: 10, name: 'Kingfisher Premium Beer', price: 1, category: 'Beer', image: '../Product Images/Beer/KINGFISHER-PREMIUM-BEER-726.jpg', availability: true },
    { id: 11, name: 'Bira Boom', price: 1, category: 'Beer', image: '../Product Images/Beer/BIRA-BOOM-733.jpg', availability: true },
    { id: 12, name: 'Brocode Frizzante', price: 1, category: 'Beer', image: '../Product Images/Beer/BRO-CODE-FRUZZANTE-2751.jpg', availability: true },
    { id: 13, name: 'Budweiser Genuine', price: 1, category: 'Beer', image: '../Product Images/Beer/BUDWEISER-GENUINE-649.jpg', availability: true },
    { id: 14, name: 'Budweiser Magnum Strong', price: 1, category: 'Beer', image: '../Product Images/Beer/BUDWEISER-MAGNUM-STRONG-735.jpg', availability: true },
    { id: 15, name: 'Carlsberg Elephant Strong', price: 1, category: 'Beer', image: '../Product Images/Beer/CARLSBERG-ELEPHANT-STRONG-736.jpg', availability: true },
    { id: 16, name: 'Corona Extra Premium Beer', price: 1, category: 'Beer', image: '../Product Images/Beer/CORONA-EXTRA-PREMIUM-BEER-651.jpg', availability: true },
    { id: 17, name: 'Tuborg Classic Black Strong', price: 1, category: 'Beer', image: '../Product Images/Beer/TUBORG-CLASSIC-BLACK-STRONG-1410.jpg', availability: true },
    { id: 18, name: 'Tuborg Strong Beer', price: 1, category: 'Beer', image: '../Product Images/Beer/TUBORG-STRONG-BEER-739.jpg', availability: true },
    { id: 19, name: 'Magic Moments Remix Pink Vodka', price: 1, category: 'Vodka', image: '../Product Images/Vodka/MAGIC-MOMENTS-REMIX-PINK-VODKA-3092.jpg', availability: false },
    { id: 20, name: 'Magic Moments Chocolate', price: 1, category: 'Vodka', image: '../Product Images/Vodka/MAGIC-MOMENTS-CHOCOLATE-247.jpg', availability: false },
    { id: 21, name: 'Magic Moments Green Apple', price: 1, category: 'Vodka', image: '../Product Images/Vodka/MAGIC-MOMENTS-GREEN-APPLE-303.jpg', availability: false },
    { id: 22, name: 'Magic Moments Orange', price: 1, category: 'Vodka', image: '../Product Images/Vodka/MAGIC-MOMENTS-ORANGE-304.jpg', availability: false },
    { id: 23, name: 'Magic Moments Pure Grain', price: 1, category: 'Vodka', image: '../Product Images/Vodka/MAGIC-MOMENTS-PURE-GRAIN-306.jpg', availability: false },
    { id: 24, name: 'Absolut', price: 1, category: 'Vodka', image: '../Product Images/Vodka/ABSOLUT-159.jpg', availability: false },
    { id: 25, name: 'SmirnOff Vodka', price: 1, category: 'Vodka', image: '../Product Images/Vodka/SMIRNOFF-VODKA-565.jpg', availability: false },
    { id: 26, name: 'Old Monk Supreme Dark Rum', price: 1, category: 'Rum', image: '../Product Images/Rum/OLD-MONK-SUPREME-DARK-RUM-474.jpg', availability: true },
    { id: 27, name: 'Bacardi Black Dark Rum', price: 1, category: 'Rum', image: '../Product Images/Rum/BACARDI-BLACK-DARK-RUM-948.jpg', availability: true },
    { id: 28, name: 'Bacardi Limon Citrus', price: 1, category: 'Rum', image: '../Product Images/Rum/BACARDI-LIMON-CITRUS-846.jpg', availability: true },
    { id: 29, name: 'McDowells Celebration XXX Rum', price: 1, category: 'Rum', image: '../Product Images/Rum/MCDOWELLS-CELEBRATION-XXX-DARK-RUM-472.jpg', availability: true },
    { id: 30, name: 'Sula Cabernet Shiraz', price: 1, category: 'Wine', image: '../Product Images/Wine/SULA-CABERNET-SHIRAZ-987.jpg', availability: false },
    { id: 31, name: 'Old Admiral', price: 1, category: 'Brandy', image: '../Product Images/Brandy/OLD-ADMIRAL.JPG', availability: true },
    { id: 32, name: 'Honey Bee Premium', price: 1, category: 'Brandy', image: '../Product Images/Brandy/HONEY-BEE-PREMIUM-239.jpg', availability: true },
    { id: 33, name: 'Royal Stag Deluxe', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/ROYAL-STAG-DELUXE-357.jpg', availability: false },
    { id:34, name: 'Budweiser Magnum Double Barrel Whiskey', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/BUDWEISER-MAGNUM-DOUBLE-BARREL-WHISKEY-2275.jpg', availability: false },
    { id: 35, name: 'James Regal Blended Whiskey', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/JAMES-REGAL-BLENDED-WHISKY-3174.jpg', availability: false },
    { id: 36, name: 'Oaksmith Gold International Blended Whiskey', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/OAKSMITH-GOLD-INTERNATIONAL-BLENDED-WHISKY-424.jpg', availability: false },
    { id: 37, name: 'Royal Green Whiskey', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/ROYALGREENWHISKY20230725108.jpg', availability: false },
    { id: 38, name: 'Sterling Reserve B7 Rare Blend', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/STERLING-RESERVE-B7-RARE-BLEND-1991.jpg', availability: false },
    { id: 39, name: 'Imperial Blue Superior Grain', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/IMPERIAL-BLUE-SUPERIOR-GRAIN-353.jpg', availability: false },
    { id: 40, name: 'Antiquity Blue', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/ANTIQUITY-BLUE-243.jpg', availability: false },
    { id: 41, name: 'McDowells NO1 Luxury Premium Whiskey', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/MCDOWELLS-NO1-LUXURY-PREMIUM-WHISKY-354.jpg', availability: false },
    { id: 42, name: 'McDowells NO1 Reserve', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/MCDOWELLS-NO1-RESERVE-WHISKY-356.jpg', availability: false },
    { id: 43, name: 'Bagpipers Deluxe', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/BAGPIPER-DELUXE-352.jpg', availability: false },
    { id: 44, name: 'Eight PM', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/EIGHT-P-M-291.jpg', availability: false },
    { id: 45, name: 'Officers Choice Prestige', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/OFFICERS-CHOICE-PRESTIGE-1357.jpg', availability: false },
    { id: 46, name: 'Royal Challenge Finest Premium Whiskey', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/ROYAL-CHALLENGE-FINEST-PREMIUM-WHISKY-349.jpg', availability: false },
    { id: 47, name: 'Signature Premium Grain', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/SIGNATURE-PREMIUM-GRAIN-WHISKY-350.jpg', availability: false },
    { id: 48, name: 'Rockford Classic Whiskey', price: 1, category: 'Whiskey', image: '../Product Images/Whiskey/ROCKFORD-CLASSIC-WHISKY-1710.jpg', availability: false },    
];


const productsContainer = document.getElementById('products-container');
const categoryButtons = document.querySelectorAll('.category-button');
const viewCartButton = document.getElementById('view-cart');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const orderForm = document.getElementById('order-form');
const locationInput = document.getElementById('location');

let cart = [];
const DELIVERY_FEE = 100;
const PLATFORM_FEE = 10;

function displayProducts(category = 'all') {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        if (category === 'all' || product.category === category) {
            const cartItem = cart.find(item => item.id === product.id);
            const quantity = cartItem ? cartItem.quantity : 0;
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>&#8377;${product.price}</p>
                ${product.availability ? `
                    <div class="quantity-control">
                    <button class="quantity-btn minus" data-id="${product.id}">-</button>
                    <span class="quantity-display" data-id="${product.id}">${quantity}</span>
                    <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>                    
                ` : `<p class="OOS">Out of Stock</p>`}                
            `;
            productsContainer.appendChild(productElement);
        }
    });
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name}: &#8377;${item.price}</span>
            <div class="quantity-control">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    const subtotal = total;
    total += DELIVERY_FEE + PLATFORM_FEE;
    cartTotalElement.innerHTML = `
        Subtotal: &#8377;${subtotal}<br>
        Delivery Fee: &#8377;${DELIVERY_FEE}<br>
        Platform Fee: &#8377;${PLATFORM_FEE}<br>
        Total: &#8377;${total}
    `;
    viewCartButton.style.display = cart.length > 0 ? 'block' : 'none';
}
// .toFixed(2) in delivery fee, platform fee, total above.

function updateProductDisplay(productId, quantity) {
    const productElement = document.querySelector(`.product .quantity-control .quantity-display[data-id="${productId}"]`);
    if (productElement) {
        productElement.textContent = quantity;
    }
}

function handleQuantityChange(productId, change) {
    const product = products.find(p => p.id === productId);
    let cartItem = cart.find(item => item.id === productId);

    if (!cartItem && change > 0) {
        cartItem = { ...product, quantity: 0 };
        cart.push(cartItem);
    }

    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
            updateProductDisplay(productId, 0);
        } else {
            updateProductDisplay(productId, cartItem.quantity);
        }
        updateCart();
    }
}

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayProducts(button.dataset.category);
    });
});

productsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('quantity-btn')) {
        const productId = parseInt(e.target.dataset.id);
        const change = e.target.classList.contains('plus') ? 1 : -1;
        handleQuantityChange(productId, change);
    }
});

cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('quantity-btn')) {
        const productId = parseInt(e.target.dataset.id);
        const change = e.target.classList.contains('plus') ? 1 : -1;
        handleQuantityChange(productId, change);
    }
});

viewCartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = locationInput.value.trim();
    if (!location) {
        alert("Please enter a delivery location");
        return;
    }
    const orderDetails = cart.map(item => `${item.name} x${item.quantity}`).join(', ');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + DELIVERY_FEE + PLATFORM_FEE;
    const message = `New Order:\n\nItems: ${orderDetails}\nDelivery Location: ${location}\nTotal: ${total} Rupees\nPayment: Cash on Delivery`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/8610363310?text=${encodedMessage}`, '_blank');
});

function initializeDisplay() {
    displayProducts();
    updateCart();
}

initializeDisplay();