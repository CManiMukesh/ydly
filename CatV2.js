const carouselImages = [
    'https://example.com/carousel1.jpg',
    'https://example.com/carousel2.jpg',
    'https://example.com/carousel3.jpg'
];

const products = [
    { 
        name: "AMSTEL INTERNATIONAL STRONG BEER", 
        image: "https://example.com/path/to/amstel.jpg", 
        sizes: ["650ML", "500 ML CAN"],
        prices: { "650ML": 200.00, "500 ML CAN": 180.00 },
        category: "beer"
    },
    { 
        name: "KINGFISHER PREMIUM LAGER BEER", 
        image: "https://example.com/path/to/kingfisher.jpg", 
        sizes: ["650ML", "500 ML CAN", "330ML"],
        prices: { "650ML": 190.00, "500 ML CAN": 170.00, "330ML": 120.00 },
        category: "beer"
    },
    {
        name: "CHATEAU MARGAUX RED WINE",
        image: "https://example.com/path/to/chateau-margaux.jpg",
        sizes: ["Standard"],
        prices: { "Standard": 5000.00 },
        category: "wine"
    },
    {
        name: "HENNESSY XO COGNAC",
        image: "https://example.com/path/to/hennessy.jpg",
        sizes: ["180ML", "375ML", "750ML"],
        prices: { "180ML": 2000.00, "375ML": 4000.00, "750ML": 7500.00 },
        category: "brandy"
    }
    // Add more products here
];

let cart = {};

// Carousel functionality
function setupCarousel() {
    const carousel = document.getElementById('carousel');
    carouselImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = index === 0 ? 'active' : '';
        carousel.appendChild(img);
    });
}

function rotateCarousel() {
    const images = document.querySelectorAll('.carousel img');
    const activeImage = document.querySelector('.carousel img.active');
    activeImage.classList.remove('active');
    const nextImage = activeImage.nextElementSibling || images[0];
    nextImage.classList.add('active');
}

setupCarousel();
setInterval(rotateCarousel, 3000);

// Search and filter functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    filterProducts(e.target.value);
});

function filterCategory(category) {
    filterProducts(document.getElementById('searchInput').value, category);
}

function filterProducts(searchTerm, category = 'all') {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === 'all' || product.category === category)
    );
    renderProducts(filteredProducts);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.prices[product.sizes[0]]}.00</p>
        <div class="size-options">
            ${product.sizes.map(size => `
                <div class="size-option" data-size="${size}">${size}</div>
            `).join('')}
        </div>
        <div class="quantity-control">
            <button class="minus">-</button>
            <span class="quantity">0</span>
            <button class="plus">+</button>
        </div>
        <button class="add-to-cart">ADD TO CART</button>
    `;

    const sizeOptions = card.querySelectorAll('.size-option');
    const quantityControl = card.querySelector('.quantity-control');
    const priceElement = card.querySelector('.price');
    const addToCartButton = card.querySelector('.add-to-cart');

    sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            const selectedSize = option.dataset.size;
            priceElement.textContent = `₹${product.prices[selectedSize]}.00`;
            quantityControl.classList.add('visible');
            quantityControl.querySelector('.quantity').textContent = '0';
        });
    });

    const minusButton = card.querySelector('.minus');
    const plusButton = card.querySelector('.plus');
    const quantitySpan = card.querySelector('.quantity');

    minusButton.addEventListener('click', () => updateQuantity(-1));
    plusButton.addEventListener('click', () => updateQuantity(1));

    function updateQuantity(change) {
        let quantity = parseInt(quantitySpan.textContent) + change;
        quantity = Math.max(0, quantity);
        quantitySpan.textContent = quantity;
    }

    addToCartButton.addEventListener('click', () => {
        const selectedSize = card.querySelector('.size-option.selected');
        if (selectedSize) {
            const size = selectedSize.dataset.size;
            const quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                updateCart(product, quantity, size);
                document.getElementById('viewCart').style.display = 'block';
            }
        } else {
            alert('Please select a size first');
        }
    });

    return card;
}

function updateCart(product, quantity, size) {
    const key = `${product.name}-${size}`;
    if (quantity > 0) {
        cart[key] = { product, quantity, size };
    } else {
        delete cart[key];
    }
    updateViewCartButton();
}

function updateViewCartButton() {
    const viewCartButton = document.getElementById('viewCart');
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    viewCartButton.style.display = totalItems > 0 ? 'block' : 'none';
    viewCartButton.textContent = `View Cart (${totalItems})`;
}

function renderProducts(productsToRender) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    productsToRender.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

document.getElementById('viewCart').addEventListener('click', showCart);

function showCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    cartItems.innerHTML = '';
    let total = 0;

    for (const key in cart) {
        const item = cart[key];
        const itemTotal = item.product.prices[item.size] * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `
            <p>${item.product.name} - ${item.size} x ${item.quantity}: ₹${itemTotal.toFixed(2)}</p>
        `;
    }

    const deliveryFee = 50;
    const platformFee = 20;
    const grandTotal = total + deliveryFee + platformFee;

    cartSummary.innerHTML = `
        <p>Subtotal: ₹${total.toFixed(2)}</p>
        <p>Delivery Fee: ₹${deliveryFee.toFixed(2)}</p>
        <p>Platform Fee: ₹${platformFee.toFixed(2)}</p>
        <h3>Total: ₹${grandTotal.toFixed(2)}</h3>
    `;

    document.getElementById('cartModal').style.display = 'block';
}

function placeOrder() {
    const location = document.getElementById('locationInput').value;
    if (!location) {
        alert('Please enter your location');
        return;
    }

    let orderDetails = "Order Details:\n\n";
    for (const key in cart) {
        const item = cart[key];
        orderDetails += `${item.product.name} - ${item.size} x ${item.quantity}\n`;
    }
    orderDetails += `\nDelivery Address: ${location}\nPayment Method: COD`;

    const encodedOrder = encodeURIComponent(orderDetails);
    const whatsappNumber = "8610363310"; // Replace with your actual WhatsApp number
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedOrder}`;
    
}

renderProducts(products);