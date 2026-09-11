(()=>{
/*!
  
    button block sitemap url random
    
    License           : < https://tinyurl.com/s872fb68 >
    
    Version           : 0.1.0
    
    SS Versions       : 7.1, 7.0
    
    Note              : this code fetches the sitemap
    
    Copyright         : 2026 Thomas Creedon
                        
                        Tom's Web Consulting
                        
                        < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
const t="Button Block Sitemap Url Random",n="0.1.0",e=`${t} v${n}\n    \n      License < https://tinyurl.com/s872fb68 >\n      \n      © 2026 Thomas Creedon\n      \n      Tom's Web Consulting < http://www.tomsWeb.consulting >`.replace(/^\s+/gm,"");console.log(e);let s,o=[];const r=Static.SQUARESPACE_CONTEXT.website.baseUrl,a="twc-bbsur",c=`#${a}-`,l="/sitemap.xml",h=(t,n)=>{const e=t=>"sm"!==t?null:"http://www.sitemaps.org/schemas/sitemap/0.9",s=n.evaluate(t,n,e,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);return s},i=`.sqs-block-button-element[ href ^= "${c}" ]`,m=async()=>{try{const t=await fetch(l);if(!t.ok){const n=`\n            \n              ${a} network response was not ok ${t.statusText}\n                  \n              `.trim().replace(/\s+/gm," ");throw new Error(n)}s=await t.text(),s=(new DOMParser).parseFromString(s,"application/xml")}catch(t){const n=`\n            \n              ${a}\n                \n              there has been a problem with your\n              \n              fetch get operation, ${t}.\n                \n              `.trim().replace(/\s+/gm," ");console.error(n)}const t=[...document.querySelectorAll(i)];t.forEach(t=>{const n="/"+t.getAttribute("href").replace(`${c}`,"")+"/";t.setAttribute("href",n),o.push(n)});const n=`\n          \n            .//sm:loc[\n            \n              ${o.map(t=>{t=r+t;const n=`\n                  \n                    substring (\n                    \n                      text ( ),\n                      \n                      1,\n                      \n                      string-length (\n                      \n                        '${t}'\n                        \n                        )\n                        \n                      )\n                      \n                    =\n                    \n                    '${t}'\n                    \n                    `;return n}).join("or")}\n                \n              ]\n                       \n            `,e=h(n,s);if(e.snapshotLength){o=Object.fromEntries(o.map(t=>[t,[]]));for(let t=0;t<e.snapshotLength;t++){const n=e.snapshotItem(t).textContent.replace(r,"");let s=!1;for(const t of Object.keys(o))if(n.startsWith(t)){o[t].push(n),s=!0;break}}t.forEach(t=>{const n=t.getAttribute("href");t.setAttribute("href",o[n][Math.floor(Math.random()*o[n].length)])})}};document.addEventListener("DOMContentLoaded",m)})();
