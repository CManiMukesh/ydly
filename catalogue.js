const products = [
    { id: 1, name: 'Cheeseburger', price: 6, category: 'Burger', image: '/api/placeholder/200/200' },
    { id: 2, name: 'Pepperoni Pizza', price: 9, category: 'Pizza', image: '/api/placeholder/200/200' },
    { id: 3, name: 'Chocolate Cake', price: 10, category: 'Cake', image: '/api/placeholder/200/200' },
    { id: 4, name: 'Vanilla Ice Cream', price: 4, category: 'Ice cream', image: '/api/placeholder/200/200' },
    { id: 5, name: 'Club Sandwich', price: 5, category: 'Sandwich', image: '/api/placeholder/200/200' },
    { id: 6, name: 'Pad Thai', price: 8, category: 'Noodles', image: '/api/placeholder/200/200' },
    { id: 7, name: 'Veggie Burger', price: 7, category: 'Burger', image: '/api/placeholder/200/200' },
    { id: 8, name: 'Margherita Pizza', price: 8, category: 'Pizza', image: '/api/placeholder/200/200' },
    { id: 9, name: 'Strawberry Cheesecake', price: 6, category: 'Cake', image: '/api/placeholder/200/200' },
    { id: 10, name: 'Chocolate Ice Cream', price: 4, category: 'Ice cream', image: '/api/placeholder/200/200' },
    { id: 11, name: 'Tuna Sandwich', price: 6, category: 'Sandwich', image: '/api/placeholder/200/200' },
    { id: 12, name: 'Spaghetti Bolognese', price: 9, category: 'Noodles', image: '/api/placeholder/200/200' },
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
                <div class="quantity-control">
                    <button class="quantity-btn minus" data-id="${product.id}">-</button>
                    <span class="quantity-display" data-id="${product.id}">${quantity}</span>
                    <button class="quantity-btn plus" data-id="${product.id}">+</button>
                </div>
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