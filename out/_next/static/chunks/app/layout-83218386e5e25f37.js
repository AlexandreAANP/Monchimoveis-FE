(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{45580:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,62093,23)),Promise.resolve().then(r.t.bind(r,27735,23)),Promise.resolve().then(r.t.bind(r,30347,23)),Promise.resolve().then(r.bind(r,47781))},47781:(e,t,r)=>{"use strict";r.d(t,{NavbarDefault:()=>p});var n=r(95155),o=r(12115),s=r(18281),l=r(22885),i=r(22734);function a(e){let{icon:t}=e;return"bi bi-star-fill"==t?(0,n.jsx)(l.s0m,{style:{marginBottom:"5px"}}):(0,n.jsx)(i.v7R,{style:{marginBottom:"5px"}})}let c=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})};function u(e){let{content:t,href:r,target:o,icon:s}=e,l="flex items-center gap-x-2 p-1 font-medium",i={color:"#a7c44c",fontWeight:"400",fontSize:"15px",padding:"5px",fontFamily:"'Roboto', sans-serif"};return o?s?(0,n.jsx)("li",{className:l,children:(0,n.jsx)("a",{className:"cursor-pointer",target:"_blank",onClick:()=>c(r.replace("#","")),children:(0,n.jsxs)("span",{className:"flex items-center gap-x-2 text-white",style:i,children:[(0,n.jsx)(a,{icon:s}),t]})})},"{content}"):(0,n.jsxs)("li",{className:l,children:["bi bi-star-fill"==s,(0,n.jsx)("a",{className:"cursor-pointer",style:i,target:"_blank",onClick:()=>c(r.replace("#","")),children:t})]},"{content}"):s?(0,n.jsx)("li",{className:l,children:(0,n.jsx)("a",{className:"cursor-pointer",onClick:()=>c(r.replace("#","")),children:(0,n.jsxs)("span",{className:"flex items-center gap-x-2",style:i,children:[(0,n.jsx)(a,{icon:s}),t]})})},"{content}"):(0,n.jsx)("li",{className:l,children:(0,n.jsx)("a",{className:"cursor-pointer",style:i,onClick:()=>c(r.replace("#","")),children:t})},"{content}")}function d(e){let{items:t}=e;return(0,n.jsx)("ul",{className:"mt-2 mb-4 flex gap-2 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-right",children:t.map((e,t)=>(console.log(e),(0,n.jsx)(u,{content:e.content,href:e.href,target:e.target,icon:e.icon},"navbar-item-"+t)))})}function m(e){let{title:t}=e;return(0,n.jsx)("a",{href:"#",className:"mr-4 cursor-pointer",style:{fontSize:"22px",color:"#eee",fontWeight:"400",textTransform:"uppercase",letterSpacing:"1px"},children:t})}function p(e){let{title:t,items:r}=e,[l,i]=o.useState(!1),[a,c]=o.useState(!1),[u,p]=o.useState(!a);return o.useEffect(()=>{window.addEventListener("scroll",()=>{console.log(window.scrollY,a),window.scrollY>50?p(!1):p(!0)})},[]),o.useEffect(()=>{window.addEventListener("resize",()=>window.innerWidth>=960&&i(!1)),window.addEventListener("resize",()=>{window.innerWidth<=768?c(!0):c(!1)})},[]),(0,n.jsxs)("nav",{className:"fixed top-0 left-0 right-0 z-50 py-4 px-4 transition-colors duration-300 ease-in-out",style:{backgroundColor:a||!u?"#363636":"transparent"},children:[(0,n.jsxs)("div",{className:"container mx-auto flex items-center justify-between text-blue-gray-900",style:{borderBottom:l?"1px solid white":"",paddingBottom:l?"1rem":"0"},children:[(0,n.jsx)(m,{title:t}),(0,n.jsx)("div",{className:"hidden lg:block xl:block",children:(0,n.jsx)(d,{items:r})}),(0,n.jsx)(s.IconButton,{variant:"text",className:"ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white",ripple:!1,onClick:()=>i(!l),placeholder:"",onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:l?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-6 w-6",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:2,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]}),(0,n.jsx)(s.Collapse,{open:l,children:(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)(d,{items:r})})})]})}r(74953)},30347:()=>{},62093:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},27735:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},93435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(12115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(o),l=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:s,title:a}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==s?n.createElement(s.Consumer,null,e=>t(e)):t(o)}}},e=>{var t=t=>e(e.s=t);e.O(0,[777,690,103,202,87,985,441,517,358],()=>t(45580)),_N_E=e.O()}]);