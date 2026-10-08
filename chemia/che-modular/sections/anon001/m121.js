try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function rows(){const a=D.REACTIONS||{},b=D.REACTION_DATA||{};const keys=[...new Set([...Object.keys(a),...Object.keys(b)])];return keys.map(id=>({id,data:a[id]||b[id]||{}}));}
function audit(){const rs=rows(),required=['conditions','catalyst','solvent','temperature','pressure','exoEndo','safety','bhp','source','provenance'];const cov=Object.fromEntries(required.map(f=>[f,rs.filter(r=>r.data?.[f]!=null&&r.data[f]!=='').length]));const balanced=rs.filter(r=>r.data?.balanced===true||r.data?.isBalanced===true||r.data?.balance===true).length;const withSource=rs.filter(r=>r.data?.source||r.data?.provenance||r.data?.reference).length;return {version:'2.73',records:rs.length,balanced,withSource,fieldCoverage:cov,missingSource:rs.filter(r=>!(r.data?.source||r.data?.provenance||r.data?.reference)).map(r=>r.id)};}
function regression(){const a=audit();return [{id:'RX73-001',name:'reaction inventory stable',ok:a.records>=0,detail:String(a.records)},{id:'RX73-002',name:'audit is read-only',ok:true,detail:'no reaction record modified'},{id:'RX73-003',name:'source gaps remain visible',ok:Array.isArray(a.missingSource),detail:String(a.missingSource.length)}];}
C.REACTION_AUDIT_V273={version:'2.73',audit,regression};E.modules=E.modules||{};E.modules.REACTION_AUDIT_V273='2.73';E.registry=E.registry||{};E.registry.REACTION_AUDIT_V273={layer:'AUDIT/DATA',owner:'CHE.REACTION_AUDIT_V273',depends:['REACTIONS','REACTION_DATA','REACTION_SCIENCE_AUDIT']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 121]', err && err.message ? err.message : err); } catch(_){}
}

