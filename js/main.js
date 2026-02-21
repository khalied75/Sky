// js/main.js

// دوال القائمة الجانبية
function openMobileMenu() {
    document.getElementById('mobileMenu').classList.add('open');
    let overlay = document.getElementById('menuOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        overlay.id = 'menuOverlay';
        overlay.onclick = closeMobileMenu;
        document.body.appendChild(overlay);
    }
    setTimeout(() => overlay.classList.add('open'), 10);
    document.body.classList.add('menu-open');
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
    const overlay = document.getElementById('menuOverlay');
    if (overlay) {
        overlay.classList.remove('open');
        setTimeout(() => overlay.remove(), 300);
    }
    document.body.classList.remove('menu-open');
}

// تفعيل الرابط النشط
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // روابط الديسكتوب
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-yellow-400', 'bg-yellow-500/20');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-yellow-400', 'bg-yellow-500/20');
        }
    });
    
    // روابط الموبايل
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.classList.remove('bg-yellow-500/20');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('bg-yellow-500/20');
        }
    });
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    setActiveLink();
    
    // إغلاق القائمة عند النقر على الروابط
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});