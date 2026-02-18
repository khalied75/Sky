 // بيانات الكوكبات
        const constellationsData = [
            { 
                name: "الجبار", 
                nameEn: "Orion",
                category: "famous",
                region: "northern",
                stars: 7,
                description: "من أشهر الأبراج في السماء، يتميز بثلاثة نجوم متوسطة تشكل حزام الجبار. يضم نجومًا لامعة مثل منكب الجوزاء ونجم رجل الجبار.",
                mythology: "يمثل الصياد في الأساطير اليونانية، يطارد الثريا مع كلبيه.",
                mainStars: ["منكب الجوزاء", "رجل الجبار", "النظام", "النطاق"],
                image: "orion"
            },
            { 
                name: "الدب الأكبر", 
                nameEn: "Ursa Major",
                category: "famous",
                region: "northern",
                stars: 7,
                description: "يشكل أشهر مجموعة نجمية في الشمال، ويعرف أيضًا باسم بنات نعش الكبرى. يستخدم لتحديد موقع النجم القطبي.",
                mythology: "يمثل الدبة كاليستو في الأساطير اليونانية، حولتها هيرا إلى دب.",
                mainStars: ["الدبة", "المراق", "مجر", "عناق"],
                image: "ursa-major"
            },
            { 
                name: "ذات الكرسي", 
                nameEn: "Cassiopeia",
                category: "famous",
                region: "northern",
                stars: 5,
                description: "كوكبة على شكل حرف W في السماء، تحتوي على العديد من النجوم الساطعة والتجمعات النجمية.",
                mythology: "تمثل الملكة كاسيوبيا في الأساطير، التي تفاخرت بجمالها.",
                mainStars: ["شيدير", "كف", "السنبلة"],
                image: "cassiopeia"
            },
            { 
                name: "الثريا", 
                nameEn: "Pleiades",
                category: "famous",
                region: "northern",
                stars: 9,
                description: "عنقود نجمي مفتوح في كوكبة الثور، يعرف أيضًا بالشقيقات السبع. يمكن رؤيته بالعين المجردة.",
                mythology: "يمثل سبع أخوات في الأساطير اليونانية، بنات أطلس.",
                mainStars: ["النجم", "النجم", "النجم"],
                image: "pleiades"
            },
            { 
                name: "الدب الأصغر", 
                nameEn: "Ursa Minor",
                category: "northern",
                region: "northern",
                stars: 7,
                description: "يحتوي على النجم القطبي الشمالي (بولاريس) الذي يستخدم للملاحة. يشبه الدب الأكبر لكنه أصغر.",
                mythology: "يمثل الابن أركاس في الأساطير، حولته زيوس إلى دب صغير.",
                mainStars: ["القطب الشمالي", "كوخاب"],
                image: "ursa-minor"
            },
            { 
                name: "الجاثي", 
                nameEn: "Hercules",
                category: "northern",
                region: "northern",
                stars: 6,
                description: "خامس أكبر كوكبة في السماء، تحتوي على تجمع نجمي رائع وعنقود كروي.",
                mythology: "يمثل البطل هرقل في الأساطير اليونانية.",
                mainStars: ["رأس الجاثي", "كورنيفوروس"],
                image: "hercules"
            },
            { 
                name: "العقرب", 
                nameEn: "Scorpius",
                category: "zodiac",
                region: "southern",
                stars: 8,
                description: "كوكبة واضحة في الصيف، تحتوي على النجم الأحمر القلوب. شكلها يشبه العقرب.",
                mythology: "يمثل العقرب الذي قتل الصياد الجبار حسب الأساطير.",
                mainStars: ["القلب", "الشولة", "الجرادة"],
                image: "scorpius"
            },
            { 
                name: "القيثارة", 
                nameEn: "Lyra",
                category: "northern",
                region: "northern",
                stars: 5,
                description: "كوكبة صغيرة لكنها تحتوي على النسر الواقع أحد ألمع النجوم.",
                mythology: "تمثل قيثارة أورفيوس في الأساطير اليونانية.",
                mainStars: ["النسر الواقع", "شلياق"],
                image: "lyra"
            },
            { 
                name: "التنين", 
                nameEn: "Draco",
                category: "northern",
                region: "northern",
                stars: 6,
                description: "كوكبة طويلة تلتف حول القطب الشمالي، يمكن رؤيتها طوال السنة.",
                mythology: "يمثل التنين لادون الذي كان يحرس التفاح الذهبي.",
                mainStars: ["الثعبان", "رأس التنين"],
                image: "draco"
            },
            { 
                name: "قيطس", 
                nameEn: "Cetus",
                category: "southern",
                region: "southern",
                stars: 5,
                description: "كوكبة كبيرة في منطقة الماء، تمثل وحش البحر.",
                mythology: "يمثل الوحش الذي أرسلته بوسيدون لأكل أندروميدا.",
                mainStars: ["الضفدع الأول", "الضفدع الثاني"],
                image: "cetus"
            },
            { 
                name: "الكركي", 
                nameEn: "Grus",
                category: "southern",
                region: "southern",
                stars: 4,
                description: "كوكبة جنوبية حديثة، تمثل طائر الكركي.",
                mainStars: ["الطائر", "الكركي"],
                image: "grus"
            },
            { 
                name: "السرطان", 
                nameEn: "Cancer",
                category: "zodiac",
                region: "northern",
                stars: 5,
                description: "أخف أبراج دائرة البروج، يحتوي على عنقود خلية النحل.",
                mythology: "يمثل السلطعون الذي قرص هرقل خلال معركته.",
                mainStars: ["السرطان", "خلية النحل"],
                image: "cancer"
            }
        ];
        
        // عرض الكوكبات
        function displayConstellations(filter = 'all') {
            const grid = document.getElementById('constellationsGrid');
            grid.innerHTML = '';
            
            let filtered = constellationsData;
            if (filter !== 'all') {
                filtered = constellationsData.filter(c => c.category === filter || c.region === filter);
            }
            
            filtered.forEach(constellation => {
                const card = document.createElement('div');
                card.className = 'glass-card rounded-2xl p-6 cursor-pointer';
                card.onclick = () => showConstellationDetails(constellation);
                
                // ألوان مختلفة حسب المنطقة
                const regionColor = constellation.region === 'northern' ? 'text-blue-400' : 'text-orange-400';
                const regionText = constellation.region === 'northern' ? 'شمالي' : 'جنوبي';
                
                card.innerHTML = `
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-2xl font-bold text-yellow-400">${constellation.name}</h3>
                            <p class="text-gray-400 text-sm">${constellation.nameEn}</p>
                        </div>
                        <span class="${regionColor} text-sm border border-current rounded-full px-3 py-1">${regionText}</span>
                    </div>
                    
                    <p class="text-gray-300 leading-relaxed mb-4 line-clamp-3">${constellation.description}</p>
                    
                    <div class="flex items-center gap-2 mb-3">
                        <i class="fas fa-star text-yellow-400"></i>
                        <span class="text-gray-300">${constellation.stars} نجوم رئيسية</span>
                    </div>
                    
                    <div class="flex flex-wrap gap-2">
                        ${constellation.mainStars.slice(0, 3).map(star => 
                            `<span class="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1 text-sm">${star}</span>`
                        ).join('')}
                        ${constellation.mainStars.length > 3 ? '<span class="text-gray-400 text-sm">...</span>' : ''}
                    </div>
                    
                    ${constellation.category === 'zodiac' ? 
                        '<div class="mt-3 text-yellow-500"><i class="fas fa-circle ml-1"></i>برج فلكي</div>' : ''}
                `;
                
                grid.appendChild(card);
            });
        }
        
        // تصفية الكوكبات
        function filterConstellations(filter) {
            // تحديث الأزرار
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            displayConstellations(filter);
        }
        
        // عرض تفاصيل الكوكبة
        function showConstellationDetails(constellation) {
            // يمكن توسيعها لفتح صفحة تفاصيل
            alert(`الكوكبة: ${constellation.name}\nالأسطورة: ${constellation.mythology || 'لا توجد معلومات'}`);
        }
        
        // محرك البحث العام
        const globalSearch = document.getElementById('globalSearch');
        const globalSearchResults = document.getElementById('globalSearchResults');
        
        function toggleSearch() {
            const searchBar = document.getElementById('searchBar');
            searchBar.classList.toggle('hidden');
            if (!searchBar.classList.contains('hidden')) {
                globalSearch.focus();
            }
        }
        
        globalSearch.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase().trim();
            
            if (term.length < 2) {
                globalSearchResults.classList.add('hidden');
                return;
            }
            
            // البحث في الكوكبات
            const results = constellationsData.filter(c => 
                c.name.includes(term) || 
                c.nameEn.toLowerCase().includes(term) ||
                c.mainStars.some(star => star.includes(term))
            );
            
            if (results.length > 0) {
                globalSearchResults.classList.remove('hidden');
                globalSearchResults.innerHTML = '<div class="p-2 text-yellow-400 border-b border-yellow-500/20">الكوكبات</div>';
                
                results.forEach(c => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';
                    div.innerHTML = `
                        <div class="font-bold text-yellow-400">${c.name}</div>
                        <div class="text-sm text-gray-400">${c.nameEn} • ${c.stars} نجوم</div>
                    `;
                    div.onclick = () => {
                        showConstellationDetails(c);
                        globalSearchResults.classList.add('hidden');
                        globalSearch.value = '';
                        toggleSearch();
                    };
                    globalSearchResults.appendChild(div);
                });
            } else {
                globalSearchResults.classList.remove('hidden');
                globalSearchResults.innerHTML = '<div class="p-4 text-center text-gray-400">لا توجد نتائج</div>';
            }
        });
        
        // إخفاء نتائج البحث عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (!globalSearch.contains(e.target) && !globalSearchResults.contains(e.target)) {
                globalSearchResults.classList.add('hidden');
            }
        });
        
        // قائمة الموبايل
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const overlay = document.getElementById('menuOverlay');
            menu.classList.toggle('open');
            overlay.classList.toggle('open');
            
            if (menu.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
        
        // إغلاق القائمة عند النقر على الخارج
        document.getElementById('menuOverlay').addEventListener('click', toggleMobileMenu);
        
        // تهيئة الصفحة
        displayConstellations();
        
        // جعل الدوال عامة
        window.toggleMobileMenu = toggleMobileMenu;
        window.toggleSearch = toggleSearch;
        window.filterConstellations = filterConstellations;
        window.showConstellationDetails = showConstellationDetails;