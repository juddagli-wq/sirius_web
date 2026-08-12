import os, re

base_file = '/Users/Agency/Documents/SIRIUS/sirius-medicare.html'
with open(base_file, 'r', encoding='utf-8') as f:
    template = f.read()

# Generate sirius-doktorluk.html
content = template.replace(
    '<title>Sirius Medicare | Almanya Sağlık ve Tıp İnsan Kaynağı</title>',
    '<title>Sirius Doktorluk | Almanya Hekimlik Kariyeri</title>'
).replace(
    'SİRİUS MEDICARE - SAĞLIK KARİYERİ',
    'SİRİUS DOKTORLUK - HEKİMLİK KARİYERİ'
).replace(
    'href="sirius-medicare.html#doctors" class="nav-link"',
    'href="sirius-doktorluk.html" class="nav-link active" style="color: var(--brand-orange); font-weight: 700;"'
).replace(
    'href="sirius-medicare.html#doctors" class="nav-link active" style="color: var(--brand-orange); font-weight: 700;"',
    'href="sirius-doktorluk.html" class="nav-link active" style="color: var(--brand-orange); font-weight: 700;"'
)

pillar_match = re.search(r'<!-- 5\. SİRİUS DOKTOR -->(.*?)</div>\s*</div>\s*</div>', content, re.DOTALL)
doctor_pillar = pillar_match.group(0) if pillar_match else ''
content = re.sub(r'<div class="pillars-grid".*?</div>\s*</div>\s*</section>', f'<div class="pillars-grid" style="display: grid; grid-template-columns: 1fr;">{doctor_pillar}</div></div></section>', content, flags=re.DOTALL)

with open('/Users/Agency/Documents/SIRIUS/sirius-doktorluk.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Generate sirius-hemsirelik.html
content = template.replace(
    '<title>Sirius Medicare | Almanya Sağlık ve Tıp İnsan Kaynağı</title>',
    '<title>Sirius Hemşirelik | Almanya Hemşirelik Kariyeri</title>'
).replace(
    'SİRİUS MEDICARE - SAĞLIK KARİYERİ',
    'SİRİUS HEMŞİRELİK - SAĞLIK KARİYERİ'
).replace(
    'href="sirius-medicare.html#nursing" class="nav-link"',
    'href="sirius-hemsirelik.html" class="nav-link active" style="color: var(--brand-orange); font-weight: 700;"'
)

nursing_pillars = re.search(r'(<!-- 1\. HEMŞİRELİK MESLEKİ EĞİTİMİ -->.*?)<!-- 4\. SİRİUS FİZYOTERAPİ -->', content, re.DOTALL)
nursing_html = nursing_pillars.group(1) if nursing_pillars else ''
content = re.sub(r'<div class="pillars-grid".*?</div>\s*</div>\s*</section>', f'<div class="pillars-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">{nursing_html}</div></div></section>', content, flags=re.DOTALL)

with open('/Users/Agency/Documents/SIRIUS/sirius-hemsirelik.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Generate sirius-yaslibakim.html
content = template.replace(
    '<title>Sirius Medicare | Almanya Sağlık ve Tıp İnsan Kaynağı</title>',
    '<title>Sirius Yaşlı Bakım | Almanya Yaşlı Bakım Kariyeri</title>'
).replace(
    'SİRİUS MEDICARE - SAĞLIK KARİYERİ',
    'SİRİUS YAŞLI BAKIM - KARİYERİ'
).replace(
    'href="sirius-medicare.html#care" class="nav-link"',
    'href="sirius-yaslibakim.html" class="nav-link active" style="color: var(--brand-orange); font-weight: 700;"'
)

yasli_bakim_html = """
                    <!-- YAŞLI BAKIM -->
                    <div class="pillar-card" style="background: var(--bg-white); border: 1px solid var(--border-color); border-radius: 24px; padding: 36px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div class="pillar-icon-box"><i class="fa-solid fa-hands-holding-circle" aria-hidden="true"></i></div>
                            <h3 class="pillar-title" style="font-size: 1.35rem; margin-bottom: 12px;">Yaşlı Bakım Uzmanlığı</h3>
                            <p class="pillar-desc" style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 20px;">
                                Almanya'da artan yaşlı nüfus nedeniyle yaşlı bakım uzmanlarına duyulan ihtiyaç her geçen gün artmaktadır. Yaşlı bakım alanında kariyer yapmak isteyen adaylara güvenli istihdam sağlıyoruz.
                            </p>
                        </div>
                        <button class="btn btn-outline" style="width: 100%; margin-top: 16px;" type="button" onclick="openModal('candidate', 'Yaşlı Bakım Uzmanlığı')" aria-label="Yaşlı Bakım Başvurusu">
                            Yaşlı Bakım İstihdam Başvurusu
                        </button>
                    </div>
"""
content = re.sub(r'<div class="pillars-grid".*?</div>\s*</div>\s*</section>', f'<div class="pillars-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">{yasli_bakim_html}</div></div></section>', content, flags=re.DOTALL)

with open('/Users/Agency/Documents/SIRIUS/sirius-yaslibakim.html', 'w', encoding='utf-8') as f:
    f.write(content)
