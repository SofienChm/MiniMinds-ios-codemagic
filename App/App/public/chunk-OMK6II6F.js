import{W as a}from"./chunk-WUSJIJR6.js";var s=class i{static PRIMARY_COLOR="#7dd3c0";static SUCCESS_COLOR="#1ABE17";static DANGER_COLOR="#DC3545";static TEXT_COLOR="#202C4B";static SHADOW="0px 4.4px 12px -1px rgba(222, 222, 222, 0.36)";static BORDER_RADIUS="12px";show(o,e=5e3){let t=document.createElement("div");t.className="simple-toast",t.textContent=o,t.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--primary-color, #7dd3c0);
      color: white;
      padding: 14px 20px;
      border-radius: 12px;
      box-shadow: 0px 4.4px 12px -1px rgba(222, 222, 222, 0.36);
      z-index: 9999;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      animation: toastSlideInRight 0.3s ease-out;
      max-width: 350px;
    `,document.body.appendChild(t),this.injectAnimations(),setTimeout(()=>{t.style.animation="toastSlideOutRight 0.3s ease-out forwards",setTimeout(()=>{t.remove()},300)},e)}success(o,e=5e3){let t=document.createElement("div");t.className="simple-toast simple-toast-success",t.textContent=o,t.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--primary-color, #7dd3c0);
      color: white;
      padding: 14px 20px;
      border-radius: 12px;
      box-shadow: 0px 4.4px 12px -1px rgba(222, 222, 222, 0.36);
      z-index: 9999;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      animation: toastSlideInRight 0.3s ease-out;
      max-width: 350px;
    `,document.body.appendChild(t),this.injectAnimations(),setTimeout(()=>{t.style.animation="toastSlideOutRight 0.3s ease-out forwards",setTimeout(()=>{t.remove()},300)},e)}error(o,e=5e3){let t=document.createElement("div");t.className="simple-toast simple-toast-error",t.textContent=o,t.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--red-color, #DC3545);
      color: white;
      padding: 14px 20px;
      border-radius: 12px;
      box-shadow: 0px 4.4px 12px -1px rgba(222, 222, 222, 0.36);
      z-index: 9999;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      animation: toastSlideInRight 0.3s ease-out;
      max-width: 350px;
    `,document.body.appendChild(t),this.injectAnimations(),setTimeout(()=>{t.style.animation="toastSlideOutRight 0.3s ease-out forwards",setTimeout(()=>{t.remove()},300)},e)}warning(o,e=5e3){let t=document.createElement("div");t.className="simple-toast simple-toast-warning",t.textContent=o,t.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--secondary-color, #7db9ff);
      color: white;
      padding: 14px 20px;
      border-radius: 12px;
      box-shadow: 0px 4.4px 12px -1px rgba(222, 222, 222, 0.36);
      z-index: 9999;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      animation: toastSlideInRight 0.3s ease-out;
      max-width: 350px;
    `,document.body.appendChild(t),this.injectAnimations(),setTimeout(()=>{t.style.animation="toastSlideOutRight 0.3s ease-out forwards",setTimeout(()=>{t.remove()},300)},e)}injectAnimations(){if(!document.getElementById("simple-toast-animations")){let o=document.createElement("style");o.id="simple-toast-animations",o.textContent=`
        @keyframes toastSlideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes toastSlideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
      `,document.head.appendChild(o)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"})};export{s as a};
