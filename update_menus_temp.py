import os
import glob
import re

new_menu_html = """                                    <ul class="mega-links-list">
                                        <li><a href="#">Denklik Başvurusu - Bescheid</a></li>
                                        <li><a href="#">İşveren Bulma</a></li>
                                        <li><a href="#">Vize</a></li>
                                        <li><a href="#" style="pointer-events: none; cursor: default;">Onboarding</a>
                                            <ul style="font-size: 0.85rem; padding-left: 12px; margin-top: 4px; color: var(--text-secondary); list-style-type: disc;">
                                                <li>Oryantasyon</li>
                                                <li>Resmi Dairelerde Başvuru</li>
                                                <li>Havalimanı Karşılama</li>
                                                <li>Konaklama</li>
                                            </ul>
                                        </li>
                                        <li><a href="#" style="pointer-events: none; cursor: default;">Denklik Tamamlama</a>
                                            <ul style="font-size: 0.85rem; padding-left: 12px; margin-top: 4px; color: var(--text-secondary); list-style-type: disc;">
                                                <li>Okulun Ayarlanması</li>
                                                <li>Teşvik Başvurusu</li>
                                                <li>Sınava Yönlendirme</li>
                                                <li>Urkunde Alınması</li>
                                            </ul>
                                        </li>
                                    </ul>"""

html_files = glob.glob("*.html")

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the H2 and the ul following it
    pattern = r'(<h2 class="mega-column-title">Hizmetler ve Bilgiler</h2>\s*)<ul class="mega-links-list">.*?</ul>'
    
    if re.search(pattern, content, re.DOTALL):
        new_content = re.sub(pattern, r'\1' + new_menu_html, content, flags=re.DOTALL)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")
