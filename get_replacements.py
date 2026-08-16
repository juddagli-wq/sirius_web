import os

files = [
    "sirius-doktorluk.html", "sirius-hemsirelik.html", "sirius-fizyoterapi.html", 
    "sirius-ergoterapi.html", "sirius-yaslibakim.html", "denklik-basvurusu.html", 
    "isveren-bulma.html", "vize.html", "onboarding.html", "denklik-tamamlama.html", 
    "oryantasyon.html", "resmi-daireler.html", "havalimani-karsilama.html", 
    "konaklama.html", "okul-ayarlanmasi.html", "tesvik-basvurusu.html", 
    "sinava-yonlendirme.html", "urkunde-alinmasi.html", "sirius-talent.html",
    "hakkimizda.html", "iletisim.html", "agb.html", "datenschutz.html", "impressum.html", "legal-notice.html"
]

for filepath in files:
    if not os.path.exists(filepath): continue
    with open(filepath, 'r') as f:
        lines = f.readlines()
    start = -1
    end = -1
    for i, line in enumerate(lines):
        if '<header class="header-nav"' in line:
            start = i + 1
        if '</header>' in line and start != -1:
            end = i + 1
            break
    if start != -1 and end != -1:
        print(f"{filepath}:{start}:{end}")
