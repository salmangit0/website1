// High-Converting Trending Dropship Product Catalog
const products = [
    { 
        id: 1, 
        name: "Ergonomic Orthopaedic Seat Cushion", 
        price: 39.99, 
        comparePrice: 79.99,
        image: "https://unsplash.com" 
    },
    { 
        id: 2, 
        name: "Pro Clean Ultrasonic Jewellery Cleaner", 
        price: 29.95, 
        comparePrice: 59.99,
        image: "https://unsplash.com" 
    },
    { 
        id: 3, 
        name: "Portable Handheld Turbo Fabric Steamer", 
        price: 45.00, 
        comparePrice: 89.99,
        image: "https://unsplash.com" 
    },
    { 
        id: 4, 
        name: "Smart RGB Ambient LED Desktop Bar", 
        price: 34.99, 
        comparePrice: 69.95,
        image: "https://unsplash.com" 
    },
    { 
        id: 5, 
        name: "Aura Breathable Deep Sleep Eye Mask", 
        price: 19.99, 
        comparePrice: 39.99,
        image: "https://unsplash.com" 
    },
    { 
        id: 6, 
        name: "Anti-Gravity Humidifier Water Droplet", 
        price: 49.99, 
        comparePrice: 99.00,
        image: "https://unsplash.com" 
    }
];

let cart = [];

const productsContainer = document.getElementById('shop');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    startCountdown();
});

function renderProducts() {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <span class="tag-sale">50% OFF</span>
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            </div>
            <h3 class="product-title">${product.name}</h3>
            <div class="price-row">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <span class="product-compare-price">$${product.comparePrice.toFixed(2)}</span>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Claim 50% Off Offer</button>
        </div>
    `).join('');
}

function setupEventListeners() {
    cartToggle.addEventListener('click', () => toggleCart(true));
    cartClose.addEventListener('click', () => toggleCart(false));
    cartOverlay.addEventListener('click', () => toggleCart(false));
}

function toggleCart(isOpen) {
    if (isOpen) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
    } else {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    toggleCart(true); 
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: #94a3b8; text-align:center; margin-top:2rem;">Your cart is empty. Add a trending offer to start!</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} &times; ${item.quantity}</p>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
}

// Scarcity Countdown Ticker Engine Logic
function startCountdown() {
    let duration = 14 * 60 + 59; // 14 mins 59 secs
    const timerElement = document.getElementById('countdown');
    
    setInterval(() => {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = `${minutes}:${seconds}`;

        if (--duration < 0) {
            duration = 14 * 60 + 59; // Loop resets smoothly
        }
    }, 1000);
}
