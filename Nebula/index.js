   // بيانات السدم
        const nebulaeData = [
            // السدم الإشعاعية
            { 
                id: 1, 
                name: 'سديم الجبار', 
                nameEn: 'Orion Nebula (M42)', 
                type: 'emission', 
                distance: '1,344 سنة ضوئية',
                size: '24 سنة ضوئية',
                age: '3 ملايين سنة',
                constellation: 'الجبار',
                description: 'من أشهر السدم وأكثرها سطوعاً، مشتل نجمي نشط يمكن رؤيته بالعين المجردة.',
                facts: ['يحتوي على أكثر من 1000 نجم فتي', 'عمره 3 ملايين سنة فقط', 'يمكن رؤيته كبقعة ضبابية']
            },
            { 
                id: 2, 
                name: 'سديم السرطان', 
                nameEn: 'Crab Nebula (M1)', 
                type: 'supernova', 
                distance: '6,500 سنة ضوئية',
                size: '11 سنة ضوئية',
                age: '967 سنة',
                constellation: 'الثور',
                description: 'بقايا مستعر أعظم انفجر عام 1054 ميلادي، يحتوي على نجم نيوتروني في مركزه.',
                facts: ['سجل الصينيون انفجاره عام 1054', 'يدور النجم النيوتروني 30 مرة في الثانية', 'يمتد بسرعة 1500 كم/ث']
            },
            { 
                id: 3, 
                name: 'سديم النسر', 
                nameEn: 'Eagle Nebula (M16)', 
                type: 'emission', 
                distance: '7,000 سنة ضوئية',
                size: '70 سنة ضوئية',
                age: '5.5 ملايين سنة',
                constellation: 'الحية',
                description: 'يشتهر بأعمدة الخلق، وهي أعمدة ضخمة من الغاز والغبار تولد نجوماً جديدة.',
                facts: ['صورته الشهيرة التقطها هابل', 'الأعمدة تتبخر تدريجياً', 'يولد فيها نجوم جديدة']
            },
            
            // السدم العاكسة
            { 
                id: 4, 
                name: 'سديم رأس الشيطان', 
                nameEn: 'Witch Head Nebula', 
                type: 'reflection', 
                distance: '900 سنة ضوئية',
                size: '70 سنة ضوئية',
                age: 'ملايين السنين',
                constellation: 'النهر',
                description: 'سديم عاكس يعكس ضوء النجم منكب الجوزاء، يشبه رأس الساحرة في شكله.',
                facts: ['لونه أزرق بسبب الغبار', 'يعكس ضوء منكب الجوزاء', 'يمتد لمسافة 70 سنة ضوئية']
            },
            { 
                id: 5, 
                name: 'سديم الثريا', 
                nameEn: 'Pleiades Nebula', 
                type: 'reflection', 
                distance: '440 سنة ضوئية',
                size: '20 سنة ضوئية',
                age: '100 مليون سنة',
                constellation: 'الثور',
                description: 'سديم أزرق جميل يحيط بعنقود الثريا النجمي.',
                facts: ['يظهر حول نجوم الثريا', 'لونه أزرق بسبب غبار السيليكات', 'يمر به العنقود النجمي']
            },
            
            // السدم الكوكبية
            { 
                id: 6, 
                name: 'سديم الحلقة', 
                nameEn: 'Ring Nebula (M57)', 
                type: 'planetary', 
                distance: '2,300 سنة ضوئية',
                size: '1.3 سنة ضوئية',
                age: '7,000 سنة',
                constellation: 'القيثارة',
                description: 'سديم كوكبي جميل على شكل حلقة، بقايا نجم شبيه بالشمس.',
                facts: ['شكله يشبه الدونات', 'النجم الميت في المركز', 'يتوسع باستمرار']
            },
            { 
                id: 7, 
                name: 'سديم عين القط', 
                nameEn: 'Cat\'s Eye Nebula', 
                type: 'planetary', 
                distance: '3,300 سنة ضوئية',
                size: '0.4 سنة ضوئية',
                age: '1,000 سنة',
                constellation: 'التنين',
                description: 'من أكثر السدم تعقيداً في شكله، له بنية حلقية معقدة.',
                facts: ['هيكله معقد جداً', 'النجم المركزي ينبض', 'كل حلقة انفجار قديم']
            },
            
            // السدم المظلمة
            { 
                id: 8, 
                name: 'سديم كيس الفحم', 
                nameEn: 'Coalsack Nebula', 
                type: 'dark', 
                distance: '600 سنة ضوئية',
                size: '30 سنة ضوئية',
                age: 'ملايين السنين',
                constellation: 'صليب الجنوب',
                description: 'سديم مظلم يمكن رؤيته بالعين المجردة كبقعة سوداء في درب التبانة.',
                facts: ['عرفه القدماء في نصف الكرة الجنوبي', 'يمنع رؤية النجوم خلفه', 'يحتوي على غبار كثيف']
            },
            { 
                id: 9, 
                name: 'سديم رأس الحصان', 
                nameEn: 'Horsehead Nebula', 
                type: 'dark', 
                distance: '1,500 سنة ضوئية',
                size: '3.5 سنة ضوئية',
                age: '5 ملايين سنة',
                constellation: 'الجبار',
                description: 'أشهر سديم مظلم، يشبه رأس الحصان.',
                facts: ['شكله الشهير من صور هابل', 'الخلفية الحمراء سديم إشعاعي', 'سيتبدد خلال 5 ملايين سنة']
            },
            
            // المزيد من السدم
            { 
                id: 10, 
                name: 'سديم البحيرة', 
                nameEn: 'Lagoon Nebula (M8)', 
                type: 'emission', 
                distance: '4,000 سنة ضوئية',
                size: '110 سنة ضوئية',
                age: 'ملايين السنين',
                constellation: 'الرامي',
                description: 'سديم إشعاعي ضخم يحتوي على مناطق ولادة نجمية نشطة.',
                facts: ['يمتد لـ 110 سنة ضوئية', 'يحتوي على عنقود نجمي', 'يمكن رؤيته بمنظار']
            },
            { 
                id: 11, 
                name: 'سديم أوميغا', 
                nameEn: 'Omega Nebula (M17)', 
                type: 'emission', 
                distance: '5,500 سنة ضوئية',
                size: '40 سنة ضوئية',
                age: 'مليون سنة',
                constellation: 'الرامي',
                description: 'سديم إشعاعي على شكل حرف أوميغا اليوناني.',
                facts: ['يشبه البجعة', 'من ألمع السدم', 'يولد نجوماً ضخمة']
            },
            { 
                id: 12, 
                name: 'سديم تريفيد', 
                nameEn: 'Trifid Nebula (M20)', 
                type: 'emission', 
                distance: '5,200 سنة ضوئية',
                size: '30 سنة ضوئية',
                age: 'ملايين السنين',
                constellation: 'الرامي',
                description: 'سديم ثلاثي يجمع بين الإشعاعي والعاكس والمظلم.',
                facts: ['ثلاثة أنواع في واحد', 'الخطوط المظلمة تقسمه', 'فيه نجوم حديثة الولادة']
            }
        ];

        // متغيرات للتحكم
        let currentFilter = 'all';
        let visibleCount = 6;
        const increment = 6;

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

        // الحصول على توهج السديم حسب نوعه
        function getNebulaGlow(type) {
            switch(type) {
                case 'emission': return 'glow-pink';
                case 'reflection': return 'glow-blue';
                case 'planetary': return 'glow-green';
                case 'dark': return 'glow-purple';
                case 'supernova': return 'glow-orange';
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
                'supernova': 'بقايا مستعر'
            };
            return types[type] || type;
        }

        // إنشاء بطاقة سديم
        function createNebulaCard(nebula) {
            const div = document.createElement('div');
            const typeClass = getNebulaClass(nebula.type);
            const glowClass = getNebulaGlow(nebula.type);
            
            div.className = `nebula-card ${typeClass} cursor-pointer`;
            div.onclick = () => showNebulaDetails(nebula);
            
            div.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl md:text-2xl font-bold text-white">${nebula.name}</h3>
                    <div class="w-8 h-8 rounded-full ${glowClass}" style="background: radial-gradient(circle, ${nebula.type === 'emission' ? '#ff99cc' : nebula.type === 'reflection' ? '#99ccff' : nebula.type === 'planetary' ? '#99ff99' : nebula.type === 'dark' ? '#cc99ff' : '#ffcc99'}, transparent);"></div>
                </div>
                <p class="text-gray-400 text-sm mb-2">${nebula.nameEn} • ${nebula.constellation}</p>
                <p class="text-gray-300 text-sm mb-4 line-clamp-2">${nebula.description}</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div class="bg-black/30 rounded-lg p-2">
                        <span class="text-gray-400">البعد</span>
                        <div class="text-purple-400 font-bold">${nebula.distance}</div>
                    </div>
                    <div class="bg-black/30 rounded-lg p-2">
                        <span class="text-gray-400">الحجم</span>
                        <div class="text-pink-400 font-bold">${nebula.size}</div>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-white px-2 py-1 rounded-full bg-${nebula.type}-500/20 border border-${nebula.type}-500/30">
                        ${getTypeName(nebula.type)}
                    </span>
                    <span class="text-xs text-gray-400">${nebula.age}</span>
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

            // إخفاء زر "عرض المزيد" إذا انتهت النتائج
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
            visibleCount = 6;
            
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
            
            alert(`✨ ${nebula.name} (${nebula.nameEn})
            
📋 النوع: ${getTypeName(nebula.type)}
📏 البعد: ${nebula.distance}
📐 الحجم: ${nebula.size}
⏰ العمر: ${nebula.age}
🌌 الكوكبة: ${nebula.constellation}

📝 الوصف: ${nebula.description}

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
                
                if (term.length < 2) {
                    resultsDiv.classList.add('hidden');
                    return;
                }
                
                const results = nebulaeData.filter(nebula => 
                    nebula.name.includes(term) || 
                    nebula.nameEn.toLowerCase().includes(term) ||
                    nebula.constellation.includes(term)
                );
                
                if (results.length > 0) {
                    resultsDiv.classList.remove('hidden');
                    resultsDiv.innerHTML = '';
                    
                    results.slice(0, 5).forEach(result => {
                        const div = document.createElement('div');
                        div.className = 'search-result-item p-3 hover:bg-purple-500/10 cursor-pointer';
                        div.innerHTML = `
                            <div class="font-bold text-purple-400">${result.name}</div>
                            <div class="text-sm text-gray-400">${result.nameEn} • ${result.constellation}</div>
                        `;
                        div.onclick = () => showNebulaDetails(result);
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
                document.getElementById('globalSearchResults')?.classList.add('hidden');
            }
        }

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            displayNebulae();
            setupNebulaSearch();
            
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        });
    