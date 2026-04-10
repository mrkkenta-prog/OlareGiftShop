/* ================================
   OLARE GIFT SHOP - MAIN JAVASCRIPT
   Nike-Inspired Functionality
   ================================ */

// ==================
// GLOBAL VARIABLES
// ==================

let cart = [];
let userLocation = {
    city: '',
    country: '',
    countryCode: '',
    currency: 'KSh'
};

// ==================
// INITIALIZATION
// ==================

document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🎨 OLARE GIFT SHOP', 'color: #8B4513; font-size: 24px; font-weight: bold;');
    console.log('%cNike-inspired design loaded', 'color: #666; font-size: 14px;');
    
    // Initialize all features
    initLocationDetection();
    loadCart();
    updateCartCount();
    initMobileMenu();
    initSearch();
    initFilters();
    initProductButtons();
    initReviewForm();
    initScrollAnimations();
    renderCart();
});

// ==================
// LOCATION DETECTION (Nike-Style)
// ==================

async function initLocationDetection() {
    try {
        // Check if location is already cached
        const cachedLocation = localStorage.getItem('userLocation');
        
        if (cachedLocation) {
            userLocation = JSON.parse(cachedLocation);
            updateLocationDisplay();
            return;
        }
        
        // Fetch location from IP API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data && data.country_name) {
            userLocation = {
                city: data.city || 'Unknown',
                country: data.country_name,
                countryCode: data.country_code,
                currency: getCurrencyByCountry(data.country_code)
            };
            
            // Cache location
            localStorage.setItem('userLocation', JSON.stringify(userLocation));
            
            // Update display
            updateLocationDisplay();
            
            // Auto-select language
            autoSelectLanguage(data.country_code);
            
            console.log('Location detected:', userLocation);
        }
        
    } catch (error) {
        console.log('Location detection failed, using default');
        userLocation = {
            city: 'Nairobi',
            country: 'Kenya',
            countryCode: 'KE',
            currency: 'KSh'
        };
        updateLocationDisplay();
    }
}

function updateLocationDisplay() {
    const locationElements = document.querySelectorAll('#userLocation, #headerLocation, #footerLocation');
    
    locationElements.forEach(element => {
        if (element) {
            element.textContent = `${userLocation.city}, ${userLocation.country}`;
        }
    });
}

function getCurrencyByCountry(countryCode) {
    const currencyMap = {
        'KE': 'KSh',     // Kenya
        'TZ': 'TSh',     // Tanzania
        'UG': 'UGX',     // Uganda
        'US': 'USD',     // USA
        'GB': 'GBP',     // UK
        'EU': 'EUR',     // Europe
        'NG': 'NGN',     // Nigeria
        'ZA': 'ZAR',     // South Africa
    };
    
    return currencyMap[countryCode] || 'KSh';
}

function autoSelectLanguage(countryCode) {
    const languageMap = {
        'KE': 'en',
        'TZ': 'sw',
        'UG': 'en',
        'FR': 'fr',
        'ES': 'es',
        'DE': 'de',
        'CN': 'zh',
        'US': 'en',
        'GB': 'en'
    };
    
    const language = languageMap[countryCode] || 'en';
    localStorage.setItem('preferredLanguage', language);
}

// ==================
// SHOPPING CART FUNCTIONALITY
// ==================

function loadCart() {
    const savedCart = localStorage.getItem('olare_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCart() {
    localStorage.setItem('olare_cart', JSON.stringify(cart));
}

function addToCart(product) {
    // Check if product already exists
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: parseFloat(product.price),
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showCartNotification(product.name);
    
    // If on cart page, re-render
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount, .cart-count');
    
    cartCountElements.forEach(element => {
        if (element) {
            element.textContent = totalItems;
            
            // Add animation
            element.style.transform = 'scale(1.2)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    });
}

function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateShipping() {
    const subtotal = calculateSubtotal();
    
    // Free shipping for orders over 10,000
    if (subtotal >= 10000) {
        return 0;
    }
    
    // Different shipping for different countries
    if (userLocation.countryCode === 'KE') {
        return 500;
    } else {
        return 1500;
    }
}

function calculateTotal() {
    return calculateSubtotal() + calculateShipping();
}

function renderCart() {
    const cartContainer = document.getElementById('cartItemsContainer');
    const emptyMessage = document.getElementById('emptyCartMessage');
    const orderSummary = document.getElementById('orderSummary');
    
    if (!cartContainer) return;
    
    // Clear existing items (except empty message)
    const existingItems = cartContainer.querySelectorAll('.cart-item');
    existingItems.forEach(item => item.remove());
    
    if (cart.length === 0) {
        if (emptyMessage) emptyMessage.style.display = 'block';
        if (orderSummary) orderSummary.style.display = 'none';
        return;
    }
    
    // Hide empty message
    if (emptyMessage) emptyMessage.style.display = 'none';
    if (orderSummary) orderSummary.style.display = 'block';
    
    // Render cart items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <i class="fas fa-gem"></i>
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-category">Handcrafted Art</p>
                <p class="cart-item-price">${userLocation.currency} ${item.price.toLocaleString()}</p>
                
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                    <i class="far fa-trash-alt"></i>
                    Remove
                </button>
            </div>
            <div class="cart-item-total">
                <p class="price">${userLocation.currency} ${(item.price * item.quantity).toLocaleString()}</p>
            </div>
        `;
        
        cartContainer.appendChild(cartItem);
    });
    
    // Update summary
    updateOrderSummary();
}

function updateOrderSummary() {
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    const total = calculateTotal();
    
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) {
        subtotalElement.textContent = `${userLocation.currency} ${subtotal.toLocaleString()}`;
    }
    
    if (shippingElement) {
        if (shipping === 0) {
            shippingElement.textContent = 'Free';
        } else {
            shippingElement.textContent = `${userLocation.currency} ${shipping.toLocaleString()}`;
        }
    }
    
    if (totalElement) {
        totalElement.textContent = `${userLocation.currency} ${total.toLocaleString()}`;
    }
}

function showCartNotification(productName) {
    // Create notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #111;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideInFromRight 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="color: #4caf50; font-size: 20px;"></i>
        <span><strong>${productName}</strong> added to bag</span>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutToRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Checkout functions
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your bag is empty!');
        return;
    }
    
    const total = calculateTotal();
    const itemsList = cart.map(item => 
        `${item.name} x${item.quantity} - ${userLocation.currency} ${(item.price * item.quantity).toLocaleString()}`
    ).join('%0A');
    
    const message = `NEW ORDER REQUEST%0A%0A` +
                   `Items:%0A${itemsList}%0A%0A` +
                   `Subtotal: ${userLocation.currency} ${calculateSubtotal().toLocaleString()}%0A` +
                   `Shipping: ${userLocation.currency} ${calculateShipping().toLocaleString()}%0A` +
                   `Total: ${userLocation.currency} ${total.toLocaleString()}%0A%0A` +
                   `Location: ${userLocation.city}, ${userLocation.country}%0A%0A` +
                   `Please confirm this order and provide delivery details.`;
    
    window.open(`https://wa.me/254721761014?text=${message}`, '_blank');
}

function guestCheckout() {
    proceedToCheckout();
}

// ==================
// PRODUCT BUTTONS
// ==================

function initProductButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = {
                id: this.dataset.id,
                name: this.dataset.name,
                price: this.dataset.price,
                image: this.dataset.image
            };
            
            addToCart(product);
        });
    });
}

// ==================
// SEARCH FUNCTIONALITY
// ==================

function initSearch() {
    const searchInput = document.getElementById('productSearch');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productCategory = card.querySelector('.product-category').textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ==================
// FILTER & SORT
// ==================

function initFilters() {
    // Category filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            filterProducts(filter);
        });
    });
    
    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const productCategory = card.dataset.category;
            
            if (productCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

function sortProducts(sortBy) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    const productCards = Array.from(productsGrid.children);
    
    productCards.sort((a, b) => {
        if (sortBy === 'price-low') {
            return parseInt(a.dataset.price) - parseInt(b.dataset.price);
        } else if (sortBy === 'price-high') {
            return parseInt(b.dataset.price) - parseInt(a.dataset.price);
        } else if (sortBy === 'name') {
            return a.dataset.name.localeCompare(b.dataset.name);
        }
        return 0; // featured (no sort)
    });
    
    // Re-append in sorted order
    productCards.forEach(card => productsGrid.appendChild(card));
}

// ==================
// MOBILE MENU
// ==================

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// ==================
// REVIEW FORM
// ==================

function initReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    
    if (!reviewForm) return;
    
    // Star rating
    const stars = document.querySelectorAll('.star-rating-input i');
    let selectedRating = 0;
    
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            selectedRating = index + 1;
            document.getElementById('ratingValue').value = selectedRating;
            
            // Update stars
            stars.forEach((s, i) => {
                if (i < selectedRating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
        });
        
        // Hover effect
        star.addEventListener('mouseenter', function() {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Reset on mouse leave
    const starContainer = document.querySelector('.star-rating-input');
    if (starContainer) {
        starContainer.addEventListener('mouseleave', function() {
            stars.forEach((s, i) => {
                if (i < selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    }
    
    // Form submission
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (selectedRating === 0) {
            alert('Please select a star rating');
            return;
        }
        
        const formData = {
            name: document.getElementById('reviewerName').value,
            email: document.getElementById('reviewerEmail').value,
            location: document.getElementById('reviewerLocation').value,
            product: document.getElementById('productPurchased').value,
            rating: selectedRating,
            title: document.getElementById('reviewTitle').value,
            review: document.getElementById('reviewText').value
        };
        
        submitReviewViaWhatsApp(formData);
    });
}

function submitReviewViaWhatsApp(data) {
    const stars = '⭐'.repeat(data.rating);
    
    const message = `NEW REVIEW SUBMISSION%0A%0A` +
                   `Name: ${data.name}%0A` +
                   `Email: ${data.email}%0A` +
                   `Location: ${data.location || 'Not specified'}%0A` +
                   `Product: ${data.product || 'Not specified'}%0A` +
                   `Rating: ${stars} (${data.rating}/5)%0A%0A` +
                   `Title: ${data.title}%0A%0A` +
                   `Review:%0A${data.review}`;
    
    window.open(`https://wa.me/254721761014?text=${message}`, '_blank');
    
    // Reset form
    document.getElementById('reviewForm').reset();
    
    // Reset stars
    const stars_elements = document.querySelectorAll('.star-rating-input i');
    stars_elements.forEach(star => {
        star.classList.remove('fas', 'active');
        star.classList.add('far');
    });
    
    alert('Thank you! You will be redirected to WhatsApp to submit your review.');
}

// ==================
// SCROLL ANIMATIONS
// ==================

function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.category-card, .value-item, .product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// ==================
// SMOOTH SCROLL
// ==================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        
        if (target) {
            const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================
// NAVBAR SCROLL EFFECT
// ==================

let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==================
// FORM VALIDATION
// ==================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\+\-\(\)]+$/;
    return re.test(phone);
}

// ==================
// LOCAL STORAGE MANAGEMENT
// ==================

function clearOldData() {
    // Clear cache older than 7 days
    const cacheTime = localStorage.getItem('cacheTime');
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    
    if (cacheTime && (Date.now() - parseInt(cacheTime)) > sevenDays) {
        localStorage.removeItem('userLocation');
        localStorage.setItem('cacheTime', Date.now().toString());
    } else if (!cacheTime) {
        localStorage.setItem('cacheTime', Date.now().toString());
    }
}

clearOldData();

// ==================
// CURRENCY CONVERTER (Future Enhancement)
// ==================

function convertCurrency(amount, fromCurrency, toCurrency) {
    // Placeholder for future API integration
    const rates = {
        'KSh': 1,
        'USD': 0.0077,
        'EUR': 0.0070,
        'GBP': 0.0061
    };
    
    const baseAmount = amount / (rates[fromCurrency] || 1);
    return baseAmount * (rates[toCurrency] || 1);
}

// ==================
// ERROR HANDLING
// ==================

window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.message);
    // Silently handle errors in production
});

// ==================
// PERFORMANCE OPTIMIZATION
// ==================

// Lazy load images (when you add real images)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// ==================
// UTILITIES
// ==================

function formatCurrency(amount, currency = userLocation.currency) {
    return `${currency} ${amount.toLocaleString()}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced search
const debouncedSearch = debounce(function(searchTerm) {
    console.log('Searching for:', searchTerm);
    // Search logic here
}, 300);

// ==================
// CONSOLE STYLING
// ==================

console.log('%c 🛍️ OLARE GIFT SHOP ', 
    'background: #8B4513; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Nike-inspired e-commerce experience ', 
    'color: #666; font-size: 12px;');
console.log('%c Cart items:', 'font-weight: bold;', cart.length);
console.log('%c Location:', 'font-weight: bold;', userLocation);

// ==================
// EXPORT FUNCTIONS (for other scripts)
// ==================

window.OlareShop = {
    addToCart,
    removeFromCart,
    updateQuantity,
    getCart: () => cart,
    getLocation: () => userLocation,
    proceedToCheckout,
    guestCheckout,
    formatCurrency
};

// ==================
// DEVELOPMENT HELPERS
// ==================

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c🔧 DEVELOPMENT MODE', 'background: orange; color: white; padding: 5px;');
    
    // Add dev helpers
    window.devHelpers = {
        clearCart: () => {
            cart = [];
            saveCart();
            updateCartCount();
            renderCart();
            console.log('Cart cleared');
        },
        addTestProducts: () => {
            const testProducts = [
                { id: '1', name: 'Test Product 1', price: '1000', image: 'test' },
                { id: '2', name: 'Test Product 2', price: '2000', image: 'test' },
                { id: '3', name: 'Test Product 3', price: '3000', image: 'test' }
            ];
            
            testProducts.forEach(product => addToCart(product));
            console.log('Test products added');
        },
        viewCart: () => {
            console.table(cart);
        },
        setLocation: (city, country, code) => {
            userLocation = { city, country, countryCode: code, currency: getCurrencyByCountry(code) };
            updateLocationDisplay();
            console.log('Location updated:', userLocation);
        }
    };
    
    console.log('%cDev helpers available: devHelpers.clearCart(), devHelpers.addTestProducts(), devHelpers.viewCart(), devHelpers.setLocation()', 
        'color: #666; font-style: italic;');
}
