#!/bin/sh
# Odtwarza modules/*.js (ignorowane w gicie) z monolitu v0_57 w gałęzi archiwum.
set -e
cd "$(dirname "$0")/.."
git fetch -q --depth 1 origin claude/che-lab-archiwum-v0_57:refs/remotes/origin/che-arch
git show origin/che-arch:out_build/CHE_lab_wizualizacje_v0_57_GFX16.html > /tmp/che_mono.html
python3 tools/extract_modules.py /tmp/che_mono.html
