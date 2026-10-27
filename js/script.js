// قائمة المكرمين في حفل التكريم (فرع قايس)
// يمكنك التعديل على الأسماء أو إضافتها بكل سهولة هنا
const honorees = [
    {
        name: "عبد الرحمن بوزيد",
        category: "arduino",
        activity: "الأردوينو والروبوتيك",
        award: "",
        gender: "male"
    },
    {
        name: "سارة مسعودي",
        category: "arduino",
        activity: "الأردوينو والروبوتيك",
        award: "",
        gender: "female"
    },
    {
        name: "المعتز بالله لحماري",
        category: "programming",
        activity: "البرمجة والتطوير",
        award: "تطوير موقع ويب تفاعلي",
        gender: "male"
    },
    {
        name: "مريم سلطاني",
        category: "quran",
        activity: "حفظ القرآن الكريم",
        award: "حفظ 15 جزءاً بتجويد ممتاز",
        gender: "female"
    },
    {
        name: "أحمد حمداوي",
        category: "media",
        activity: "إنشاء المحتوى والإعلام",
        award: "أفضل فيديو توثيقي هادف",
        gender: "male"
    },
    {
        name: "إكرام عباسي",
        category: "reading",
        activity: "المطالعة والقراءة",
        award: "جائزة القارئ المتميز (20 كتاباً)",
        gender: "female"
    },
    {
        name: "يوسف قاسمي",
        category: "quran",
        activity: "حفظ القرآن الكريم",
        award: "حفظ الترتيل وتصحيح التلاوة",
        gender: "male"
    },
    {
        name: "خديجة رحماني",
        category: "reading",
        activity: "المطالعة والقراءة",
        award: "أفضل تلخيص أدبي",
        gender: "female"
    },
    {
        name: "عبد الرحمن محمد حجازي",
        category: "reading",
        activity: "المطالعة والقراءة",
        award: "أفضل تلخيص أدبي",
        gender: "male"
    }
];

let currentFilter = 'all';

// تحويل النص إلى صيغة موحّدة للبحث: إزالة التشكيل والتطويل وتوحيد الهمزات والتاء المربوطة والألف المقصورة
function normalizeArabic(text) {
    return text
        .toLowerCase()
        .replace(/[\u064B-\u0652\u0640]/g, '')
        .replace(/[أإآٱ]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .replace(/\s+/g, ' ')
        .trim();
}

// تهريب أحرف HTML قبل إدراج النص في الصفحة
function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
}

// دالة عرض بطاقات المكرمين
function displayHonorees(list) {
    const grid = document.getElementById('honorees-grid');

    if (list.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-user-slash" style="font-size: 3rem; margin-bottom: 10px; color: var(--primary-green);"></i>
                <p>لم يتم العثور على اسم مطابق في قائمة المكرمين.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map(person => {
        const iconClass = person.gender === 'female' ? 'fa-user-nurse' : 'fa-user-graduate';
        // لا يُعرض سطر الجائزة إذا كانت فارغة
        const awardHTML = person.award
            ? `<div class="honoree-award"><i class="fa-solid fa-medal"></i> ${escapeHtml(person.award)}</div>`
            : '';

        return `
            <div class="honoree-card">
                <div class="honoree-avatar">
                    <i class="fa-solid ${iconClass}"></i>
                </div>
                <h3 class="honoree-name">${escapeHtml(person.name)}</h3>
                <span class="honoree-activity">${escapeHtml(person.activity)}</span>
                ${awardHTML}
            </div>
        `;
    }).join('');
}

// دالة التصفية حسب النشاط
function filterByActivity(category, button) {
    currentFilter = category;

    // تحديث أزرار الفلترة النشطة
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    // إعادة البحث وتصفية القائمة
    filterHonorees();
}

// دالة البحث بالاسم
function filterHonorees() {
    const searchText = normalizeArabic(document.getElementById('search-input').value);

    const filtered = honorees.filter(person => {
        const matchesCategory = (currentFilter === 'all' || person.category === currentFilter);
        const matchesSearch = normalizeArabic(person.name).includes(searchText);
        return matchesCategory && matchesSearch;
    });

    displayHonorees(filtered);
}

// عند تحميل الصفحة
window.onload = function() {
    document.getElementById('year').innerText = new Date().getFullYear();
    displayHonorees(honorees);
};