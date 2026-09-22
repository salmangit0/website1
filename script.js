// Local Store Database Schema Injection
const products = [
    { id: 1, name: "Minimalist Leather Watch", price: 149.00, desc: "Classic timepiece" },
    { id: 2, name: "Canvas Everyday Tote", price: 45.00, desc: "Durable cotton canvas" },
    { id: 3, name: "Anodized Aluminum Pen", price: 29.00, desc: "Fluid ink architect delivery" },
    { id: 4, name: "Matte Ceramic Coffee Mug", price: 24.00, desc: "Hand-thrown stoneware" },
    { id: 5, name: "Merino Wool Beanie", price: 38.00, desc: "Breathable thermal protection" },
    { id: 6, name: "Full-Grain Leather Wallet", price: 65.00, desc: "Slim pocket profile design" }
];

// Shopping Cart Core Memory Matrix Array
let cart = [];

// DOM Selection Registry Queries
const productsContainer = document.getElementById('products-container');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');

// Lifecycle Initialization System Execution
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// Structural Components Injector Engine
function renderProducts() {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image-placeholder">${product.name.split(' ').slice(-1)[0]} Image</div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add To Cart</button>
        </div>
    `).join('');
}

// Global Click Action Routing Management
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

// Data Array Management Operations Engine
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    toggleCart(true); // Auto flash-open drawer on adding item
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Layout Interface Sync Interface Node
function updateCartUI() {
    // 1. Recalibrate badge indicator count metric summary
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // 2. Render internal drawer row array nodes
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: #666; text-align:center; margin-top:2rem;">Your cart is empty.</p>';
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

    // 3. Compute currency subtotal pricing evaluations
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
}
