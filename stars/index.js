       // بيانات النجوم مع ألوانها المختلفة
        const starsData = [
            // النجوم الحمراء العملاقة
            { id: 1, name: 'منكب الجوزاء', nameEn: 'Betelgeuse', type: 'red', class: 'M', temp: '3,500°C', magnitude: '0.45', distance: '640 سنة ضوئية', constellation: 'الجبار', description: 'نجم عملاق أحمر في كوكبة الجبار، يقترب من نهاية حياته.', color: 'red', luminosity: '100,000 شمس' },
            { id: 2, name: 'القلب', nameEn: 'Antares', type: 'red', class: 'M', temp: '3,400°C', magnitude: '0.96', distance: '550 سنة ضوئية', constellation: 'العقرب', description: 'قلب العقرب، نجم عملاق أحمر لامع.', color: 'red', luminosity: '65,000 شمس' },
            { id: 3, name: 'رأس الغول', nameEn: 'Algol', type: 'binary', class: 'B', temp: '12,000°C', magnitude: '2.12', distance: '93 سنة ضوئية', constellation: 'فرساوس', description: 'نجم ثنائي خافق، يخفت ويلمع كل 2.87 يوم.', color: 'blue', luminosity: '100 شمس' },
            
            // النجوم الزرقاء
            { id: 4, name: 'رجل الجبار', nameEn: 'Rigel', type: 'blue', class: 'B', temp: '12,100°C', magnitude: '0.18', distance: '860 سنة ضوئية', constellation: 'الجبار', description: 'ألمع نجم في كوكبة الجبار، عملاق أزرق.', color: 'blue', luminosity: '120,000 شمس' },
            { id: 5, name: 'النسر الواقع', nameEn: 'Vega', type: 'blue', class: 'A', temp: '9,600°C', magnitude: '0.03', distance: '25 سنة ضوئية', constellation: 'القيثارة', description: 'خامس ألمع نجم في السماء.', color: 'blue', luminosity: '40 شمس' },
            { id: 6, name: 'النسر الطائر', nameEn: 'Altair', type: 'white', class: 'A', temp: '7,700°C', magnitude: '0.77', distance: '16.7 سنة ضوئية', constellation: 'النسر', description: 'نجم أبيض سريع الدوران.', color: 'white', luminosity: '11 شمس' },
            
            // النجوم الصفراء (مثل الشمس)
            { id: 7, name: 'الشمس', nameEn: 'Sun', type: 'yellow', class: 'G', temp: '5,778°C', magnitude: '-26.74', distance: '0 سنة ضوئية', constellation: '--', description: 'نجمنا الأم، قلب المجموعة الشمسية.', color: 'yellow', luminosity: '1 شمس' },
            { id: 8, name: 'القطب الشمالي', nameEn: 'Polaris', type: 'yellow', class: 'F', temp: '6,000°C', magnitude: '1.98', distance: '433 سنة ضوئية', constellation: 'الدب الأصغر', description: 'نجم الشمال، يستخدم للملاحة.', color: 'yellow', luminosity: '2,500 شمس' },
            { id: 9, name: 'الدبران', nameEn: 'Aldebaran', type: 'orange', class: 'K', temp: '4,000°C', magnitude: '0.85', distance: '65 سنة ضوئية', constellation: 'الثور', description: 'عين الثور، عملاق برتقالي.', color: 'orange', luminosity: '425 شمس' },
            
            // النجوم البيضاء
            { id: 10, name: 'الشعرى اليمانية', nameEn: 'Sirius', type: 'white', class: 'A', temp: '9,940°C', magnitude: '-1.46', distance: '8.6 سنة ضوئية', constellation: 'الكلب الأكبر', description: 'ألمع نجم في السماء الليلية.', color: 'white', luminosity: '25 شمس' },
            { id: 11, name: 'النظام', nameEn: 'Alnilam', type: 'blue', class: 'B', temp: '27,000°C', magnitude: '1.64', distance: '1,300 سنة ضوئية', constellation: 'الجبار', description: 'النجم الأوسط في حزام الجبار.', color: 'blue', luminosity: '375,000 شمس' },
            
            // نجوم برتقالية
            { id: 12, name: 'آخر النهر', nameEn: 'Achernar', type: 'blue', class: 'B', temp: '15,000°C', magnitude: '0.46', distance: '139 سنة ضوئية', constellation: 'النهر', description: 'أسرع نجم دوراناً.', color: 'blue', luminosity: '3,000 شمس' },
            { id: 13, name: 'سهيل', nameEn: 'Canopus', type: 'white', class: 'F', temp: '7,500°C', magnitude: '-0.72', distance: '310 سنة ضوئية', constellation: 'القاعدة', description: 'ثاني ألمع نجم في السماء.', color: 'white', luminosity: '13,000 شمس' },
            
            // نجوم ثنائية
            { id: 14, name: 'رأس التوأم', nameEn: 'Castor', type: 'binary', class: 'A', temp: '10,000°C', magnitude: '1.98', distance: '51 سنة ضوئية', constellation: 'الجوزاء', description: 'نجم سداسي (6 نجوم في نظام واحد).', color: 'white', luminosity: '50 شمس' },
            { id: 15, name: 'رأس التوأم', nameEn: 'Pollux', type: 'orange', class: 'K', temp: '4,600°C', magnitude: '1.14', distance: '34 سنة ضوئية', constellation: 'الجوزاء', description: 'عملاق برتقالي.', color: 'orange', luminosity: '32 شمس' },
            
            // نجوم مشهورة أخرى
            { id: 16, name: 'الطائر', nameEn: 'Grus', type: 'blue', class: 'B', temp: '14,000°C', magnitude: '1.74', distance: '100 سنة ضوئية', constellation: 'الكركي', description: 'ألمع نجم في كوكبة الكركي.', color: 'blue', luminosity: '500 شمس' },
            { id: 17, name: 'العيوق', nameEn: 'Capella', type: 'yellow', class: 'G', temp: '5,700°C', magnitude: '0.08', distance: '42 سنة ضوئية', constellation: 'ممسك الأعنة', description: 'نجم رباعي.', color: 'yellow', luminosity: '150 شمس' },
            { id: 18, name: 'السماك الرامح', nameEn: 'Arcturus', type: 'orange', class: 'K', temp: '4,300°C', magnitude: '-0.04', distance: '36.7 سنة ضوئية', constellation: 'العواء', description: 'رابع ألمع نجم.', color: 'orange', luminosity: '170 شمس' }
        ];

        // متغيرات للتحكم
        let currentFilter = 'all';
        let visibleCount = 8;
        const increment = 8;

        // الحصول على كلاس النجم حسب لونه
        function getStarColorClass(color) {
            switch(color) {
                case 'red': return 'star-red';
                case 'blue': return 'star-blue';
                case 'yellow': return 'star-yellow';
                case 'white': return 'star-white';
                case 'orange': return 'star-orange';
                default: return 'star-white';
            }
        }

        // الحصول على توهج النجم حسب لونه
        function getStarGlow(color) {
            switch(color) {
                case 'red': return 'glow-red';
                case 'blue': return 'glow-blue';
                case 'yellow': return 'glow-yellow';
                case 'white': return 'glow-white';
                case 'orange': return 'glow-orange';
                default: return '';
            }
        }

        // إنشاء بطاقة نجم
        function createStarCard(star) {
            const div = document.createElement('div');
            const colorClass = getStarColorClass(star.color);
            const glowClass = getStarGlow(star.color);
            
            div.className = `star-card ${colorClass} cursor-pointer`;
            div.onclick = () => showStarDetails(star);
            
            div.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl md:text-2xl font-bold text-white">${star.name}</h3>
                    <div class="w-8 h-8 rounded-full ${glowClass}" style="background: radial-gradient(circle, ${star.color === 'red' ? '#ff5050' : star.color === 'blue' ? '#5090ff' : star.color === 'yellow' ? '#ffd700' : star.color === 'white' ? '#ffffff' : '#ff9500'}, transparent);"></div>
                </div>
                <p class="text-gray-400 text-sm mb-2">${star.nameEn} • ${star.constellation}</p>
                <p class="text-gray-300 text-sm mb-4 line-clamp-2">${star.description}</p>
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="bg-black/30 rounded-lg p-2">
                        <span class="text-gray-400">اللمعان</span>
                        <div class="text-yellow-400 font-bold">${star.magnitude}</div>
                    </div>
                    <div class="bg-black/30 rounded-lg p-2">
                        <span class="text-gray-400">الحرارة</span>
                        <div class="${star.color === 'red' ? 'text-red-400' : star.color === 'blue' ? 'text-blue-400' : 'text-yellow-400'} font-bold">${star.temp}</div>
                    </div>
                </div>
                <div class="mt-3 flex items-center justify-between">
                    <span class="text-xs text-gray-400">${star.distance}</span>
                    <span class="text-xs text-white px-2 py-1 rounded-full bg-${star.color}-500/20 border border-${star.color}-500/30">${star.class}</span>
                </div>
            `;
            
            return div;
        }

        // عرض النجوم
        function displayStars() {
            const grid = document.getElementById('starsGrid');
            const filtered = filterStarsData();
            
            const toShow = filtered.slice(0, visibleCount);
            
            grid.innerHTML = '';
            toShow.forEach(star => {
                const card = createStarCard(star);
                grid.appendChild(card);
            });

            // إخفاء زر "عرض المزيد" إذا انتهت النتائج
            const loadMoreBtn = document.getElementById('loadMoreContainer');
            if (visibleCount >= filtered.length) {
                loadMoreBtn.classList.add('hidden');
            } else {
                loadMoreBtn.classList.remove('hidden');
            }
        }

        // تصفية النجوم
        function filterStarsData() {
            if (currentFilter === 'all') return starsData;
            return starsData.filter(star => star.type === currentFilter);
        }

        // تغيير التصفية
        function filterStars(filter) {
            currentFilter = filter;
            visibleCount = 8;
            
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            displayStars();
        }

        // تحميل المزيد
        function loadMore() {
            visibleCount += increment;
            displayStars();
        }

        // عرض تفاصيل النجم
        function showStarDetails(star) {
            const colors = {
                red: '#ff5050',
                blue: '#5090ff',
                yellow: '#ffd700',
                white: '#ffffff',
                orange: '#ff9500'
            };
            
            alert(`⭐ ${star.name} (${star.nameEn})
            
📋 التصنيف: ${star.class}
🌡️ الحرارة: ${star.temp}
📏 البعد: ${star.distance}
💫 اللمعان: ${star.luminosity}
🔭 القدر الظاهري: ${star.magnitude}
🌌 الكوكبة: ${star.constellation}

📝 الوصف: ${star.description}`);
        }

        // البحث
        function setupStarSearch() {
            const searchInput = document.getElementById('starSearch');
            const resultsDiv = document.getElementById('starSearchResults');
            
            if (!searchInput) return;
            
            searchInput.addEventListener('input', function(e) {
                const term = e.target.value.toLowerCase().trim();
                
                if (term.length < 2) {
                    resultsDiv.classList.add('hidden');
                    return;
                }
                
                const results = starsData.filter(star => 
                    star.name.includes(term) || 
                    star.nameEn.toLowerCase().includes(term) ||
                    star.constellation.includes(term)
                );
                
                if (results.length > 0) {
                    resultsDiv.classList.remove('hidden');
                    resultsDiv.innerHTML = '';
                    
                    results.slice(0, 5).forEach(result => {
                        const div = document.createElement('div');
                        div.className = 'search-result-item p-3 hover:bg-yellow-500/10 cursor-pointer';
                        div.innerHTML = `
                            <div class="font-bold text-yellow-400">${result.name}</div>
                            <div class="text-sm text-gray-400">${result.nameEn} • ${result.constellation} • ${result.type}</div>
                        `;
                        div.onclick = () => showStarDetails(result);
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

        // دوال البحث
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

        // بيانات البحث
        const searchData = [
            // الكوكبات
            { type: 'كوكبة', name: 'الجبار', url: '../patterns/index.html' },
            { type: 'كوكبة', name: 'الدب الأكبر', url: '../patterns/index.html' },
            { type: 'كوكبة', name: 'ذات الكرسي', url: '../patterns/index.html' },
            { type: 'كوكبة', name: 'العقرب', url: '../patterns/index.html' },
            // النجوم
            { type: 'نجم', name: 'منكب الجوزاء', url: 'index.html' },
            { type: 'نجم', name: 'الشعرى اليمانية', url: 'index.html' },
            { type: 'نجم', name: 'رجل الجبار', url: 'index.html' },
            { type: 'نجم', name: 'النسر الطائر', url: 'index.htmll' },
            // المجرات
            { type: 'مجرة', name: 'درب التبانة', url: '../galaxies/index.html' },
            { type: 'مجرة', name: 'أندروميدا', url: '../galaxies/index.html' },
            // السدم
            { type: 'سديم', name: 'سديم الجبار', url: '../galaxies/index.html' },
        ];

        // البحث العام
        function setupSearch(inputId, resultsId) {
            const searchInput = document.getElementById(inputId);
            const resultsDiv = document.getElementById(resultsId);
            
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
        }

        // أرقام متحركة
        function animateNumbers() {
            document.querySelectorAll('.counter').forEach(counter => {
                const target = counter.innerText;
                if (target.includes('+')) return;
                
                const num = parseInt(target);
                if (isNaN(num)) return;
                
                let current = 0;
                const increment = num / 30;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= num) {
                        counter.innerText = target;
                        clearInterval(timer);
                    } else {
                        counter.innerText = Math.floor(current);
                    }
                }, 30);
            });
        }

        // تشغيل كل شيء عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            setupSearch('globalSearch', 'globalSearchResults');
            setupSearch('quickSearch', 'quickSearchResults');
            animateNumbers();
            
            // إغلاق القائمة عند النقر على الروابط
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
            
            // إخفاء نتائج البحث عند النقر خارجها
            document.addEventListener('click', function(e) {
                const globalSearch = document.getElementById('globalSearch');
                const globalResults = document.getElementById('globalSearchResults');
                const quickSearch = document.getElementById('quickSearch');
                const quickResults = document.getElementById('quickSearchResults');
                
                if (globalSearch && globalResults) {
                    if (!globalSearch.contains(e.target) && !globalResults.contains(e.target)) {
                        globalResults.classList.add('hidden');
                    }
                }
                
                if (quickSearch && quickResults) {
                    if (!quickSearch.contains(e.target) && !quickResults.contains(e.target)) {
                        quickResults.classList.add('hidden');
                    }
                }
            });
        });
        // البحث العام
        let searchBarVisible2 = false;

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

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            displayStars();
            setupStarSearch();
            
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        });