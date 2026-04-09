// ========================================
// GLOBAL VARIABLES
// ========================================
let currentLanguage = 'en';

// ========================================
// TRANSLATIONS DATABASE
// ========================================
const translations = {
    en: {
        // Loading
        loading: "Loading...",
        
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_products: "Products",
        nav_blog: "Blog",
        nav_faq: "FAQ",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        
        // Hero Section
        hero_badge: "25 Years of Excellence",
        hero_title: "Welcome to Olare Gift Shop",
        hero_subtitle: "Authentic African Art & Handcrafted Treasures",
        hero_tagline: "Preserving Tradition, Celebrating Craftsmanship",
        hero_btn_explore: "Explore Our Collection",
        hero_btn_custom: "Custom Orders",
        
        // Trust Badges
        badge_experience: "25+ Years Experience",
        badge_fair_trade: "Fair Trade Certified",
        badge_shipping: "Worldwide Shipping",
        badge_authentic: "100% Authentic",
        
        // Product Badges
        badge_bestseller: "Bestseller",
        badge_popular: "Popular",
        badge_trending: "Trending",
        
        // Featured Products
        featured_title: "Featured Wood Carvings",
        featured_subtitle: "Our Most Popular Handcrafted Masterpieces",
        product_wood_traditional: "Traditional Wood Carvings",
        product_animal: "Safari Animal Sculptures",
        product_functional: "Decorative & Functional Art",
        category_wood: "Wood Sculptures",
        product_wood_desc: "Exquisite hand-carved wooden sculptures showcasing African artistry and tradition.",
        product_animal_desc: "Beautiful wildlife carvings including elephants, lions, giraffes and more.",
        product_functional_desc: "Hand-carved bowls, serving sets, and decorative pieces for your home.",
        
        // Products
        products_title: "Our Collection",
        products_subtitle: "Explore Our Wide Range of Authentic African Crafts",
        product_beadwork: "Traditional Beadwork",
        product_masks: "African Masks",
        product_carvings: "Wood Carvings",
        product_textiles: "Traditional Textiles",
        product_instruments: "Musical Instruments",
        product_baskets: "Handwoven Baskets",
        product_beadwork_desc: "Handcrafted beaded jewelry and accessories featuring authentic African designs and patterns.",
        product_masks_desc: "Authentic hand-carved wooden masks representing various African tribes and traditions.",
        product_carvings_desc: "Beautiful hand-carved wooden sculptures and decorative pieces by skilled artisans.",
        product_textiles_desc: "Colorful fabrics, blankets, and clothing featuring traditional African patterns and designs.",
        product_instruments_desc: "Traditional African drums, shakers, and other handcrafted musical instruments.",
        product_baskets_desc: "Beautiful handwoven baskets and containers in various sizes and designs.",
        
        // Buttons
        btn_inquire: "Inquire on WhatsApp",
        btn_quote: "Get Quote",
        btn_inquire_wa: "Inquire on WhatsApp",
        
        // About Section
        about_title: "Our Story",
        about_years: "Years of Excellence",
        about_p1: "Welcome to <strong>Olare Gift Shop</strong>, where tradition meets craftsmanship. For over <strong>25 years</strong>, we have been your premier destination for authentic African art and handcrafted treasures, preserving and sharing the rich cultural heritage of Africa through our carefully curated collection.",
        about_p2: "Our journey began with a simple mission: to connect the world with the extraordinary talent of African artisans. Each piece in our collection tells a unique story, representing generations of skilled craftsmanship passed down through families and communities.",
        about_p3: "We work directly with local artisan communities, ensuring fair trade practices and supporting traditional craftspeople. When you purchase from Olare Gift Shop, you're not just buying art – you're supporting entire families, preserving ancient traditions, and helping keep cultural heritage alive for future generations.",
        about_feature1: "Direct partnerships with artisans",
        about_feature2: "Fair trade & ethical sourcing",
        about_feature3: "100% authentic handmade items",
        about_feature4: "Supporting local communities",
        about_btn: "Visit Our Shop",
        about_overlay: "Crafting Excellence Since 1999",
        
        // Custom Orders
        custom_title: "Have Something Special in Mind?",
        custom_p1: "We specialize in custom-made pieces tailored to your exact specifications. Our skilled artisans can bring your vision to life.",
        custom_feature1: "Personalized designs",
        custom_feature2: "Choice of materials & sizes",
        custom_feature3: "Expert craftsmanship",
        custom_feature4: "Direct artisan collaboration",
        custom_note: "<strong>Note:</strong> Custom orders typically require 2-4 weeks. Contact us for a personalized quote.",
        custom_btn: "Discuss Your Custom Order",
        
        // Payment & Shipping
        payment_title: "Payment Methods",
        payment_subtitle: "We Accept Multiple Payment Options",
        shipping_title: "Worldwide Shipping",
        shipping_subtitle: "We Ship to Your Doorstep Anywhere",
        shipping_kenya: "Kenya: 3-5 business days",
        shipping_intl: "International: 7-21 days",
        shipping_secure: "Secure packaging guaranteed",
        shipping_tracking: "Tracking available",
        shipping_note: "Shipping costs vary by destination and order size. Contact us for a quote.",
        
        // Features
        features_title: "Why Choose Olare Gift Shop",
        feature_authentic: "100% Authentic Products",
        feature_authentic_desc: "All our items are genuine handcrafted pieces made by local artisans using traditional methods passed down through generations.",
        feature_fair: "Fair Trade Practices",
        feature_fair_desc: "We work directly with artisan communities to ensure fair compensation, ethical sourcing, and support for local economies.",
        feature_experience: "25 Years Experience",
        feature_experience_desc: "Over two decades of expertise in African art and crafts, serving customers worldwide with dedication and excellence.",
        feature_quality: "Quality Guaranteed",
        feature_quality_desc: "Each piece is carefully inspected to ensure the highest quality craftsmanship. We stand behind every product we sell.",
        
        // Newsletter
        newsletter_title: "Stay Updated!",
        newsletter_subtitle: "Subscribe for exclusive offers, new arrivals, and cultural insights",
        newsletter_placeholder: "Enter your email address",
        newsletter_btn: "Subscribe",
        
        // Map
        map_title: "Find Us Here",
        map_btn_open: "Open in Google Maps",
        map_btn_directions: "Get Directions",
        
        // Contact
        contact_title: "Contact Us",
        contact_form_title: "Send Us a Message",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_phone: "Your Phone",
        contact_message: "Your Message",
        contact_send: "Send Message",
        contact_info_title: "Get in Touch",
        contact_visit: "Visit Us",
        contact_map_link: "Click to view on Google Maps",
        contact_call: "Call Us",
        contact_email_title: "Email Us",
        contact_whatsapp: "WhatsApp Us",
        contact_whatsapp_link: "Chat with us on WhatsApp",
        contact_hours: "Business Hours",
        contact_hours_weekday: "Monday - Saturday: 9:00 AM - 6:00 PM",
        contact_hours_sunday: "Sunday: 10:00 AM - 4:00 PM",
        
        // Footer
        footer_about: "Your premier destination for authentic African art and handcrafted treasures. Celebrating 25 years of excellence in preserving African cultural heritage.",
        footer_quick_links: "Quick Links",
        footer_contact: "Contact Info",
        footer_map: "View on Google Maps",
        footer_hours: "Mon-Sat: 9AM-6PM, Sun: 10AM-4PM",
        footer_services: "Our Services",
        footer_service1: "Custom Orders",
        footer_service2: "Worldwide Shipping",
        footer_service3: "Bulk Orders",
        footer_service4: "Gift Wrapping",
        footer_service5: "Consultations",
        footer_rights: "All rights reserved.",
        footer_crafted: "Crafted with",
        footer_africa: "in Africa"
    },
    
    sw: {
        // Swahili translations
        loading: "Inapakia...",
        nav_home: "Nyumbani",
        nav_about: "Kuhusu",
        nav_products: "Bidhaa",
        nav_blog: "Blogu",
        nav_faq: "Maswali",
        nav_reviews: "Maoni",
        nav_contact: "Wasiliana",
        hero_badge: "Miaka 25 ya Ubora",
        hero_title: "Karibu Olare Gift Shop",
        hero_subtitle: "Sanaa Halisi ya Kiafrika na Vitu Vilivyotengenezwa kwa Mikono",
        hero_tagline: "Kutunza Mila, Kusherehekea Ufundi",
        hero_btn_explore: "Chunguza Mkusanyiko Wetu",
        hero_btn_custom: "Oda Maalum",
        badge_experience: "Uzoefu wa Miaka 25+",
        badge_fair_trade: "Biashara ya Haki Iliyoidhinishwa",
        badge_shipping: "Usafirishaji Ulimwenguni Kote",
        badge_authentic: "100% Halisi",
        featured_title: "Uchongaji wa Mbao Unaopendwa",
        featured_subtitle: "Kazi Zetu Maarufu Zilizofanywa kwa Mikono",
        products_title: "Mkusanyiko Wetu",
        products_subtitle: "Chunguza Aina Mbalimbali za Sanaa Halisi ya Kiafrika",
        about_title: "Hadithi Yetu",
        about_years: "Miaka ya Ubora",
        custom_title: "Una Kitu Maalum Akilini?",
        payment_title: "Njia za Malipo",
        shipping_title: "Usafirishaji Ulimwenguni",
        features_title: "Kwa Nini Uchague Olare Gift Shop",
        newsletter_title: "Baki Unafahamu!",
        newsletter_subtitle: "Jiandikishe kupata ofa maalum, bidhaa mpya, na maarifa ya kitamaduni",
        newsletter_btn: "Jiandikishe",
        map_title: "Tupate Hapa",
        contact_title: "Wasiliana Nasi",
        contact_send: "Tuma Ujumbe",
        footer_rights: "Haki zote zimehifadhiwa.",
        footer_crafted: "Imetengenezwa kwa",
        footer_africa: "Afrika"
    },
    
    fr: {
        // French translations
        loading: "Chargement...",
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_products: "Produits",
        nav_blog: "Blog",
        nav_faq: "FAQ",
        nav_reviews: "Avis",
        nav_contact: "Contact",
        hero_badge: "25 Ans d'Excellence",
        hero_title: "Bienvenue à Olare Gift Shop",
        hero_subtitle: "Art Africain Authentique et Trésors Artisanaux",
        hero_tagline: "Préserver la Tradition, Célébrer l'Artisanat",
        hero_btn_explore: "Explorer Notre Collection",
        hero_btn_custom: "Commandes Personnalisées",
        badge_experience: "25+ Ans d'Expérience",
        badge_fair_trade: "Commerce Équitable Certifié",
        badge_shipping: "Expédition Mondiale",
        badge_authentic: "100% Authentique",
        featured_title: "Sculptures en Bois en Vedette",
        featured_subtitle: "Nos Chefs-d'Œuvre Artisanaux les Plus Populaires",
        products_title: "Notre Collection",
        products_subtitle: "Explorez Notre Large Gamme d'Artisanat Africain Authentique",
        about_title: "Notre Histoire",
        about_years: "Années d'Excellence",
        custom_title: "Vous Avez Quelque Chose de Spécial en Tête?",
        payment_title: "Méthodes de Paiement",
        shipping_title: "Expédition Mondiale",
        features_title: "Pourquoi Choisir Olare Gift Shop",
        newsletter_title: "Restez Informé!",
        newsletter_subtitle: "Abonnez-vous pour des offres exclusives, nouveautés et aperçus culturels",
        newsletter_btn: "S'abonner",
        map_title: "Trouvez-Nous Ici",
        contact_title: "Contactez-Nous",
        contact_send: "Envoyer le Message",
        footer_rights: "Tous droits réservés.",
        footer_crafted: "Conçu avec",
        footer_africa: "en Afrique"
    },
    
    es: {
        // Spanish translations
        loading: "Cargando...",
        nav_home: "Inicio",
        nav_about: "Acerca de",
        nav_products: "Productos",
        nav_blog: "Blog",
        nav_faq: "Preguntas",
        nav_reviews: "Reseñas",
        nav_contact: "Contacto",
        hero_badge: "25 Años de Excelencia",
        hero_title: "Bienvenido a Olare Gift Shop",
        hero_subtitle: "Arte Africano Auténtico y Tesoros Artesanales",
        hero_tagline: "Preservando la Tradición, Celebrando la Artesanía",
        hero_btn_explore: "Explorar Nuestra Colección",
        hero_btn_custom: "Pedidos Personalizados",
        badge_experience: "25+ Años de Experiencia",
        badge_fair_trade: "Comercio Justo Certificado",
        badge_shipping: "Envío Mundial",
        badge_authentic: "100% Auténtico",
        featured_title: "Tallas de Madera Destacadas",
        featured_subtitle: "Nuestras Obras Maestras Artesanales Más Populares",
        products_title: "Nuestra Colección",
        products_subtitle: "Explore Nuestra Amplia Gama de Artesanías Africanas Auténticas",
        about_title: "Nuestra Historia",
        about_years: "Años de Excelencia",
        custom_title: "¿Tiene Algo Especial en Mente?",
        payment_title: "Métodos de Pago",
        shipping_title: "Envío Mundial",
        features_title: "Por Qué Elegir Olare Gift Shop",
        newsletter_title: "¡Manténgase Actualizado!",
        newsletter_subtitle: "Suscríbase para ofertas exclusivas, nuevos productos y perspectivas culturales",
        newsletter_btn: "Suscribirse",
        map_title: "Encuéntrenos Aquí",
        contact_title: "Contáctenos",
        contact_send: "Enviar Mensaje",
        footer_rights: "Todos los derechos reservados.",
        footer_crafted: "Hecho con",
        footer_africa: "en África"
    },
    
    de: {
        // German translations
        loading: "Wird geladen...",
        nav_home: "Startseite",
        nav_about: "Über Uns",
        nav_products: "Produkte",
        nav_blog: "Blog",
        nav_faq: "FAQ",
        nav_reviews: "Bewertungen",
        nav_contact: "Kontakt",
        hero_badge: "25 Jahre Exzellenz",
        hero_title: "Willkommen bei Olare Gift Shop",
        hero_subtitle: "Authentische Afrikanische Kunst und Handgefertigte Schätze",
        hero_tagline: "Tradition Bewahren, Handwerkskunst Feiern",
        hero_btn_explore: "Unsere Kollektion Erkunden",
        hero_btn_custom: "Individuelle Bestellungen",
        badge_experience: "25+ Jahre Erfahrung",
        badge_fair_trade: "Fair Trade Zertifiziert",
        badge_shipping: "Weltweiter Versand",
        badge_authentic: "100% Authentisch",
        featured_title: "Ausgewählte Holzschnitzereien",
        featured_subtitle: "Unsere Beliebtesten Handgefertigten Meisterwerke",
        products_title: "Unsere Kollektion",
        products_subtitle: "Entdecken Sie Unser Breites Sortiment an Authentischem Afrikanischem Kunsthandwerk",
        about_title: "Unsere Geschichte",
        about_years: "Jahre der Exzellenz",
        custom_title: "Haben Sie Etwas Besonderes im Sinn?",
        payment_title: "Zahlungsmethoden",
        shipping_title: "Weltweiter Versand",
        features_title: "Warum Olare Gift Shop Wählen",
        newsletter_title: "Bleiben Sie Auf dem Laufenden!",
        newsletter_subtitle: "Abonnieren Sie für exklusive Angebote, Neuankömmlinge und kulturelle Einblicke",
        newsletter_btn: "Abonnieren",
        map_title: "Finden Sie Uns Hier",
        contact_title: "Kontaktieren Sie Uns",
        contact_send: "Nachricht Senden",
        footer_rights: "Alle Rechte vorbehalten.",
        footer_crafted: "Hergestellt mit",
        footer_africa: "in Afrika"
    },
    
    zh: {
        // Chinese (Simplified) translations
        loading: "加载中...",
        nav_home: "主页",
        nav_about: "关于我们",
        nav_products: "产品",
        nav_blog: "博客",
        nav_faq: "常见问题",
        nav_reviews: "评论",
        nav_contact: "联系我们",
        hero_badge: "25年卓越",
        hero_title: "欢迎来到奥拉雷礼品店",
        hero_subtitle: "正宗非洲艺术与手工珍品",
        hero_tagline: "保护传统，庆祝工艺",
        hero_btn_explore: "探索我们的收藏",
        hero_btn_custom: "定制订单",
        badge_experience: "25年以上经验",
        badge_fair_trade: "公平贸易认证",
        badge_shipping: "全球配送",
        badge_authentic: "100%正品",
        featured_title: "精选木雕",
        featured_subtitle: "我们最受欢迎的手工杰作",
        products_title: "我们的收藏",
        products_subtitle: "探索我们广泛的正宗非洲工艺品",
        about_title: "我们的故事",
        about_years: "卓越年份",
        custom_title: "有什么特别想法吗？",
        payment_title: "支付方式",
        shipping_title: "全球配送",
        features_title: "为什么选择奥拉雷礼品店",
        newsletter_title: "保持更新！",
        newsletter_subtitle: "订阅获取独家优惠、新品和文化见解",
        newsletter_btn: "订阅",
        map_title: "在这里找到我们",
        contact_title: "联系我们",
        contact_send: "发送消息",
        footer_rights: "版权所有。",
        footer_crafted: "用心制作于",
        footer_africa: "非洲"
    }
};

// ========================================
// LANGUAGE FUNCTIONS
// ========================================
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updatePageLanguage();
}

function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// Load saved language preference
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
        document.getElementById('languageSelect').value = savedLang;
        updatePageLanguage();
    }
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

// ========================================
// CONTACT FORM WITH WHATSAPP INTEGRATION
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Create WhatsApp message
        const whatsappMessage = `Hello, my name is ${name}.%0A%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage: ${message}`;
        
        // WhatsApp API URL
        const whatsappURL = `https://wa.me/254721761014?text=${whatsappMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Display success message
        alert(`Thank you ${name}! You will be redirected to WhatsApp to send your message.`);
        
        // Reset form
        contactForm.reset();
    });
}

// ========================================
// NEWSLETTER FORM
// ========================================
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        
        // Send to WhatsApp
        const message = `New Newsletter Subscription:%0AEmail: ${email}`;
        window.open(`https://wa.me/254721761014?text=${message}`, '_blank');
        
        alert('Thank you for subscribing! We will send updates to ' + email);
        newsletterForm.reset();
    });
}

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        
        const targetId = href;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// SCROLL EFFECTS
// ========================================
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow to nav on scroll
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// SCROLL ANIMATIONS
// ========================================
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

// Observe product cards
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

// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ========================================
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

// ========================================
// WHATSAPP FLOATING BUTTON
// ========================================
function createWhatsAppButton() {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/254721761014?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.title = 'Chat with us on WhatsApp';
    
    document.body.appendChild(whatsappBtn);
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.title = 'Back to Top';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// LOADING SCREEN
// ========================================
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
});

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Load language preference
    loadLanguagePreference();
    
    // Create floating elements
    createWhatsAppButton();
    createBackToTopButton();
    
    // Console welcome message
    console.log('%cWelcome to Olare Gift Shop!', 'color: #8B4513; font-size: 24px; font-weight: bold;');
    console.log('%c25 Years of Excellence in African Art & Crafts', 'color: #A0522D; font-size: 16px;');
    console.log('%cWebsite designed with ❤️', 'color: #FFD700; font-size: 14px;');
});

// ========================================
// PREVENT CONSOLE ERRORS
// ========================================
window.addEventListener('error', function(e) {
    // Silently handle errors in production
    console.warn('An error occurred:', e.message);
});