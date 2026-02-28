     // بيانات الكواكب التسعة
        const planetsData = [
            { 
                name: 'عطارد', 
                nameEn: 'Mercury', 
                type: 'terrestrial', 
                distance: '57.9 مليون كم', 
                diameter: '4,880 كم', 
                moons: 0, 
                year: '88 يوم',
                day: '59 يوم أرضي',
                temp: '430°C نهاراً / -180°C ليلاً',
                description: 'أقرب كوكب إلى الشمس، وأصغر كواكب المجموعة [citation:4]',
                icon: 'fa-solid fa-planet-ringed'
            },
            { 
                name: 'الزهرة', 
                nameEn: 'Venus', 
                type: 'terrestrial', 
                distance: '108.2 مليون كم', 
                diameter: '12,104 كم', 
                moons: 0, 
                year: '225 يوم',
                day: '243 يوم أرضي',
                temp: '462°C (أشد كواكب المجموعة حرارة)',
                description: 'يُسمى بنجمة الصباح أو المساء، ويدور في الاتجاه المعاكس [citation:4]',
                icon: 'fa-solid fa-planet-ringed'
            },
            { 
                name: 'الأرض', 
                nameEn: 'Earth', 
                type: 'terrestrial', 
                distance: '149.6 مليون كم', 
                diameter: '12,742 كم', 
                moons: 1, 
                year: '365.25 يوم',
                day: '24 ساعة',
                temp: '15°C (متوسط)',
                description: 'الكوكب الوحيد المعروف بوجود حياة، والمغطى بالماء السائل [citation:4]',
                icon: 'fa-solid fa-earth-asia'
            },
            { 
                name: 'المريخ', 
                nameEn: 'Mars', 
                type: 'terrestrial', 
                distance: '227.9 مليون كم', 
                diameter: '6,779 كم', 
                moons: 2, 
                year: '687 يوم',
                day: '24.5 ساعة',
                temp: '-63°C (متوسط)',
                description: 'الكوكب الأحمر، يحتوي على أكبر بركان في المجموعة الشمسية [citation:4]',
                icon: 'fa-solid fa-planet-ringed'
            },
            { 
                name: 'المشتري', 
                nameEn: 'Jupiter', 
                type: 'gas-giant', 
                distance: '778.5 مليون كم', 
                diameter: '139,820 كم', 
                moons: 79, 
                year: '12 سنة أرضية',
                day: '9.9 ساعة',
                temp: '-110°C',
                description: 'أكبر كواكب المجموعة، به بقعة حمراء عملاقة (عاصفة) [citation:4]',
                icon: 'fa-regular fa-planet-ringed'
            },
            { 
                name: 'زحل', 
                nameEn: 'Saturn', 
                type: 'gas-giant', 
                distance: '1.43 مليار كم', 
                diameter: '116,460 كم', 
                moons: 82, 
                year: '29.5 سنة أرضية',
                day: '10.7 ساعة',
                temp: '-140°C',
                description: 'يتميز بحلقاته الجميلة المصنوعة من الجليد والصخور [citation:4]',
                icon: 'fa-regular fa-planet-ringed'
            },
            { 
                name: 'أورانوس', 
                nameEn: 'Uranus', 
                type: 'ice-giant', 
                distance: '2.87 مليار كم', 
                diameter: '50,724 كم', 
                moons: 27, 
                year: '84 سنة أرضية',
                day: '17.2 ساعة',
                temp: '-195°C',
                description: 'يميل على جانبه بمقدار 98 درجة، لونه أزرق-أخضر [citation:4]',
                icon: 'fa-regular fa-planet-ringed'
            },
            { 
                name: 'نبتون', 
                nameEn: 'Neptune', 
                type: 'ice-giant', 
                distance: '4.5 مليار كم', 
                diameter: '49,244 كم', 
                moons: 14, 
                year: '165 سنة أرضية',
                day: '16.1 ساعة',
                temp: '-200°C',
                description: 'أبعد كوكب في المجموعة، رياحه أسرع من الصوت [citation:4]',
                icon: 'fa-regular fa-planet-ringed'
            },
            { 
                name: 'بلوتو', 
                nameEn: 'Pluto', 
                type: 'dwarf', 
                distance: '5.9 مليار كم', 
                diameter: '2,377 كم', 
                moons: 5, 
                year: '248 سنة أرضية',
                day: '6.4 يوم أرضي',
                temp: '-229°C',
                description: 'كوكب قزم منذ 2006، له قلب على شكل فراشة [citation:7]',
                icon: 'fa-solid fa-circle'
            }
        ];

        // إنشاء بطاقة كوكب
        function createPlanetCard(planet) {
            const div = document.createElement('div');
            div.className = `planet-card ${planet.type}`;
            div.onclick = () => showPlanetDetails(planet);
            
            // تحديد الأيقونة المناسبة
            const iconClass = planet.icon || 'fa-solid fa-globe';
            
            div.innerHTML = `
                <div class="text-center">
                    <i class="${iconClass} planet-icon text-4xl mb-2" style="color: ${planet.type === 'terrestrial' ? '#ffaa66' : planet.type === 'gas-giant' ? '#ffaa00' : planet.type === 'ice-giant' ? '#66ccff' : '#cccccc'}"></i>
                    <h3 class="text-lg font-bold text-white">${planet.name}</h3>
                    <p class="text-xs text-gray-400 mb-2">${planet.nameEn}</p>
                </div>
                <div class="planet-info">
                    <div class="text-white"><span>البعد:</span> ${planet.distance}</div>
                    <div class="text-white"><span>القطر:</span> ${planet.diameter}</div>
                    <div class="text-white"><span>الأقمار:</span> ${planet.moons}</div>
                </div>
            `;
            
            return div;
        }

        // عرض الكواكب
        function displayPlanets() {
            const grid = document.getElementById('planetsGrid');
            grid.innerHTML = '';
            
            planetsData.forEach(planet => {
                const card = createPlanetCard(planet);
                grid.appendChild(card);
            });
        }

        // عرض تفاصيل الكوكب
        function showPlanetDetails(planet) {
            alert(`🔴 ${planet.name} (${planet.nameEn})
            
📏 البعد عن الشمس: ${planet.distance}
📐 القطر: ${planet.diameter}
🌙 عدد الأقمار: ${planet.moons}
⏱ السنة: ${planet.year}
🌓 اليوم: ${planet.day}
🌡 الحرارة: ${planet.temp}

📝 ${planet.description}`);
        }

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

      

        // بيانات البحث
       
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
                            alert(`البحث عن: ${result.name}`);
                            resultsDiv.classList.add('hidden');
                            searchInput.value = '';
                        };
                        resultsDiv.appendChild(div);
                    });
                } else {
                    resultsDiv.classList.remove('hidden');
                    resultsDiv.innerHTML = '<div class="p-4 text-center text-gray-400">لا توجد نتائج</div>';
                }
            });
            
            document.addEventListener('click', function(e) {
                if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
                    resultsDiv.classList.add('hidden');
                }
            });
        }
// متغيرات البحث
let searchBarVisible = false;

// فتح/إغلاق شريط البحث
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
        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            displayPlanets();
            setupGlobalSearch();
            
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        });