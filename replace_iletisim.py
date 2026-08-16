import glob

def process_html_files():
    html_files = glob.glob("*.html")
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        new_lines = []
        for line in lines:
            # Replace all exact matches of href="iletisim.html"
            line = line.replace('href="iletisim.html"', 'href="hakkimizda.html#iletisim"')
            new_lines.append(line)
        
        if new_lines != lines:
            try:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.writelines(new_lines)
                print(f"Updated {filepath}")
            except PermissionError:
                print(f"PermissionError on {filepath}, skipping...")

if __name__ == "__main__":
    process_html_files()
