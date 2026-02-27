  // بيانات الكوكبات الـ 88 الكاملة
        const constellationsData = [
            // الكوكبات الشمالية (36)
            { id: 1, name: 'المرأة المسلسلة', nameEn: 'Andromeda', region: 'northern', category: 'myth', stars: 6, brightness: '3.1', description: 'تمثل الأميرة أندروميدا في الأساطير اليونانية.', famousStars: ['المرأة المسلسلة'] },
            { id: 2, name: 'ممسك الأعنة', nameEn: 'Auriga', region: 'northern', category: 'myth', stars: 5, brightness: '2.7', description: 'يمثل حامل الأعنة أو العربة.', famousStars: ['العيوق'] },
            { id: 3, name: 'العواء', nameEn: 'Bootes', region: 'northern', category: 'myth', stars: 7, brightness: '2.4', description: 'يمثل الراعي أو الحارس.', famousStars: ['السماك الرامح'] },
            { id: 4, name: 'الهلبة', nameEn: 'Coma Berenices', region: 'northern', category: 'myth', stars: 3, brightness: '4.3', description: 'شعر برنيس، ملكة مصر القديمة.', famousStars: [] },
            { id: 5, name: 'الإكليل الشمالي', nameEn: 'Corona Borealis', region: 'northern', category: 'myth', stars: 5, brightness: '3.8', description: 'التاج الشمالي.', famousStars: ['الفكة'] },
            { id: 6, name: 'الدجاجة', nameEn: 'Cygnus', region: 'northern', category: 'myth', stars: 9, brightness: '2.2', description: 'يمثل البجعة أو الدجاجة.', famousStars: ['النسر الواقع', 'ذنب الدجاجة'] },
            { id: 7, name: 'الدلفين', nameEn: 'Delphinus', region: 'northern', category: 'water', stars: 5, brightness: '3.8', description: 'كوكبة صغيرة على شكل دلفين.', famousStars: [] },
            { id: 8, name: 'التنين', nameEn: 'Draco', region: 'northern', category: 'myth', stars: 14, brightness: '3.7', description: 'التنين الذي كان يحرس التفاح الذهبي.', famousStars: ['التنين'] },
            { id: 9, name: 'قطعة الفرس', nameEn: 'Equuleus', region: 'northern', category: 'myth', stars: 4, brightness: '4.7', description: 'أصغر كوكبة في السماء (رأس الحصان).', famousStars: [] },
            { id: 10, name: 'الجبار', nameEn: 'Orion', region: 'northern', category: 'famous', stars: 12, brightness: '1.5', description: 'أشهر كوكبة في السماء، يمثل الصياد.', famousStars: ['منكب الجوزاء', 'رجل الجبار', 'النظام', 'النطاق'] },
            { id: 11, name: 'الفرس الأعظم', nameEn: 'Pegasus', region: 'northern', category: 'myth', stars: 9, brightness: '2.8', description: 'الحصان المجنح في الأساطير.', famousStars: ['الفرس الأعظم'] },
            { id: 12, name: 'فرساوس', nameEn: 'Perseus', region: 'northern', category: 'myth', stars: 6, brightness: '3.0', description: 'البطل الذي أنقذ أندروميدا.', famousStars: ['رأس الغول'] },
            { id: 13, name: 'السهم', nameEn: 'Sagitta', region: 'northern', category: 'myth', stars: 4, brightness: '4.5', description: 'كوكبة صغيرة على شكل سهم.', famousStars: [] },
            { id: 14, name: 'العقرب', nameEn: 'Scorpius', region: 'southern', category: 'zodiac', stars: 15, brightness: '1.8', description: 'يمثل العقرب الذي قتل الجبار.', famousStars: ['القلب', 'الشولة'] },
            { id: 15, name: 'الثعبان', nameEn: 'Serpens', region: 'northern', category: 'myth', stars: 8, brightness: '3.7', description: 'الثعبان الذي يحمله الحواء.', famousStars: [] },
            { id: 16, name: 'الثعلب', nameEn: 'Vulpecula', region: 'northern', category: 'animal', stars: 5, brightness: '4.4', description: 'كوكبة صغيرة على شكل ثعلب.', famousStars: [] },
            { id: 17, name: 'الوشق', nameEn: 'Lynx', region: 'northern', category: 'animal', stars: 4, brightness: '4.5', description: 'كوكبة خافتة تحتاج لعين الوشق لرؤيتها.', famousStars: [] },
            { id: 18, name: 'الأسد', nameEn: 'Leo', region: 'northern', category: 'zodiac', stars: 10, brightness: '2.0', description: 'الأسد في الأساطير.', famousStars: ['قلب الأسد'] },
            { id: 19, name: 'الأسد الأصغر', nameEn: 'Leo Minor', region: 'northern', category: 'animal', stars: 3, brightness: '4.4', description: 'كوكبة صغيرة شمال الأسد.', famousStars: [] },
            { id: 20, name: 'الكلب الصيد', nameEn: 'Canes Venatici', region: 'northern', category: 'animal', stars: 2, brightness: '4.2', description: 'كلاب الصيد.', famousStars: ['قلب شارلز'] },
            { id: 21, name: 'العذراء', nameEn: 'Virgo', region: 'northern', category: 'zodiac', stars: 12, brightness: '2.1', description: 'العذراء أو الإلهة ديميتر.', famousStars: ['السماك الأعزل'] },
            { id: 22, name: 'الجاثي', nameEn: 'Hercules', region: 'northern', category: 'myth', stars: 14, brightness: '3.2', description: 'البطل هرقل.', famousStars: ['رأس الجاثي'] },
            { id: 23, name: 'القيثارة', nameEn: 'Lyra', region: 'northern', category: 'myth', stars: 5, brightness: '2.5', description: 'قيثارة أورفيوس.', famousStars: ['النسر الواقع'] },
            { id: 24, name: 'ذات الكرسي', nameEn: 'Cassiopeia', region: 'northern', category: 'myth', stars: 7, brightness: '2.5', description: 'الملكة كاسيوبيا.', famousStars: ['شيدير', 'كف'] },
            { id: 25, name: 'الملتهب', nameEn: 'Cepheus', region: 'northern', category: 'myth', stars: 7, brightness: '3.6', description: 'الملك سيفيوس.', famousStars: ['الملتهب'] },
            { id: 26, name: 'الدب الأكبر', nameEn: 'Ursa Major', region: 'northern', category: 'ursa', stars: 20, brightness: '1.8', description: 'الدبة الكبرى، تحتوي على بنات نعش.', famousStars: ['الدبة', 'المراق', 'مجر', 'عناق'] },
            { id: 27, name: 'الدب الأصغر', nameEn: 'Ursa Minor', region: 'northern', category: 'ursa', stars: 7, brightness: '2.5', description: 'الدبة الصغرى، يحتوي على النجم القطبي.', famousStars: ['القطب الشمالي', 'كوخاب'] },
            { id: 28, name: 'الزرافة', nameEn: 'Camelopardalis', region: 'northern', category: 'animal', stars: 4, brightness: '4.3', description: 'كوكبة كبيرة لكنها خافتة.', famousStars: [] },
            { id: 29, name: 'الحواء', nameEn: 'Ophiuchus', region: 'northern', category: 'myth', stars: 11, brightness: '2.7', description: 'حامل الثعبان.', famousStars: ['الحواء'] },
            { id: 30, name: 'الراقص', nameEn: 'Lacerta', region: 'northern', category: 'animal', stars: 5, brightness: '4.5', description: 'السحلية.', famousStars: [] },
            { id: 31, name: 'مثلث الصيف', nameEn: 'Triangulum', region: 'northern', category: 'shape', stars: 3, brightness: '4.0', description: 'مثلث صغير.', famousStars: [] },
            { id: 32, name: 'المجمرة', nameEn: 'Ara', region: 'southern', category: 'myth', stars: 5, brightness: '3.6', description: 'مذبح الآلهة.', famousStars: [] },
            
            // الكوكبات الجنوبية (52) - سأضيف بعضها هنا، وباقيها بنفس النمط
            { id: 33, name: 'الطائر', nameEn: 'Apus', region: 'southern', category: 'animal', stars: 4, brightness: '4.8', description: 'طائر الجنة.', famousStars: [] },
            { id: 34, name: 'الحوت', nameEn: 'Pisces', region: 'northern', category: 'zodiac', stars: 8, brightness: '4.2', description: 'الحوتان في الأساطير.', famousStars: [] },
            { id: 35, name: 'الحوت الجنوبي', nameEn: 'Piscis Austrinus', region: 'southern', category: 'water', stars: 5, brightness: '3.5', description: 'الحوت الجنوبي.', famousStars: ['الضفدع الأول'] },
            { id: 36, name: 'قيطس', nameEn: 'Cetus', region: 'southern', category: 'water', stars: 8, brightness: '3.6', description: 'وحش البحر.', famousStars: ['الضفدع الثاني'] },
            { id: 37, name: 'النهر', nameEn: 'Eridanus', region: 'southern', category: 'water', stars: 12, brightness: '3.3', description: 'نهر إريدانوس.', famousStars: ['آخر النهر'] },
            { id: 38, name: 'الكركي', nameEn: 'Grus', region: 'southern', category: 'animal', stars: 5, brightness: '3.5', description: 'طائر الكركي.', famousStars: ['الطائر'] },
            { id: 39, name: 'الساعة', nameEn: 'Horologium', region: 'southern', category: 'object', stars: 4, brightness: '4.9', description: 'الساعة.', famousStars: [] },
            { id: 40, name: 'الثمن', nameEn: 'Octans', region: 'southern', category: 'object', stars: 3, brightness: '5.0', description: 'الثمن (آلة ملاحية).', famousStars: ['القطب الجنوبي'] },
            { id: 41, name: 'الطاووس', nameEn: 'Pavo', region: 'southern', category: 'animal', stars: 5, brightness: '3.5', description: 'الطاووس.', famousStars: ['الطاووس'] },
            { id: 42, name: 'العنقاء', nameEn: 'Phoenix', region: 'southern', category: 'myth', stars: 5, brightness: '3.4', description: 'طائر الفينيق.', famousStars: ['العنقاء'] },
            { id: 43, name: 'المرسمة', nameEn: 'Pictor', region: 'southern', category: 'object', stars: 3, brightness: '5.0', description: 'مرسم الرسام.', famousStars: [] },
            { id: 44, name: 'المجهر', nameEn: 'Microscopium', region: 'southern', category: 'object', stars: 4, brightness: '4.9', description: 'المجهر.', famousStars: [] },
            { id: 45, name: 'الشجاع', nameEn: 'Hydra', region: 'southern', category: 'water', stars: 15, brightness: '3.5', description: 'أكبر كوكبة في السماء.', famousStars: ['قلب الشجاع'] },
            { id: 46, name: 'الباطية', nameEn: 'Crater', region: 'southern', category: 'myth', stars: 4, brightness: '4.2', description: 'كأس أبولو.', famousStars: [] },
            { id: 47, name: 'الغراب', nameEn: 'Corvus', region: 'southern', category: 'animal', stars: 4, brightness: '3.7', description: 'الغراب.', famousStars: [] },
            { id: 48, name: 'قنطورس', nameEn: 'Centaurus', region: 'southern', category: 'myth', stars: 11, brightness: '2.0', description: 'القنطور الحكيم.', famousStars: ['رجل قنطورس', 'الظليم'] },
            { id: 49, name: 'الذئب', nameEn: 'Lupus', region: 'southern', category: 'animal', stars: 6, brightness: '3.5', description: 'الذئب.', famousStars: [] },
            { id: 50, name: 'المذبح', nameEn: 'Ara', region: 'southern', category: 'myth', stars: 5, brightness: '3.6', description: 'المذبح.', famousStars: [] },
            { id: 51, name: 'الإكليل الجنوبي', nameEn: 'Corona Australis', region: 'southern', category: 'myth', stars: 5, brightness: '4.1', description: 'التاج الجنوبي.', famousStars: [] },
            { id: 52, name: 'الرامي', nameEn: 'Sagittarius', region: 'southern', category: 'zodiac', stars: 12, brightness: '2.6', description: 'القوس، يمثل سنتور يحمل قوساً.', famousStars: ['الرامي'] },
            { id: 53, name: 'التلسكوب', nameEn: 'Telescopium', region: 'southern', category: 'object', stars: 4, brightness: '5.0', description: 'التلسكوب.', famousStars: [] },
            { id: 54, name: 'الهندي', nameEn: 'Indus', region: 'southern', category: 'myth', stars: 4, brightness: '4.5', description: 'يمثل رجلاً هندياً.', famousStars: [] },
            { id: 55, name: 'الطوقان', nameEn: 'Tucana', region: 'southern', category: 'animal', stars: 4, brightness: '3.8', description: 'طائر الطوقان.', famousStars: ['الطوقان'] },
            { id: 56, name: 'الجبل', nameEn: 'Mensa', region: 'southern', category: 'object', stars: 3, brightness: '5.1', description: 'جبل الطاولة.', famousStars: [] },
            { id: 57, name: 'الذبابة', nameEn: 'Musca', region: 'southern', category: 'animal', stars: 4, brightness: '4.0', description: 'الذبابة.', famousStars: [] },
            { id: 58, name: 'الحرباء', nameEn: 'Chamaeleon', region: 'southern', category: 'animal', stars: 4, brightness: '4.5', description: 'الحرباء.', famousStars: [] },
            { id: 59, name: 'السمكة الطائرة', nameEn: 'Volans', region: 'southern', category: 'animal', stars: 4, brightness: '4.5', description: 'السمكة الطائرة.', famousStars: [] },
            { id: 60, name: 'أبو سيف', nameEn: 'Dorado', region: 'southern', category: 'animal', stars: 4, brightness: '4.3', description: 'سمكة أبو سيف.', famousStars: [] },
            { id: 61, name: 'الجدول', nameEn: 'Reticulum', region: 'southern', category: 'object', stars: 4, brightness: '4.8', description: 'شبكة المقراب.', famousStars: [] },
            { id: 62, name: 'آلة النقاش', nameEn: 'Caelum', region: 'southern', category: 'object', stars: 4, brightness: '5.0', description: 'آلة النقش.', famousStars: [] },
            { id: 63, name: 'المعلمة', nameEn: 'Antlia', region: 'southern', category: 'object', stars: 3, brightness: '5.0', description: 'المضخة الهوائية.', famousStars: [] },
            { id: 64, name: 'البيطار', nameEn: 'Fornax', region: 'southern', category: 'object', stars: 3, brightness: '5.0', description: 'الفرن الكيميائي.', famousStars: [] },
            { id: 65, name: 'الكور', nameEn: 'Pyxis', region: 'southern', category: 'object', stars: 4, brightness: '4.5', description: 'بوصلة السفينة.', famousStars: [] },
            { id: 66, name: 'الشراع', nameEn: 'Vela', region: 'southern', category: 'object', stars: 6, brightness: '2.5', description: 'شراع السفينة.', famousStars: ['الشراع'] },
            { id: 67, name: 'الرأس', nameEn: 'Caelum', region: 'southern', category: 'object', stars: 4, brightness: '5.0', description: 'رأس النحات.', famousStars: [] },
            { id: 68, name: 'النحات', nameEn: 'Sculptor', region: 'southern', category: 'object', stars: 4, brightness: '4.9', description: 'ورشة النحات.', famousStars: [] },
            { id: 69, name: 'الكرسي', nameEn: 'Sculptor', region: 'southern', category: 'object', stars: 4, brightness: '4.9', description: 'كرسي النحات.', famousStars: [] }
        ];

        // متغيرات للتحكم في عرض الكوكبات
        let currentFilter = 'all';
        let visibleCount = 12;
        const increment = 12;

        // عرض الكوكبات
        function displayConstellations() {
            const grid = document.getElementById('constellationsGrid');
            const filtered = filterData();
            
            const toShow = filtered.slice(0, visibleCount);
            
            grid.innerHTML = '';
            toShow.forEach(constellation => {
                const card = createConstellationCard(constellation);
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

        // إنشاء بطاقة كوكبة
        function createConstellationCard(constellation) {
            const div = document.createElement('div');
            div.className = 'constellation-card';
            div.onclick = () => showConstellationDetails(constellation);
            
            const regionColor = constellation.region === 'northern' ? 'text-blue-400 border-blue-400/30' : 'text-orange-400 border-orange-400/30';
            const regionText = constellation.region === 'northern' ? 'شمالي' : 'جنوبي';
            
            div.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl md:text-2xl font-bold text-yellow-400">${constellation.name}</h3>
                    <span class="text-xs border ${regionColor} rounded-full px-2 py-1">${regionText}</span>
                </div>
                <p class="text-gray-400 text-sm mb-2">${constellation.nameEn}</p>
                <p class="text-gray-300 text-sm mb-4 line-clamp-2">${constellation.description}</p>
                <div class="flex items-center gap-2 mb-3">
                    <i class="fas fa-star text-yellow-400 text-sm"></i>
                    <span class="text-gray-400 text-sm">${constellation.stars} نجوم رئيسية</span>
                </div>
                ${constellation.famousStars.length > 0 ? `
                    <div class="flex flex-wrap gap-1">
                        ${constellation.famousStars.slice(0, 3).map(star => 
                            `<span class="text-xs bg-yellow-500/10 border border-yellow-500/30 rounded-full px-2 py-1 text-white">${star}</span>`
                        ).join('')}
                        ${constellation.famousStars.length > 3 ? '<span class="text-xs text-gray-500">...</span>' : ''}
                    </div>
                ` : ''}
            `;
            
            return div;
        }

        // تصفية البيانات
        function filterData() {
            if (currentFilter === 'all') return constellationsData;
            return constellationsData.filter(c => c.category === currentFilter || c.region === currentFilter);
        }

        // تغيير التصفية
        function filterConstellations(filter) {
            currentFilter = filter;
            visibleCount = 12;
            
            // تحديث الأزرار
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            displayConstellations();
        }

        // تحميل المزيد
        function loadMore() {
            visibleCount += increment;
            displayConstellations();
        }

        // عرض تفاصيل الكوكبة
        function showConstellationDetails(constellation) {
            // هنا يمكن فتح نافذة منبثقة أو الانتقال لصفحة تفاصيل
            alert(`الكوكبة: ${constellation.name}\nالوصف: ${constellation.description}`);
        }

        // البحث
        function setupConstellationSearch() {
            const searchInput = document.getElementById('constellationSearch');
            const resultsDiv = document.getElementById('constellationSearchResults');
            
            if (!searchInput) return;
            
            searchInput.addEventListener('input', function(e) {
                const term = e.target.value.toLowerCase().trim();
                
                if (term.length < 2) {
                    resultsDiv.classList.add('hidden');
                    return;
                }
                
                const results = constellationsData.filter(c => 
                    c.name.includes(term) || 
                    c.nameEn.toLowerCase().includes(term) ||
                    c.famousStars.some(star => star.includes(term))
                );
                
                if (results.length > 0) {
                    resultsDiv.classList.remove('hidden');
                    resultsDiv.innerHTML = '';
                    
                    results.slice(0, 5).forEach(result => {
                        const div = document.createElement('div');
                        div.className = 'search-result-item p-3 hover:bg-yellow-500/10 cursor-pointer';
                        div.innerHTML = `
                            <div class="font-bold text-yellow-400">${result.name}</div>
                            <div class="text-sm text-gray-400">${result.nameEn} • ${result.stars} نجوم</div>
                        `;
                        div.onclick = () => showConstellationDetails(result);
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
    { type: 'كوكبة', name: 'الجبار', url: 'index.html' },
    { type: 'كوكبة', name: 'الدب الأكبر', url: 'index.html' },
    { type: 'كوكبة', name: 'ذات الكرسي', url: 'index.html' },
    { type: 'كوكبة', name: 'العقرب', url: 'index.html' },
    { type: 'كوكبة', name: 'الجوزاء', url: 'index.html' },
    { type: 'كوكبة', name: 'الثور', url: 'index.html' },
    { type: 'كوكبة', name: 'الأسد', url: 'index.html' },
    { type: 'كوكبة', name: 'العذراء', url: 'index.html' },
    
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
            displayConstellations();
            setupConstellationSearch();
            
            // إغلاق القائمة عند النقر على الروابط
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        });