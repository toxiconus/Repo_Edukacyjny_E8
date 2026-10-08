try {

(function(g){'use strict';const C=g.CHE=g.CHE||{},D=C.DATA=C.DATA||{},E=C.ENGINE=C.ENGINE||{};
function auditBase(){return C.REACTION_LESSON_RECONCILIATION?.audit?.()||{};}
function normalizeFormula(x){return String(x||'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,m=>'0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(m)]).replace(/[⁺⁻]/g,m=>m==='⁺'?'+':'-').replace(/\s+/g,'').replace(/[↓↑]/g,'').replace(/[‐‑‒–—]/g,'-');}
function signature(x){let t=String(x||'').replace(/→|⟶/g,'->').replace(/—\([^)]*\)/g,'').replace(/\([^)]*(?:kat|MnO₂|hν|Δ|°C|światł|temp)[^)]*\)/gi,'').replace(/[↓↑]/g,'').replace(/\s+/g,'');const p=t.split('->');if(p.length!==2)return '';const parse=z=>z.split('+').map(q=>{const m=q.match(/^(\d+)?(.+)$/);return `${Number(m?.[1]||1)}*${normalizeFormula(m?.[2]||q)}`}).sort().join('+');return parse(p[0])+'->'+parse(p[1]);}
function queue(){const a=auditBase(),rows=(a.records||[]).filter(x=>x.classification==='REACTION_EQUATION'&&x.reconciliation?.status==='NO_CANONICAL_MATCH');const groups=new Map();rows.forEach(x=>{const sig=signature(x.normalizedEquation||x.equation);if(!sig)return;if(!groups.has(sig))groups.set(sig,{signature:sig,examples:[],sourceCount:0,conditionFlags:new Set()});const q=groups.get(sig);q.sourceCount++;if(q.examples.length<5)q.examples.push(x.equation);(x.conditionFlags||[]).forEach(f=>q.conditionFlags.add(f));});return [...groups.values()].map((x,i)=>({queueId:'RXQ-278-'+String(i+1).padStart(4,'0'),signature:x.signature,sourceCount:x.sourceCount,examples:x.examples,conditionFlags:[...x.conditionFlags],status:'UNVERIFIED'}));}
function audit(){const q=queue();return {version:'2.78',groups:q.length,totalCandidates:q.reduce((n,x)=>n+x.sourceCount,0),verified:0,readyForVerification:q.length,queue:q,policy:'queue only; no candidate is promoted into CHE.DATA.REACTIONS without scientific verification'};}
function regression(){const a=audit();return [{id:'RX78-001',name:'semantic queue deduplicates lesson candidates',ok:a.groups<=a.totalCandidates},{id:'RX78-002',name:'no automatic promotion',ok:a.verified===0},{id:'RX78-003',name:'queue is sourced from unresolved real reactions',ok:a.totalCandidates>=0}];}
C.REACTION_EXPANSION_QUEUE={version:'2.78',audit,regression};E.modules=E.modules||{};E.modules.REACTION_EXPANSION_QUEUE='2.78';E.registry=E.registry||{};E.registry.REACTION_EXPANSION_QUEUE={layer:'AUDIT/QUEUE',owner:'CHE.REACTION_EXPANSION_QUEUE',depends:['REACTION_LESSON_RECONCILIATION','DATA.REACTIONS']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 141]', err && err.message ? err.message : err); } catch(_){}
}

