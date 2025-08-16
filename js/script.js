document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburguer
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });
    
    // Header scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Modal Teste Grátis
    const modal = document.getElementById('modal-teste-gratis');
    const modalTriggers = document.querySelectorAll('[href="#teste-gratis"]');
    const modalClose = document.querySelector('.modal-close');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#teste-gratis') {
                e.preventDefault();
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Fechar modal ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Validação de formulário
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = this.querySelectorAll('input[required], select[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--danger)';
                    
                    // Remove o erro após um tempo
                    setTimeout(() => {
                        input.style.borderColor = '';
                    }, 3000);
                }
            });
            
            if (isValid) {
                // Simulação de envio
                if (this.id === 'form-modal-teste') {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    alert('Obrigado pelo seu interesse! Entraremos em contato em breve para ativar seu teste gratuito.');
                } else if (this.id === 'form-teste-gratis') {
                    alert('Obrigado pelo seu interesse! Entraremos em contato em breve para ativar seu teste gratuito.');
                }
                
                this.reset();
            }
        });
    });
    
    // Animações ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.funcionalidade-card, .plano-card, .segmento-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fadeInUp');
            }
        });
    };

    // Fechar menu ao clicar em qualquer botão
const headerButtons = document.querySelectorAll('.header-buttons a');
headerButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez ao carregar a página
});