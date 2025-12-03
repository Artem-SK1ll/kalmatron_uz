#!/usr/bin/env python3
"""
add_base_to_all_html.py

Usage:
  python add_base_to_all_html.py [--apply] [--root PATH] [--base BASE]

This script finds all .html files under the project root, and inserts
    <base href="/kalmatron_uz/">
into the <head> section if a <base> tag is not already present.

By default it runs in dry-run mode and prints files that would be changed.
Pass `--apply` to modify files in-place. `--root` defaults to repository root.
"""
import argparse
import re
from pathlib import Path


BASE_TAG = '<base href="/kalmatron_uz/">'


def process_file(path: Path, base_tag: str, apply: bool) -> bool:
    text = path.read_text(encoding='utf-8')

    # If file already contains any <base ...> tag, skip
    if re.search(r'<base\s+[^>]*href=["\']', text, flags=re.IGNORECASE):
        return False

    # Find opening <head ...> tag
    m = re.search(r'(<head[^>]*>)', text, flags=re.IGNORECASE)
    if not m:
        # no head tag — skip
        return False

    insert_pos = m.end()
    new_text = text[:insert_pos] + '\n    ' + base_tag + text[insert_pos:]

    if apply:
        path.write_text(new_text, encoding='utf-8')
        return True
    else:
        return True


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--apply', action='store_true', help='Modify files in-place')
    parser.add_argument('--root', default='.', help='Project root to scan')
    parser.add_argument('--base', default=BASE_TAG, help='Base tag to insert')
    args = parser.parse_args()

    root = Path(args.root)
    html_files = list(root.rglob('*.html'))

    changed = []
    skipped = []

    for f in html_files:
        try:
            should_change = process_file(f, args.base, args.apply)
            if should_change:
                changed.append(str(f))
            else:
                skipped.append(str(f))
        except Exception as e:
            print(f'Error processing {f}: {e}')

    if args.apply:
        print('Modified files:')
    else:
        print('Dry run — files that would be modified:')

    for p in changed:
        print('  ' + p)

    print('\nSkipped (already had <base> or no <head>):')
    for p in skipped[:50]:
        print('  ' + p)

    print(f'\nTotal HTML files scanned: {len(html_files)}')
    print(f'Would modify: {len(changed)}; skipped: {len(skipped)}')


if __name__ == '__main__':
    main()
