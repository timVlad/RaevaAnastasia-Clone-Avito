(this.webpackJsonpavito=this.webpackJsonpavito||[]).push([[0],{28:function(e,a,t){e.exports=t(61)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(25),c=t.n(n),i=(t(33),t(34),t(6)),s=t(11),m=(t(35),t(7));var o=function(e){return r.a.createElement("div",{className:"property"},r.a.createElement("div",{className:"property__wrap"},r.a.createElement("h3",null,r.a.createElement(m.a,null,r.a.createElement(m.b,{className:"property__title",to:"/"+e.id,target:"_blank",id:e.id},e.title))),r.a.createElement("p",{className:"property__address"},e.address),r.a.createElement("span",{className:"property__price"},e.price)),r.a.createElement("div",{className:"property__img-wrap"},r.a.createElement("img",{className:"property__img",src:e.previewImage,alt:e.title})))},d=t(10),p=t.n(d);t(59);var u=function(){var e=Object(l.useState)([]),a=Object(s.a)(e,2),t=a[0],n=a[1];p.a.get("http://134.209.138.34/items").then((function(e){n(e.data)})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430")}));var c=t.map((function(e,a){return r.a.createElement("li",{className:"property-item",key:a},r.a.createElement(o,{title:e.title,address:e.address,price:e.price,previewImage:e.previewImage,id:e.id}))}));return r.a.createElement("ul",{className:"property-list"},c)};t(60);var _=function(){var e=Object(i.f)().id,a=Object(l.useState)([]),t=Object(s.a)(a,2),n=t[0],c=t[1],m=n.images,o=[],d=document.querySelector(".detail__img"),u=document.querySelector(".detail__img-wrap");if(p.a.get("https://134.209.138.34/item/"+e).then((function(e){c(e.data[0])})).catch((function(e){alert("Error"+e)})),m&&(o=m.map((function(e,a){return r.a.createElement("li",{className:"detail__img-item",key:a},r.a.createElement("a",{className:"detail__img-link",href:e},r.a.createElement("img",{className:"detail__img",src:e,alt:n.title})))}))),u){u.onmouseover=function(e){var a,t,l=e.target.closest("a");l&&(a=l.href,t=l.alt,d.src=a,d.alt=t,l.focus(),e.preventDefault())},u.onclick=function(e){e.preventDefault()}}return r.a.createElement("section",{className:"detail container"},r.a.createElement("div",{className:"detail__left-side"},r.a.createElement("h1",{className:"detail__title"},n.title),r.a.createElement("ul",{className:"detail__img-wrap"},o[0],o)),r.a.createElement("div",{className:"detail__right-side"},r.a.createElement("p",{className:"detail__desc"},r.a.createElement("span",{className:"detail__subtitle"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),n.description),r.a.createElement("p",{className:"detail__address"},r.a.createElement("span",{className:"detail__subtitle"},"\u0410\u0434\u0440\u0435\u0441: "),n.address),r.a.createElement("p",{className:"detail__seller"},r.a.createElement("span",{className:"detail__subtitle"},"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446: "),n.sellerName),r.a.createElement("p",{className:"detail__price"},r.a.createElement("span",{className:"detail__subtitle"},"\u0426\u0435\u043d\u0430: "),n.price)))};var E=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/"},r.a.createElement("div",{className:"main container"},r.a.createElement("h2",{className:"main__title"},"\u0414\u043e\u0441\u043a\u0430 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439"),r.a.createElement(u,null))),r.a.createElement(i.a,{path:"/:id"},r.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m.a,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.ac732981.chunk.js.map