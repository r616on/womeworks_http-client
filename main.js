(()=>{var t={670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},318:(t,e,r)=>{var n=r(656),o=r(466),i=r(400),a=function(t){return function(e,r,a){var s,c=n(e),l=o(c.length),u=i(a,l);if(t&&r!=r){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},920:(t,e,r)=>{var n=r(871),o=r(887),i=r(236),a=r(70);t.exports=function(t,e){for(var r=o(e),s=a.f,c=i.f,l=0;l<r.length;l++){var u=r[l];n(t,u)||s(t,u,c(e,u))}}},880:(t,e,r)=>{var n=r(781),o=r(70),i=r(114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},781:(t,e,r)=>{var n=r(293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},109:(t,e,r)=>{var n=r(854),o=r(236).f,i=r(880),a=r(320),s=r(505),c=r(920),l=r(705);t.exports=function(t,e){var r,u,d,p,f,v=t.target,h=t.global,m=t.stat;if(r=h?n:m?n[v]||s(v,{}):(n[v]||{}).prototype)for(u in e){if(p=e[u],d=t.noTargetGet?(f=o(r,u))&&f.value:r[u],!l(h?u:v+(m?".":"#")+u,t.forced)&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),a(r,u,p,t)}}},293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},5:(t,e,r)=>{var n=r(857),o=r(854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},871:(t,e,r)=>{var n=r(908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},501:t=>{t.exports={}},664:(t,e,r)=>{var n=r(781),o=r(293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},361:(t,e,r)=>{var n=r(293),o=r(326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},788:(t,e,r)=>{var n=r(465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},909:(t,e,r)=>{var n,o,i,a=r(536),s=r(854),c=r(111),l=r(880),u=r(871),d=r(465),p=r(200),f=r(501),v="Object already initialized",h=s.WeakMap;if(a||d.state){var m=d.state||(d.state=new h),y=m.get,g=m.has,b=m.set;n=function(t,e){if(g.call(m,t))throw new TypeError(v);return e.facade=t,b.call(m,t,e),e},o=function(t){return y.call(m,t)||{}},i=function(t){return g.call(m,t)}}else{var T=p("state");f[T]=!0,n=function(t,e){if(u(t,T))throw new TypeError(v);return e.facade=t,l(t,T,e),e},o=function(t){return u(t,T)?t[T]:{}},i=function(t){return u(t,T)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},705:(t,e,r)=>{var n=r(293),o=/#|\.prototype\./,i=function(t,e){var r=s[a(t)];return r==l||r!=c&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},913:t=>{t.exports=!1},536:(t,e,r)=>{var n=r(854),o=r(788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},70:(t,e,r)=>{var n=r(781),o=r(664),i=r(670),a=r(593),s=Object.defineProperty;e.f=n?s:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},236:(t,e,r)=>{var n=r(781),o=r(296),i=r(114),a=r(656),s=r(593),c=r(871),l=r(664),u=Object.getOwnPropertyDescriptor;e.f=n?u:function(t,e){if(t=a(t),e=s(e,!0),l)try{return u(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},6:(t,e,r)=>{var n=r(324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},181:(t,e)=>{e.f=Object.getOwnPropertySymbols},324:(t,e,r)=>{var n=r(871),o=r(656),i=r(318).indexOf,a=r(501);t.exports=function(t,e){var r,s=o(t),c=0,l=[];for(r in s)!n(a,r)&&n(s,r)&&l.push(r);for(;e.length>c;)n(s,r=e[c++])&&(~i(l,r)||l.push(r));return l}},296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},887:(t,e,r)=>{var n=r(5),o=r(6),i=r(181),a=r(670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(854);t.exports=n},320:(t,e,r)=>{var n=r(854),o=r(880),i=r(871),a=r(505),s=r(788),c=r(909),l=c.get,u=c.enforce,d=String(String).split("String");(t.exports=function(t,e,r,s){var c,l=!!s&&!!s.unsafe,p=!!s&&!!s.enumerable,f=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(c=u(r)).source||(c.source=d.join("string"==typeof e?e:""))),t!==n?(l?!f&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||s(this)}))},488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},505:(t,e,r)=>{var n=r(854),o=r(880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},200:(t,e,r)=>{var n=r(309),o=r(711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},465:(t,e,r)=>{var n=r(854),o=r(505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},309:(t,e,r)=>{var n=r(913),o=r(465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},400:(t,e,r)=>{var n=r(958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},656:(t,e,r)=>{var n=r(361),o=r(488);t.exports=function(t){return n(o(t))}},958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},466:(t,e,r)=>{var n=r(958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},908:(t,e,r)=>{var n=r(488);t.exports=function(t){return Object(n(t))}},593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},817:(t,e,r)=>{"use strict";var n=r(109),o=r(781),i=r(854),a=r(871),s=r(111),c=r(70).f,l=r(920),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(p,u);var f=p.prototype=u.prototype;f.constructor=p;var v=f.toString,h="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=v.call(t);if(a(d,t))return"";var r=h?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";r(817);function t(t,e="GET",r){const n="https://homeworks-ahj-tickets.herokuapp.com/",o=new XMLHttpRequest;if("GET"===e){const e=new URLSearchParams;t.forEach((({name:t,value:r})=>e.append(t,r))),o.open("GET",`${n}:7070/?${e}`),o.send()}else{if("POST"!==e)return;{const e=JSON.stringify(t);o.open("POST",`${n}:7070`),o.send(e)}}o.addEventListener("load",(()=>{if(o.status>=200&&o.status<300)try{const t=JSON.parse(o.responseText);r(t)}catch(t){return console.error(t)}}))}class e{constructor(t){this.parentEl=t,this.thisTic={},this.onClick.bind(this),this.onFormAdd.bind(this),this.editTic.bind(this),this.onFormEdit.bind(this),this.editStatus.bind(this),this.fullTic.bind(this),this.allTickets=[{id:1627493913588,name:"Тэстовый",status:!1,created:"July 28, 2021 8:38 PM",description:" Что то длинное"},{id:1627493985287,name:"Командный бой",status:!1,created:"July 28, 2021 8:39 PM",description:" И еще что то"}]}static get markup(){return'<div class="HelpDesk">\n               <div class="title">\n                <button class="btn add">Добавить тикет</button>\n               </div>\n               <div class="body-row"></div>\n            </div>;'}static get widgetSelector(){return".HelpDesk"}static get buttonSelector(){return".btn"}bindToDOM(){this.parentEl.innerHTML=this.constructor.markup,this.widget=this.parentEl.querySelector(this.constructor.widgetSelector),this.widget.addEventListener("click",(t=>this.onClick(t)))}onClick(t){t.target.closest(".add")&&(t.preventDefault(),this.creatModalToDom("add")),t.target.closest(".cancel")&&(t.preventDefault(),t.target.closest(".modal").remove()),t.target.closest(".ok")&&t.target.closest(".modal-add")&&this.onFormAdd(t),t.target.closest(".control")&&t.target.closest(".edit")&&this.editTic(t),t.target.closest(".ok")&&t.target.closest(".modal-edit")&&this.onFormEdit(t),t.target.closest(".control")&&t.target.closest(".delete")&&this.deltTic(t),!t.target.closest(".control")&&t.target.closest(".ticket")&&(t.target.closest(".ticket").querySelector(".description")||this.fullTic(t),t.target.closest(".ticket").querySelector(".description")&&t.target.closest(".ticket").querySelector(".description").remove()),t.target.closest(".control")&&t.target.closest(".control").querySelector(".status")&&this.editStatus(t)}editStatus(e){t([{name:"method",value:"editStatusId"},{name:"id",value:e.target.closest(".ticket").dataset.id}],"GET",(t=>{t.ok&&this.allTicketsReq()}))}allTicketsReq(){t([{name:"method",value:"allTickets"}],"GET",(t=>{if(t){const e=this.parentEl.querySelector(".body-row");e.innerHTML="",t.forEach((t=>{e.append(this.creaTicToDom(t))}))}}))}fullTic(e){e.preventDefault();const r=e.target.closest(".ticket");t([{name:"method",value:"ticketById"},{name:"id",value:r.dataset.id}],"GET",(t=>{if(t){const e=r.querySelector(".name-row"),n=document.createElement("div");n.className="description",n.innerText=t.description,e.append(n)}}))}deltTic(e){const r=confirm("Вы уверенны что хотите удалить тикет? данное действие будет не обратимо.");if(e.preventDefault(),r){t([{name:"method",value:"ticketDelId"},{name:"id",value:e.target.closest(".ticket").dataset.id}],"GET",(()=>{this.allTicketsReq()}))}}editTic(e){e.preventDefault();const r=e.target.closest(".ticket");this.thisTic=r;t([{name:"method",value:"ticketById"},{name:"id",value:r.dataset.id}],"GET",(t=>{if(t){this.creatModalToDom("edit");const e=this.parentEl.querySelector(".modal"),r=e.querySelector(".modal-name"),n=e.querySelector(".modal-description");r.value=t.name,n.value=t.description}}))}onFormEdit(e){e.preventDefault();const r=this.parentEl.querySelector(".modal-form"),n={};[...r.elements].forEach((t=>{t.id&&(n[t.id]=t.value)})),n.status=this.thisTic.dataset.status,n.id=this.thisTic.dataset.id,n.method="editTicket",this.thisTic={},t(n,"POST",(t=>{t&&(this.parentEl.querySelector(".modal").remove(),this.allTicketsReq())}))}onFormAdd(e){e.preventDefault();const r=this.parentEl.querySelector(".modal-form"),n={};[...r.elements].forEach((t=>{t.id&&(n[t.id]=t.value)})),n.method="createTicket",t(n,"POST",(t=>{t&&(this.parentEl.querySelector(".modal").remove(),this.allTicketsReq())}))}creaTicToDom(t){const e=document.createElement("div");e.className="ticket",e.dataset.id=t.id,e.dataset.name=t.name,e.dataset.status=t.status,e.innerHTML=`\n            <div class="ticket-row">\n             <div class="control-row">\n                <span class="control">\n                  <span class="status">&#10003</span>\n                </span>\n              </div>\n              <div class="name-row">\n              <div class="name">${t.name}</div>\n              </div>\n              <div class="created">${t.created}</div>\n              <div class="control-row">\n                <span class="control ">\n                  <span class="edit active">&#9998</span>\n                </span>\n              </div>\n              <div class="control-row">\n                <span class="control">\n                  <span class="delete active">&#215</span>\n                </span>\n              </div>\n            `;const r=e.querySelector(".status");return t.status?r.classList.add("active"):r.classList.remove("active"),e}creatModalToDom(t="add"){let e="Добавить тикет";const r=document.createElement("div");r.className="modal modal-add","edit"===t&&(e="Изменить тикет",r.className="modal modal-edit"),r.innerHTML=`\n          <div class="modal-row">\n            <div class="modal-title"> ${e}</div>\n            <div class="modal-body">\n              <form class="modal-form" action="">\n                <label class="modal-lable" for="name" >Краткое описание</label>\n                <input class="input modal-name" type="text" id="name" required placeholder="описание">\n                <span class="modal-lable" >Подробное описание</span>\n\n                <textarea class="textarea modal-description" id="description"  required placeholder = "описание11" > </textarea>\n            \n                <div class="form-control">\n                  <button class="btn cancel">Отмена</button>\n                  <button class="btn ok">ОК</button>\n                </div> \n              </form>\n            </div>\n          </div>\n            `,this.parentEl.querySelector(this.constructor.widgetSelector).append(r)}}document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".conteiner"),r=new e(t);r.bindToDOM(),r.allTicketsReq()}))})()})();