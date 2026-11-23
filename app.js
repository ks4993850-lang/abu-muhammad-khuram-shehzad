// ============================================================================
// AL-MIZAN AL-HADITH (الميزان الحديث) — CORE SCHOLARLY ENGINE, 37 PDF BOOKS
// GALLERY & PRIVATE ADMIN UPLOAD PORTAL
// Principal Researcher: Abu Muhammad Khurram Shahzad (أبو محمد خرم شہزاد)
// ============================================================================

const HADITH_DATA = [
  {
    id: "MH-101",
    category: "usul",
    grade: "Sahih Mutawatir",
    gradeClass: "hukm-sahih",
    source: "Sahih al-Bukhari (1) • Sahih Muslim (1907)",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    urdu: "اعمال کا دارومدار نیتوں پر ہے، اور ہر شخص کے لیے وہی ہے جس کی اس نے نیت کی۔",
    english: "Actions are judged strictly by intentions, and every person shall have only that which they intended.",
    tahqiqNote: "Verified by Abu Muhammad Khurram Shahzad: Foundational axiom of Islamic jurisprudence and spiritual accountability. Unbroken golden chain from Yahya ibn Sa'id al-Ansari.",
    isnad: [
      { name: "Prophet Muhammad ﷺ", rank: "Masdar al-Wahy" },
      { name: "'Umar ibn al-Khattab", rank: "Sahabi" },
      { name: "'Alqamah ibn Waqqas", rank: "Thiqah Thabt" },
      { name: "Muhammad ibn Ibrahim", rank: "Thiqah" },
      { name: "Yahya ibn Sa'id al-Ansari", rank: "Imam Hujjah" },
      { name: "Sufyan ibn 'Uyaynah → Al-Bukhari", rank: "Amir al-Mu'minin fi al-Hadith" }
    ]
  },
  {
    id: "MH-102",
    category: "jarh",
    grade: "Sahih li-Dhatihi",
    gradeClass: "hukm-sahih",
    source: "Muqaddimah Sahih Muslim (5) • Al-Kifayah fi 'Ilm al-Riwayah",
    arabic: "إِنَّ هَذَا الْعِلْمَ دِينٌ، فَانْظُرُوا عَمَّنْ تَأْخُذُونَ دِينَكُمْ",
    urdu: "بے شک یہ علمِ حدیث تمہارا دین ہے، پس خوب تحقیق کر لو کہ تم اپنا دین کن لوگوں سے حاصل کر رہے ہو۔",
    english: "Indeed, this sacred knowledge is religion itself; therefore scrutinize carefully from whom you take your religion.",
    tahqiqNote: "Analytical Commentary (Abu Muhammad Khuram Shehzad): Establishes the epistemological necessity of Isnad verification (Ilm al-Rijal) against unverified narrations.",
    isnad: [
      { name: "Muhammad ibn Sirin", rank: "Imam Tabi'i Kabir" },
      { name: "Hisham ibn Hassan", rank: "Thiqah Thabt" },
      { name: "Makhlad ibn Husayn", rank: "Saduq Thiqah" },
      { name: "Imam Muslim ibn al-Hajjaj", rank: "Muhaddith Hujjah" }
    ]
  },
  {
    id: "MH-103",
    category: "sunnah",
    grade: "Sahih",
    gradeClass: "hukm-sahih",
    source: "Jami' al-Tirmidhi (2656) • Musnad Ahmad (4157)",
    arabic: "نَضَّرَ اللَّهُ امْرَأً سَمِعَ مِنَّا حَدِيثًا فَحَفِظَهُ حَتَّى يُبَلِّغَهُ غَيْرَهُ، فَرُبَّ حَامِلِ فِقْهٍ إِلَى مَنْ هُوَ أَفْقَهُ مِنْهُ",
    urdu: "اللہ اس شخص کو تروتازہ اور شاداب رکھے جس نے ہم سے کوئی حدیث سنی، اسے یاد رکھا یہاں تک کہ دوسرے تک پہنچا دیا۔",
    english: "May Allah illuminate the person who hears a Hadith from us, memorizes it with precision, and transmits it accurately to others.",
    tahqiqNote: "Classified as Mutawatir Ma'nawi (transmitted via over 20 Companions). Core scholarly foundation of Researcher Abu Muhammad Khuram Shehzad's Hadith works.",
    isnad: [
      { name: "Prophet Muhammad ﷺ", rank: "Masdar al-Wahy" },
      { name: "Zayd ibn Thabit / Ibn Mas'ud", rank: "Sahabi" },
      { name: "'Abd al-Rahman ibn Aban", rank: "Thiqah" },
      { name: "Shu'bah ibn al-Hajjaj", rank: "Amir al-Mu'minin fi al-Hadith" },
      { name: "Imam Ahmad / Al-Tirmidhi", rank: "Imam Muhaddith" }
    ]
  },
  {
    id: "MH-104",
    category: "akhlaq",
    grade: "Sahih",
    gradeClass: "hukm-sahih",
    source: "Sahih Muslim (2564) • Musnad Ahmad",
    arabic: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    urdu: "بے شک اللہ تمہاری صورتوں اور تمہارے اموال کو نہیں دیکھتا، بلکہ وہ تمہارے دلوں اور تمہارے اعمال کو دیکھتا ہے۔",
    english: "Verily, Allah does not look at your outward appearances or your wealth, rather He looks into your hearts and your deeds.",
    tahqiqNote: "Verified in Kitab al-Tazkiyah by Abu Muhammad Khurram Shahzad: Demonstrates the synthesis between rigorous outward Sunnah and inward sincerity.",
    isnad: [
      { name: "Prophet Muhammad ﷺ", rank: "Masdar al-Wahy" },
      { name: "Abu Hurayrah (r.a.)", rank: "Hafiz al-Sahabah" },
      { name: "Yazid ibn al-Asamm", rank: "Thiqah" },
      { name: "Kathir ibn Hisham", rank: "Thiqah" },
      { name: "Imam Muslim", rank: "Hujjah" }
    ]
  },
  {
    id: "MH-105",
    category: "ilal",
    grade: "Critical Tahqiq (Ma'lul / Weak Matrix Examined)",
    gradeClass: "hukm-critical",
    source: "Al-Mizan Critical Case Study #42 • 'Ilal al-Daraqutni Reference",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ (مَعَ تَحْقِيقِ الزِّيَادَاتِ الْمُنْكَرَةِ)",
    urdu: "علم حاصل کرنا ہر مسلمان پر فرض ہے (اس کے متعدد طرق ضعیف ہیں مگر شواہد کی بنا پر اصل متن حسن، جبکہ موضوع زیادات مردود ہیں)۔",
    english: "Seeking knowledge is an obligation upon every Muslim. [Case Study in Hidden Defects ('Ilal): Separating authentic collective corroboration from fabricated additions].",
    tahqiqNote: "Abu Muhammad Khurram Shahzad's Monograph Analysis: While individual chains have weakness, collective shawahid elevate the base clause, whereas famous appended clauses lack prophetic provenance.",
    isnad: [
      { name: "Anas ibn Malik (Multiple Turuq)", rank: "Sahabi" },
      { name: "Over 50 Collated Sub-Chains", rank: "Shawahid Comparison" },
      { name: "Evaluated by Al-Mizan 'Ilal Unit", rank: "Takhrij Mufassal" }
    ]
  }
];

const UI_TRANSLATIONS = {
  en: {
    dir: "ltr",
    navHome: "Sanctuary",
    navBooks: "PDF Books Library (37+)",
    navTahqiq: "Hadith Workbench",
    navPillars: "Research Pillars",
    navManuscripts: "Journal & Contact",
    heroEyebrow: "GLOBAL CENTER FOR PROPHETIC TRADITION & CRITICAL TAHQIQ",
    heroTitle: "Weighing Sacred Heritage on the <span>Scale of Authentic Proof</span>",
    heroDesc: "Welcome to the official scholarly portal of Abu Muhammad Khuram Shehzad (أبو محمد خرم شہزاد) — dedicated to epistemological rigor in Hadith sciences, Isnad verification, and free global access to all 37+ PDF books and monographs.",
    ctaExploreBooks: "Browse & Download All 37 PDF Books (Free)",
    ctaWorkbench: "Launch Hadith Verification Workbench"
  },
  ur: {
    dir: "rtl",
    navHome: "مرکزِ تحقیق",
    navBooks: "کتب و تصانیف (37+ PDF)",
    navTahqiq: "میزانِ تحقیقِ حدیث",
    navPillars: "شعبہ جاتِ تحقیق",
    navManuscripts: "مقالات و رابطہ",
    heroEyebrow: "علومِ نبوت، تحقیقِ اسانید اور احیائے تراث کا عالمی علمی مرکز",
    heroTitle: "میزانِ عدل و برہان پر <span>سنتِ نبویہ ﷺ کی مستند تحقیق</span>",
    heroDesc: "محقق ابو محمد خرم شہزاد حفظہ اللہ کے آفیشل علمی پورٹل میں خوش آمدید — یہ ویب سائٹ علومِ حدیث، جرح و تعدیل، عللِ خفیہ کی تحقیق اور آپ کی 37 سے زائد علمی و تحقیقی تصانیف (PDF) کے مفت مطالعہ اور ڈاؤن لوڈ کے لیے وقف ہے۔",
    ctaExploreBooks: "تمام 37 کتب (PDF) مفت ڈاؤن لوڈ کریں",
    ctaWorkbench: "جدید انجن برائے تحقیقِ حدیث"
  },
  ar: {
    dir: "rtl",
    navHome: "الرئيسية",
    navBooks: "مكتبة المؤلفات (37+ PDF)",
    navTahqiq: "منصة تحقيق الحديث",
    navPillars: "أقسام المركز",
    navManuscripts: "الأبحاث والتواصل",
    heroEyebrow: "المركز العالمي لعلوم السنة النبوية والتحقيق العلمي الرصين",
    heroTitle: "تحقيق التراث النبوي الشريف على <span>ميزان البرهان والإسناد</span>",
    heroDesc: "مرحباً بكم في الموقع الرسمي للباحث المحقق أبي محمد خرم شهزاد — صرح علمي يُعنى بعلوم الحديث الشريف ودراسة الأسانيد ونشر كافة مؤلفاته وتصانيفه بصيغة PDF مجاناً.",
    ctaExploreBooks: "تصفح وحمّل جميع المؤلفات (37 كتاباً PDF)",
    ctaWorkbench: "بوابة التحقيق ودراسة الأسانيد"
  }
};

let ALL_PDF_BOOKS = [];
let currentFilter = "all";
let currentSearch = "";
let currentBookFilter = "all";
let currentBookSearch = "";
let isAdminUnlocked = false;

document.addEventListener("DOMContentLoaded", async () => {
  initHijriDate();
  renderHadithWorkbench();
  await loadBooksCatalog();
  setupEventListeners();
  checkUrlForAdminTrigger();
});

async function loadBooksCatalog() {
  try {
    const res = await fetch("books.json?t=" + Date.now());
    ALL_PDF_BOOKS = await res.json();
  } catch (err) {
    console.error("Failed to fetch books.json", err);
    ALL_PDF_BOOKS = [];
  }
  renderScholarBooksTiles();
}

function initHijriDate() {
  const badge = document.getElementById("hijri-date-display");
  if (!badge) return;
  try {
    const formatter = new Intl.DateTimeFormat("en-TN-u-ca-islamic-umalqura", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    badge.textContent = formatter.format(new Date());
  } catch (e) {
    badge.textContent = "1448 AH • Abu Muhammad Khuram Shehzad Observatory";
  }
}

// ============================================================================
// RENDER 37+ PDF BOOKS IN TILE FORMAT WITH FRONT-PAGE THUMBNAILS
// ============================================================================
function renderScholarBooksTiles() {
  const grid = document.getElementById("khurram-books-grid");
  if (!grid) return;

  const q = currentBookSearch.trim().toLowerCase();
  const filteredBooks = ALL_PDF_BOOKS.filter((b) => {
    const matchCat = currentBookFilter === "all" || b.category === currentBookFilter;
    const matchQuery =
      !q ||
      (b.title && b.title.toLowerCase().includes(q)) ||
      (b.englishTitle && b.englishTitle.toLowerCase().includes(q)) ||
      (b.author && b.author.toLowerCase().includes(q));
    return matchCat && matchQuery;
  });

  const countBadge = document.getElementById("books-total-count");
  if (countBadge) {
    countBadge.textContent = `Showing ${filteredBooks.length} of ${ALL_PDF_BOOKS.length} Official PDF Books`;
  }

  if (filteredBooks.length === 0) {
    grid.innerHTML = `
      <div class="hadith-card" style="grid-column: 1 / -1; text-align:center; padding: 3rem;">
        <h3 style="color: var(--gold-primary); margin-bottom:0.5rem;">No Matching Books Found</h3>
        <p style="color: var(--text-secondary);">Try searching for another title or select "All Books (${ALL_PDF_BOOKS.length})" above.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredBooks
    .map((book) => {
      const directDownloadUrl = book.downloadUrl || `https://drive.google.com/uc?export=download&id=${book.id}`;
      const thumbSrc = book.thumb || `https://drive.google.com/thumbnail?id=${book.id}&sz=w600`;
      const fallbackThumb = `https://drive.google.com/thumbnail?id=${book.id}&sz=w600`;

      return `
      <article class="book-tile-card">
        <a href="${directDownloadUrl}" target="_blank" rel="noopener noreferrer" class="book-tile-thumb-wrap" title="Click Cover to Download PDF (${book.title})" onclick="showToast('Starting Free PDF Download...')">
          <img
            src="${thumbSrc}"
            alt="${book.title}"
            class="book-tile-thumb-img"
            loading="lazy"
            onerror="if(this.src !== '${fallbackThumb}') this.src='${fallbackThumb}';"
          />
          <span class="book-tile-free-badge">⬇ FREE PDF</span>
        </a>

        <div class="book-tile-body">
          <h3 class="book-tile-clean-name">${book.title}</h3>

          <div class="book-tile-buttons">
            <a
              href="${directDownloadUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-tile-download"
              onclick="showToast('Starting Free PDF Download...')"
            >
              ⬇ Download
            </a>
            <button
              type="button"
              class="btn-tile-read"
              onclick="openPdfPreviewModal('${book.id}')"
            >
              📖 Read
            </button>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

// ============================================================================
// ONLINE PDF READER MODAL
// ============================================================================
window.openPdfPreviewModal = function (bookId) {
  const book = ALL_PDF_BOOKS.find((b) => b.id === bookId);
  if (!book) return;

  const modal = document.getElementById("book-reader-modal");
  const content = document.getElementById("book-modal-body");
  const directDownloadUrl = book.downloadUrl || `https://drive.google.com/uc?export=download&id=${book.id}`;
  const previewEmbedUrl = `https://drive.google.com/file/d/${book.id}/preview`;

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1rem; padding-right:2.5rem;">
      <div>
        <div class="section-tag" style="margin-bottom:0.2rem;">OFFICIAL ABU MUHAMMAD KHURAM SHEHZAD LIBRARY • FREE PUBLIC ACCESS</div>
        <h2 style="font-family:var(--font-urdu); font-size:1.45rem; color:var(--gold-light);" dir="rtl">${book.title}</h2>
        <div style="font-size:0.95rem; color:var(--text-secondary);">${book.englishTitle || ""} — <strong>${book.author}</strong></div>
      </div>
      <div style="display:flex; gap:0.65rem;">
        <a href="${directDownloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding:0.6rem 1.15rem; font-size:0.86rem;">
          ⬇ Direct Download PDF
        </a>
        <a href="https://drive.google.com/file/d/${book.id}/view" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:0.6rem 1rem; font-size:0.86rem;">
          ↗ Open Full Tab
        </a>
      </div>
    </div>

    <div style="width:100%; height:70vh; border-radius:12px; overflow:hidden; border:1px solid var(--gold-border-strong); background:#050a08;">
      <iframe
        src="${previewEmbedUrl}"
        style="width:100%; height:100%; border:none;"
        allow="autoplay"
        title="${book.title}"
      ></iframe>
    </div>
  `;

  modal.classList.add("open");
};

window.closeBookModal = function () {
  const modal = document.getElementById("book-reader-modal");
  const content = document.getElementById("book-modal-body");
  if (modal) modal.classList.remove("open");
  if (content) content.innerHTML = "";
};

// ============================================================================
// HADITH VERIFICATION WORKBENCH
// ============================================================================
function renderHadithWorkbench() {
  const container = document.getElementById("hadith-results-container");
  if (!container) return;

  const query = currentSearch.trim().toLowerCase();
  const filtered = HADITH_DATA.filter((item) => {
    const matchesCat = currentFilter === "all" || item.category === currentFilter;
    const matchesQuery =
      !query ||
      item.arabic.toLowerCase().includes(query) ||
      item.urdu.toLowerCase().includes(query) ||
      item.english.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query) ||
      item.tahqiqNote.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  const countEl = document.getElementById("hadith-count-badge");
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} Verified Research Entries`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="hadith-card" style="text-align:center; padding: 3rem;">
        <h3 style="color: var(--gold-primary); margin-bottom:0.5rem;">No Matching Narrations Found in Current Filter</h3>
        <p style="color: var(--text-secondary);">Try searching in Arabic, Urdu, or English (e.g., "intentions", "نیت", "إسناد", "Muslim", "Ilal").</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map(
      (h) => `
    <article class="hadith-card">
      <div class="hadith-card-top">
        <div class="hadith-source-tag">
          <span>◈ [${h.id}]</span>
          <span>${h.source}</span>
        </div>
        <span class="hukm-badge ${h.gradeClass}">⚖ Hukm: ${h.grade}</span>
      </div>
      
      <div class="hadith-arabic">${h.arabic}</div>
      <div class="hadith-urdu">${h.urdu}</div>
      <p class="hadith-english">“${h.english}”</p>
      
      <div style="background: var(--gold-glow); border-left: 3px solid var(--gold-primary); padding: 0.75rem 1rem; border-radius: 6px; font-size: 0.88rem; color: var(--text-primary); margin-bottom: 1rem;">
        <strong style="color: var(--gold-primary);">Scholarly Tahqiq Note:</strong> ${h.tahqiqNote}
      </div>

      <div class="isnad-chain-box">
        <div class="isnad-label">⛓ Verified Isnad Transmission Chain (Sanad Visualizer)</div>
        <div class="isnad-nodes">
          ${h.isnad
            .map(
              (node, idx) => `
            <span class="narrator-node">
              <strong>${node.name}</strong>
              <span class="narrator-grade">[${node.rank}]</span>
            </span>
            ${idx < h.isnad.length - 1 ? '<span class="chain-arrow">⟶</span>' : ""}
          `
            )
            .join("")}
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

// ============================================================================
// PRIVATE ADMIN PORTAL (RESTRICTED ONLY TO OWNER)
// ============================================================================
function checkUrlForAdminTrigger() {
  if (window.location.hash === "#admin" || window.location.search.includes("admin=1")) {
    openAdminPortal();
  }
  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#admin") {
      openAdminPortal();
    }
  });
  // Secret keyboard shortcut: Ctrl + Shift + A
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      openAdminPortal();
    }
  });
}

window.openAdminPortal = function () {
  const modal = document.getElementById("admin-portal-modal");
  if (modal) modal.classList.add("open");
};

window.closeAdminPortal = function () {
  const modal = document.getElementById("admin-portal-modal");
  if (modal) modal.classList.remove("open");
  if (window.location.hash === "#admin") {
    history.replaceState(null, "", window.location.pathname);
  }
};

window.unlockAdminDashboard = function (e) {
  if (e) e.preventDefault();
  const pinInput = document.getElementById("admin-pin-input").value.trim();
  const tokenInput = document.getElementById("admin-gh-token-input").value.trim();

  // Default Owner PIN for Ameer Hamza / Abu Muhammad Khurram Shahzad: 9030 or zeroai903
  if (pinInput !== "9030" && pinInput.toLowerCase() !== "zeroai903") {
    showToast("❌ Invalid Admin Passcode! Access Denied.");
    return;
  }

  if (tokenInput) {
    localStorage.setItem("almizan_gh_token", tokenInput);
  }

  isAdminUnlocked = true;
  document.getElementById("admin-lock-screen").style.display = "none";
  document.getElementById("admin-dashboard-screen").style.display = "block";
  const savedToken = localStorage.getItem("almizan_gh_token") || "";
  const tokenField = document.getElementById("admin-saved-token");
  if (tokenField && savedToken) tokenField.value = savedToken;
  showToast("🔓 Welcome to Abu Muhammad Khuram Shehzad Admin Dashboard");
};

function extractDriveFileId(input) {
  if (!input) return "";
  const trimmed = input.trim();
  const match = trimmed.match(/[-\w]{25,45}/);
  return match ? match[0] : trimmed;
}

window.handleAdminAddBook = async function (e) {
  if (e) e.preventDefault();
  const urduTitle = document.getElementById("new-book-urdu-title").value.trim();
  const enTitle = document.getElementById("new-book-en-title").value.trim();
  const category = document.getElementById("new-book-category").value;
  const driveLink = document.getElementById("new-book-drive-link").value.trim();
  const pdfFileInput = document.getElementById("new-book-pdf-file");
  const ghToken = document.getElementById("admin-saved-token").value.trim();

  if (!urduTitle) {
    showToast("Please enter the Book Title.");
    return;
  }

  const statusBox = document.getElementById("admin-upload-status");
  statusBox.style.display = "block";
  statusBox.textContent = "⏳ Preparing new book entry...";

  if (ghToken) {
    localStorage.setItem("almizan_gh_token", ghToken);
  }

  let newBookEntry = null;

  // Case 1: Google Drive PDF link or File ID provided
  if (driveLink) {
    const fileId = extractDriveFileId(driveLink);
    newBookEntry = {
      id: fileId,
      title: urduTitle,
      englishTitle: enTitle || urduTitle,
      category: category,
      author: "الشیخ ابو محمد خرم شہزاد",
      date: new Date().getFullYear().toString(),
      thumb: `https://drive.google.com/thumbnail?id=${fileId}&sz=w600`
    };
  }
  // Case 2: Local PDF File selected from computer
  else if (pdfFileInput && pdfFileInput.files.length > 0) {
    const file = pdfFileInput.files[0];
    const safeName = file.name.replace(/[^a-zA-Z0-9._-\u0600-\u06FF]/g, "_");
    const customId = "LOCAL-" + Date.now();

    if (ghToken) {
      statusBox.textContent = "⏳ Uploading PDF file directly to GitHub repository...";
      const b64Pdf = await fileToBase64(file);
      await githubPutFile(
        `pdfs/${safeName}`,
        b64Pdf,
        `Admin upload PDF: ${urduTitle}`,
        ghToken
      );
    }

    newBookEntry = {
      id: customId,
      title: urduTitle,
      englishTitle: enTitle || urduTitle,
      category: category,
      author: "الشیخ ابو محمد خرم شہزاد",
      date: new Date().getFullYear().toString(),
      downloadUrl: `pdfs/${safeName}`,
      thumb: "thumbnails/1gYh46VZmr0J0QYIDAWcCoTbnQCWmKfhH.jpg"
    };
  } else {
    statusBox.textContent = "❌ Please provide either a Google Drive PDF Link or select a PDF file.";
    return;
  }

  // Prepend to catalog
  ALL_PDF_BOOKS.unshift(newBookEntry);
  renderScholarBooksTiles();

  // If GitHub Token is present, commit updated books.json directly to live repository
  if (ghToken) {
    try {
      statusBox.textContent = "⏳ Publishing updated books.json to GitHub & Vercel...";
      const jsonStr = JSON.stringify(ALL_PDF_BOOKS, null, 2);
      const b64Json = btoa(unescape(encodeURIComponent(jsonStr)));
      await githubPutFile(
        "books.json",
        b64Json,
        `Publish new book: ${urduTitle}`,
        ghToken
      );
      statusBox.textContent = "✅ Successfully published to live website! Vercel & GitHub Pages will update in ~15 seconds.";
      showToast("Book published live to GitHub & Vercel!");
    } catch (err) {
      statusBox.textContent = "⚠️ Added to current preview, but GitHub push failed: " + err.message;
    }
  } else {
    statusBox.textContent = "✅ Added to local preview! (Enter your GitHub Token above to push permanently, or ask your AI assistant in chat to push it for you.)";
    showToast("Book added to preview!");
  }

  document.getElementById("admin-add-book-form").reset();
};

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      const base64 = result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function githubPutFile(path, contentBase64, message, token) {
  const owner = "ks4993850-lang";
  const repo = "abu-muhammad-khuram-shehzad";
  const uri = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json"
  };

  let sha = null;
  try {
    const getRes = await fetch(uri, { headers });
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    }
  } catch (e) {}

  const body = { message, content: contentBase64, branch: "main" };
  if (sha) body.sha = sha;

  const putRes = await fetch(uri, {
    method: "PUT",
    headers,
    body: JSON.stringify(body)
  });

  if (!putRes.ok) {
    const errText = await putRes.text();
    throw new Error(errText);
  }
  return await putRes.json();
}

function showToast(message) {
  let toast = document.getElementById("almizan-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "almizan-toast";
    toast.style.cssText =
      "position:fixed; bottom:24px; right:24px; background:var(--gold-primary); color:#070d0a; padding:0.85rem 1.35rem; border-radius:10px; font-weight:700; z-index:999; box-shadow:0 10px 30px rgba(0,0,0,0.5); transition:opacity 0.3s ease;";
    document.body.appendChild(toast);
  }
  toast.textContent = `✦ ${message}`;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 3200);
}

function setupEventListeners() {
  // Hadith search
  const searchInput = document.getElementById("hadith-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderHadithWorkbench();
    });
  }

  // Book search
  const bookSearchInput = document.getElementById("book-search-input");
  if (bookSearchInput) {
    bookSearchInput.addEventListener("input", (e) => {
      currentBookSearch = e.target.value;
      renderScholarBooksTiles();
    });
  }

  // Hadith filter pills
  document.querySelectorAll("[data-hadith-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-hadith-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-hadith-filter");
      renderHadithWorkbench();
    });
  });

  // Book category filter pills
  document.querySelectorAll("[data-book-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-book-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentBookFilter = btn.getAttribute("data-book-filter");
      renderScholarBooksTiles();
    });
  });

  // Theme Toggle
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "parchment") {
        document.documentElement.removeAttribute("data-theme");
        themeBtn.textContent = "☀";
        showToast("Switched to Illuminated Manuscript Night Mode");
      } else {
        document.documentElement.setAttribute("data-theme", "parchment");
        themeBtn.textContent = "☾";
        showToast("Switched to Classical Samarqand Parchment Mode");
      }
    });
  }

  // Language Switcher
  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-switch");
      document.querySelectorAll("[data-lang-switch]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyLanguage(lang);
    });
  });

  // Close modals on backdrop click
  const modal = document.getElementById("book-reader-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeBookModal();
    });
  }
  const adminModal = document.getElementById("admin-portal-modal");
  if (adminModal) {
    adminModal.addEventListener("click", (e) => {
      if (e.target === adminModal) closeAdminPortal();
    });
  }
}

function applyLanguage(lang) {
  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
  document.documentElement.setAttribute("dir", t.dir);
  document.documentElement.setAttribute("lang", lang);

  const map = {
    "nav-home-text": t.navHome,
    "nav-books-text": t.navBooks,
    "nav-tahqiq-text": t.navTahqiq,
    "nav-pillars-text": t.navPillars,
    "nav-manuscripts-text": t.navManuscripts,
    "hero-eyebrow-text": t.heroEyebrow,
    "hero-desc-text": t.heroDesc,
    "cta-books-text": t.ctaExploreBooks,
    "cta-workbench-text": t.ctaWorkbench
  };

  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  const heroTitle = document.getElementById("hero-title-text");
  if (heroTitle) heroTitle.innerHTML = t.heroTitle;

  showToast(
    lang === "ur"
      ? "زبان اردو (نستعلیق) میں تبدیل کر دی گئی"
      : lang === "ar"
      ? "تم تغيير اللغة إلى العربية الفصحى"
      : "Switched interface language to English"
  );
}
