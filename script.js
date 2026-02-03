// Копирование IP адреса в буфер обмена
function copyIP() {
    const ip = '87.103.198.62:27015';
    
    // Создаем временный элемент для копирования
    const tempInput = document.createElement('input');
    tempInput.value = ip;
    document.body.appendChild(tempInput);
    
    // Копируем текст
    tempInput.select();
    document.execCommand('copy');
    
    // Удаляем временный элемент
    document.body.removeChild(tempInput);
    
    // Показываем уведомление
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ IP скопирован!';
    btn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}

// Плавная прокрутка при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем анимацию при загрузке
    const elements = document.querySelectorAll('.feature-card, .info-item, .rules-list li');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 50);
    });
});

// Обработка скролла для эффектов
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(255, 107, 53, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

