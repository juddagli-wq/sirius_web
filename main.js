document.addEventListener('DOMContentLoaded', () => {
    // 1. Dinamik Yıldız Arka Planı
    initStarfield();

    // 2. Sayfa Kaydırma - Yarı Saydam Navbar Efekti
    initNavbarScroll();

    // 3. Mobil Menü Kontrolü
    initMobileMenu();

    // 4. İstatistik Sayaç Animasyonu (Intersection Observer)
    initStatsCounter();

    // 5. Kart Fare Hareketi (Glow Efekti Koordinatları)
    initCardGlowEffects();

    // 6. İnteraktif Tanılama Terminali (Console)
    initTerminalDiagnostics();

    // 7. Bülten Kayıt Formu
    initNewsletterForm();
});

// Yıldız Arka Planını Oluşturma
function initStarfield() {
    const container = document.getElementById('stars-container');
    if (!container) return;

    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Rastgele boyutlar (1px - 3px)
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Rastgele konumlandırma
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Rastgele yanıp sönme hızı ve gecikmesi
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(star);
    }
}

// Navbar Scroll Dinamiği
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Aktif menü linki güncelleme
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Mobil Menü
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.mobile-menu');
    const links = document.querySelectorAll('.mobile-link, .mobile-cta');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
}

// İstatistik Sayaçları
function initStatsCounter() {
    const statsSection = document.querySelector('.stats-section');
    const statValues = document.querySelectorAll('.stat-value');
    
    if (!statsSection) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statValues.forEach(val => {
                    const target = parseFloat(val.getAttribute('data-target'));
                    animateValue(val, 0, target, 2000);
                });
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const isDecimal = end % 1 !== 0;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        let currentVal = progress * (end - start) + start;
        if (isDecimal) {
            obj.innerHTML = currentVal.toFixed(1);
        } else {
            obj.innerHTML = Math.floor(currentVal);
        }

        // Değerlerin sonuna sembol ekleme
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            if (end === 8.6) obj.innerHTML = "8.6 L/Y";
            else if (end === 150) obj.innerHTML = "150+ QP";
            else if (end === 99.9) obj.innerHTML = "%99.99";
        }
    };
    window.requestAnimationFrame(step);
}

// Kartların Üzerinde Parlama Efekti (Fare Hareketi Takibi)
function initCardGlowEffects() {
    const cards = document.querySelectorAll('.tech-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
}

// İnteraktif Terminal Diagnostic Mantığı
function initTerminalDiagnostics() {
    const btnRun = document.getElementById('btn-run-diagnostics');
    const btnClear = document.getElementById('btn-clear-diagnostics');
    const statusText = document.getElementById('diagnostics-status');
    const progressFill = document.getElementById('progress-fill');
    const consoleOutput = document.getElementById('console-output');

    if (!btnRun) return;

    const mockLogs = [
        { text: "[BİLGİ] Sirius diagnostic süreci başlatılıyor...", delay: 300, type: 'info' },
        { text: "[SİSTEM] Kuantum Çekirdeği modülleri yükleniyor...", delay: 800, type: 'system' },
        { text: "[SİSTEM] Işık hızı sinyal iletim portları kontrol ediliyor (8.6 Işık Yılı)...", delay: 1400, type: 'system' },
        { text: "[UYARI] Gözlemlenen kozmik toz gürültüsü yüksek, filtreleme aktif edildi.", delay: 2000, type: 'warning' },
        { text: "[BİLGİ] Bant genişliği optimize ediliyor... Güncel Hız: 152.4 QP/sn.", delay: 2600, type: 'info' },
        { text: "[SİSTEM] Çift taraflı dolaşıklık şifrelemesi doğrulandı.", delay: 3200, type: 'system' },
        { text: "[BAŞARILI] Sirius Ağı Durumu: Kararlı ve Aktif.", delay: 3800, type: 'success' },
        { text: "[SİSTEM] Teşhis tamamlandı. Sistem tam kapasite çalışıyor.", delay: 4200, type: 'system' }
    ];

    btnRun.addEventListener('click', () => {
        btnRun.disabled = true;
        btnClear.disabled = true;
        
        statusText.innerHTML = "RUNNING";
        statusText.className = "status-running";
        
        consoleOutput.innerHTML = '<p class="system-line">[SİSTEM] Sirius Kuantum Tanılama Arayüzü Başlatıldı...</p>';
        progressFill.style.width = "0%";

        let progressInterval = setInterval(() => {
            let width = parseFloat(progressFill.style.width) || 0;
            if (width < 98) {
                progressFill.style.width = (width + 1) + "%";
            }
        }, 42);

        mockLogs.forEach(log => {
            setTimeout(() => {
                const line = document.createElement('p');
                line.className = log.type + '-line';
                line.innerHTML = log.text;
                consoleOutput.appendChild(line);
                consoleOutput.scrollTop = consoleOutput.scrollHeight;
                
                if (log.type === 'success') {
                    clearInterval(progressInterval);
                    progressFill.style.width = "100%";
                    statusText.innerHTML = "ACTIVE";
                    statusText.className = "status-active";
                    btnRun.disabled = false;
                    btnClear.disabled = false;
                }
            }, log.delay);
        });
    });

    btnClear.addEventListener('click', () => {
        consoleOutput.innerHTML = `
            <p class="system-line">[SİSTEM] Sirius Kuantum Tanılama Arayüzüne Hoş Geldiniz.</p>
            <p class="system-line">[SİSTEM] Başlatmak için aşağıdaki butona tıklayın...</p>
        `;
        progressFill.style.width = "0%";
        statusText.innerHTML = "STANDBY";
        statusText.className = "status-standby";
    });
}

// Haber Bülteni mock formu
function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    const msg = document.getElementById('newsletter-message');

    if (!form || !msg) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('.input-email').value;

        // E-posta gönderimi simülasyonu
        msg.className = 'newsletter-message success';
        msg.innerHTML = `Teşekkürler! <strong>${email}</strong> başarıyla kuantum ağ bültenimize kaydedildi.`;
        form.reset();

        setTimeout(() => {
            msg.innerHTML = '';
        }, 5000);
    });
}
