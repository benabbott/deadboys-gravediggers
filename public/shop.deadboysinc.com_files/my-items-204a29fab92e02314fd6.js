_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{Zhrz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-items",function(){return n("dHBb")}])},dHBb:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("cpVT"),c=n("vJKn"),a=n.n(c),i=n("rg98"),s=n("q1tI"),u=n("jT3O"),p=n("vOnD"),f=n("O9cx"),b=n("OPgl");function l(){var e=Object(u.a)(["\n    margin-top: 31px;\n    margin-bottom: 40px;\n    font-size: 25px;\n  "]);return l=function(){return e},e}function O(){var e=Object(u.a)(["\n    ",";\n  "]);return O=function(){return e},e}var y=Object(p.b)(f.a).withConfig({displayName:"MyItemsPagestyled__PageContainer",componentId:"o8d8s4-0"})(["background-color:",";flex-direction:column;justify-content:flex-start;min-height:calc(100vh - 96px - 96px);overflow:scroll;",""],(function(e){return e.backgroundColor}),b.a.mobile(O(),"min-height: calc(100vh - 96px - 72px)")),j=p.b.span.withConfig({displayName:"MyItemsPagestyled__HeaderText",componentId:"o8d8s4-1"})(["font-family:",";font-size:",";color:",";align-self:flex-start;margin-top:56px;margin-bottom:65px;line-height:1.25;",""],(function(e){return e.typography[e.type].font}),(function(e){return e.typography[e.type].size}),(function(e){return e.color}),b.a.mobile(l())),g=n("20a2"),d=n("bgFo"),h=n("TleL"),m=n("rBda"),x=n("iT7q");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=x.a.collection,_=x.a.nftCard,k=x.a.myItemsPage,C=k.backgroundColor,E=k.headerFont;t.default=function(e){var t=e.text,n=e.typography,o=Object(s.useState)([]),c=o[0],u=o[1],p=Object(s.useState)(!0),f=p[0],b=p[1],l=Object(h.c)(),O=l.isLoadingUser,x=l.currentUser,w=Object(g.useRouter)(),k=x?x.actor:"";return Object(s.useEffect)((function(){O||k||w.push("/")}),[O]),Object(s.useEffect)((function(){Object(i.a)(a.a.mark((function e(){var t,n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O||!k){e.next=18;break}return e.prev=1,e.next=4,Object(m.c)({owner:k,collection:P});case 4:return t=e.sent,n=Object.keys(t),e.next=8,Object(m.h)(n);case 8:r=e.sent,o=Object(m.b)(r,t),u(o),b(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),b(!1),u([]);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))()}),[O]),O||f?Object(r.jsx)(d.h,{}):Object(r.jsxs)(y,{backgroundColor:C,children:[Object(r.jsx)(j,v(v({},E),{},{typography:n,children:t.myItemsPage.header})),Object(r.jsx)(d.c,{templates:c,nftCardText:t.nftCard,nftCardStyles:_,typography:n,type:"user"})]})}}},[["Zhrz",0,2,5,1,3,4]]]);