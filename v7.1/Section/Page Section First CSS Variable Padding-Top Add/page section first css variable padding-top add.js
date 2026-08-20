(()=>{
/*!
  
    page section first css variable padding-top add
    
    License         : < https://tinyurl.com/s872fb68 >
    
    Version         : 0.3.0
    
    SS Version      : 7.1
    
    Note            : this code is a base for other effects. the code alone
                      should not produce any visible change
    
    Copyright       : 2026 Thomas Creedon
                      
                      Tom's Web Consulting
                      
                      < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
const e="Page Section First CSS Variable Padding-Top Add",t="0.3.0",n=`\n    \n      ${e} v${t}\n      \n      License < https://tinyurl.com/s872fb68 >\n      \n      © 2022-2026 Thomas Creedon\n      \n      Tom's Web Consulting < http://www.tomsWeb.consulting >\n      \n      `.replace(/^\s+/gm,"");console.log(n);const o="style",r="twc-psfcvpta",s=()=>{const e=getComputedStyle(document.body.querySelector("#page .page-section:first-child")).getPropertyValue("padding-top");return e},c=e=>{document.querySelector(":root").style.setProperty(`--${r}`,e)},i=e=>{const t="attributes"===e.type;if(!t)return;const n=e.attributeName===o;n&&c(s())},a=()=>{c(s()),new MutationObserver(e=>e.forEach(e=>i(e))).observe(document.body.querySelector("#page-regions .page-section:first-child"),{attributeFilter:[o],childList:!0})};document.addEventListener("DOMContentLoaded",a)})();
