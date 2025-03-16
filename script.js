// Menu Data
const menuData = {
    especiais: [

        {
            id: 1,
            name: 'Hamburguer Artesanal',
            description: 'Hamburguer Artesanal da casa',
            price: 40,
            image: 'imagens/hamburguer.jpeg',
            discount: 8
        },

        {
            id: 2,
            name: 'Risoto de Trufas',
            description: 'Arroz Arbório cremoso com trufa negra e parmesão envelhecido',
            price: 28,
            image: 'imagens/risoto.jpeg',
            discount: 15
        },
        {
            id: 3,
            name: 'Bife Wagyu',
            description: 'Premium Japanese A5 Wagyu com legumes da estação',
            price: 85,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 4,
            name: 'Lagosta Thermidor',
            description: 'Lagosta fresca do Maine em molho cremoso de conhaque',
            price: 65,
            image: 'imagens/lagosta.jpg',
            discount: 10
        }
    ],
    chopp: [
        {
            id: 1,
            name: 'IPA Artesanal',
            description: 'Chopp Indian Pale Ale com notas cítricas e amargor equilibrado',
            price: 18,
            image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 2,
            name: 'Fizzy',
            description: 'Fizzy é uma bebida mista que combina o melhor de dois mundos, o da cevada e o da uva',
            price: 20,
            image: 'imagens/fizzy.jpeg'
        },
        {
            id: 3,
            name: 'Colorado',
            description: 'Cerveja Colorado',
            price: 20,
            image: 'imagens/colorado.jpeg'
        },
        {
            id: 4,
            name: 'Stout Cremoso',
            description: 'Trela é uma gíria usada entre os mineiros e significa bate-papo, conversa despretensiosa. A Trela Pilsen é uma refrescante Cerveja Puro Malte com a qualidade Antuérpia',
            price: 20,
            image: 'imagens/trela.jpeg'
        }
    ],
    bebidas: [
        {
            id: 1,
            name: 'Mojito Clássico',
            description: 'Rum, hortelã fresca, limão e água com gás',
            price: 25,
            image: 'imagens/mojito.jpeg'
        },
        {
            id: 2,
            name: 'Blackberry Gin Fizz',
            description: 'Amoras, gim e limão são a combinação perfeita neste Blackberry Gin Fizz',
            price: 25,
            image: 'imagens/gin.jpeg'
        },
        {
            id: 3,
            name: 'Caipirinha Clássica',
            description: 'Limão, Vodka e açúcar',
            price: 25,
            image: 'imagens/caipirinha.jpeg'
        },
        {
            id: 4,
            name: 'Caipirinha Morango',
            description: 'Morango, Vodka e açúcar',
            price: 25,
            image: 'imagens/caipmorango.jpeg'
        },
        {
            id: 5,
            name: 'Negroni',
            description: 'Gin, Campari, Vermute Tinto, Laranja',
            price: 25,
            image: 'imagens/negrone.jpeg'
        }
    ],
    pratos: [
        {
            id: 1,
            name: 'Baião de Dois',
            description: 'Arroz, feijão de corda, queijo coalho e carne de sol',
            price: 30,
            image: 'imagens/baiao.jpeg'
        },
        {
            id: 2,
            name: 'Costelinha Com Barbecue',
            description: 'Costelinha suína com molho barbecue, acompanha arroz e fritas',
            price: 40,
            image: 'imagens/costelinha.jpeg'
        },
        {
            id: 3,
            name: 'Parmegiana',
            description: 'Filé à parmegiana com arroz e fritas',
            price: 25,
            image: 'imagens/parmegiana.jpeg'
        }
    ],
    sobremesas: [
        {
            id: 1,
            name: 'Pudim de Leite',
            description: 'Pudim cremoso com calda de caramelo',
            price: 20,
            image: 'imagens/pudim.jpeg'
        },
        {
            id: 2,
            name: 'Sorvete',
            description: 'Sorvete artesanal com calda especial',
            price: 20,
            image: 'imagens/sorvete.jpeg'
        },
        {
            id: 3,
            name: 'Brownie',
            description: 'Brownie quente com sorvete de baunilha',
            price: 20,
            image: 'imagens/brownie.jpeg'
        },
        {
            id: 4,
            name: 'Churros',
            description: 'Churros com doce de leite',
            price: 20,
            image: 'imagens/churros.jpg'
        },
        {
            id: 5,
            name: 'Petit Gâteau',
            description: 'Petit Gâteau com sorvete de baunilha',
            price: 20,
            image: 'imagens/pt.jpeg'
        }
    ]
};

// Gallery Data
const galleryData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        description: 'Ambiente interno'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        description: 'Bar'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        description: 'Área externa'
    }
];

// Reviews Data
const reviewsData = [
    {
        id: 1,
        name: 'Maria Silva',
        rating: 5,
        comment: 'Experiência incrível! A comida estava deliciosa e o ambiente é muito acolhedor.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 2,
        name: 'João Santos',
        rating: 5,
        comment: 'O melhor restaurante da cidade! Os drinks são espetaculares.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 3,
        name: 'Ana Oliveira',
        rating: 4,
        comment: 'Ótimo atendimento e pratos muito bem apresentados.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    const reserveBtns = document.querySelectorAll('.reserve-btn, .primary-btn');
    const reservationForm = document.querySelector('#reservationForm');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            hamburger.style.background = 'transparent';
        } else {
            hamburger.style.background = 'var(--text)';
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Initialize gallery
    renderGallery();

    // Initialize menu sections
    renderMenuSections();

    // Initialize reviews
    renderReviews();

    // Menu navigation
    const menuNavBtns = document.querySelectorAll('.menu-nav-btn');
    const menuSections = document.querySelectorAll('.menu-section');

    menuNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active button
            menuNavBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update active section
            menuSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === category) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Reservation form handling
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(reservationForm);
            const data = Object.fromEntries(formData);
            
            // Format WhatsApp message
            const message = `Olá! Gostaria de fazer uma reserva:\n\nNome: ${data.name}\nData: ${data.date}\nHorário: ${data.time}\nPessoas: ${data.guests}\nOcasião: ${data.occasion}\nObservações: ${data.notes}`;
            
            // Open WhatsApp with pre-filled message
            const phone = '5511999999999';
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Add event listener for "Ver Menu" button
    document.querySelector('.secondary-btn').addEventListener('click', () => {
        document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
    });
});

// Render gallery
function renderGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.description}">
            <div class="gallery-overlay">
                <p>${item.description}</p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Render menu sections
function renderMenuSections() {
    Object.entries(menuData).forEach(([category, items]) => {
        const container = document.querySelector(`#${category} .menu-grid`) || 
                         document.querySelector(`#${category} .specials-grid`);
        
        if (!container) return;

        container.innerHTML = '';
        
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = category === 'especiais' ? 'special-card' : 'menu-card';
            
            const discountPrice = item.discount 
                ? (item.price * (1 - item.discount / 100)).toFixed(2)
                : item.price.toFixed(2);

            card.innerHTML = `
                <div class="menu-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'">
                    ${item.discount ? `
                        <div class="discount-badge">${item.discount}% OFF</div>
                    ` : ''}
                </div>
                <div class="menu-content">
                    <h3 class="menu-title">${item.name}</h3>
                    <p class="menu-description">${item.description}</p>
                    <div class="menu-price">
                        <span class="current-price">R$ ${discountPrice}</span>
                        ${item.discount ? `
                            <span class="original-price">R$ ${item.price.toFixed(2)}</span>
                        ` : ''}
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
    });
}

// Render reviews
function renderReviews() {
    const reviewsContainer = document.querySelector('.reviews-grid');
    if (!reviewsContainer) return;

    reviewsContainer.innerHTML = '';

    reviewsData.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';

        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        reviewCard.innerHTML = `
            <div class="review-header">
                <img src="${review.image}" alt="${review.name}" class="review-avatar">
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <div class="review-stars">${stars}</div>
                </div>
            </div>
            <p class="review-comment">${review.comment}</p>
        `;

        reviewsContainer.appendChild(reviewCard);
    });
}