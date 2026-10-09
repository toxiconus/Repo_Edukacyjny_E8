import re,sys,os,unicodedata
src,out=sys.argv[1],sys.argv[2]; os.makedirs(out,exist_ok=True)
L=open(src,encoding='utf-8').read().split('\n')
mk=[(i,m.group(1),m.group(2)) for i,l in enumerate(L) if (m:=re.match(r'<!-- =+ (BEGIN|END) (\S+) =+ -->',l))]
def slug(s):
    s=unicodedata.normalize('NFKD',s.replace('ł','l').replace('Ł','L')).encode('ascii','ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+','_',s).strip('_')[:40]
UID={'WSTEP':'CHE.00.W00.wstep','SYSTEM_IX':'CHE.00.S00.system_kursu','L001':'CHE.01.F00-F09.fundamenty','L002':'CHE.02.N01.tlenki','L003':'CHE.02.N02.wodorotlenki','L004':'CHE.02.N03.kwasy','L005':'CHE.02.N04.sole','L006':'CHE.05.O01-O07.weglowodory','L007':'CHE.05.O11-O19.biochemia','L008':'CHE.03.R03-R04.stezenia','L009':'CHE.03.R05-R08.stechiometria','L010':'CHE.06.X01-X10.redoks','L011':'CHE.00.LAB.doswiadczenia','L012':'CHE.00.REV02.powtorka_klasy_8','L013':'CHE.00.REV06.zaawansowana','STATUS':'CHE.00.Z99.status_pakietu'}
parts=[];prev=0;n=0
for k in range(0,len(mk),2):
    (b,tb,nb),(e,te,ne)=mk[k],mk[k+1]; assert tb=='BEGIN' and te=='END' and nb==ne
    if b>prev: parts.append(('gap',prev,b))
    parts.append((nb,b,e+1)); prev=e+1
parts.append(('gap',prev,len(L)))
files=[];gi=0;extra={};body={}
for name,a,z in parts:
    if name=='gap':
        txt='\n'.join(L[a:z])
        if gi==0: fn=UID['WSTEP']+'.md'
        elif z==len(L): fn=UID['STATUS']+'.md'
        else:
            assert all(x.strip() in ('','---') for x in L[a:z]); files[-1]=(files[-1][0],files[-1][1]+'\n'+txt) if False else files[-1]; extra[files[-1]]=extra.get(files[-1],[])+L[a:z]; gi+=1; continue
        gi+=1
    else:
        t=next((re.sub(r'^# (LEKCJA )?','',l) for l in L[a:z] if l.startswith('# ')),name)
        t=re.sub(r'^L\d+\s*[—-]\s*','',t)
        fn=UID[name]+'.md' if name in UID else f'{name}_{slug(t)}.md'
    files.append(fn); body[fn]=L[a:z]
[open(os.path.join(out,f),'w',encoding='utf-8').write('\n'.join(body[f]+extra.get(f,[]))) for f in files]
open(os.path.join(out,'KOLEJNOSC.txt'),'w').write('\n'.join(files)+'\n')
# test: złożenie == oryginał
re_=[open(os.path.join(out,f),encoding='utf-8').read() for f in files]
print('identyczne:', '\n'.join(re_)=='\n'.join(L))
for f in files: print(f, sum(1 for _ in open(os.path.join(out,f))))
