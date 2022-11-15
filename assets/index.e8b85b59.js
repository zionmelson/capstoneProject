(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();class A extends HTMLElement{constructor(){super()}static get observedAttributes(){return["location","website","image","costs"]}attributeChangedCallback(e,o,n){o!==n&&(e==="location"&&(this.location.textContent=n),e==="website"&&(this.website.textContent=n,this.website.href=n),e==="image"&&(this.image.src=n),e==="description"&&(this.description.textContent=n),e==="airport"&&(this.airport.textContent=n),e==="costs"&&(this.costs.textContent=n))}connectedCallback(){const e=this.attachShadow({mode:"open"}),o=document.getElementById("output-template").content.cloneNode(!0);e.append(o),this.location=this.shadowRoot.querySelector("#location"),this.website=this.shadowRoot.querySelector("#website"),this.description=this.shadowRoot.querySelector("#airport-description"),this.airport=this.shadowRoot.querySelector("#airport-name"),this.image=this.shadowRoot.querySelector("#airport-image"),this.costs=this.shadowRoot.querySelector(".costs");const n=this.getAttribute("location");n&&(this.location.textContent=n);const i=this.getAttribute("website");i&&(this.website.href=i,this.website.textContent=i);const s=this.getAttribute("image");s&&(this.image.src=s);const r=this.getAttribute("description");r&&(this.description.textContent=r);const a=this.getAttribute("airport-name");a&&(this.airport.textContent=a);const c=this.getAttribute("costs");c&&(this.costs.textContent=c)}}const D="";async function E(t){const e={method:"GET",headers:{"X-RapidAPI-Key":`${D}`,"X-RapidAPI-Host":"airport-info.p.rapidapi.com"}};return await(await fetch(`https://airport-info.p.rapidapi.com/airport?iata=${t}`,e)).json()}const x="";async function L(t){const e={method:"GET",headers:{"X-RapidAPI-Key":`${x}`,"X-RapidAPI-Host":"contextualwebsearch-websearch-v1.p.rapidapi.com"}};return await(await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${t}`,e)).json()}async function P(){return document.getElementById("location").value}const B="";async function S(t,e){const o={method:"GET",headers:{"X-RapidAPI-Key":`${B}`,"X-RapidAPI-Host":"cost-of-living-and-prices.p.rapidapi.com"}};return e.replace(" ","%20"),await(await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${t}&country_name=${e}`,o)).json()}async function M(t,e){const o=document.createElement("city-card");return o.setAttribute("location",t.location),o.setAttribute("website",t.website),o.setAttribute("description",t.state),o.setAttribute("airport-name",t.name),o.setAttribute("image",e.value[1].url),(await S(t.city,t.country)).prices.map(s=>{console.log(s.avg)}),o}async function k(){const t=document.getElementById("results");t.textContent=""}const T=(t,e)=>e.some(o=>t instanceof o);let y,g;function R(){return y||(y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j(){return g||(g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const v=new WeakMap,h=new WeakMap,I=new WeakMap,l=new WeakMap,b=new WeakMap;function O(t){const e=new Promise((o,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{o(d(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)});return e.then(o=>{o instanceof IDBCursor&&v.set(o,t)}).catch(()=>{}),b.set(e,t),e}function $(t){if(h.has(t))return;const e=new Promise((o,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{o(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)});h.set(t,e)}let m={get(t,e,o){if(t instanceof IDBTransaction){if(e==="done")return h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||I.get(t);if(e==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return d(t[e])},set(t,e,o){return t[e]=o,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function N(t){m=t(m)}function W(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...o){const n=t.call(p(this),e,...o);return I.set(n,e.sort?e.sort():[e]),d(n)}:j().includes(t)?function(...e){return t.apply(p(this),e),d(v.get(this))}:function(...e){return d(t.apply(p(this),e))}}function q(t){return typeof t=="function"?W(t):(t instanceof IDBTransaction&&$(t),T(t,R())?new Proxy(t,m):t)}function d(t){if(t instanceof IDBRequest)return O(t);if(l.has(t))return l.get(t);const e=q(t);return e!==t&&(l.set(t,e),b.set(e,t)),e}const p=t=>b.get(t);function C(t,e,{blocked:o,upgrade:n,blocking:i,terminated:s}={}){const r=indexedDB.open(t,e),a=d(r);return n&&r.addEventListener("upgradeneeded",c=>{n(d(r.result),c.oldVersion,c.newVersion,d(r.transaction),c)}),o&&r.addEventListener("blocked",c=>o(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const K=["get","getKey","getAll","getAllKeys","count"],X=["put","add","delete","clear"],f=new Map;function w(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(f.get(e))return f.get(e);const o=e.replace(/FromIndex$/,""),n=e!==o,i=X.includes(o);if(!(o in(n?IDBIndex:IDBObjectStore).prototype)||!(i||K.includes(o)))return;const s=async function(r,...a){const c=this.transaction(r,i?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[o](...a),i&&c.done]))[0]};return f.set(e,s),s}N(t=>({...t,get:(e,o,n)=>w(e,o)||t.get(e,o,n),has:(e,o)=>!!w(e,o)||t.has(e,o)}));function F(){C("vacation-planner",1,{upgrade(t){t.createObjectStore("trips",{autoIncrement:!0})}})}async function H(t,e){(await C("vacation-planner",1)).put("trips",t,e)}F();async function G(){k();try{const t=await P();console.log(t);const e=await E(t),o=await L(e.location);console.log(e),H({dataInfo:e,picInfo:o},e.id);const n=await M(e,o);results.appendChild(n)}catch(t){console.error(t)}}customElements.define("city-card",A);document.querySelector("#app").innerHTML=`
    <div id="main">
      <h1>Moving Planner</h1>
      <label for="location">Pick a City</label>
      <select id="location">
        <option value="ATL">Atlanta</option>
        <option value="LAX">Los Angeles</option>
        <option value="LGA">New York</option>
        <option value="DCA">Washington DC</option>
      </select>
      <button id="submit">enter</button>
    </div>
    <div id="results">
    </div>
    <template id="output-template">
      <style>
          .images {
            width: 20rem;
          }
          .city-output {
            background-color: rgba(64, 64, 64, 0.4);
            border-radius: 20px;
            min-height: 30rem;
            min-width: 25rem;
            padding: 2rem;
            position: relative;
            text-align: center;
            font-weight: bold;
          }
          .heading-section{
            font-size: 20px;
            position: relative;
          }
          .main-section{
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: row;
            padding: 2rem;
          }
          .info-elements {
            position: relative;
            width: 20rem;
            min-height: 10rem;
            max-height: 25rem;
            margin: 1rem;
          }
          .footer-section {
            top: 1.5rem;
            height: 3rem;
          }
          .website-input{
            color: white;
            font-size: 20px;
            font-size: 10px;
          }
          #website:hover{
          color: lightblue;
          }
          #black-text {
            color: black;
          }
      </style>
      <div class="city-output">
        <div class="heading-section">
          <h1>Let us plan your Move to:</h1>
          <h2 id="location"></h2>
        </div>
        <div class="main-section">
          <div class="info-elements"> 
            <img class="images" id="airport-image" src="" alt="Pic of Airport City" /> 
            <p id="airport-description"></p>
            <p id="airport-name"></p>
          </div>
          <div class="attractions-list"> 
              <div class="info-elements">
                <div class="costs"></div>
              </div>
          </div>
        </div>
        <div class="add-button">
          <button class="add">Add</button>
        </div>
        <div class="footer-section">
          <p class="website-input">Website: <a class="website-input" id="website"></a></p>
        </div>
      </div>
  </template>
`;const z=document.querySelector("#submit");z.addEventListener("click",t=>{t.preventDefault(),G()});
