import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const c={form:document.querySelector(".js-binance-form"),container:document.querySelector(".js-binance-info")};function l(e){const r="https://binance43.p.rapidapi.com",t="/ticker/price",s=new URLSearchParams({symbol:e}),n=`${r}${t}?${s}`;return fetch(n,{headers:{"x-rapidapi-key":"87997b3a6amsh394cadaffd43860p17ccb0jsnf1582bd421eb","x-rapidapi-host":"binance43.p.rapidapi.com"}}).then(o=>o.json())}function m(e){let{symbol:r,price:t}=e;const s=r.toLowerCase().replace("usdt","");return t=Number(t).toFixed(2),`
<img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${s}@2x.png"
    />
  <span class="coin-title">${r}</span>
  <span class="coin-price">${t}</span>`}c.form.addEventListener("submit",e=>{e.preventDefault();const r=e.target.elements.query.value;l(r).then(t=>{const s=m(t);c.container.innerHTML=s}).catch(t=>{c.container.innerHTML="<h1>Error</h1>"}),e.target.reset()});const p={form:document.querySelector(".js-hero-form"),container:document.querySelector(".js-hero-container")};function u(e){const r="https://superhero-search.p.rapidapi.com",t="/api/",s=new URLSearchParams({hero:e}),n=`${r}${t}?${s}`;return fetch(n,{headers:{"x-rapidapi-key":"87997b3a6amsh394cadaffd43860p17ccb0jsnf1582bd421eb","x-rapidapi-host":"superhero-search.p.rapidapi.com"}}).then(o=>o.json())}function d(e){const{appearance:r,biography:t,images:s,name:n,powerstats:a}=e;return`<div class="hero-card card">
  <div class="image-container">
    <img
      src="${s.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${n}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${t.fullName}</p>
      <p class="hero-bio">Publisher - ${t.publisher}</p>
      <p class="hero-bio">Alignment - ${t.alignment}</p>
      <p class="hero-bio">Gender - ${r.gender}</p>
      <p class="hero-bio">Race - ${r.race}</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: ${a.power}</span>
      <span>Strength: ${a.strength}</span>
      <span>Speed: ${a.speed}</span>
      <span>Combat: ${a.combat}</span>
    </div>
  </div>
</div>`}p.form.addEventListener("submit",e=>{e.preventDefault();const r=e.target.elements.query.value;u(r).then(t=>{const s=d(t);p.container.insertAdjacentHTML("afterbegin",s)}),e.target.reset()});document.querySelector('button[type="submit"]');document.querySelector('input[name="delay"]');document.querySelector("#fulfilled");document.querySelector("#rejected");const h=document.querySelector(".form");h.addEventListener("submit",e=>{e.preventDefault();const r=parseInt(e.target.delay.value),t=e.target.state.value;f(r,t).then(s=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${s}ms`})}).catch(s=>{i.error({title:"Error",message:`❌ Rejected promise in ${s}ms`})}),e.target.reset()});function f(e,r){return new Promise((t,s)=>{setTimeout(()=>{r==="fulfilled"?t(e):s(e)},e)})}function b(e){const r="https://newsapi.org/v2/",t="/everything",s=new URLSearchParams({apiKey:"b9dcffcbacb84f259adc726859a50fc5",q:e}),n=`${r}${t}?${s}`;return fetch(n).then(a=>a.json())}b("Tesla");
//# sourceMappingURL=page-3.js.map
