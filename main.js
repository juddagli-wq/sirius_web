/* ==========================================
   SIRIUS GLOBAL - INTERACTIVE APPLICATION LOGIC
   TalentOrange Dual-Perspective, Mega Menu & DSGVO Cookie Banner
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMegaMenu();
    initPerspectiveSwitcher();
    initLanguageSwitcher();
    initEligibilityWizard();
    initCourseExplorer();
    initJobBoard();
    initCounterAnimations();
    initModalControls();
    initMobileNav();
    initCookieBanner();
});

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

    const heroTag = document.getElementById('hero-tag');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const primaryCta = document.getElementById('hero-primary-cta');

    if (mode === 'candidate') {
        if (candidateBtn) candidateBtn.classList.add('active');
        if (employerBtn) employerBtn.classList.remove('active');

        if (heroTag) heroTag.innerHTML = `<i class="fa-solid fa-certificate" aria-hidden="true"></i> ALMANYA'DA KANITLANMIŞ KARİYER YOLCULUĞU`;
        if (heroTitle) heroTitle.innerHTML = `Almanya'da Hayalinizdeki Kariyer ve Yaşama Giden <span class="highlight">Uluslararası Köprü</span>`;
        if (heroDesc) heroDesc.textContent = `Sirius Global; sağlık çalışanları, doktorlar, hekimler ve uzman nitelikli profesyonelleri Almanya'nın önde gelen sağlık kurumları ve şirketleriyle buluşturuyor. Dil eğitiminden denkliğe, vizeden konaklamaya tüm süreçte sizinleyiz.`;
        if (primaryCta) {
            primaryCta.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Uygunluk Testini Başlat`;
            primaryCta.setAttribute('href', '#wizard-section');
        }
    } else {
        if (employerBtn) employerBtn.classList.add('active');
        if (candidateBtn) candidateBtn.classList.remove('active');

        if (heroTag) heroTag.innerHTML = `<i class="fa-solid fa-building-hospital" aria-hidden="true"></i> SAĞLIK VE İŞ PİYASASI İÇİN YETENEK ÇÖZÜMLERİ`;
        if (heroTitle) heroTitle.innerHTML = `Kurumunuz İçin Nitelikli Uluslararası İnsan Kaynağı <span class="highlight" style="color: var(--text-primary);">Ve Etik İşe Alım</span>`;
        if (heroDesc) heroDesc.textContent = `Almanya'daki klinik, hastane ve kurumların uzman personel ihtiyacını uçtan uca yönetiyoruz. Sirius Talent & Partner modeli ile adayın dil yeterliliğinden denklik ve Almanya'ya intikaline kadar %100 güvence veriyoruz.`;
        if (primaryCta) {
            primaryCta.innerHTML = `<i class="fa-solid fa-calendar-days" aria-hidden="true"></i> İşveren Danışmanlığı Alın`;
            primaryCta.setAttribute('href', '#contact-modal');
            primaryCta.onclick = (e) => { e.preventDefault(); openModal('employer'); };
        }
    }
}

/* ==========================================
   2. MULTI-LANGUAGE SWITCHER
   ========================================== */
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            langBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
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
                if (currentStep === 3) nextBtn.textContent = 'Sonucu Gör';
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
                nextBtn.textContent = 'İleri';
            }
        });
    }
}

function showWizardResult() {
    const wizardBody = document.getElementById('wizard-body');
    if (!wizardBody) return;

    let recTitle = "Tebrikler! Almanya Kariyer Yolculuğunuz İçin Tam Uyumlu Bir Profildesiniz.";
    let recDesc = "Sirius Medicare ve Sirius Akademi programlarımız ile Almanca dil eğitiminiz, denkliğiniz ve Almanya'da doğrudan klinik/hastane yerleşiminiz garantili olarak planlanabilir.";

    if (wizardData.profession === 'doctor') {
        recTitle = "Sirius Medicare - Tıp Uzmanları & Hekim Programı";
        recDesc = "Almanya'da doktorluk yapmak için C1 Fachsprachenprüfung (FSP) sınav kampımız ve hastane eşleştirmemiz ile denkliğinizi hızlıca alabilirsiniz.";
    } else if (wizardData.profession === 'nurse') {
        recTitle = "Sirius Medicare - Hemşire & Sağlık Teknikeri Programı";
        recDesc = "Almanya kliniklerinde doğrudan iş sözleşmesi, A1-B2 dil eğitimi ve Sirius Home relokasyon desteği ile kariyerinize başlayın.";
    }

    wizardBody.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <div style="width: 70px; height: 70px; background: rgba(255, 93, 5, 0.1); color: var(--brand-orange); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 2.2rem; margin-bottom: 20px;">✓</div>
            <h3 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--text-primary);">${recTitle}</h3>
            <p style="color: var(--text-secondary); font-size: 1.1rem; max-width: 600px; margin: 0 auto 30px;">${recDesc}</p>
            <button class="btn btn-orange" onclick="openModal('candidate', '${wizardData.profession}')">Hemen Danışmanla Görüşün ve Başvurun</button>
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
            showToast(`Sayın ${name}, başvurunuz başarıyla alındı! Danışmanımız en kısa sürede sizinle iletişime geçecektir.`);
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
            ? "İşveren Danışmanlık ve İnsan Kaynağı Talebi" 
            : "Almanya Kariyer ve Dil Kursu Başvurusu";
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
