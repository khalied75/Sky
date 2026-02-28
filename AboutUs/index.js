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

        // بيانات البحث
        const searchData = [
            { type: 'مطور', name: 'خالد الزعبي', url: '#' },
            { type: 'حساب', name: 'ka.lide579', url: '#' },
            { type: 'حساب', name: 'khalied75', url: '#' },
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

        // تشغيل البحث عند التحميل
        document.addEventListener('DOMContentLoaded', function() {
            setupGlobalSearch();
            
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        });