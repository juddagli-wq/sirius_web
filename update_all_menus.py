import os
import glob
import re

yetenekler_files = [
    "sirius-doktorluk.html", "sirius-hemsirelik.html", "sirius-fizyoterapi.html", 
    "sirius-ergoterapi.html", "sirius-yaslibakim.html", "denklik-basvurusu.html", 
    "isveren-bulma.html", "vize.html", "onboarding.html", "denklik-tamamlama.html", 
    "oryantasyon.html", "resmi-daireler.html", "havalimani-karsilama.html", 
    "konaklama.html", "okul-ayarlanmasi.html", "tesvik-basvurusu.html", 
    "sinava-yonlendirme.html", "urkunde-alinmasi.html"
]

isverenler_files = [
    "sirius-talent.html"
]

hakkimizda_files = [
    "hakkimizda.html", "iletisim.html", "agb.html", "datenschutz.html", "impressum.html", "legal-notice.html"
]

def get_yetenekler_nav(active_file):
    def is_active(name):
        return ' active" style="color: var(--brand-orange); font-weight: 700;"' if name in active_file else '"'
    
    return f"""            <nav role="navigation" aria-label="Ana Menü">
                <ul class="nav-menu" style="display: flex; gap: 18px; list-style: none; align-items: center; margin: 0; padding: 0;">
                    <li><a href="index.html" class="nav-link">Ana Sayfa</a></li>
                    <li><a href="sirius-doktorluk.html" class="nav-link{is_active('sirius-doktorluk')}>Doktorluk</a></li>
                    <li><a href="sirius-hemsirelik.html" class="nav-link{is_active('sirius-hemsirelik')}>Hemşirelik</a></li>
                    <li><a href="sirius-fizyoterapi.html" class="nav-link{is_active('sirius-fizyoterapi')}>Fizyoterapi</a></li>
                    <li><a href="sirius-ergoterapi.html" class="nav-link{is_active('sirius-ergoterapi')}>Ergoterapi</a></li>
                    <li><a href="sirius-yaslibakim.html" class="nav-link{is_active('sirius-yaslibakim')}>Yaşlı Bakım</a></li>
                    <li class="nav-dropdown" style="position: relative;">
                        <a href="#" class="nav-link" style="display: flex; align-items: center; gap: 4px;">Hizmetler <i class="fa-solid fa-chevron-down" style="font-size: 0.7em;"></i></a>
                        <ul class="nav-dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 8px; padding: 10px 0; min-width: 220px; z-index: 100;">
                            <li><a href="denklik-basvurusu.html" class="nav-link" style="padding: 8px 16px; display: block;">Denklik Başvurusu</a></li>
                            <li><a href="vize.html" class="nav-link" style="padding: 8px 16px; display: block;">Vize</a></li>
                            <li><a href="onboarding.html" class="nav-link" style="padding: 8px 16px; display: block;">Onboarding</a></li>
                            <li><a href="denklik-tamamlama.html" class="nav-link" style="padding: 8px 16px; display: block;">Denklik Tamamlama</a></li>
                        </ul>
                    </li>
                    <li><a href="isveren-bulma.html" class="nav-link{is_active('isveren-bulma')}>İşveren Bulma</a></li>
                </ul>
            </nav>"""

def get_isverenler_nav(active_file):
    def is_active(name):
        return ' active" style="color: var(--brand-orange); font-weight: 700;"' if name in active_file else '"'
    
    return f"""            <nav role="navigation" aria-label="Ana Menü">
                <ul class="nav-menu" style="display: flex; gap: 18px; list-style: none; align-items: center; margin: 0; padding: 0;">
                    <li><a href="index.html" class="nav-link">Ana Sayfa</a></li>
                    <li><a href="sirius-talent.html" class="nav-link{is_active('sirius-talent')}>Hemşireler</a></li>
                    <li><a href="sirius-talent.html" class="nav-link">Fizyoterapist</a></li>
                    <li><a href="sirius-talent.html" class="nav-link">Ergoterapistler</a></li>
                    <li><a href="sirius-talent.html" class="nav-link">Sağlık Meslekleri</a></li>
                    <li><a href="sirius-talent.html" class="nav-link">Doktorlar ve Diş Hekimleri</a></li>
                    <li><a href="sirius-talent.html" class="nav-link">Mühendisler</a></li>
                    <li class="nav-dropdown" style="position: relative;">
                        <a href="#" class="nav-link" style="display: flex; align-items: center; gap: 4px;">Hizmetlerimiz <i class="fa-solid fa-chevron-down" style="font-size: 0.7em;"></i></a>
                        <ul class="nav-dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 8px; padding: 10px 0; min-width: 220px; z-index: 100;">
                            <li><a href="sirius-talent.html" class="nav-link" style="padding: 8px 16px; display: block;">Her Şey Dahil Hizmet</a></li>
                            <li><a href="sirius-talent.html" class="nav-link" style="padding: 8px 16px; display: block;">Seçilmiş Hizmetler</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>"""

def get_hakkimizda_nav(active_file):
    def is_active(name):
        return ' active" style="color: var(--brand-orange); font-weight: 700;"' if name in active_file else '"'
    
    return f"""            <nav role="navigation" aria-label="Ana Menü">
                <ul class="nav-menu" style="display: flex; gap: 18px; list-style: none; align-items: center; margin: 0; padding: 0;">
                    <li><a href="index.html" class="nav-link">Ana Sayfa</a></li>
                    <li><a href="hakkimizda.html" class="nav-link{is_active('hakkimizda')}>Vizyon & Misyonumuz</a></li>
                    <li><a href="hakkimizda.html#team" class="nav-link">Ekibimiz</a></li>
                    <li><a href="hakkimizda.html#ethics" class="nav-link">Kalite & Etik</a></li>
                    <li><a href="hakkimizda.html#iletisim" class="nav-link{is_active('iletisim')}">İletişim</a></li>
                </ul>
            </nav>"""

def generate_full_header(nav_content, btn_text="Şimdi Başvur"):
    return f"""    <header class="header-nav" role="banner">
        <div class="container navbar-inner" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0;">
            <a href="index.html" class="brand-logo" aria-label="Sirius Global Ana Sayfasına Git">
                <img src="assets/sirius-global-logo-yeni.v2.png" alt="Sirius Global Logo" class="brand-logo-img" style="height: 40px;">
            </a>

{nav_content}

            <div style="display: flex; gap: 12px; align-items: center;">
                <button class="btn btn-orange" type="button" onclick="openModal('candidate')" aria-label="{btn_text}">{btn_text}</button>
                <button class="mobile-menu-toggle" id="mobile-toggle" type="button" aria-label="Mobil Menüyü Aç" style="display: none;">
                    <i class="fa-solid fa-bars" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </header>"""

for filepath in yetenekler_files + isverenler_files + hakkimizda_files:
    if not os.path.exists(filepath): continue
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if filepath in yetenekler_files:
            nav_content = get_yetenekler_nav(filepath)
            btn_text = "Şimdi Başvur"
        elif filepath in isverenler_files:
            nav_content = get_isverenler_nav(filepath)
            btn_text = "İşveren Talebi"
        elif filepath in hakkimizda_files:
            nav_content = get_hakkimizda_nav(filepath)
            btn_text = "İletişim Kurun"
        else:
            continue

        full_header = generate_full_header(nav_content, btn_text)

        pattern = r'<header class="header-nav".*?</header>'
        if re.search(pattern, content, re.DOTALL):
            new_content = re.sub(pattern, full_header, content, flags=re.DOTALL)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated header in: {filepath}")
        else:
            print(f"Warning: Could not find <header class=\"header-nav\"> in {filepath}")
    except Exception as e:
        print(f"Failed {filepath}: {e}")
