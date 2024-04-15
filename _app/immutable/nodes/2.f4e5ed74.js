import{g as U,S as J,a as K}from"../chunks/navigation.13e84d92.js";import{g as A,a as R}from"../chunks/config.c24437b0.js";import{S as Q,i as W,s as X,k as p,a as x,y as z,L as Y,l as m,h as i,c as M,z as V,n as s,C as o,b as j,A as B,g as O,d as F,B as G,q as D,m as b,r as P,p as N,F as Z}from"../chunks/index.baf6a862.js";import{b as H,a as ee}from"../chunks/paths.d886ab7f.js";import{S as te}from"../chunks/Section.6106804d.js";async function ae({fetch:f}){let a=await U(R.search_data,f),r={};return a.forEach(e=>r[e.code]=e.name),a.forEach(e=>{e.typepl=A[e.type].pl,e.typenm=A[e.type].name,e.typestr=r[e.parent]&&e.parent==e.code?`${A[e.type].name} is within  ${r[e.parent]}
        ${A[e.parent_type].name}  `:r[e.parent]&&e.parent!=e.code?`${A[e.type].name} `:""}),{search_data:a.sort((e,l)=>e.name.localeCompare(l.name))}}const me=Object.freeze(Object.defineProperty({__proto__:null,load:ae},Symbol.toStringTag,{value:"Module"}));function re(f){let a,r,n,e,l,d,_,u,g,t,c,y,w,$,T,S;return t=new J({props:{search_data:f[0].search_data,group:"typestr",search:!0}}),t.$on("select",f[1]),{c(){a=p("div"),r=p("div"),n=p("div"),e=p("span"),l=D("Explore key statistics for any area in Northern Ireland"),d=x(),_=p("h3"),u=p("br"),g=x(),z(t.$$.fragment),c=D(` \r
\r
  \r
\r
Click on the map to view Northern Ireland as a whole\r
\r
`),y=p("a"),w=p("picture"),$=p("img"),this.h()},l(h){a=m(h,"DIV",{class:!0});var I=b(a);r=m(I,"DIV",{class:!0});var v=b(r);n=m(v,"DIV",{class:!0});var E=b(n);e=m(E,"SPAN",{style:!0});var k=b(e);l=P(k,"Explore key statistics for any area in Northern Ireland"),k.forEach(i),d=M(E),_=m(E,"H3",{});var L=b(_);L.forEach(i),u=m(E,"BR",{}),g=M(E),V(t.$$.fragment,E),E.forEach(i),c=P(v,` \r
\r
  \r
\r
Click on the map to view Northern Ireland as a whole\r
\r
`),y=m(v,"A",{href:!0});var C=b(y);w=m(C,"PICTURE",{});var q=b(w);$=m(q,"IMG",{style:!0,src:!0,alt:!0}),q.forEach(i),C.forEach(i),v.forEach(i),I.forEach(i),this.h()},h(){N(e,"font-size","1.5em"),N(e,"font-weight","bold"),N(e,"color","#3878c5"),s(n,"class","column left svelte-1l0eq6b"),N($,"width","400px"),Z($.src,T=ee+"/img/NI-map.png")||s($,"src",T),s($,"alt","Northern Ireland Statistics and Research Agency"),s(y,"href",H+"/N92000002/"),s(r,"class","row svelte-1l0eq6b"),s(a,"class","block svelte-1l0eq6b")},m(h,I){j(h,a,I),o(a,r),o(r,n),o(n,e),o(e,l),o(n,d),o(n,_),o(n,u),o(n,g),B(t,n,null),o(r,c),o(r,y),o(y,w),o(w,$),S=!0},p(h,I){const v={};I&1&&(v.search_data=h[0].search_data),t.$set(v)},i(h){S||(O(t.$$.fragment,h),S=!0)},o(h){F(t.$$.fragment,h),S=!1},d(h){h&&i(a),G(t)}}}function ne(f){let a,r,n,e,l,d,_,u,g;return u=new te({props:{column:"wide",$$slots:{default:[re]},$$scope:{ctx:f}}}),{c(){a=p("meta"),r=p("meta"),n=p("meta"),e=p("meta"),l=p("meta"),d=p("meta"),_=x(),z(u.$$.fragment),this.h()},l(t){const c=Y("svelte-9li6lr",document.head);a=m(c,"META",{name:!0,content:!0}),r=m(c,"META",{property:!0,content:!0}),n=m(c,"META",{property:!0,content:!0}),e=m(c,"META",{property:!0,content:!0}),l=m(c,"META",{property:!0,content:!0}),d=m(c,"META",{name:!0,content:!0}),c.forEach(i),_=M(t),V(u.$$.fragment,t),this.h()},h(){document.title="NISRA Area Explorer",s(a,"name","description"),s(a,"content",""),s(r,"property","og:title"),s(r,"content","Census Area Explorer"),s(n,"property","og:type"),s(n,"content","website"),s(e,"property","og:url"),s(e,"content",R.base+"/"),s(l,"property","og:description"),s(l,"content","Explore census data for places in Northern Ireland."),s(d,"name","description"),s(d,"content","Explore census data for places in Northern Ireland.")},m(t,c){o(document.head,a),o(document.head,r),o(document.head,n),o(document.head,e),o(document.head,l),o(document.head,d),j(t,_,c),B(u,t,c),g=!0},p(t,[c]){const y={};c&5&&(y.$$scope={dirty:c,ctx:t}),u.$set(y)},i(t){g||(O(u.$$.fragment,t),g=!0)},o(t){F(u.$$.fragment,t),g=!1},d(t){i(a),i(r),i(n),i(e),i(l),i(d),t&&i(_),G(u,t)}}}function se(f,a,r){let{data:n}=a;function e(l){K(`${H}/${l.detail.value}/`,{noscroll:!0})}return f.$$set=l=>{"data"in l&&r(0,n=l.data)},[n,e]}class ue extends Q{constructor(a){super(),W(this,a,se,ne,X,{data:0})}}export{ue as component,me as universal};