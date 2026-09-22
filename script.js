:root {
    --primary: #ffffff;
    --secondary: #94a3b8;
    --background: #0f172a;    /* Deep slate premium dark background */
    --surface: #1e293b;       /* Elevated dark tile boxes */
    --border: #334155;
    --accent: #22c55e;        /* Clean trust-building green accents */
    --sales-red: #ef4444;     /* Attention grabbing sale highlights */
    --font: 'Plus Jakarta Sans', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font);
    background-color: var(--background);
    color: var(--primary);
    overflow-x: hidden;
    scroll-behavior: smooth;
}

/* Scarcity Countdown Ticker Header */
.promo-banner {
    background-color: var(--sales-red);
    color: white;
    text-align: center;
    padding: 0.6rem;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2rem;
    background-color: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo a {
    font-weight: 800;
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--primary);
    letter-spacing: -0.5px;
}

.logo span {
    color: var(--sales-red);
}

.nav-links a {
    text-decoration: none;
    color: var(--secondary);
    margin: 0 1.2rem;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s ease;
}

.nav-links a:hover {
    color: var(--primary);
}

.cart-icon-container {
    position: relative;
    cursor: pointer;
}

.cart-svg {
    width: 24px;
    height: 24px;
    stroke: var(--primary);
}

#cart-count {
    position: absolute;
    top: -6px;
    right: -10px;
    background-color: var(--sales-red);
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 99px;
}

/* Dropship E-Commerce High-Converting Hero */
.hero {
    text-align: center;
    margin: 4rem auto;
    max-width: 700px;
}

.badge {
    background-color: rgba(239, 68, 68, 0.15);
    color: #f87171;
    font-weight: 700;
    font-size: 0.75rem;
    padding: 0.4rem 1rem;
    border-radius: 99px;
    letter-spacing: 1px;
    display: inline-block;
    margin-bottom: 1rem;
}

.hero h1 {
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1.15;
    margin-bottom: 1rem;
}

.hero p {
    color: var(--secondary);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.cta-scroll-btn {
    display: inline-block;
    background-color: var(--primary);
    color: var(--background);
    text-decoration: none;
    padding: 1rem 2rem;
    font-weight: 700;
    border-radius: 8px;
    transition: transform 0.2s;
}

.cta-scroll-btn:hover {
    transform: scale(1.03);
}

/* Trust Badges Wrapper Grid */
.trust-badges {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin-bottom: 4rem;
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 1.2rem;
    border-radius: 8px;
    text-align: center;
    font-size: 0.9rem;
    color: var(--secondary);
}

/* Upgraded Product Grid Showcase */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
}

.product-card {
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1rem;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
}

.tag-sale {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    background: var(--sales-red);
    color: white;
    font-weight: 700;
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    z-index: 10;
}

.product-image-container {
    width: 100%;
    height: 280px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1rem;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.product-card:hover .product-img {
    transform: scale(1.06);
}

.product-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
}

.price-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
}

.product-price {
    color: var(--primary);
    font-weight: 700;
    font-size: 1.2rem;
}

.product-compare-price {
    color: var(--secondary);
    text-decoration: line-through;
    font-size: 0.95rem;
}

.add-to-cart-btn {
    width: 100%;
    background-color: var(--accent);
    color: #000000;
    border: none;
    padding: 0.9rem;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
    margin-top: auto;
    transition: opacity 0.2s;
}

.add-to-cart-btn:hover {
    opacity: 0.9;
}

/* Sidebar Drawer */
.cart-drawer {
    position: fixed;
    top: 0;
    right: -420px;
    width: 420px;
    max-width: 100%;
    height: 100%;
    background-color: #111827;
    border-left: 1px solid var(--border);
    z-index: 200;
    display: flex;
    flex-direction: column;
    transition: right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.cart-drawer.active {
    right: 0;
}

.cart-header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-btn {
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--primary);
    cursor: pointer;
}

.cart-body {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
}

.cart-item-details h4 {
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
}

.cart-item-details p {
    color: var(--secondary);
    font-size: 0.85rem;
}

.remove-item-btn {
    background: none;
    border: none;
    color: var(--sales-red);
    cursor: pointer;
    font-size: 0.85rem;
}

.cart-footer {
    padding: 1.5rem;
    border-top: 1px solid var(--border);
    background-color: var(--surface);
}

.shipping-info {
    font-size: 0.85rem;
    color: var(--accent);
    text-align: center;
    margin-bottom: 1rem;
}

.subtotal {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.checkout-btn {
    width: 100%;
    background-color: var(--sales-red);
    color: white;
    border: none;
    padding: 1.1rem;
    font-weight: 700;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
}

.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    z-index: 150;
    display: none;
}

.cart-overlay.active {
    display: block;
}
