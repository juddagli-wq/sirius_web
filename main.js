/* ==========================================
   SIRIUS GLOBAL - MULTI-LANGUAGE (TR / DE / EN) & INTERACTIVE APPLICATION LOGIC
   TalentOrange Dual-Perspective, Mega Menu, I18n Engine & DSGVO Cookie Banner
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMegaMenu();
    initPerspectiveSwitcher();
    initEligibilityWizard();
    initCourseExplorer();
    initJobBoard();
    initCounterAnimations();
    initModalControls();
    initMobileNav();
    initCookieBanner();
});

/* ==========================================
   FULL MULTI-LANGUAGE I18N DICTIONARY & ENGINE (TR / DE / EN)
   ========================================== */
let currentLang = localStorage.getItem('sirius_lang') || 'tr';

const translations = {
    tr: {
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımızda",
        nav_medicare: "Sirius Medicare",
        nav_academy: "Akademi",
        nav_employers: "İşverenler",
        nav_jobs: "Açık İlanlar",
        nav_contact: "İletişim",
        
        btn_candidate: "Adaylar İçin",
        btn_employer: "İşverenler İçin",
        
        // Mega menu trigger labels
        mega_talents: "Yetenekler İçin",
        mega_employers: "İşverenler İçin",
        mega_about: "Hakkımızda",
        
        // Mega Panel 1 - Talents
        mega_t_col1_title: "Almanya'da Çalışmak",
        mega_t_col1_1: "Sağlık Hizmeti (Doktor & Hemşire)",
        mega_t_col1_2: "Eğitim & Dil Okulları",
        mega_t_col1_3: "Fizyoterapi & Ergoterapi",
        mega_t_col1_4: "Huzurevleri & Yaşlı Bakım",
        mega_t_col2_title: "Hizmetler ve Bilgiler",
        mega_t_col2_1: "Sirius Global Programı",
        mega_t_col2_2: "Almanca Dil Okullarımız",
        mega_t_col2_3: "Hemşirelik Denklik Eğitimi",
        mega_t_col2_4: "Sirius Kampüsü & Konaklama",
        mega_t_col2_5: "Sıkça Sorulan Sorular",
        mega_t_col3_title: "Başvuru",
        mega_t_col3_desc: "Almanya'da çalışmaya hazır mısınız?",
        mega_t_col3_btn: "Şimdi Başvur",
        mega_t_sidebar_title: "Size Nasıl Yardımcı Olabiliriz?",
        mega_t_sidebar_sub: "Sirius Global İletişim Kişiniz",
        mega_t_sidebar_team: "Sirius Danışmanlık Ekibi",
        mega_t_sidebar_link: "Profesyoneller İçin Bilgiler",
        
        // Mega Panel 2 - Employers
        mega_e_col1_title: "Sağlık & Bakım Hizmetleri",
        mega_e_col1_1: "Akut Bakım Hemşireleri",
        mega_e_col1_2: "Ameliyathane & Anestezi (OTA/ATA)",
        mega_e_col1_3: "Radyoloji & MTR Teknikeri",
        mega_e_col1_4: "Klinik Doktorları",
        mega_e_col2_title: "Hizmetlerimiz",
        mega_e_col2_1: "Nitelikli Personel Vermittlung",
        mega_e_col2_2: "İnterkültürel Atölyeler",
        mega_e_col2_3: "Vize & Denklik Hizmetleri",
        mega_e_col2_4: "Gütesiegel & Etik İşe Alım",
        mega_e_col3_title: "İşveren Görüşmesi",
        mega_e_col3_desc: "Kurumunuz için uzman mı arıyorsunuz?",
        mega_e_col3_btn: "Görüşme Talebi Alın",
        mega_e_sidebar_title: "Kurumsal İnsan Kaynağı",
        mega_e_sidebar_sub: "Almanya Genel Merkez",
        
        // Mega Panel 3 - About
        mega_a_col1_title: "Şirketimiz",
        mega_a_col1_1: "Vizyon & Misyonumuz",
        mega_a_col1_2: "Essen & Berlin Merkezlerimiz",
        mega_a_col1_3: "Ekibimiz",
        mega_a_col2_title: "Kalite & Etik",
        mega_a_col2_1: "Gütesiegel Etik İşe Alım",
        mega_a_col2_2: "Basın & Medya",
        mega_a_col3_title: "İletişim",
        mega_a_col3_desc: "Bizimle doğrudan iletişime geçin.",
        mega_a_col3_btn: "İletişim Sayfası",
        mega_a_sidebar_title: "Essen Merkez Ofisi",
        mega_a_sidebar_desc: "Katernberger Str. 107, 45327 Essen, Almanya",
        
        // Header CTA button
        header_cta: "Şimdi Başvur",
        
        // Floating badges
        badge_1_sub: "Almanya'da Yerleşen Aday",
        badge_2_sub: "Vize & Denklik Başarısı",
        
        // Top bar
        top_address: "Katernberger Str. 107, 45327 Essen, Almanya",
        
        hero_tag_candidate: `<i class="fa-solid fa-certificate" aria-hidden="true"></i> ALMANYA'DA KANITLANMIŞ KARİYER YOLCULUĞU`,
        hero_title_candidate: `Almanya'da Hayalinizdeki Kariyer ve Yaşama Giden <span class="highlight">Uluslararası Köprü</span>`,
        hero_desc_candidate: `Sirius Global; sağlık çalışanları, doktorlar, hekimler ve uzman nitelikli profesyonelleri Almanya'nın önde gelen sağlık kurumları ve şirketleriyle buluşturuyor. Dil eğitiminden denkliğe, vizeden konaklamaya tüm süreçte sizinleyiz.`,
        
        hero_tag_employer: `<i class="fa-solid fa-building-hospital" aria-hidden="true"></i> SAĞLIK VE İŞ PİYASASI İÇİN YETENEK ÇÖZÜMLERİ`,
        hero_title_employer: `Kurumunuz İçin Nitelikli Uluslararası İnsan Kaynağı <span class="highlight">Ve Etik İşe Alım</span>`,
        hero_desc_employer: `Almanya'daki klinik, hastane ve kurumların uzman personel ihtiyacını uçtan uca yönetiyoruz. Sirius Talent & Partner modeli ile adayın dil yeterliliğinden denklik ve Almanya'ya intikaline kadar %100 güvence veriyoruz.`,
        
        cta_wizard: `<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Uygunluk Testini Başlat`,
        cta_jobs: `<i class="fa-solid fa-briefcase" aria-hidden="true"></i> Açık İlanları Keşfet`,
        cta_consulting: `<i class="fa-solid fa-calendar-days" aria-hidden="true"></i> İşveren Danışmanlığı Alın`,
        
        section_wizard_tag: `<i class="fa-solid fa-sliders" aria-hidden="true"></i> KARİYER DEĞERLENDİRME`,
        section_wizard_title: `Almanya Kariyer & Uygunluk Testi`,
        section_wizard_subtitle: `3 hızlı adımda profilinizi değerlendirin, size en uygun Sirius programını ve Almanya yol haritanızı anında görün.`,
        
        section_services_tag: `<i class="fa-solid fa-cubes-stacked" aria-hidden="true"></i> BÜTÜNLEŞİK HİZMET MODELİMİZ`,
        section_services_title: `Sirius Ekosistemi <span>Uçtan Uca Çözümler</span>`,
        section_services_subtitle: `Dil eğitiminden denklik sürecine, konaklamadan hastane yerleşimine tüm ihtiyaçlarınız tek çatı altında.`,
        
        section_reels_tag: `<i class="fa-brands fa-instagram" aria-hidden="true"></i> INSTAGRAM CANLI VİDEOLAR & HİKAYELER`,
        section_reels_title: `Almanya Yolculuğu <span>Canlı Deneyimler</span>`,
        section_reels_subtitle: `Doktor, hemşire ve uzmanlarımızın Almanya'daki ilk günleri, klinik deneyimleri ve dil başarıları. @sirius_global Instagram kanalımızdan en sevilen reels videoları.`,
        
        stat_candidates: "Danışmanlık Verilen Aday",
        stat_placed: "Almanya'da Yerleşen Uzman",
        stat_hospitals: "Anlaşmalı Klinik & Hastane",
        stat_satisfaction: "Aday & Kurum Memnuniyeti",
        
        footer_brand_desc: "Sirius Global GmbH – Almanya Essen & Berlin merkezli, sürdürülebilir uluslararası personel istihdamı, sağlık çalışanları ve dil akademisi alanında sertifikalı iş ortağınız.",
        footer_services_title: "Hizmetler",
        footer_legal_title: "Mevzuat & Yasal (EU/DE)",
        footer_contact_title: "Essen Merkez Ofis",
        footer_rights: "© 2026 Copyright © Sirius Global GmbH. Tüm hakları saklıdır."
    },
    de: {
        nav_home: "Startseite",
        nav_about: "Über uns",
        nav_medicare: "Sirius Medicare",
        nav_academy: "Akademie",
        nav_employers: "Für Arbeitgeber",
        nav_jobs: "Stellenangebote",
        nav_contact: "Kontakt",
        
        btn_candidate: "Für Bewerber",
        btn_employer: "Für Arbeitgeber",
        
        // Mega menu trigger labels
        mega_talents: "Für Talente",
        mega_employers: "Für Arbeitgeber",
        mega_about: "Über uns",
        
        // Mega Panel 1 - Talents
        mega_t_col1_title: "Arbeiten in Deutschland",
        mega_t_col1_1: "Gesundheitswesen (Ärzte & Pflege)",
        mega_t_col1_2: "Bildung & Sprachschulen",
        mega_t_col1_3: "Physiotherapie & Ergotherapie",
        mega_t_col1_4: "Altenpflege & Seniorenheime",
        mega_t_col2_title: "Leistungen & Informationen",
        mega_t_col2_1: "Das Sirius Global Programm",
        mega_t_col2_2: "Unsere Sprachschulen",
        mega_t_col2_3: "Anerkennungskurse Pflege",
        mega_t_col2_4: "Sirius Campus & Unterkunft",
        mega_t_col2_5: "Häufig gestellte Fragen",
        mega_t_col3_title: "Bewerbung",
        mega_t_col3_desc: "Bereit, in Deutschland zu arbeiten?",
        mega_t_col3_btn: "Jetzt bewerben",
        mega_t_sidebar_title: "Wie können wir helfen?",
        mega_t_sidebar_sub: "Ihr Sirius Ansprechpartner",
        mega_t_sidebar_team: "Sirius Beratungsteam",
        mega_t_sidebar_link: "Infos für Fachkräfte",
        
        // Mega Panel 2 - Employers
        mega_e_col1_title: "Gesundheit & Pflege",
        mega_e_col1_1: "Akutpflege-Fachkräfte",
        mega_e_col1_2: "OP & Anästhesie (OTA/ATA)",
        mega_e_col1_3: "Radiologie & MTR-Techniker",
        mega_e_col1_4: "Klinikärzte",
        mega_e_col2_title: "Unsere Leistungen",
        mega_e_col2_1: "Qualifizierte Personalvermittlung",
        mega_e_col2_2: "Interkulturelle Workshops",
        mega_e_col2_3: "Visum & Anerkennungsservice",
        mega_e_col2_4: "Gütesiegel & Ethisches Recruiting",
        mega_e_col3_title: "Arbeitgeber-Gespräch",
        mega_e_col3_desc: "Suchen Sie Fachkräfte für Ihre Einrichtung?",
        mega_e_col3_btn: "Beratung anfordern",
        mega_e_sidebar_title: "Personalberatung",
        mega_e_sidebar_sub: "Hauptsitz Deutschland",
        
        // Mega Panel 3 - About
        mega_a_col1_title: "Unser Unternehmen",
        mega_a_col1_1: "Vision & Mission",
        mega_a_col1_2: "Standorte Essen & Berlin",
        mega_a_col1_3: "Unser Team",
        mega_a_col2_title: "Qualität & Ethik",
        mega_a_col2_1: "Gütesiegel Faire Anwerbung",
        mega_a_col2_2: "Presse & Medien",
        mega_a_col3_title: "Kontakt",
        mega_a_col3_desc: "Kontaktieren Sie uns direkt.",
        mega_a_col3_btn: "Kontaktseite",
        mega_a_sidebar_title: "Zentrale Essen",
        mega_a_sidebar_desc: "Katernberger Str. 107, 45327 Essen, Deutschland",
        
        // Header CTA button
        header_cta: "Jetzt bewerben",
        
        // Floating badges
        badge_1_sub: "In DE platzierte Fachkräfte",
        badge_2_sub: "Visum- & Anerkennungserfolg",
        
        // Top bar
        top_address: "Katernberger Str. 107, 45327 Essen, Deutschland",
        
        hero_tag_candidate: `<i class="fa-solid fa-certificate" aria-hidden="true"></i> BEWÄHRTER KARRIEREWEG IN DEUTSCHLAND`,
        hero_title_candidate: `Ihre internationale Brücke zu <span class="highlight">Karriere & Leben</span> in Deutschland`,
        hero_desc_candidate: `Sirius Global verbindet Pflegekräfte, Ärzte und hochqualifizierte Fachkräfte mit führenden deutschen Krankenhäusern und Unternehmen. Wir begleiten Sie vom Sprachkurs bis zur Anerkennung und Relocation.`,
        
        hero_tag_employer: `<i class="fa-solid fa-building-hospital" aria-hidden="true"></i> PERSONAL- UND RECRUITING-LÖSUNGEN`,
        hero_title_employer: `Qualifizierte internationale Fachkräfte <span class="highlight">mit ethischer Anwerbung</span>`,
        hero_desc_employer: `Wir decken den Fachkräftebedarf deutscher Kliniken und Pflegeeinrichtungen nachhaltig. Mit Gütesiegel 'Faire Anwerbung Pflege Deutschland' garantieren wir volle Transparenz und Qualität.`,
        
        cta_wizard: `<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Eignungstest starten`,
        cta_jobs: `<i class="fa-solid fa-briefcase" aria-hidden="true"></i> Stellenangebote entdecken`,
        cta_consulting: `<i class="fa-solid fa-calendar-days" aria-hidden="true"></i> Arbeitgeber-Beratung anfordern`,
        
        section_wizard_tag: `<i class="fa-solid fa-sliders" aria-hidden="true"></i> KARRIEREBEWERTUNG`,
        section_wizard_title: `Karriere- & Eignungstest für Deutschland`,
        section_wizard_subtitle: `Bewerten Sie Ihr Profil in 3 schnellen Schritten und finden Sie das passende Sirius-Programm für Ihren Weg nach Deutschland.`,
        
        section_services_tag: `<i class="fa-solid fa-cubes-stacked" aria-hidden="true"></i> UNSERE LEISTUNGEN`,
        section_services_title: `Das Sirius Ökosystem <span>End-to-End Lösungen</span>`,
        section_services_subtitle: `Sprachkurse, Berufsanerkennung, Relocation und Vermittlung – alles aus einer Hand.`,
        
        section_reels_tag: `<i class="fa-brands fa-instagram" aria-hidden="true"></i> INSTAGRAM REELS & ERFOLGSGESCHICHTEN`,
        section_reels_title: `Erfolgsgeschichten & <span>Impressionen</span>`,
        section_reels_subtitle: `Erfahren Sie aus erster Hand, wie unsere Fachkräfte in Deutschland erfolgreich gestartet sind.`,
        
        stat_candidates: "Beratene Kandidaten",
        stat_placed: "Platzierte Fachkräfte in DE",
        stat_hospitals: "Partnerkliniken & Krankenhäuser",
        stat_satisfaction: "Zufriedenheit der Partner",
        
        footer_brand_desc: "Sirius Global GmbH – Ihr zertifizierter Partner für nachhaltige Personalvermittlung, Pflegekräfte und Sprachakademie in Essen & Berlin.",
        footer_services_title: "Leistungen",
        footer_legal_title: "Rechtliches (EU/DE)",
        footer_contact_title: "Zentrale Essen",
        footer_rights: "© 2026 Copyright © Sirius Global GmbH. Alle Rechte vorbehalten."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_medicare: "Sirius Medicare",
        nav_academy: "Academy",
        nav_employers: "For Employers",
        nav_jobs: "Open Jobs",
        nav_contact: "Contact",
        
        btn_candidate: "For Candidates",
        btn_employer: "For Employers",
        
        // Mega menu trigger labels
        mega_talents: "For Talents",
        mega_employers: "For Employers",
        mega_about: "About Us",
        
        // Mega Panel 1 - Talents
        mega_t_col1_title: "Working in Germany",
        mega_t_col1_1: "Healthcare (Doctors & Nurses)",
        mega_t_col1_2: "Education & Language Schools",
        mega_t_col1_3: "Physiotherapy & Occupational Therapy",
        mega_t_col1_4: "Elderly Care & Nursing Homes",
        mega_t_col2_title: "Services & Information",
        mega_t_col2_1: "The Sirius Global Program",
        mega_t_col2_2: "Our German Language Schools",
        mega_t_col2_3: "Nursing Recognition Courses",
        mega_t_col2_4: "Sirius Campus & Accommodation",
        mega_t_col2_5: "Frequently Asked Questions",
        mega_t_col3_title: "Application",
        mega_t_col3_desc: "Ready to work in Germany?",
        mega_t_col3_btn: "Apply Now",
        mega_t_sidebar_title: "How Can We Help?",
        mega_t_sidebar_sub: "Your Sirius Contact Person",
        mega_t_sidebar_team: "Sirius Advisory Team",
        mega_t_sidebar_link: "Information for Professionals",
        
        // Mega Panel 2 - Employers
        mega_e_col1_title: "Healthcare & Nursing",
        mega_e_col1_1: "Acute Care Nurses",
        mega_e_col1_2: "OR & Anesthesia (OTA/ATA)",
        mega_e_col1_3: "Radiology & MTR Technicians",
        mega_e_col1_4: "Clinical Physicians",
        mega_e_col2_title: "Our Services",
        mega_e_col2_1: "Qualified Staff Placement",
        mega_e_col2_2: "Intercultural Workshops",
        mega_e_col2_3: "Visa & Recognition Services",
        mega_e_col2_4: "Quality Seal & Ethical Recruiting",
        mega_e_col3_title: "Employer Meeting",
        mega_e_col3_desc: "Looking for specialists for your institution?",
        mega_e_col3_btn: "Request Consultation",
        mega_e_sidebar_title: "Corporate Recruitment",
        mega_e_sidebar_sub: "Germany Headquarters",
        
        // Mega Panel 3 - About
        mega_a_col1_title: "Our Company",
        mega_a_col1_1: "Vision & Mission",
        mega_a_col1_2: "Essen & Berlin Offices",
        mega_a_col1_3: "Our Team",
        mega_a_col2_title: "Quality & Ethics",
        mega_a_col2_1: "Fair Recruitment Quality Seal",
        mega_a_col2_2: "Press & Media",
        mega_a_col3_title: "Contact",
        mega_a_col3_desc: "Get in touch with us directly.",
        mega_a_col3_btn: "Contact Page",
        mega_a_sidebar_title: "Essen Head Office",
        mega_a_sidebar_desc: "Katernberger Str. 107, 45327 Essen, Germany",
        
        // Header CTA button
        header_cta: "Apply Now",
        
        // Floating badges
        badge_1_sub: "Specialists Placed in Germany",
        badge_2_sub: "Visa & Recognition Success",
        
        // Top bar
        top_address: "Katernberger Str. 107, 45327 Essen, Germany",
        
        hero_tag_candidate: `<i class="fa-solid fa-certificate" aria-hidden="true"></i> PROVEN CAREER PATHWAY IN GERMANY`,
        hero_title_candidate: `Your International Bridge to <span class="highlight">Career & Life</span> in Germany`,
        hero_desc_candidate: `Sirius Global connects healthcare professionals, medical doctors, and skilled specialists with leading German hospitals and institutions. From language learning to recognition and housing, we support you all the way.`,
        
        hero_tag_employer: `<i class="fa-solid fa-building-hospital" aria-hidden="true"></i> HEALTHCARE RECRUITMENT SOLUTIONS`,
        hero_title_employer: `Qualified International Talent <span class="highlight">with Ethical Recruitment</span>`,
        hero_desc_employer: `We manage end-to-end recruitment for German hospitals and clinics. Backed by the 'Fair Recruitment' seal, we ensure 100% compliance, language competence, and long-term retention.`,
        
        cta_wizard: `<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Start Eligibility Test`,
        cta_jobs: `<i class="fa-solid fa-briefcase" aria-hidden="true"></i> Explore Open Positions`,
        cta_consulting: `<i class="fa-solid fa-calendar-days" aria-hidden="true"></i> Request Employer Consultation`,
        
        section_wizard_tag: `<i class="fa-solid fa-sliders" aria-hidden="true"></i> CAREER ASSESSMENT`,
        section_wizard_title: `Germany Career Eligibility Test`,
        section_wizard_subtitle: `Evaluate your profile in 3 quick steps and uncover your ideal Sirius pathway to Germany.`,
        
        section_services_tag: `<i class="fa-solid fa-cubes-stacked" aria-hidden="true"></i> INTEGRATED SERVICES`,
        section_services_title: `The Sirius Ecosystem <span>End-to-End Solutions</span>`,
        section_services_subtitle: `Language courses, degree recognition, relocation support, and placement – all under one roof.`,
        
        section_reels_tag: `<i class="fa-brands fa-instagram" aria-hidden="true"></i> INSTAGRAM REELS & TESTIMONIALS`,
        section_reels_title: `Live Experiences <span>& Testimonials</span>`,
        section_reels_subtitle: `Watch real stories from doctors and nurses starting their new lives and careers in Germany.`,
        
        stat_candidates: "Candidates Advised",
        stat_placed: "Specialists Placed in Germany",
        stat_hospitals: "Partner Hospitals & Clinics",
        stat_satisfaction: "Candidate & Client Satisfaction",
        
        footer_brand_desc: "Sirius Global GmbH – Your certified partner for sustainable international recruitment, healthcare professionals, and language academy in Essen & Berlin.",
        footer_services_title: "Services",
        footer_legal_title: "Legal (EU/DE)",
        footer_contact_title: "Essen HQ",
        footer_rights: "© 2026 Copyright © Sirius Global GmbH. All rights reserved."
    }
};

function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.dataset.lang;
            if (selectedLang) {
                switchLanguage(selectedLang);
            }
        });
    });

    // Load saved language on init
    switchLanguage(currentLang, false);
}

function switchLanguage(lang, notify = true) {
    if (!translations[lang]) return;

    currentLang = lang;
    localStorage.setItem('sirius_lang', lang);
    document.documentElement.lang = lang;

    // Highlight active lang buttons across top bar
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(b => {
        if (b.dataset.lang === lang) {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    });

    const dict = translations[lang];

    // 1. Perspective buttons
    const candidateBtn = document.getElementById('btn-perspective-candidate');
    const employerBtn = document.getElementById('btn-perspective-employer');
    if (candidateBtn) candidateBtn.textContent = dict.btn_candidate;
    if (employerBtn) employerBtn.textContent = dict.btn_employer;

    // 2. Hero Section
    const heroTag = document.getElementById('hero-tag');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const primaryCta = document.getElementById('hero-primary-cta');
    const secondaryCta = document.getElementById('hero-secondary-cta');

    if (heroTag) {
        heroTag.innerHTML = currentMode === 'candidate' ? dict.hero_tag_candidate : dict.hero_tag_employer;
    }
    if (heroTitle) {
        heroTitle.innerHTML = currentMode === 'candidate' ? dict.hero_title_candidate : dict.hero_title_employer;
    }
    if (heroDesc) {
        heroDesc.textContent = currentMode === 'candidate' ? dict.hero_desc_candidate : dict.hero_desc_employer;
    }
    if (primaryCta && currentMode === 'candidate') {
        primaryCta.innerHTML = dict.cta_wizard;
    } else if (primaryCta && currentMode === 'employer') {
        primaryCta.innerHTML = dict.cta_consulting;
    }
    if (secondaryCta) {
        secondaryCta.innerHTML = dict.cta_jobs;
    }

    // 3. Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = dict.nav_home;
        if (href === 'hakkimizda.html') link.textContent = dict.nav_about;
        if (href === 'sirius-medicare.html') link.textContent = dict.nav_medicare;
        if (href === 'sirius-akademi.html') link.textContent = dict.nav_academy;
        if (href === 'sirius-talent.html') link.textContent = dict.nav_employers;
        if (href === 'kariyer-firsatlari.html') link.textContent = dict.nav_jobs;
        if (href === 'iletisim.html') link.textContent = dict.nav_contact;
    });

    // 3b. Mega Menu Trigger Buttons
    const megaTriggers = document.querySelectorAll('.mega-trigger-btn');
    if (megaTriggers.length >= 3) {
        megaTriggers[0].innerHTML = dict.mega_talents + ' <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
        megaTriggers[1].innerHTML = dict.mega_employers + ' <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
        megaTriggers[2].innerHTML = dict.mega_about + ' <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
    }

    // 3c. Mega Panel 1 - Talents
    const megaPanelTalents = document.getElementById('mega-panel-talents');
    if (megaPanelTalents) {
        const cols = megaPanelTalents.querySelectorAll('.mega-column-title');
        const links = megaPanelTalents.querySelectorAll('.mega-links-list');
        if (cols[0]) cols[0].textContent = dict.mega_t_col1_title;
        if (cols[1]) cols[1].textContent = dict.mega_t_col2_title;
        if (cols[2]) cols[2].textContent = dict.mega_t_col3_title;
        // Column 1 links
        if (links[0]) {
            const items = links[0].querySelectorAll('a');
            if (items[0]) items[0].textContent = dict.mega_t_col1_1;
            if (items[1]) items[1].textContent = dict.mega_t_col1_2;
            if (items[2]) items[2].textContent = dict.mega_t_col1_3;
            if (items[3]) items[3].textContent = dict.mega_t_col1_4;
        }
        // Column 2 links
        if (links[1]) {
            const items = links[1].querySelectorAll('a');
            if (items[0]) items[0].textContent = dict.mega_t_col2_1;
            if (items[1]) items[1].textContent = dict.mega_t_col2_2;
            if (items[2]) items[2].textContent = dict.mega_t_col2_3;
            if (items[3]) items[3].textContent = dict.mega_t_col2_4;
            if (items[4]) items[4].textContent = dict.mega_t_col2_5;
        }
        // Column 3 description & button
        const col3Desc = megaPanelTalents.querySelectorAll('.mega-panel-inner > div')[2];
        if (col3Desc) {
            const p = col3Desc.querySelector('p');
            const btn = col3Desc.querySelector('.btn');
            if (p) p.textContent = dict.mega_t_col3_desc;
            if (btn) btn.innerHTML = '<i class="fa-regular fa-face-smile" aria-hidden="true"></i> ' + dict.mega_t_col3_btn;
        }
        // Sidebar
        const sidebar = megaPanelTalents.querySelector('.mega-sidebar-box');
        if (sidebar) {
            const sTitle = sidebar.querySelector('.mega-sidebar-title');
            if (sTitle) sTitle.textContent = dict.mega_t_sidebar_title;
            const sSub = sidebar.querySelectorAll('div[style]');
            if (sSub.length > 0) {
                for (const el of sSub) {
                    if (el.textContent.trim() && el.style.fontSize === '0.8rem') {
                        el.textContent = dict.mega_t_sidebar_sub;
                        break;
                    }
                }
            }
            const sTeam = sidebar.querySelector('div[style*="font-weight: 700"][style*="color: var(--text-primary)"]');
            if (sTeam) sTeam.textContent = dict.mega_t_sidebar_team;
            const sLink = sidebar.querySelector('a');
            if (sLink) sLink.innerHTML = '&gt; ' + dict.mega_t_sidebar_link;
        }
    }

    // 3d. Mega Panel 2 - Employers
    const megaPanelEmployers = document.getElementById('mega-panel-employers');
    if (megaPanelEmployers) {
        const cols = megaPanelEmployers.querySelectorAll('.mega-column-title');
        const links = megaPanelEmployers.querySelectorAll('.mega-links-list');
        if (cols[0]) cols[0].textContent = dict.mega_e_col1_title;
        if (cols[1]) cols[1].textContent = dict.mega_e_col2_title;
        if (cols[2]) cols[2].textContent = dict.mega_e_col3_title;
        // Column 1 links
        if (links[0]) {
            const items = links[0].querySelectorAll('a');
            if (items[0]) items[0].textContent = dict.mega_e_col1_1;
            if (items[1]) items[1].textContent = dict.mega_e_col1_2;
            if (items[2]) items[2].textContent = dict.mega_e_col1_3;
            if (items[3]) items[3].textContent = dict.mega_e_col1_4;
        }
        // Column 2 links
        if (links[1]) {
            const items = links[1].querySelectorAll('a');
            if (items[0]) items[0].textContent = dict.mega_e_col2_1;
            if (items[1]) items[1].textContent = dict.mega_e_col2_2;
            if (items[2]) items[2].textContent = dict.mega_e_col2_3;
            if (items[3]) items[3].textContent = dict.mega_e_col2_4;
        }
        // Column 3 description & button
        const col3Desc = megaPanelEmployers.querySelectorAll('.mega-panel-inner > div')[2];
        if (col3Desc) {
            const p = col3Desc.querySelector('p');
            const btn = col3Desc.querySelector('.btn');
            if (p) p.textContent = dict.mega_e_col3_desc;
            if (btn) btn.innerHTML = '<i class="fa-solid fa-calendar-check" aria-hidden="true"></i> ' + dict.mega_e_col3_btn;
        }
        // Sidebar
        const sidebar = megaPanelEmployers.querySelector('.mega-sidebar-box');
        if (sidebar) {
            const sTitle = sidebar.querySelector('.mega-sidebar-title');
            if (sTitle) sTitle.textContent = dict.mega_e_sidebar_title;
            const sSub = sidebar.querySelectorAll('div[style]');
            if (sSub.length > 0) {
                for (const el of sSub) {
                    if (el.textContent.trim() && el.style.fontSize === '0.8rem') {
                        el.textContent = dict.mega_e_sidebar_sub;
                        break;
                    }
                }
            }
        }
    }

    // 3e. Mega Panel 3 - About
    const megaPanelAbout = document.getElementById('mega-panel-about');
    if (megaPanelAbout) {
        const cols = megaPanelAbout.querySelectorAll('.mega-column-title');
        const links = megaPanelAbout.querySelectorAll('.mega-links-list');
        if (cols[0]) cols[0].textContent = dict.mega_a_col1_title;
        if (cols[1]) cols[1].textContent = dict.mega_a_col2_title;
        if (cols[2]) cols[2].textContent = dict.mega_a_col3_title;
        // Column 1 links
        if (links[0]) {
            const items = links[0].querySelectorAll('a');
            if (items[0]) items[0].textContent = dict.mega_a_col1_1;
            if (items[1]) items[1].textContent = dict.mega_a_col1_2;
            if (items[2]) items[2].textContent = dict.mega_a_col1_3;
        }
        // Column 2 links
        if (links[1]) {
            const items = links[1].querySelectorAll('a');
            if (items[0]) items[0].textContent = dict.mega_a_col2_1;
            if (items[1]) items[1].textContent = dict.mega_a_col2_2;
        }
        // Column 3 description & button
        const col3Divs = megaPanelAbout.querySelectorAll('.mega-panel-inner > div');
        if (col3Divs[2]) {
            const p = col3Divs[2].querySelector('p');
            const btn = col3Divs[2].querySelector('.btn');
            if (p) p.textContent = dict.mega_a_col3_desc;
            if (btn) btn.textContent = dict.mega_a_col3_btn;
        }
        // Sidebar
        const sidebar = megaPanelAbout.querySelector('.mega-sidebar-box');
        if (sidebar) {
            const sTitle = sidebar.querySelector('.mega-sidebar-title');
            const sDesc = sidebar.querySelector('.mega-sidebar-desc');
            if (sTitle) sTitle.textContent = dict.mega_a_sidebar_title;
            if (sDesc) sDesc.textContent = dict.mega_a_sidebar_desc;
        }
    }

    // 3f. Header CTA Button
    const headerCtaBtn = document.querySelector('header .btn-orange[onclick*="openModal"]');
    if (headerCtaBtn) {
        headerCtaBtn.innerHTML = dict.header_cta + ' <i class="fa-regular fa-face-smile" aria-hidden="true"></i>';
    }

    // 3g. Floating Badges on Hero
    const badge1Sub = document.getElementById('floating-badge-1-sub');
    const badge2Sub = document.getElementById('floating-badge-2-sub');
    if (badge1Sub) badge1Sub.textContent = dict.badge_1_sub;
    if (badge2Sub) badge2Sub.textContent = dict.badge_2_sub;

    // 3h. Top Bar Address
    const topAddressLink = document.querySelector('.top-contact-item[href*="maps"]');
    if (topAddressLink) {
        topAddressLink.innerHTML = '<i class="fa-solid fa-location-dot" aria-hidden="true"></i> ' + dict.top_address;
    }

    // 4. Wizard & Reels Sections
    const wizardSection = document.getElementById('wizard-section');
    if (wizardSection) {
        const tag = wizardSection.querySelector('.section-tag');
        const title = wizardSection.querySelector('.section-title');
        const sub = wizardSection.querySelector('.section-subtitle');
        if (tag) tag.innerHTML = dict.section_wizard_tag;
        if (title) title.innerHTML = dict.section_wizard_title;
        if (sub) sub.textContent = dict.section_wizard_subtitle;
    }

    const reelsSection = document.getElementById('instagram-reels-section');
    if (reelsSection) {
        const tag = reelsSection.querySelector('.section-tag');
        const title = reelsSection.querySelector('.section-title');
        const sub = reelsSection.querySelector('.section-subtitle');
        if (tag) tag.innerHTML = dict.section_reels_tag;
        if (title) title.innerHTML = dict.section_reels_title;
        if (sub) sub.textContent = dict.section_reels_subtitle;
    }

    // 5. Stat Labels
    const statBoxes = document.querySelectorAll('.stat-box');
    if (statBoxes.length >= 4) {
        const labels = statBoxes[0].querySelector('.stat-label');
        if (labels) labels.textContent = dict.stat_candidates;
        const l2 = statBoxes[1].querySelector('.stat-label');
        if (l2) l2.textContent = dict.stat_placed;
        const l3 = statBoxes[2].querySelector('.stat-label');
        if (l3) l3.textContent = dict.stat_hospitals;
        const l4 = statBoxes[3].querySelector('.stat-label');
        if (l4) l4.textContent = dict.stat_satisfaction;
    }

    // 6. Footer
    const footerDesc = document.querySelector('.footer-brand-desc');
    if (footerDesc) footerDesc.textContent = dict.footer_brand_desc;

    const footerTitles = document.querySelectorAll('.footer-title');
    if (footerTitles.length >= 3) {
        footerTitles[0].textContent = dict.footer_services_title;
        footerTitles[1].textContent = dict.footer_legal_title;
        footerTitles[2].textContent = dict.footer_contact_title;
    }

    const footerBottom = document.querySelector('.footer-bottom div');
    if (footerBottom) footerBottom.textContent = dict.footer_rights;

    if (notify) {
        const toastMessages = {
            tr: `Dil değiştirildi: Türkçe`,
            de: `Sprache gewechselt: Deutsch`,
            en: `Language changed: English`
        };
        showToast(toastMessages[lang] || `Language: ${lang.toUpperCase()}`);
    }
}

/* ==========================================
   DSGVO / GDPR COOKIE CONSENT BANNER
   ========================================== */
function initCookieBanner() {
    const consent = localStorage.getItem('sirius_cookie_consent');
    if (!consent) {
        showCookieBanner();
    }

    document.addEventListener('click', (e) => {
        if (e.target && (e.target.id === 'footer-cookie-trigger' || e.target.closest('#footer-cookie-trigger'))) {
            e.preventDefault();
            showCookieBanner(true);
        }
    });
}

function showCookieBanner(force = false) {
    let banner = document.getElementById('sirius-cookie-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'sirius-cookie-banner';
        banner.className = 'cookie-banner-overlay';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie-Einstellungen / Çerez Tercihleri');
        
        banner.innerHTML = `
            <div class="container cookie-banner-inner">
                <div class="cookie-text">
                    <strong><i class="fa-solid fa-cookie-bite" style="color: var(--brand-orange);" aria-hidden="true"></i> Cookie-Einstellungen / Çerez Politikası (DSGVO & TTDSG)</strong><br>
                    Wir verwenden Cookies, um die Funktion unserer Website zu gewährleisten, Inhalte zu personalisieren und die Zugriffe zu analysieren. Weitere Informationen finden Sie in unserer <a href="datenschutz.html">Datenschutzerklärung</a> und unserem <a href="impressum.html">Impressum</a>.
                </div>
                <div class="cookie-actions">
                    <button class="btn btn-outline" style="padding: 10px 18px; font-size: 0.88rem;" id="btn-cookie-essential" type="button">Nur essenzielle</button>
                    <button class="btn btn-orange" style="padding: 10px 22px; font-size: 0.88rem;" id="btn-cookie-accept" type="button">Alle akzeptieren</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        document.getElementById('btn-cookie-accept')?.addEventListener('click', () => {
            localStorage.setItem('sirius_cookie_consent', 'accepted_all');
            banner.remove();
            showToast("Cookie-Einstellungen gespeichert / Çerez tercihleriniz kaydedildi.");
        });

        document.getElementById('btn-cookie-essential')?.addEventListener('click', () => {
            localStorage.setItem('sirius_cookie_consent', 'essential_only');
            banner.remove();
            showToast("Nur essenzielle Cookies aktiviert.");
        });
    }
}

/* ==========================================
   MEGA MENU INTERACTION (Click & Hover Support)
   ========================================== */
function initMegaMenu() {
    const triggerItems = document.querySelectorAll('.mega-trigger-item');

    triggerItems.forEach(item => {
        const btn = item.querySelector('.mega-trigger-btn');
        const panel = item.querySelector('.mega-dropdown-panel');

        if (btn && panel) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                triggerItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                        const otherPanel = otherItem.querySelector('.mega-dropdown-panel');
                        if (otherPanel) otherPanel.classList.remove('active');
                    }
                });

                item.classList.toggle('open');
                panel.classList.toggle('active');
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mega-trigger-item')) {
            triggerItems.forEach(item => {
                item.classList.remove('open');
                const panel = item.querySelector('.mega-dropdown-panel');
                if (panel) panel.classList.remove('active');
            });
        }
    });
}

/* ==========================================
   1. DUAL PERSPECTIVE SWITCHER
   ========================================== */
let currentMode = 'candidate';

function initPerspectiveSwitcher() {
    const candidateBtn = document.getElementById('btn-perspective-candidate');
    const employerBtn = document.getElementById('btn-perspective-employer');

    if (candidateBtn && employerBtn) {
        candidateBtn.addEventListener('click', () => switchPerspective('candidate'));
        employerBtn.addEventListener('click', () => switchPerspective('employer'));
    }
}

function switchPerspective(mode) {
    currentMode = mode;
    const candidateBtn = document.getElementById('btn-perspective-candidate');
    const employerBtn = document.getElementById('btn-perspective-employer');
    const dict = translations[currentLang] || translations.tr;

    if (mode === 'candidate') {
        if (candidateBtn) candidateBtn.classList.add('active');
        if (employerBtn) employerBtn.classList.remove('active');
        switchLanguage(currentLang, false);
    } else {
        if (employerBtn) employerBtn.classList.add('active');
        if (candidateBtn) candidateBtn.classList.remove('active');
        switchLanguage(currentLang, false);
    }
}

/* ==========================================
   3. INTERACTIVE CAREER ELIGIBILITY WIZARD
   ========================================== */
let wizardData = { profession: '', germanLevel: '', goal: '' };

function initEligibilityWizard() {
    const optionCards = document.querySelectorAll('.wizard-option-card');
    const nextBtn = document.getElementById('wizard-next-btn');
    const prevBtn = document.getElementById('wizard-prev-btn');

    let currentStep = 1;

    optionCards.forEach(card => {
        card.addEventListener('click', function() {
            const step = this.dataset.step;
            const value = this.dataset.value;

            const siblings = this.parentElement.querySelectorAll('.wizard-option-card');
            siblings.forEach(s => s.classList.remove('selected'));

            this.classList.add('selected');

            if (step === '1') wizardData.profession = value;
            if (step === '2') wizardData.germanLevel = value;
            if (step === '3') wizardData.goal = value;
        });
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentStep < 3) {
                document.getElementById(`wizard-step-${currentStep}`).style.display = 'none';
                document.querySelector(`.step-node[data-step="${currentStep}"]`).classList.add('completed');
                currentStep++;
                document.getElementById(`wizard-step-${currentStep}`).style.display = 'block';
                document.querySelector(`.step-node[data-step="${currentStep}"]`).classList.add('active');
                if (prevBtn) prevBtn.style.display = 'inline-flex';
                if (currentStep === 3) nextBtn.textContent = currentLang === 'de' ? 'Ergebnis anzeigen' : (currentLang === 'en' ? 'Show Result' : 'Sonucu Gör');
            } else {
                showWizardResult();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                document.getElementById(`wizard-step-${currentStep}`).style.display = 'none';
                document.querySelector(`.step-node[data-step="${currentStep}"]`).classList.remove('active');
                currentStep--;
                document.getElementById(`wizard-step-${currentStep}`).style.display = 'block';
                if (currentStep === 1) prevBtn.style.display = 'none';
                nextBtn.textContent = currentLang === 'de' ? 'Weiter' : (currentLang === 'en' ? 'Next' : 'İleri');
            }
        });
    }
}

function showWizardResult() {
    const wizardBody = document.getElementById('wizard-body');
    if (!wizardBody) return;

    let recTitle = "Tebrikler! Almanya Kariyer Yolculuğunuz İçin Tam Uyumlu Bir Profildesiniz.";
    let recDesc = "Sirius Medicare ve Sirius Akademi programlarımız ile Almanca dil eğitiminiz, denkliğiniz ve Almanya'da doğrudan klinik/hastane yerleşiminiz garantili olarak planlanabilir.";

    if (currentLang === 'de') {
        recTitle = "Herzlichen Glückwunsch! Ihr Profil ist ideal für eine Karriere in Deutschland.";
        recDesc = "Mit Sirius Medicare und der Sirius Akademie planen wir Ihren Sprachkurs, die Anerkennung und Ihre direkte Anstellung an deutschen Kliniken.";
    } else if (currentLang === 'en') {
        recTitle = "Congratulations! Your profile is eligible for a healthcare career in Germany.";
        recDesc = "Through Sirius Medicare and Sirius Academy, we arrange your German language training, diploma recognition, and direct hospital placement.";
    }

    wizardBody.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <div style="width: 70px; height: 70px; background: rgba(255, 93, 5, 0.1); color: var(--brand-orange); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 2.2rem; margin-bottom: 20px;">✓</div>
            <h3 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--text-primary);">${recTitle}</h3>
            <p style="color: var(--text-secondary); font-size: 1.1rem; max-width: 600px; margin: 0 auto 30px;">${recDesc}</p>
            <button class="btn btn-orange" onclick="openModal('candidate', '${wizardData.profession}')">${currentLang === 'de' ? 'Jetzt beraten lassen' : (currentLang === 'en' ? 'Consult Advisor Now' : 'Hemen Danışmanla Görüşün')}</button>
        </div>
    `;
}

/* ==========================================
   4. COURSE EXPLORER
   ========================================== */
function initCourseExplorer() {
    const tabBtns = document.querySelectorAll('.course-tab-btn');
    const courseCards = document.querySelectorAll('.course-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            courseCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================
   5. GERMANY JOB BOARD
   ========================================== */
function initJobBoard() {
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-job-apply')) {
            const role = e.target.dataset.role || 'Genel Başvuru';
            openModal('candidate', role);
        }
    });
}

/* ==========================================
   6. ANIMATED COUNTERS
   ========================================== */
function initCounterAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.dataset.target, 10) || 0;
                    let current = 0;
                    const step = Math.max(1, Math.ceil(target / 40));
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            stat.textContent = target.toLocaleString() + (stat.dataset.suffix || '');
                            clearInterval(timer);
                        } else {
                            stat.textContent = current.toLocaleString() + (stat.dataset.suffix || '');
                        }
                    }, 30);
                });
            }
        });
    }, { threshold: 0.5 });

    const impactSection = document.getElementById('impact-section');
    if (impactSection) observer.observe(impactSection);
}

/* ==========================================
   7. MODAL CONTROLS
   ========================================== */
function initModalControls() {
    const modalOverlay = document.getElementById('contact-modal');
    const modalClose = document.getElementById('modal-close');
    const appForm = document.getElementById('sirius-app-form');

    if (modalClose && modalOverlay) {
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    if (appForm) {
        appForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = document.getElementById('form-name');
            const name = nameInput ? nameInput.value : 'Aday';
            
            closeModal();
            showToast(`Vielen Dank / Teşekkürler ${name}! Ihre Anfrage wurde erfolgreich übermittelt.`);
            appForm.reset();
        });
    }
}

function openModal(type = 'candidate', role = '') {
    const modalOverlay = document.getElementById('contact-modal');
    const modalTitle = document.getElementById('modal-title');
    const roleSelect = document.getElementById('form-profession');

    if (modalTitle) {
        modalTitle.textContent = type === 'employer' 
            ? (currentLang === 'de' ? "Arbeitgeber-Anfrage & Personalbedarf" : (currentLang === 'en' ? "Employer Consultation & Staff Request" : "İşveren Danışmanlık ve İnsan Kaynağı Talebi"))
            : (currentLang === 'de' ? "Bewerbung für Karriere in Deutschland" : (currentLang === 'en' ? "Germany Healthcare Career Application" : "Almanya Kariyer ve Dil Kursu Başvurusu"));
    }

    if (roleSelect && role) {
        roleSelect.value = role;
    }

    if (modalOverlay) modalOverlay.classList.add('active');
}

function closeModal() {
    const modalOverlay = document.getElementById('contact-modal');
    if (modalOverlay) modalOverlay.classList.remove('active');
}

function showToast(message) {
    let toast = document.getElementById('sirius-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'sirius-toast';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span>${message}</span>
    `;

    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 4500);
}

/* ==========================================
   8. MOBILE NAV
   ========================================== */
function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const navMenu = document.querySelector('.mega-nav-group');

    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = '#FFFFFF';
                navMenu.style.padding = '24px';
                navMenu.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            }
        });
    }
}
