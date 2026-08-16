import os
import glob

def process_html_files():
    html_files = glob.glob("*.html")
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        new_lines = []
        for line in lines:
            if 'hakkimizda.html#team' in line:
                continue
            new_lines.append(line)
        
        if len(new_lines) != len(lines):
            try:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.writelines(new_lines)
                print(f"Updated {filepath}")
            except PermissionError:
                print(f"PermissionError on {filepath}, skipping...")

def process_js_file():
    filepath = 'main.js'
    if not os.path.exists(filepath):
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    for line in lines:
        if 'mega_a_col1_3' in line:
            continue
        new_lines.append(line)
        
    if len(new_lines) != len(lines):
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            print(f"Updated {filepath}")
        except PermissionError:
            print(f"PermissionError on {filepath}, skipping...")

if __name__ == "__main__":
    process_html_files()
    process_js_file()
