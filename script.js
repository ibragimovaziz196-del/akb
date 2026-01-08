document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const headerContacts = document.querySelector('.header-contacts');
    
    mobileMenuBtn.addEventListener('click', function() {
        const isVisible = nav.style.display === 'flex' || nav.style.display === '';
        
        if (isVisible) {
            nav.style.display = 'none';
            headerContacts.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            headerContacts.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.backgroundColor = 'white';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            
            headerContacts.style.flexDirection = 'column';
            headerContacts.style.position = 'absolute';
            headerContacts.style.top = 'calc(100% + 200px)';
            headerContacts.style.left = '0';
            headerContacts.style.width = '100%';
            headerContacts.style.backgroundColor = 'white';
            headerContacts.style.padding = '20px';
            headerContacts.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        }
    });
    
    // Плавная прокрутка для навигации
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
                
                // Закрываем мобильное меню после клика
                if (window.innerWidth <= 768) {
                    nav.style.display = 'none';
                    headerContacts.style.display = 'none';
                }
            }
        });
    });
    
    // Обработка формы заказа
    const orderForm = document.getElementById('orderForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');
    
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // В реальном приложении здесь должен быть код для отправки данных на сервер
        // Для демонстрации просто покажем модальное окно
        
        // Сброс формы
        orderForm.reset();
        
        // Показ модального окна
        successModal.classList.add('active');
    });
    
    // Закрытие модального окна
    closeModalBtn.addEventListener('click', function() {
        successModal.classList.remove('active');
    });
    
    // Закрытие модального окна при клике вне его
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });
    
    // Изменение стиля шапки при прокрутке
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Маска для телефона
    const phone