import glob
import re

def process_html_files():
    html_files = glob.glob("*.html")
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove member-login-area
        new_content = re.sub(r'<div class="member-login-area".*?</div>\s*', '', content, flags=re.DOTALL)
        
        # Remove perspective-toggle
        new_content = re.sub(r'<div class="perspective-toggle".*?</div>\s*', '', new_content, flags=re.DOTALL)
        
        if new_content != content:
            try:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
            except PermissionError:
                print(f"PermissionError on {filepath}, skipping...")

if __name__ == "__main__":
    process_html_files()
