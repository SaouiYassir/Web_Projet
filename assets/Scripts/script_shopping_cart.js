document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu_bar');
    const sideBar = document.querySelector('.links_side_bar');
    const closeIcon = document.querySelector('.close_icon');
    
    menuBar.addEventListener('click', function() {
        sideBar.classList.add('open');
    });
    
    closeIcon.addEventListener('click', function() {
        sideBar.classList.remove('open');
    });
});

function clickanywhere() {
    const Sidebar = document.querySelector('header .links_side_bar')
    Sidebar.style.display = 'none'
}


// Shopping Cart Logic

// 1. Cart Data Structure
// We'll store cart items in an array of objects
let cart = [];

// 2. Sample Products (in a real app, this would come from a database)
const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Smartphone", price: 599.99, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Laptop", price: 999.99, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Fitness Tracker", price: 49.99, image: "https://via.placeholder.com/100" }
];

// 3. Initialize the cart
function initCart() {
    // Check if cart exists in localStorage
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    renderCart();
}

// 4. Add item to cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        // Update quantity if already in cart
        existingItem.quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    // Save to localStorage
    saveCart();
    // Update UI
    renderCart();
}

// 5. Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// 6. Update item quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        renderCart();
    }
}

// 7. Calculate cart totals
function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? (subtotal > 50 ? 0 : 5.99) : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    return {
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// 8. Save cart to localStorage
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// 9. Render cart UI
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Clear container
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        // Show empty cart message
        cartItemsContainer.innerHTML = `
                    <div class="empty-cart">
                        <p>Your cart is empty</p>
                        <a href="#" class="continue-shopping">Continue Shopping</a>
                    </div>
                `;
    } else {
        // Render cart items
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="item-image">
                        <div class="item-details">
                            <div class="item-name">${item.name}</div>
                            <div class="item-price">$${item.price.toFixed(2)}</div>
                            <div class="quantity-controls">
                                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            </div>
                            <button class="remove-btn" data-id="${item.id}">Remove</button>
                        </div>
                    `;
            cartItemsContainer.appendChild(itemElement);
        });

        // Add event listeners to the newly created elements
        attachEventListeners();
    }

    // Update summary
    updateSummary();
}

// 10. Update order summary
function updateSummary() {
    const totals = calculateTotals();
    document.getElementById('subtotal').textContent = `$${totals.subtotal}`;
    document.getElementById('shipping').textContent = `$${totals.shipping}`;
    document.getElementById('tax').textContent = `$${totals.tax}`;
    document.getElementById('total').textContent = `$${totals.total}`;
}

// 11. Attach event listeners to cart elements
function attachEventListeners() {
    // Quantity minus buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item) {
                updateQuantity(productId, item.quantity - 1);
            }
        });
    });

    // Quantity plus buttons
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item) {
                updateQuantity(productId, item.quantity + 1);
            }
        });
    });

    // Quantity input changes
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const newQuantity = parseInt(e.target.value);
            if (!isNaN(newQuantity) && newQuantity > 0) {
                updateQuantity(productId, newQuantity);
            }
        });
    });

    // Remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// 12. Checkout button handler
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // In a real application, this would redirect to a checkout page
    alert('Proceeding to checkout!');
    // Here you would typically clear the cart after successful checkout
    // cart = [];
    // saveCart();
    // renderCart();
});

// 13. Initialize the cart when page loads
document.addEventListener('DOMContentLoaded', initCart);

// For demonstration purposes, let's add some items to the cart
// In a real app, items would be added from product pages
setTimeout(() => {
    addToCart(1, 1);
    addToCart(2, 1);
}, 500);