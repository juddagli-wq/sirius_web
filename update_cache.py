import os
import re
import time

def main():
    timestamp = str(int(time.time()))
    print(f"🔄 Önbellek kırmak için versiyonlar güncelleniyor: v={timestamp}")
    
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Update or add ?v= for styles.css
        content = re.sub(r'href="styles\.css(\?v=[a-zA-Z0-9\.]+)?', f'href="styles.css?v={timestamp}', content)
        
        # Update or add ?v= for main.js
        content = re.sub(r'src="main\.js(\?v=[a-zA-Z0-9\.]+)?', f'src="main.js?v={timestamp}', content)
        
        # Update or add ?v= for chatbot.js
        content = re.sub(r'src="chatbot\.js(\?v=[a-zA-Z0-9\.]+)?', f'src="chatbot.js?v={timestamp}', content)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
            
    print("✅ Tüm HTML dosyaları güncellendi.")

if __name__ == "__main__":
    main()
