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

        // البحث
        let searchBarVisible = false;

        function toggleSearch() {
            const searchBar = document.getElementById('searchBar');
            searchBarVisible = !searchBarVisible;
            
            if (searchBarVisible) {
                searchBar.classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('globalSearch')?.focus();
                }, 100);
            } else {
                searchBar.classList.add('hidden');
                document.getElementById('globalSearchResults')?.classList.add('hidden');
            }
        }
// متغيرات البحث
let searchBarVisible2 = false;

// فتح/إغلاق شريط البحث
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBarVisible2 = !searchBarVisible2;
    
    if (searchBarVisible2) {
        searchBar.classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('globalSearch')?.focus();
        }, 100);
    } else {
        searchBar.classList.add('hidden');
        document.getElementById('globalSearchResults')?.classList.add('hidden');
    }
}

// بيانات البحث الموحدة لجميع الصفحات
const searchData = [
    // الكوكبات
    { type: 'كوكبة', name: 'الجبار', url: '../patterns/index.html' },
    { type: 'كوكبة', name: 'الدب الأكبر', url: '../patterns/index.html' },
    { type: 'كوكبة', name: 'ذات الكرسي', url: '../patterns/index.html' },
    { type: 'كوكبة', name: 'العقرب', url: '../patterns/index.html' },
    { type: 'كوكبة', name: 'الجوزاء', url: '../patterns/index.html' },
    { type: 'كوكبة', name: 'الثور', url: '../patterns/index.html' },
    { type: 'كوكبة', name: 'الأسد', url: '../patterns/index.html' },
    { type: 'كوكبة', name: 'العذراء', url: '../patterns/index.html' },
    
    // النجوم
    { type: 'نجم', name: 'منكب الجوزاء', url: '../stars/index.html' },
    { type: 'نجم', name: 'الشعرى اليمانية', url: '../stars/index.html' },
    { type: 'نجم', name: 'رجل الجبار', url: '../stars/index.html' },
    { type: 'نجم', name: 'النسر الطائر', url: '../stars/index.html' },
    { type: 'نجم', name: 'القلب', url: '../stars/index.html' },
    { type: 'نجم', name: 'الدبران', url: '../stars/index.html' },
    { type: 'نجم', name: 'سهيل', url: '../stars/index.html' },
    { type: 'نجم', name: 'النسر الواقع', url: '../stars/index.html' },
    
    // السدم
    { type: 'سديم', name: 'سديم الجبار', url: '../Nebula/index.html' },
    { type: 'سديم', name: 'سديم السرطان', url: '../Nebula/index.html' },
    { type: 'سديم', name: 'سديم النسر', url: '../Nebula/index.html' },
    { type: 'سديم', name: 'سديم الحلقة', url: '../Nebula/index.html' },
    { type: 'سديم', name: 'سديم رأس الحصان', url: '../Nebula/index.html' },
    
    // المجرات
    { type: 'مجرة', name: 'درب التبانة', url: '../galaxies/index.html' },
    { type: 'مجرة', name: 'أندروميدا', url: '../galaxies/index.html' },
    { type: 'مجرة', name: 'المثلث', url: '../galaxies/index.html' },
    { type: 'مجرة', name: 'الدوامة', url: '../galaxies/index.html' },
    { type: 'مجرة', name: 'السومبريرو', url: '../galaxies/index.html' },
    { type: 'مجرة', name: 'ميسييه 87', url: '../galaxies/index.html' },
];
// إعداد البحث
function setupGlobalSearch() {
    const searchInput = document.getElementById('globalSearch');
    const resultsDiv = document.getElementById('globalSearchResults');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const term = e.target.value.toLowerCase().trim();
        
        if (term.length < 2) {
            resultsDiv.classList.add('hidden');
            return;
        }
        
        const results = searchData.filter(item => 
            item.name.includes(term)
        );
        
        if (results.length > 0) {
            resultsDiv.classList.remove('hidden');
            resultsDiv.innerHTML = '';
            
            results.slice(0, 5).forEach(result => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-xs text-yellow-400">${result.type}</span>
                        <span class="font-bold text-white">${result.name}</span>
                    </div>
                `;
                div.onclick = () => {
                    window.location.href = result.url;
                };
                resultsDiv.appendChild(div);
            });
        } else {
            resultsDiv.classList.remove('hidden');
            resultsDiv.innerHTML = '<div class="p-4 text-center text-gray-400">لا توجد نتائج</div>';
        }
    });
    
    // إخفاء النتائج عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
            resultsDiv.classList.add('hidden');
        }
    });
}

// تشغيل البحث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    setupGlobalSearch();
});
        // تشغيل البحث عند التحميل
        document.addEventListener('DOMContentLoaded', function() {
            setupGlobalSearch();
            
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        });