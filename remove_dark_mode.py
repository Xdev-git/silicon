import os
import re

def remove_dark_classes(directory):
    # Regex to match 'dark:' followed by any non-whitespace characters
    # until a space, quote, or other common CSS class separator is found.
    # Handles cases like 'dark:bg-black', 'dark:text-white/50', etc.
    dark_pattern = re.compile(r'\s?dark:[^\s"\'`}]+')

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.css', '.js', '.jsx')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = dark_pattern.sub('', content)
                
                # Also handle potentially orphaned spaces
                new_content = new_content.replace('  ', ' ')
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {filepath}")

if __name__ == "__main__":
    remove_dark_classes('d:/Silicon/web/src')
