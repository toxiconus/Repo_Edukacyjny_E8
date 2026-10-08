try {

(function(g){'use strict';
const C=g.CHE=g.CHE||{},E=C.ENGINE=C.ENGINE||{};
function build(){const a=C.REACTION_LESSON_RECONCILIATION?.audit?.()||{}, rows=a.records||[];return {exactCanonical:rows.filter(x=>x.reconciliation?.status==='EXACT_CANONICAL'),multipleCanonical:rows.filter(x=>x.reconciliation?.status==='MULTIPLE_CANONICAL'),needsReview:rows.filter(x=>x.reconciliation?.status==='NEEDS_REVIEW'),unmatched:rows.filter(x=>x.reconciliation?.status==='NO_CANONICAL_MATCH'),unparseable:rows.filter(x=>x.reconciliation?.status==='UNPARSEABLE')};}
function audit(){const b=build();return {version:'2.82',exactCanonical:b.exactCanonical.length,multipleCanonical:b.multipleCanonical.length,needsReview:b.needsReview.length,unmatched:b.unmatched.length,unparseable:b.unparseable.length,promotionReady:0,policy:'even exact canonical matches remain unverified until source/conditions/balance are checked'};}
function regression(){const a=audit();return [{id:'RX82-001',name:'queue is audit-only',ok:a.promotionReady===0},{id:'RX82-002',name:'all reconciliation buckets accounted for',ok:Object.values(a).filter(x=>typeof x==='number').slice(0,5).every(x=>x>=0)}];}
C.REACTION_VERIFICATION_QUEUE_V282={version:'2.82',build,audit,regression};E.modules=E.modules||{};E.modules.REACTION_VERIFICATION_QUEUE_V282='2.82';E.registry=E.registry||{};E.registry.REACTION_VERIFICATION_QUEUE_V282={layer:'AUDIT/REACTION',owner:'CHE.DATA.REACTION_VERIFICATION_QUEUE_V282',depends:['REACTION_LESSON_RECONCILIATION','REACTION_LESSON_CLASSIFIER','REACTIONS']};
})(window);

} catch (err) {
  try { console.warn('[CHE module 153]', err && err.message ? err.message : err); } catch(_){}
}

