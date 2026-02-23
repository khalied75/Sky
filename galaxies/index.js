      // 30 مجرة متنوعة
        const galaxiesData = [
            // المجرات الحلزونية
            { id: 1, name: 'درب التبانة', nameEn: 'Milky Way', type: 'barred', distance: '0 سنة ضوئية', size: '100,000 سنة ضوئية', constellation: 'الرامي', stars: '200 مليار', description: 'مجرة الوطن، مجرة حلزونية ضلعية تحتوي على نظامنا الشمسي.', facts: ['عمرها 13.6 مليار سنة', 'قطرها 100 ألف سنة ضوئية'] },
            { id: 2, name: 'أندروميدا', nameEn: 'Andromeda (M31)', type: 'spiral', distance: '2.5 مليون سنة ضوئية', size: '220,000 سنة ضوئية', constellation: 'المرأة المسلسلة', stars: '1 تريليون', description: 'أقرب مجرة كبرى لدرب التبانة، في طريقها للاصطدام بنا.', facts: ['أكبر مجرة في المجموعة المحلية', 'تتجه نحونا بسرعة 110 كم/ث'] },
            { id: 3, name: 'المثلث', nameEn: 'Triangulum (M33)', type: 'spiral', distance: '3 مليون سنة ضوئية', size: '60,000 سنة ضوئية', constellation: 'المثلث', stars: '40 مليار', description: 'ثالث أكبر مجرة في المجموعة المحلية.', facts: ['تابعة لأندروميدا', 'يمكن رؤيتها بمنظار'] },
            { id: 4, name: 'الدوامة', nameEn: 'Whirlpool (M51)', type: 'spiral', distance: '23 مليون سنة ضوئية', size: '60,000 سنة ضوئية', constellation: 'الكلاب الصيد', stars: '100 مليار', description: 'مجرة حلزونية جميلة تتفاعل مع مجرة قزمة.', facts: ['أول مجرة اكتشف فيها التركيب الحلزوني', 'لها مجرة تابعة'] },
            { id: 5, name: 'السومبريرو', nameEn: 'Sombrero (M104)', type: 'spiral', distance: '29 مليون سنة ضوئية', size: '50,000 سنة ضوئية', constellation: 'العذراء', stars: '100 مليار', description: 'مجرة حلزونية تشبه القبعة المكسيكية.', facts: ['لها نواة ساطعة جداً', 'تحتوي على ثقب أسود هائل'] },
            
            // المجرات الحلزونية الضلعية
            { id: 6, name: 'إن جي سي 1300', nameEn: 'NGC 1300', type: 'barred', distance: '61 مليون سنة ضوئية', size: '110,000 سنة ضوئية', constellation: 'النهر', stars: '100 مليار', description: 'مثال رائع للمجرات الحلزونية الضلعية.', facts: ['قضيبها المركزي واضح جداً', 'لها أذرع حلزونية جميلة'] },
            { id: 7, name: 'إن جي سي 1672', nameEn: 'NGC 1672', type: 'barred', distance: '60 مليون سنة ضوئية', size: '75,000 سنة ضوئية', constellation: 'الدورادو', stars: '80 مليار', description: 'مجرة حلزونية ضلعية مع مناطق ولادة نجمية نشطة.', facts: ['تولد نجوماً بمعدل عالي', 'نواتها شديدة السطوع'] },
            { id: 8, name: 'إن جي سي 1365', nameEn: 'NGC 1365', type: 'barred', distance: '56 مليون سنة ضوئية', size: '200,000 سنة ضوئية', constellation: 'النهر', stars: '150 مليار', description: 'مجرة حلزونية ضلعية عملاقة.', facts: ['من أكبر المجرات المعروفة', 'ثقب أسود هائل في مركزها'] },
            
            // المجرات الإهليلجية
            { id: 9, name: 'ميسييه 87', nameEn: 'M87', type: 'elliptical', distance: '53 مليون سنة ضوئية', size: '120,000 سنة ضوئية', constellation: 'العذراء', stars: '1 تريليون', description: 'مجرة إهليلجية عملاقة، أول ثقب أسود تم تصويره.', facts: ['ثقب أسود كتلته 6.5 مليار شمس', 'لها نفاثة من البلازما'] },
            { id: 10, name: 'ميسييه 49', nameEn: 'M49', type: 'elliptical', distance: '56 مليون سنة ضوئية', size: '160,000 سنة ضوئية', constellation: 'العذراء', stars: '200 مليار', description: 'أول مجرة في عنقود العذراء.', facts: ['أول مجرة إهليلجية تكتشف', 'تحتوي على آلاف العناقيد الكروية'] },
            { id: 11, name: 'ميسييه 60', nameEn: 'M60', type: 'elliptical', distance: '55 مليون سنة ضوئية', size: '120,000 سنة ضوئية', constellation: 'العذراء', stars: '400 مليار', description: 'مجرة إهليلجية ضخمة.', facts: ['تتفاعل مع مجرة أصغر', 'فيها ثقب أسود هائل'] },
            { id: 12, name: 'ميسييه 84', nameEn: 'M84', type: 'elliptical', distance: '60 مليون سنة ضوئية', size: '90,000 سنة ضوئية', constellation: 'العذراء', stars: '200 مليار', description: 'مجرة إهليلجية في عنقود العذراء.', facts: ['لها نفاثتان من الغاز', 'تقع في سلسلة ماركاريان'] },
            
            // المجرات العدسية
            { id: 13, name: 'ميسييه 85', nameEn: 'M85', type: 'lenticular', distance: '60 مليون سنة ضوئية', size: '125,000 سنة ضوئية', constellation: 'الهلبة', stars: '100 مليار', description: 'مجرة عدسية في عنقود العذراء.', facts: ['بين الحلزونية والإهليلجية', 'لها شكل قرصي بدون أذرع'] },
            { id: 14, name: 'ميسييه 86', nameEn: 'M86', type: 'lenticular', distance: '52 مليون سنة ضوئية', size: '100,000 سنة ضوئية', constellation: 'العذراء', stars: '100 مليار', description: 'مجرة عدسية تتجه نحو درب التبانة.', facts: ['تتحرك بسرعة 1440 كم/ث', 'لها ذيل غازي طويل'] },
            { id: 15, name: 'إن جي سي 2787', nameEn: 'NGC 2787', type: 'lenticular', distance: '24 مليون سنة ضوئية', size: '40,000 سنة ضوئية', constellation: 'الدب الأكبر', stars: '50 مليار', description: 'مجرة عدسية مع شريط.', facts: ['لها نواة نشطة', 'تدور بسرعة عالية'] },
            
            // المجرات غير المنتظمة
            { id: 16, name: 'سحابة ماجلان الكبرى', nameEn: 'LMC', type: 'irregular', distance: '160,000 سنة ضوئية', size: '14,000 سنة ضوئية', constellation: 'أبو سيف', stars: '30 مليار', description: 'مجرة قمرية تابعة لدرب التبانة.', facts: ['مرئية بالعين المجردة', 'فيها سديم الرتيلاء'] },
            { id: 17, name: 'سحابة ماجلان الصغرى', nameEn: 'SMC', type: 'irregular', distance: '200,000 سنة ضوئية', size: '7,000 سنة ضوئية', constellation: 'الطوقان', stars: '3 مليار', description: 'مجرة قزمة تابعة لدرب التبانة.', facts: ['ترتبط بسديم ماجلان', 'فيها آلاف النجوم الفتية'] },
            { id: 18, name: 'إن جي سي 6822', nameEn: 'NGC 6822', type: 'irregular', distance: '1.6 مليون سنة ضوئية', size: '7,000 سنة ضوئية', constellation: 'الرامي', stars: '10 مليار', description: 'مجرة غير منتظمة قريبة.', facts: ['اكتشفها هابل', 'فيها سدم إشعاعية كثيرة'] },
            { id: 19, name: 'IC 10', nameEn: 'IC 10', type: 'irregular', distance: '2.2 مليون سنة ضوئية', size: '5,000 سنة ضوئية', constellation: 'ذات الكرسي', stars: '1 مليار', description: 'مجرة غير منتظمة في المجموعة المحلية.', facts: ['تولد نجوماً بمعدل عالي', 'قريبة من مستوى المجرة'] },
            
            // المجرات القزمة
            { id: 20, name: 'القزمة البيضاوية للرامي', nameEn: 'SagDEG', type: 'dwarf', distance: '70,000 سنة ضوئية', size: '10,000 سنة ضوئية', constellation: 'الرامي', stars: '1 مليار', description: 'مجرة قزمة تبتلعها درب التبانة.', facts: ['أقرب مجرة لدرب التبانة', 'تتفكك بفعل الجاذبية'] },
            { id: 21, name: 'قزمة الدب الأكبر', nameEn: 'UMa I', type: 'dwarf', distance: '330,000 سنة ضوئية', size: '2,000 سنة ضوئية', constellation: 'الدب الأكبر', stars: '140,000', description: 'مجرة قزمة خافتة جداً.', facts: ['من أقدم المجرات', 'قليلة المعادن'] },
            { id: 22, name: 'قزمة الأسد', nameEn: 'Leo I', type: 'dwarf', distance: '820,000 سنة ضوئية', size: '3,000 سنة ضوئية', constellation: 'الأسد', stars: '1 مليون', description: 'مجرة قزمة تابعة لدرب التبانة.', facts: ['قريبة من نجم Regulus', 'تشكل نجوماً حديثاً'] },
            { id: 23, name: 'قزمة الأسد II', nameEn: 'Leo II', type: 'dwarf', distance: '670,000 سنة ضوئية', size: '3,000 سنة ضوئية', constellation: 'الأسد', stars: '1 مليون', description: 'مجرة قزمة كروية.', facts: ['قديمة جداً', 'لا تشكل نجوماً جديدة'] },
            { id: 24, name: 'قزمة النهر', nameEn: 'Fornax', type: 'dwarf', distance: '460,000 سنة ضوئية', size: '6,000 سنة ضوئية', constellation: 'النهر', stars: '6 مليون', description: 'مجرة قزمة غنية بالعناقيد الكروية.', facts: ['فيها 6 عناقيد كروية', 'من أكبر المجرات القزمة'] },
            
            // المزيد من المجرات
            { id: 25, name: 'السيجار', nameEn: 'Cigar (M82)', type: 'irregular', distance: '12 مليون سنة ضوئية', size: '40,000 سنة ضوئية', constellation: 'الدب الأكبر', stars: '50 مليار', description: 'مجرة انفجار نجمي.', facts: ['تولد نجوماً بسرعة', 'نتيجة تفاعل مع M81'] },
            { id: 26, name: 'بودي', nameEn: 'Bode (M81)', type: 'spiral', distance: '12 مليون سنة ضوئية', size: '90,000 سنة ضوئية', constellation: 'الدب الأكبر', stars: '200 مليار', description: 'مجرة حلزونية جميلة.', facts: ['واحدة من ألمع المجرات', 'تتفاعل مع M82'] },
            { id: 27, name: 'الدولاب', nameEn: 'Pinwheel (M101)', type: 'spiral', distance: '21 مليون سنة ضوئية', size: '170,000 سنة ضوئية', constellation: 'الدب الأكبر', stars: '100 مليار', description: 'مجرة حلزونية عملاقة.', facts: ['وجهها مقابل للأرض', 'فيها 3 مستعرات عظمى'] },
            { id: 28, name: 'إن جي سي 891', nameEn: 'NGC 891', type: 'spiral', distance: '30 مليون سنة ضوئية', size: '100,000 سنة ضوئية', constellation: 'المرأة المسلسلة', stars: '100 مليار', description: 'مجرة حلزونية نراها بحافتها.', facts: ['تشبه درب التبانة', 'لها غبار داكن في المنتصف'] },
            { id: 29, name: 'سنفروبل', nameEn: 'Sunflower (M63)', type: 'spiral', distance: '37 مليون سنة ضوئية', size: '80,000 سنة ضوئية', constellation: 'الكلاب الصيد', stars: '100 مليار', description: 'مجرة حلزونية جميلة.', facts: ['أذرعها كثيرة', 'جزء من مجموعة M51'] },
            { id: 30, name: 'العين السوداء', nameEn: 'Black Eye (M64)', type: 'spiral', distance: '17 مليون سنة ضوئية', size: '50,000 سنة ضوئية', constellation: 'الهلبة', stars: '100 مليار', description: 'مجرة ذات بقعة غبار داكنة.', facts: ['لها حزام غبار داكن', 'تدور بشكل غريب'] },
        ];

        // متغيرات للتحكم
        let currentFilter = 'all';
        let visibleCount = 6;
        const increment = 6;

        // الحصول على كلاس المجرة حسب نوعها
        function getGalaxyClass(type) {
            switch(type) {
                case 'elliptical': return 'galaxy-elliptical';
                case 'spiral': return 'galaxy-spiral';
                case 'barred': return 'galaxy-barred';
                case 'lenticular': return 'galaxy-lenticular';
                case 'irregular': return 'galaxy-irregular';
                case 'dwarf': return 'galaxy-dwarf';
                default: return '';
            }
        }

        // الحصول على اسم النوع بالعربية
        function getTypeName(type) {
            const types = {
                'elliptical': 'إهليلجية',
                'spiral': 'حلزونية',
                'barred': 'حلزونية ضلعية',
                'lenticular': 'عدسية',
                'irregular': 'غير منتظمة',
                'dwarf': 'قزمة'
            };
            return types[type] || type;
        }

        // إنشاء بطاقة مجرة
        function createGalaxyCard(galaxy) {
            const div = document.createElement('div');
            const typeClass = getGalaxyClass(galaxy.type);
            
            div.className = `galaxy-card ${typeClass} cursor-pointer`;
            div.onclick = () => showGalaxyDetails(galaxy);
            
            div.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-white">${galaxy.name}</h3>
                    <span class="text-xs px-2 py-1 rounded-full bg-black/40 border border-yellow-500/30">
                        ${getTypeName(galaxy.type)}
                    </span>
                </div>
                <p class="text-gray-300 text-sm mb-3">${galaxy.description}</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div class="bg-black/30 rounded-lg p-2">
                        <span class="text-gray-400">البعد</span>
                        <div class="text-yellow-400 font-bold">${galaxy.distance}</div>
                    </div>
                    <div class="bg-black/30 rounded-lg p-2">
                        <span class="text-gray-400">النجوم</span>
                        <div class="text-yellow-400 font-bold">${galaxy.stars}</div>
                    </div>
                </div>
                <div class="text-xs text-gray-400">
                    <i class="fas fa-map-marker-alt ml-1 text-yellow-400"></i> ${galaxy.constellation}
                </div>
            `;
            
            return div;
        }

        // عرض المجرات
        function displayGalaxies() {
            const grid = document.getElementById('galaxiesGrid');
            const filtered = filterGalaxiesData();
            
            const toShow = filtered.slice(0, visibleCount);
            
            grid.innerHTML = '';
            toShow.forEach(galaxy => {
                const card = createGalaxyCard(galaxy);
                grid.appendChild(card);
            });

            const loadMoreBtn = document.getElementById('loadMoreContainer');
            if (visibleCount >= filtered.length) {
                loadMoreBtn.classList.add('hidden');
            } else {
                loadMoreBtn.classList.remove('hidden');
            }
        }

        // تصفية المجرات
        function filterGalaxiesData() {
            if (currentFilter === 'all') return galaxiesData;
            return galaxiesData.filter(galaxy => galaxy.type === currentFilter);
        }

        // تغيير التصفية
        function filterGalaxies(filter) {
            currentFilter = filter;
            visibleCount = 6;
            
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            displayGalaxies();
        }

        // تحميل المزيد
        function loadMore() {
            visibleCount += increment;
            displayGalaxies();
        }

        // عرض تفاصيل المجرة
        function showGalaxyDetails(galaxy) {
            const factsList = galaxy.facts.map(fact => `• ${fact}`).join('\n');
            
            alert(`✨ ${galaxy.name} (${galaxy.nameEn})
            
📋 النوع: ${getTypeName(galaxy.type)}
📏 البعد: ${galaxy.distance}
📐 الحجم: ${galaxy.size}
⭐ عدد النجوم: ${galaxy.stars}
🌌 الكوكبة: ${galaxy.constellation}

📝 ${galaxy.description}

🔍 حقائق:
${factsList}`);
        }

        // البحث
        function setupGalaxySearch() {
            const searchInput = document.getElementById('galaxySearch');
            const resultsDiv = document.getElementById('galaxySearchResults');
            
            if (!searchInput) return;
            
            searchInput.addEventListener('input', function(e) {
                const term = e.target.value.toLowerCase().trim();
                
                if (term.length < 1) {
                    resultsDiv.classList.add('hidden');
                    return;
                }
                
                const results = galaxiesData.filter(galaxy => 
                    galaxy.name.includes(term) || 
                    galaxy.nameEn.toLowerCase().includes(term) ||
                    galaxy.constellation.includes(term)
                );
                
                if (results.length > 0) {
                    resultsDiv.classList.remove('hidden');
                    resultsDiv.innerHTML = '';
                    
                    results.slice(0, 3).forEach(result => {
                        const div = document.createElement('div');
                        div.className = 'search-result-item';
                        div.innerHTML = `
                            <div class="font-bold text-sm text-yellow-400">${result.name}</div>
                            <div class="text-xs text-gray-400">${result.nameEn} • ${getTypeName(result.type)}</div>
                        `;
                        div.onclick = () => {
                            showGalaxyDetails(result);
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
            displayGalaxies();
            setupGalaxySearch();
            
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
            
            document.addEventListener('click', function(e) {
                const searchInput = document.getElementById('galaxySearch');
                const resultsDiv = document.getElementById('galaxySearchResults');
                if (searchInput && resultsDiv && !searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
                    resultsDiv.classList.add('hidden');
                }
            });
        });