import re
from pathlib import Path

root = Path('.').resolve()
html_files = list(root.rglob('*.html'))
modified = []

href_re = re.compile(r'href=\"(/[^\"#? ]+/?(?:[^\"]*?))\"')
# matches href="/..." capturing path (without query)

for f in html_files:
    text = f.read_text(encoding='utf-8')
    if '<header' not in text:
        continue
    start = text.find('<header')
    end = text.find('</header>', start)
    if end == -1:
        continue
    header_block = text[start:end+9]
    depth = len(f.parent.relative_to(root).parts)

    def repl(m):
        orig = m.group(1)  # like /catalog/ or /contacts/index.html
        # skip if looks like file at root (e.g., /images/... or /site.webmanifest)
        # We'll only convert when path starts with / and first segment is not one of common asset dirs
        asset_dirs = ('images', 'assets', 'upload', 'local', 'bitrix', 'static')
        seg = orig.lstrip('/').split('/',1)[0]
        if seg in asset_dirs:
            return m.group(0)
        path = orig.lstrip('/')
        if path.endswith('/'):
            path = path + 'index.html'
        # If path already contains a file extension, leave it
        rel_prefix = '' if depth==0 else '../'*depth
        new = rel_prefix + path
        return 'href="'+new+'"'

    new_header = href_re.sub(repl, header_block)
    if new_header != header_block:
        new_text = text[:start] + new_header + text[end+9:]
        f.write_text(new_text, encoding='utf-8')
        modified.append(str(f))

print('Modified files:', len(modified))
for m in modified[:200]:
    print(m)
