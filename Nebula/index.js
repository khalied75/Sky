 // بيانات السدم
        const nebulaeData = [
            { 
                id: 1, 
                name: 'سديم الجبار', 
                nameEn: 'Orion Nebula', 
                type: 'emission', 
                distance: '1,344 سنة ضوئية',
                size: '24 سنة ضوئية',
                constellation: 'الجبار',
                description: 'من أشهر السدم وأكثرها سطوعاً، مشتل نجمي نشط يمكن رؤيته بالعين المجردة.',
                facts: ['يحتوي على أكثر من 1000 نجم فتي', 'عمره 3 ملايين سنة فقط']
            },
            { 
                id: 2, 
                name: 'سديم السرطان', 
                nameEn: 'Crab Nebula', 
                type: 'supernova', 
                distance: '6,500 سنة ضوئية',
                size: '11 سنة ضوئية',
                constellation: 'الثور',
                description: 'بقايا مستعر أعظم انفجر عام 1054 ميلادي.',
                facts: ['سجل الصينيون انفجاره عام 1054', 'يدور النجم النيوتروني 30 مرة في الثانية']
            },
            { 
                id: 3, 
                name: 'سديم النسر', 
                nameEn: 'Eagle Nebula', 
                type: 'emission', 
                distance: '7,000 سنة ضوئية',
                size: '70 سنة ضوئية',
                constellation: 'الحية',
                description: 'يشتهر بأعمدة الخلق، وهي أعمدة ضخمة من الغاز والغبار.',
                facts: ['صورته الشهيرة التقطها هابل', 'يولد فيها نجوم جديدة']
            },
            { 
                id: 4, 
                name: 'سديم رأس الشيطان', 
                nameEn: 'Witch Head', 
                type: 'reflection', 
                distance: '900 سنة ضوئية',
                size: '70 سنة ضوئية',
                constellation: 'النهر',
                description: 'سديم عاكس يعكس ضوء النجم منكب الجوزاء.',
                facts: ['لونه أزرق بسبب الغبار', 'يعكس ضوء منكب الجوزاء']
            },
            { 
                id: 5, 
                name: 'سديم الحلقة', 
                nameEn: 'Ring Nebula', 
                type: 'planetary', 
                distance: '2,300 سنة ضوئية',
                size: '1.3 سنة ضوئية',
                constellation: 'القيثارة',
                description: 'سديم كوكبي جميل على شكل حلقة، بقايا نجم شبيه بالشمس.',
                facts: ['شكله يشبه الدونات', 'النجم الميت في المركز']
            },
            { 
                id: 6, 
                name: 'سديم عين القط', 
                nameEn: 'Cat\'s Eye', 
                type: 'planetary', 
                distance: '3,300 سنة ضوئية',
                size: '0.4 سنة ضوئية',
                constellation: 'التنين',
                description: 'من أكثر السدم تعقيداً في شكله.',
                facts: ['هيكله معقد جداً', 'النجم المركزي ينبض']
            },
            { 
                id: 7, 
                name: 'سديم كيس الفحم', 
                nameEn: 'Coalsack', 
                type: 'dark', 
                distance: '600 سنة ضوئية',
                size: '30 سنة ضوئية',
                constellation: 'صليب الجنوب',
                description: 'سديم مظلم يمكن رؤيته بالعين المجردة.',
                facts: ['عرفه القدماء', 'يمنع رؤية النجوم خلفه']
            },
            { 
                id: 8, 
                name: 'سديم رأس الحصان', 
                nameEn: 'Horsehead', 
                type: 'dark', 
                distance: '1,500 سنة ضوئية',
                size: '3.5 سنة ضوئية',
                constellation: 'الجبار',
                description: 'أشهر سديم مظلم، يشبه رأس الحصان.',
                facts: ['شكله الشهير من صور هابل', 'الخلفية الحمراء سديم إشعاعي']
            }
        ];

        // متغيرات للتحكم
        let currentFilter = 'all';
        let visibleCount = 4;
        const increment = 4;

        // الحصول على كلاس السديم حسب نوعه
        function getNebulaClass(type) {
            switch(type) {
                case 'emission': return 'nebula-emission';
                case 'reflection': return 'nebula-reflection';
                case 'planetary': return 'nebula-planetary';
                case 'dark': return 'nebula-dark';
                case 'supernova': return 'nebula-supernova';
                default: return '';
            }
        }

        // الحصول على اسم النوع بالعربية
        function getTypeName(type) {
            const types = {
                'emission': 'إشعاعي',
                'reflection': 'عاكس',
                'planetary': 'كوكبي',
                'dark': 'مظلم',
                'supernova': 'مستعر'
            };
            return types[type] || type;
        }

        // إنشاء بطاقة سديم
        function createNebulaCard(nebula) {
            const div = document.createElement('div');
            const typeClass = getNebulaClass(nebula.type);
            
            div.className = `nebula-card ${typeClass} cursor-pointer`;
            div.onclick = () => showNebulaDetails(nebula);
            
            div.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-white">${nebula.name}</h3>
                    <span class="text-xs text-white px-2 py-1 rounded-full bg-black/40 border border-yellow-500/30">
                        ${getTypeName(nebula.type)}
                    </span>
                </div>
                <p class="text-gray-300 text-sm mb-3">${nebula.description}</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div class="bg-black/30 rounded-lg p-2">
                        <span class="text-gray-400">البعد</span>
                        <div class="text-yellow-400 font-bold">${nebula.distance}</div>
                    </div>
                    <div class="bg-black/30 rounded-lg p-2">
                        <span class="text-gray-400">الحجم</span>
                        <div class="text-yellow-400 font-bold">${nebula.size}</div>
                    </div>
                </div>
                <div class="text-xs text-gray-400">
                    <i class="fas fa-map-marker-alt ml-1 text-yellow-400"></i> ${nebula.constellation}
                </div>
            `;
            
            return div;
        }

        // عرض السدم
        function displayNebulae() {
            const grid = document.getElementById('nebulaeGrid');
            const filtered = filterNebulaeData();
            
            const toShow = filtered.slice(0, visibleCount);
            
            grid.innerHTML = '';
            toShow.forEach(nebula => {
                const card = createNebulaCard(nebula);
                grid.appendChild(card);
            });

            const loadMoreBtn = document.getElementById('loadMoreContainer');
            if (visibleCount >= filtered.length) {
                loadMoreBtn.classList.add('hidden');
            } else {
                loadMoreBtn.classList.remove('hidden');
            }
        }

        // تصفية السدم
        function filterNebulaeData() {
            if (currentFilter === 'all') return nebulaeData;
            return nebulaeData.filter(nebula => nebula.type === currentFilter);
        }

        // تغيير التصفية
        function filterNebulae(filter) {
            currentFilter = filter;
            visibleCount = 4;
            
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            displayNebulae();
        }

        // تحميل المزيد
        function loadMore() {
            visibleCount += increment;
            displayNebulae();
        }

        // عرض تفاصيل السديم
        function showNebulaDetails(nebula) {
            const factsList = nebula.facts.map(fact => `• ${fact}`).join('\n');
            
            alert(`✨ ${nebula.name}
            
📋 النوع: ${getTypeName(nebula.type)}
📏 البعد: ${nebula.distance}
📐 الحجم: ${nebula.size}
🌌 الكوكبة: ${nebula.constellation}

📝 ${nebula.description}

🔍 حقائق:
${factsList}`);
        }

        // البحث
        function setupNebulaSearch() {
            const searchInput = document.getElementById('nebulaSearch');
            const resultsDiv = document.getElementById('nebulaSearchResults');
            
            if (!searchInput) return;
            
            searchInput.addEventListener('input', function(e) {
                const term = e.target.value.toLowerCase().trim();
                
                if (term.length < 1) {
                    resultsDiv.classList.add('hidden');
                    return;
                }
                
                const results = nebulaeData.filter(nebula => 
                    nebula.name.includes(term) || 
                    nebula.nameEn.toLowerCase().includes(term)
                );
                
                if (results.length > 0) {
                    resultsDiv.classList.remove('hidden');
                    resultsDiv.innerHTML = '';
                    
                    results.slice(0, 3).forEach(result => {
                        const div = document.createElement('div');
                        div.className = 'search-result-item';
                        div.innerHTML = `
                            <div class="font-bold text-sm text-yellow-400">${result.name}</div>
                            <div class="text-xs text-gray-400">${result.nameEn}</div>
                        `;
                        div.onclick = () => {
                            showNebulaDetails(result);
                            resultsDiv.classList.add('hidden');
                            searchInput.value = '';
                        };
                        resultsDiv.appendChild(div);
                    });
                } else {
                    resultsDiv.classList.remove('hidden');
                    resultsDiv.innerHTML = '<div class="p-3 text-center text-gray-400 text-sm">لا توجد نتائج</div>';
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

        // البحث العام
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
            }
        }

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            displayNebulae();
            setupNebulaSearch();
            
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
            
            document.addEventListener('click', function(e) {
                const searchInput = document.getElementById('nebulaSearch');
                const resultsDiv = document.getElementById('nebulaSearchResults');
                if (searchInput && resultsDiv && !searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
                    resultsDiv.classList.add('hidden');
                }
            });
        });