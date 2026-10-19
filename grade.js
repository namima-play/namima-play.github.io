/* Local grade of the five first-attempt scores. No leaderboard or storage. */
(function(root){
'use strict';
function fromTotal(total){
 if(!Number.isFinite(total)||total<0||total>500)throw Error('Invalid total score');
 return total>=450?'S':total>=400?'A':total>=300?'B':'C';
}
function fromGame(game){
 const S=root.NamimaSession||(typeof require==='function'?require('./session.js'):null);
 if(!S.complete(game))throw Error('Finish five rounds first');
 return fromTotal(S.total(game));
}
const api={fromTotal,fromGame};root.NamimaGrade=api;
if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
