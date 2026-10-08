try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
const CAT=C.LESSON_REACTION_CATALOG||{};
const records=Array.isArray(CAT.records)?CAT.records:[];
function norm(x){return String(x||'').replace(/→/g,'->').replace(/\s+/g,'').replace(/[‐‑‒–—]/g,'-').replace(/\\(aq\\)|\\(s\\)|\\(l\\)|\\(g\\)/g,'').replace(/↓|↑/g,'').replace(/\\(Δ[^)]*\\)|\\([^)]*kat[^)]*\\)|\\([^)]*hν[^)]*\\)/gi,'').toLowerCase();}
function canonicalRows(){return Object.entries(D.REACTIONS||{}).map(([id,r])=>({id,raw:r,equation:r?.equation||r?.display||r?.reaction||r?.formula||''}));}
function exactIndex(rows){const m=new Map();rows.forEach(x=>{const n=norm(x.equation);if(n&&!m.has(n))m.set(n,[]);if(n)m.get(n).push(x.id);});return m;}
function matchRecord(rec,rows,idx){const n=norm(rec.equation);if(!n)return {status:'UNPARSEABLE'};const ex=idx.get(n)||[];if(ex.length===1)return {status:'EXACT_CANONICAL',reactionIds:ex};if(ex.length>1)return {status:'MULTIPLE_CANONICAL',reactionIds:ex};
 const hits=[];const parts=n.split('->');if(parts.length===2){rows.forEach(x=>{const q=norm(x.equation).split('->');if(q.length!==2)return;const score=(parts[0]===q[0]?1:0)+(parts[1]===q[1]?1:0);if(score)hits.push({id:x.id,score});});}
 hits.sort((a,b)=>b.score-a.score);return hits.length?{status:'NEEDS_REVIEW',reactionIds:hits.slice(0,5).map(x=>x.id),scores:hits.slice(0,5)}:{status:'NO_CANONICAL_MATCH'};}
function conditions(text){const t=String(text||'');const flags=[];if(/MnO₂|kat\.?|katal|Ni\b|Pt\b/i.test(t))flags.push('CATALYST_OR_CATALYTIC_CONDITION');if(/Δ|temperatur|°C|K\b/i.test(t))flags.push('TEMPERATURE');if(/hν|światł/i.test(t))flags.push('LIGHT');if(/aq|wodn|roztwor/i.test(t))flags.push('AQUEOUS');if(/BHP|okular|żrąc|toksy|niebezp|gwałtown/i.test(t))flags.push('SAFETY_NOTE');return flags;}
function audit(){const rows=canonicalRows(),idx=exactIndex(rows);const mapped=records.map(r=>({...r,reconciliation:matchRecord(r,rows,idx),conditionFlags:conditions(r.equation)}));const counts={};mapped.forEach(x=>{counts[x.reconciliation.status]=(counts[x.reconciliation.status]||0)+1;});return {version:'2.76',source:CAT.source||null,candidateRecords:mapped.length,canonicalRecords:rows.length,counts,exact:mapped.filter(x=>x.reconciliation.status==='EXACT_CANONICAL').length,needsReview:mapped.filter(x=>x.reconciliation.status==='NEEDS_REVIEW').length,unmatched:mapped.filter(x=>x.reconciliation.status==='NO_CANONICAL_MATCH').length,unparseable:mapped.filter(x=>x.reconciliation.status==='UNPARSEABLE').length,records:mapped,policy:'reconciliation is audit-only; it never mutates CHE.DATA.REACTIONS'};}
function regression(){const a=audit();return [{id:'RX76-001',name:'lesson catalog retained',ok:a.candidateRecords>0},{id:'RX76-002',name:'canonical reaction store present',ok:a.canonicalRecords>0},{id:'RX76-003',name:'no mutation policy',ok:a.policy.includes('never')},{id:'RX76-004',name:'reconciliation explicit',ok:Object.keys(a.counts).length>0}];}
C.REACTION_LESSON_RECONCILIATION={version:'2.76',audit,regression};E.modules=E.modules||{};E.modules.REACTION_LESSON_RECONCILIATION='2.76';E.registry=E.registry||{};E.registry.REACTION_LESSON_RECONCILIATION={layer:'AUDIT/RECONCILIATION',owner:'CHE.REACTION_LESSON_RECONCILIATION',depends:['LESSON_REACTION_CATALOG','DATA.REACTIONS','REACTION_SCIENCE_CONTRACT_V274']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 135]', err && err.message ? err.message : err); } catch(_){}
}

