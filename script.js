// Toggle Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Display success message
    alert(`Thank you ${name}! Your message has been received. We will get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation bar
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
    } else {
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll for product cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Observe feature items
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
// Google Maps Integration
function initMap() {
    // Olare Gift Shop coordinates
    const olareLoc = { lat: -1.1673324, lng: 35.7453414 };
    
    // Create map centered on Olare Gift Shop
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: olareLoc,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
    });
    
    // Create marker for Olare Gift Shop
    const marker = new google.maps.Marker({
        position: olareLoc,
        map: map,
        title: "Olare Gift Shop",
        animation: google.maps.Animation.DROP,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
    });
    
    // Info window with shop details
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px; max-width: 250px;">
                <h3 style="color: #8B4513; margin: 0 0 10px 0;">Olare Gift Shop</h3>
                <p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:+254721761014">+254721761014</a></p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:leonardolekenta@gmail.com">leonardolekenta@gmail.com</a></p>
                <p style="margin: 10px 0 5px 0;"><strong>Hours:</strong></p>
                <p style="margin: 0;">Mon-Sat: 9:00 AM - 6:00 PM<br>Sun: 10:00 AM - 4:00 PM</p>
                <div style="margin-top: 10px;">
                    <a href="https://wa.me/254721761014" target="_blank" style="color: #25D366; text-decoration: none; font-weight: bold;">
                        <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                </div>
            </div>
        `
    });
    
    // Show info window when marker is clicked
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
    
    // Open info window by default
    infoWindow.open(map, marker);
    
    // Store map instance globally for other functions
    window.mapInstance = map;
    window.shopMarker = marker;
}

// Get user's current location
function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLoc = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                // Create marker for user location
                const userMarker = new google.maps.Marker({
                    position: userLoc,
                    map: window.mapInstance,
                    title: "Your Location",
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                    }
                });
                
                // Adjust map to show both locations
                const bounds = new google.maps.LatLngBounds();
                bounds.extend(userLoc);
                bounds.extend({ lat: -1.1673324, lng: 35.7453414 });
                window.mapInstance.fitBounds(bounds);
                
                // Draw route (optional)
                const directionsService = new google.maps.DirectionsService();
                const directionsRenderer = new google.maps.DirectionsRenderer({
                    map: window.mapInstance,
                    suppressMarkers: true
                });
                
                directionsService.route(
                    {
                        origin: userLoc,
                        destination: { lat: -1.1673324, lng: 35.7453414 },
                        travelMode: google.maps.TravelMode.DRIVING
                    },
                    (response, status) => {
                        if (status === "OK") {
                            directionsRenderer.setDirections(response);
                        }
                    }
                );
            },
            (error) => {
                alert("Unable to get your location. Please enable location services.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Load map when page loads (only if map element exists)
window.addEventListener('load', function() {
    if (document.getElementById('map')) {
        // Load Google Maps API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }
});
// Console welcome message
console.log('%cWelcome to Olari Curio Shop!', 'color: #8B4513; font-size: 20px; font-weight: bold;');
console.log('%cExplore authentic African art and crafts', 'color: #A0522D; font-size: 14px;');
