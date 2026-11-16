cd /tmp/b
cat av.js logic.js save.js tail.js | python3 -c "
import sys;s=sys.stdin.read().replace('　👑\'','　【新君】\'');open('/tmp/b/a2.js','w').write(s)"
node --check a2.js && cp a2.js a.js && python3 - <<'PY'
h=open('/tmp/b/head.html').read();b=open('/tmp/b/bg.html').read();a=open('/tmp/b/a.js').read()
open('/mnt/user-data/outputs/palace8.html','w').write(h+b+'<script>\n'+a+'\n</script>\n')
PY
