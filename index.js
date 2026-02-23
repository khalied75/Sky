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
            { type: 'كوكبة', name: 'الجبار', url: 'Patterns/index.html' },
            { type: 'كوكبة', name: 'الدب الأكبر', url: 'Patterns/index.html' },
            { type: 'كوكبة', name: 'ذات الكرسي', url: 'Patterns/index.html' },
            { type: 'كوكبة', name: 'العقرب', url: 'Patterns/index.html' },
            // النجوم
            { type: 'نجم', name: 'منكب الجوزاء', url: 'stars/index.html' },
            { type: 'نجم', name: 'الشعرى اليمانية', url: 'stars/index.html' },
            { type: 'نجم', name: 'رجل الجبار', url: 'stars/index.html' },
            { type: 'نجم', name: 'النسر الطائر', url: 'stars/index.htmll' },
            // المجرات
            { type: 'مجرة', name: 'درب التبانة', url: 'galaxies.html' },
            { type: 'مجرة', name: 'أندروميدا', url: 'galaxies.html' },
            // السدم
            { type: 'سديم', name: 'سديم الجبار', url: 'nebulae.html' },
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