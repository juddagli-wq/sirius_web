import os

tr_data = [
    (0, "Ana Menü", "Alt Menü", "Alt-Alt Menü (Sayfalar)", "Yeni İsim Önerisi (Burayı Değiştirin)", "Sayfa İçeriği / Notlarınız"),
    (1, "Yetenekler İçin", "", "", "", ""),
    (2, "", "Almanya'da Çalışmak", "", "", ""),
    (3, "", "", "Doktorluk", "", ""),
    (3, "", "", "Hemşirelik", "", ""),
    (3, "", "", "Fizyoterapist", "", ""),
    (3, "", "", "Ergoterapist", "", ""),
    (3, "", "", "Yaşlı Bakım", "", ""),
    (2, "", "Hizmetler ve Bilgiler", "", "", ""),
    (3, "", "", "Denklik Başvurusu (Bescheid)", "", ""),
    (3, "", "", "İşveren Bulma & Mülakat", "", ""),
    (3, "", "", "Vize & Relokasyon (Home)", "", ""),
    (3, "", "", "Onboarding ve Uyum", "", ""),
    (3, "", "", "Oryantasyon", "", ""),
    (3, "", "", "Resmi Daire İşlemleri", "", ""),
    (3, "", "", "Havalimanı Karşılama", "", ""),
    (3, "", "", "Konaklama", "", ""),
    (3, "", "", "Denklik Tamamlama", "", ""),
    (3, "", "", "Çocuk Okul Ayarlanması", "", ""),
    (3, "", "", "Teşvik Başvurusu", "", ""),
    (3, "", "", "Dil Sınavına Yönlendirme", "", ""),
    (3, "", "", "Urkunde Alınması", "", ""),
    (1, "İşverenler İçin", "", "", "", ""),
    (2, "", "Profesyoneller İçin Bilgiler", "", "", ""),
    (3, "", "", "Hemşireler", "", ""),
    (3, "", "", "Fizyoterapist", "", ""),
    (3, "", "", "Ergoterapistler", "", ""),
    (3, "", "", "Sağlık Meslekleri", "", ""),
    (3, "", "", "Doktorlar ve Diş Hekimleri", "", ""),
    (3, "", "", "Mühendisler ve Teknik Meslekler", "", ""),
    (2, "", "Hizmetlerimiz", "", "", ""),
    (3, "", "", "Her Şey Dahil Hizmet", "", ""),
    (3, "", "", "Seçilmiş Hizmetler", "", ""),
    (1, "Hakkımızda", "", "", "", ""),
    (1, "Açık İlanlar", "", "", "", ""),
    (1, "İletişim", "", "", "", ""),
    (0, "", "", "", "", ""),
    (2, "", "Üst Menü / Dil ve Butonlar (Header / Top-Bar)", "", "", ""),
    (2, "", "Şimdi Başvur (Buton)", "", "", ""),
    (2, "", "Dil Seçenekleri", "", "", ""),
    (3, "", "", "Türkçe (TR)", "", ""),
    (3, "", "", "Deutsch (DE)", "", ""),
    (3, "", "", "English (EN)", "", ""),
    (3, "", "", "Français (FR)", "", ""),
    (3, "", "", "العربية (AR)", "", ""),
    (0, "", "", "", "", ""),
    (2, "", "Test ve Form Modülleri", "", "", ""),
    (2, "", "Almanya Kariyer & Uygunluk Testi", "Uygunluk Testini Başlat (Buton)", "", ""),
    (3, "", "", "Soru 1: Almanya'da İcra Etmek İstediğiniz Meslek Hangisidir?", "", ""),
    (3, "", "", "  - Doktor / Hekim", "", ""),
    (3, "", "", "  - Hemşire & Sağlık Çalışanı", "", ""),
    (3, "", "", "  - MTR / Radyoloji / Fizyoterapist", "", ""),
    (3, "", "", "  - Mühendislik & BT / IT", "", ""),
    (3, "", "", "Soru 2: Mevcut Almanca Dil Seviyeniz Nedir?", "", ""),
    (3, "", "", "  - Almancam Yok / Başlangıç", "", ""),
    (3, "", "", "  - A1 - A2 Seviyesi", "", ""),
    (3, "", "", "  - B1 - B2 Seviyesi", "", ""),
    (3, "", "", "  - C1 / FSP Tıp Seviyesi", "", ""),
    (3, "", "", "Soru 3: Sirius Global'den Öncelikli Beklentiniz Nedir?", "", ""),
    (3, "", "", "  - Tam Paket (Dil + Denklik + İş)", "", ""),
    (3, "", "", "  - Sirius Akademi Dil Kursu", "", ""),
    (3, "", "", "  - İş Bulma & Klinik Eşleştirme", "", ""),
    (3, "", "", "  - Sirius Home Relokasyon", "", ""),
    (0, "", "", "", "", ""),
    (2, "", "Alt Menü (Footer) Öğeleri", "", "", ""),
    (2, "", "Bağlantılar", "", "", ""),
    (3, "", "", "Sirius Medicare", "", ""),
    (3, "", "", "Sirius Home Relokasyon", "", ""),
    (3, "", "", "Sirius Talent & Partner", "", ""),
    (2, "", "Mevzuat & Yasal (EU/DE)", "", "", ""),
    (3, "", "", "Hakkımızda", "", ""),
    (3, "", "", "Legal Notice", "", ""),
    (3, "", "", "Künye (Impressum § 5 DDG)", "", ""),
    (3, "", "", "Gizlilik Politikası (DSGVO)", "", ""),
    (3, "", "", "Şartlar & Koşullar (AGB)", "", ""),
    (3, "", "", "Çerez Tercihleri (Cookies)", "", "")
]

de_data = [
    (0, "Hauptmenü", "Untermenü", "Unter-Untermenü (Seiten)", "Neuer Namensvorschlag (Hier ändern)", "Seiteninhalt / Notizen"),
    (1, "Für Fachkräfte", "", "", "", ""),
    (2, "", "Arbeiten in Deutschland", "", "", ""),
    (3, "", "", "Ärzte", "", ""),
    (3, "", "", "Pflegekräfte", "", ""),
    (3, "", "", "Physiotherapeuten", "", ""),
    (3, "", "", "Ergotherapeuten", "", ""),
    (3, "", "", "Altenpflege", "", ""),
    (2, "", "Dienstleistungen & Infos", "", "", ""),
    (3, "", "", "Anerkennungsverfahren (Bescheid)", "", ""),
    (3, "", "", "Arbeitgebersuche & Interview", "", ""),
    (3, "", "", "Visum & Relocation (Home)", "", ""),
    (3, "", "", "Onboarding & Integration", "", ""),
    (3, "", "", "Orientierung", "", ""),
    (3, "", "", "Behördengänge", "", ""),
    (3, "", "", "Flughafenabholung", "", ""),
    (3, "", "", "Unterkunft", "", ""),
    (3, "", "", "Anerkennung abschließen", "", ""),
    (3, "", "", "Schulanmeldung für Kinder", "", ""),
    (3, "", "", "Fördermittel beantragen", "", ""),
    (3, "", "", "Sprachprüfung", "", ""),
    (3, "", "", "Urkunde erhalten", "", ""),
    (1, "Für Arbeitgeber", "", "", "", ""),
    (2, "", "Infos für Fachkräfte", "", "", ""),
    (3, "", "", "Pflegekräfte", "", ""),
    (3, "", "", "Physiotherapeuten", "", ""),
    (3, "", "", "Ergotherapeuten", "", ""),
    (3, "", "", "Gesundheitsberufe", "", ""),
    (3, "", "", "Ärzte und Zahnärzte", "", ""),
    (3, "", "", "Ingenieure und Techniker", "", ""),
    (2, "", "Unsere Dienstleistungen", "", "", ""),
    (3, "", "", "All-Inclusive Service", "", ""),
    (3, "", "", "Ausgewählte Services", "", ""),
    (1, "Über uns", "", "", "", ""),
    (1, "Stellenangebote", "", "", "", ""),
    (1, "Kontakt", "", "", "", ""),
    (0, "", "", "", "", ""),
    (2, "", "Header / Top-Bar", "", "", ""),
    (2, "", "Jetzt bewerben (Button)", "", "", ""),
    (2, "", "Sprachauswahl", "", "", ""),
    (3, "", "", "Türkçe (TR)", "", ""),
    (3, "", "", "Deutsch (DE)", "", ""),
    (3, "", "", "English (EN)", "", ""),
    (3, "", "", "Français (FR)", "", ""),
    (3, "", "", "العربية (AR)", "", ""),
    (0, "", "", "", "", ""),
    (2, "", "Test & Formulare", "", "", ""),
    (2, "", "Karriere & Eignungstest Deutschland", "Eignungstest starten (Button)", "", ""),
    (3, "", "", "Frage 1: Welchen Beruf möchten Sie ausüben?", "", ""),
    (3, "", "", "  - Arzt / Ärztin", "", ""),
    (3, "", "", "  - Pflegekraft / med. Fachpersonal", "", ""),
    (3, "", "", "  - MTR / Radiologie / Physiotherapie", "", ""),
    (3, "", "", "  - Ingenieurwesen & IT", "", ""),
    (3, "", "", "Frage 2: Wie ist Ihr aktuelles Sprachniveau?", "", ""),
    (3, "", "", "  - Kein Deutsch / Anfänger", "", ""),
    (3, "", "", "  - A1 - A2 Niveau", "", ""),
    (3, "", "", "  - B1 - B2 Niveau", "", ""),
    (3, "", "", "  - C1 / FSP Medizin-Niveau", "", ""),
    (3, "", "", "Frage 3: Was erwarten Sie vorrangig von Sirius Global?", "", ""),
    (3, "", "", "  - Komplettpaket (Sprache + Anerkennung + Job)", "", ""),
    (3, "", "", "  - Sirius Akademie Sprachkurs", "", ""),
    (3, "", "", "  - Jobvermittlung & Klinik-Match", "", ""),
    (3, "", "", "  - Sirius Home Relocation", "", ""),
    (0, "", "", "", "", ""),
    (2, "", "Footer (Alt Menü)", "", "", ""),
    (2, "", "Links", "", "", ""),
    (3, "", "", "Sirius Medicare", "", ""),
    (3, "", "", "Sirius Home Relocation", "", ""),
    (3, "", "", "Sirius Talent & Partner", "", ""),
    (2, "", "Rechtliches & Gesetzliches (EU/DE)", "", "", ""),
    (3, "", "", "Über uns", "", ""),
    (3, "", "", "Legal Notice", "", ""),
    (3, "", "", "Impressum § 5 DDG", "", ""),
    (3, "", "", "Datenschutz (DSGVO)", "", ""),
    (3, "", "", "AGB", "", ""),
    (3, "", "", "Cookie-Einstellungen", "", "")
]

xml = """<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="sHeader">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Color="#FFFFFF" ss:Bold="1"/>
   <Interior ss:Color="#001A29" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="sHeaderInput">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Color="#FFFFFF" ss:Bold="1"/>
   <Interior ss:Color="#FF5D05" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="sLevel1">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Color="#004085" ss:Bold="1"/>
   <Interior ss:Color="#E6F2FF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="sLevel2">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Color="#856404" ss:Bold="1"/>
   <Interior ss:Color="#FFF3CD" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="sLevel3">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Color="#333333"/>
   <Interior ss:Color="#F8F9FA" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="sQuestion">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Color="#333333" ss:Bold="1"/>
   <Interior ss:Color="#E2E3E5" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="sEmpty">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
  </Style>
 </Styles>
"""

def make_sheet(name, data):
    sheet = f' <Worksheet ss:Name="{name}">\n  <Table>\n'
    sheet += '   <Column ss:AutoFitWidth="0" ss:Width="160"/>\n'
    sheet += '   <Column ss:AutoFitWidth="0" ss:Width="200"/>\n'
    sheet += '   <Column ss:AutoFitWidth="0" ss:Width="220"/>\n'
    sheet += '   <Column ss:AutoFitWidth="0" ss:Width="240"/>\n'
    sheet += '   <Column ss:AutoFitWidth="0" ss:Width="280"/>\n'
    
    for row_idx, row in enumerate(data):
        sheet += '   <Row ss:Height="20">\n'
        lvl = row[0]
        for col_idx, text in enumerate(row[1:]):
            style = "sEmpty"
            if row_idx == 0:
                style = "sHeaderInput" if col_idx >= 3 else "sHeader"
            elif lvl == 1 and col_idx <= 2: style = "sLevel1"
            elif lvl == 2 and col_idx <= 2: style = "sLevel2"
            elif lvl == 3 and col_idx <= 2: 
                if "Soru " in text or "Frage " in text: style = "sQuestion"
                else: style = "sLevel3"
            
            sheet += f'    <Cell ss:StyleID="{style}">'
            if text:
                escaped = str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
                sheet += f'<Data ss:Type="String">{escaped}</Data>'
            sheet += '</Cell>\n'
        sheet += '   </Row>\n'
    
    sheet += '  </Table>\n </Worksheet>\n'
    return sheet

xml += make_sheet("Türkçe Menü", tr_data)
xml += make_sheet("Almanca Menü (DE)", de_data)
xml += "</Workbook>"

print(xml)
