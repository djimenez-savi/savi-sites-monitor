import{_ as t,a as n,i as e,s as a,b as r,c,S as i,d as o,e as u,A as s,f,g as l,w as d,R as m,l as h,h as v,j as p,k as g,x as D,m as E,n as w,y as $,o as b,p as T,t as y,q as R,r as A,u as x,v as L,T as S,P as _,H as O,z as M,B as C,C as H,D as B,E as k,F as I,G as N}from"./client.999bb386.js";import{c as P,_ as U,h as F,a as V,L as j}from"./createOctokit.28f11eb4.js";function G(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=o(t);if(n){var r=o(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return u(this,e)}}function q(t,n,e){var a=t.slice();return a[9]=n[e],a}function z(t){var n,e,a,r,c,i=t[4].title+"",o=("closed"===t[4].state?t[4].metadata.start?s.i18n.incidentCompleted:s.i18n.incidentFixed:t[4].metadata.start?s.i18n.incidentScheduled:s.i18n.incidentOngoing)+"";return{c:function(){n=d(i),e=f(),a=l("span"),r=d(o),this.h()},l:function(t){n=D(t,i),e=v(t),a=p(t,"SPAN",{class:!0});var c=g(a);r=D(c,o),c.forEach(h),this.h()},h:function(){E(a,"class",c=_("tag ".concat(t[4].state))+" svelte-4o16l6")},m:function(t,c){w(t,n,c),w(t,e,c),w(t,a,c),$(a,r)},p:function(t,e){16&e&&i!==(i=t[4].title+"")&&O(n,i),16&e&&o!==(o=("closed"===t[4].state?t[4].metadata.start?s.i18n.incidentCompleted:s.i18n.incidentFixed:t[4].metadata.start?s.i18n.incidentScheduled:s.i18n.incidentOngoing)+"")&&O(r,o),16&e&&c!==(c=_("tag ".concat(t[4].state))+" svelte-4o16l6")&&E(a,"class",c)},d:function(t){t&&h(n),t&&h(e),t&&h(a)}}}function J(t){var n,e=s.i18n.incidentDetails+"";return{c:function(){n=d(e)},l:function(t){n=D(t,e)},m:function(t,e){w(t,n,e)},p:M,d:function(t){t&&h(n)}}}function K(t){var n,e,a,r,c,i,o,u,m,b,T,y=s.i18n.incidentViewOnGitHub+"";function R(t,n){return t[4].metadata.start?X:W}var A=R(t),x=A(t);function L(t,n){return t[4].metadata.start&&t[4].metadata.end?Z:t[4].closed_at?Y:void 0}for(var S=L(t),_=S&&S(t),O=t[3],B=[],k=0;k<O.length;k+=1)B[k]=tt(q(t,O,k));return{c:function(){n=l("div"),e=l("dl"),x.c(),a=C(),_&&_.c(),r=f(),c=l("div"),i=l("p"),o=l("a"),u=d(y),b=f();for(var t=0;t<B.length;t+=1)B[t].c();T=C(),this.h()},l:function(t){n=p(t,"DIV",{class:!0});var s=g(n);e=p(s,"DL",{});var f=g(e);x.l(f),a=C(),_&&_.l(f),f.forEach(h),r=v(s),c=p(s,"DIV",{class:!0});var l=g(c);i=p(l,"P",{class:!0});var d=g(i);o=p(d,"A",{href:!0});var m=g(o);u=D(m,y),m.forEach(h),d.forEach(h),l.forEach(h),s.forEach(h),b=v(t);for(var E=0;E<B.length;E+=1)B[E].l(t);T=C(),this.h()},h:function(){E(o,"href",m="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(t[0])),E(i,"class","svelte-4o16l6"),E(c,"class","r svelte-4o16l6"),E(n,"class","f")},m:function(t,s){w(t,n,s),$(n,e),x.m(e,null),$(e,a),_&&_.m(e,null),$(n,r),$(n,c),$(c,i),$(i,o),$(o,u),w(t,b,s);for(var f=0;f<B.length;f+=1)B[f]&&B[f].m(t,s);w(t,T,s)},p:function(t,n){if(A===(A=R(t))&&x?x.p(t,n):(x.d(1),(x=A(t))&&(x.c(),x.m(e,a))),S===(S=L(t))&&_?_.p(t,n):(_&&_.d(1),(_=S&&S(t))&&(_.c(),_.m(e,null))),1&n&&m!==(m="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(t[0]))&&E(o,"href",m),40&n){var r;for(O=t[3],r=0;r<O.length;r+=1){var c=q(t,O,r);B[r]?B[r].p(c,n):(B[r]=tt(c),B[r].c(),B[r].m(T.parentNode,T))}for(;r<B.length;r+=1)B[r].d(1);B.length=O.length}},i:M,o:M,d:function(t){t&&h(n),x.d(),_&&_.d(),t&&h(b),H(B,t),t&&h(T)}}}function Q(t){var n,e;return n=new j({}),{c:function(){B(n.$$.fragment)},l:function(t){k(n.$$.fragment,t)},m:function(t,a){I(n,t,a),e=!0},p:M,i:function(t){e||(A(n.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),e=!1},d:function(t){N(n,t)}}}function W(t){var n,e,a,r,c=s.i18n.incidentOpenedAt+"",i=new Date(t[4].created_at).toLocaleString()+"";return{c:function(){n=l("dt"),e=d(c),a=l("dd"),r=d(i)},l:function(t){n=p(t,"DT",{});var o=g(n);e=D(o,c),o.forEach(h),a=p(t,"DD",{});var u=g(a);r=D(u,i),u.forEach(h)},m:function(t,c){w(t,n,c),$(n,e),w(t,a,c),$(a,r)},p:function(t,n){16&n&&i!==(i=new Date(t[4].created_at).toLocaleString()+"")&&O(r,i)},d:function(t){t&&h(n),t&&h(a)}}}function X(t){var n,e,a,r,c,i=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?s.i18n.startedAt:s.i18n.startsAt)+"",o=new Date(t[4].metadata.start).toLocaleString()+"";return{c:function(){n=l("dt"),e=d(i),a=f(),r=l("dd"),c=d(o)},l:function(t){n=p(t,"DT",{});var u=g(n);e=D(u,i),a=v(u),u.forEach(h),r=p(t,"DD",{});var s=g(r);c=D(s,o),s.forEach(h)},m:function(t,i){w(t,n,i),$(n,e),$(n,a),w(t,r,i),$(r,c)},p:function(t,n){16&n&&i!==(i=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?s.i18n.startedAt:s.i18n.startsAt)+"")&&O(e,i),16&n&&o!==(o=new Date(t[4].metadata.start).toLocaleString()+"")&&O(c,o)},d:function(t){t&&h(n),t&&h(r)}}}function Y(t){var n,e,a,r,c=s.i18n.incidentClosedAt+"",i=new Date(t[4].closed_at).toLocaleString()+"";return{c:function(){n=l("dt"),e=d(c),a=l("dd"),r=d(i)},l:function(t){n=p(t,"DT",{});var o=g(n);e=D(o,c),o.forEach(h),a=p(t,"DD",{});var u=g(a);r=D(u,i),u.forEach(h)},m:function(t,c){w(t,n,c),$(n,e),w(t,a,c),$(a,r)},p:function(t,n){16&n&&i!==(i=new Date(t[4].closed_at).toLocaleString()+"")&&O(r,i)},d:function(t){t&&h(n),t&&h(a)}}}function Z(t){var n,e,a,r,c=s.i18n.duration+"",i=s.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"";return{c:function(){n=l("dt"),e=d(c),a=l("dd"),r=d(i)},l:function(t){n=p(t,"DT",{});var o=g(n);e=D(o,c),o.forEach(h),a=p(t,"DD",{});var u=g(a);r=D(u,i),u.forEach(h)},m:function(t,c){w(t,n,c),$(n,e),w(t,a,c),$(a,r)},p:function(t,n){16&n&&i!==(i=s.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"")&&O(r,i)},d:function(t){t&&h(n),t&&h(a)}}}function tt(t){var n,e,a,r,c,i=t[5](t[9].body)+"",o=s.i18n.incidentCommentSummary.replace(/\$DATE/g,"<a href=".concat(t[9].html_url,">").concat(new Date(t[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/g,"<a href=".concat(t[9].user.html_url,">@").concat(t[9].user.login,"</a>"))+"";return{c:function(){n=l("article"),e=l("p"),a=f(),r=l("div"),c=f(),this.h()},l:function(t){n=p(t,"ARTICLE",{});var i=g(n);e=p(i,"P",{class:!0}),g(e).forEach(h),a=v(i),r=p(i,"DIV",{}),g(r).forEach(h),c=v(i),i.forEach(h),this.h()},h:function(){E(e,"class","svelte-4o16l6")},m:function(t,u){w(t,n,u),$(n,e),e.innerHTML=i,$(n,a),$(n,r),r.innerHTML=o,$(n,c)},p:function(t,n){8&n&&i!==(i=t[5](t[9].body)+"")&&(e.innerHTML=i),8&n&&o!==(o=s.i18n.incidentCommentSummary.replace(/\$DATE/g,"<a href=".concat(t[9].html_url,">").concat(new Date(t[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/g,"<a href=".concat(t[9].user.html_url,">@").concat(t[9].user.login,"</a>"))+"")&&(r.innerHTML=o)},d:function(t){t&&h(n)}}}function nt(t){var n,e,a,r,c,i,o,u,x,L,S,_,O=s.i18n.incidentBack+"";function M(t,n){return t[2]?J:z}document.title=n=s.i18n.incidentTitle.replace("$NUMBER",t[0]);var C=M(t),H=C(t),B=[Q,K],k=[];function I(t,n){return t[1]?0:1}return i=I(t),o=k[i]=B[i](t),{c:function(){e=f(),a=l("h2"),H.c(),r=f(),c=l("section"),o.c(),u=f(),x=l("footer"),L=l("a"),S=d(O),this.h()},l:function(t){m("svelte-slinv8",document.head).forEach(h),e=v(t),a=p(t,"H2",{class:!0});var n=g(a);H.l(n),n.forEach(h),r=v(t),c=p(t,"SECTION",{});var i=g(c);o.l(i),i.forEach(h),u=v(t),x=p(t,"FOOTER",{class:!0});var s=g(x);L=p(s,"A",{href:!0});var f=g(L);S=D(f,O),f.forEach(h),s.forEach(h),this.h()},h:function(){E(a,"class","svelte-4o16l6"),E(L,"href",s.path),E(x,"class","svelte-4o16l6")},m:function(t,n){w(t,e,n),w(t,a,n),H.m(a,null),w(t,r,n),w(t,c,n),k[i].m(c,null),w(t,u,n),w(t,x,n),$(x,L),$(L,S),_=!0},p:function(t,e){var r=b(e,1)[0];(!_||1&r)&&n!==(n=s.i18n.incidentTitle.replace("$NUMBER",t[0]))&&(document.title=n),C===(C=M(t))&&H?H.p(t,r):(H.d(1),(H=C(t))&&(H.c(),H.m(a,null)));var u=i;(i=I(t))===u?k[i].p(t,r):(T(),y(k[u],1,1,(function(){k[u]=null})),R(),(o=k[i])?o.p(t,r):(o=k[i]=B[i](t)).c(),A(o,1),o.m(c,null))},i:function(t){_||(A(o),_=!0)},o:function(t){y(o),_=!1},d:function(t){t&&h(e),t&&h(a),H.d(),t&&h(r),t&&h(c),k[i].d(),t&&h(u),t&&h(x)}}}function et(t,n,e){var a=n.number,r=S,c=!0,i=!0,o=P(),u=s.owner,f=s.repo,l=[],d={};return x(U(L.mark((function t(){var n;return L.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,V("issue-".concat(u,"-").concat(f,"-").concat(a),(function(){return o.issues.get({owner:u,repo:f,issue_number:a,sort:"created",direction:"desc"})}));case 4:t.t1=d=t.sent.data,(0,t.t0)(4,t.t1),e(4,d.metadata={},d),d.body.includes("\x3c!--")&&(n=d.body.split("\x3c!--")[1].split("--\x3e")[0],n.split("\n").filter((function(t){return t.trim()})).filter((function(t){return t.includes(":")})).forEach((function(t){e(4,d.metadata[t.split(/:(.+)/)[0].trim()]=t.split(/:(.+)/)[1].trim(),d)}))),t.next=13;break;case 10:t.prev=10,t.t2=t.catch(0),F(t.t2);case 13:return e(2,i=!1),t.prev=14,t.t3=e,t.next=18,V("issue-comments-".concat(u,"-").concat(f,"-").concat(a),(function(){return o.issues.listComments({owner:u,repo:f,issue_number:a})}));case 18:t.t4=l=t.sent.data.reverse(),(0,t.t3)(3,t.t4),t.next=25;break;case 22:t.prev=22,t.t5=t.catch(14),F(t.t5);case 25:e(1,c=!1);case 26:case"end":return t.stop()}}),t,null,[[0,10],[14,22]])})))),t.$$set=function(t){"number"in t&&e(0,a=t.number)},[a,c,i,l,d,r]}var at=function(o){t(s,i);var u=G(s);function s(t){var c;return n(this,s),c=u.call(this),e(r(c),t,et,nt,a,{number:0}),c}return c(s)}();function rt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=o(t);if(n){var r=o(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return u(this,e)}}function ct(t){var n,e;return n=new at({props:{number:t[0]}}),{c:function(){B(n.$$.fragment)},l:function(t){k(n.$$.fragment,t)},m:function(t,a){I(n,t,a),e=!0},p:function(t,e){var a={};1&b(e,1)[0]&&(a.number=t[0]),n.$set(a)},i:function(t){e||(A(n.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),e=!1},d:function(t){N(n,t)}}}function it(t){return ot.apply(this,arguments)}function ot(){return(ot=U(L.mark((function t(n){var e;return L.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params.number,t.abrupt("return",{number:e});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ut(t,n,e){var a=n.number;return t.$$set=function(t){"number"in t&&e(0,a=t.number)},[a]}var st=function(o){t(s,i);var u=rt(s);function s(t){var c;return n(this,s),c=u.call(this),e(r(c),t,ut,ct,a,{number:0}),c}return c(s)}();export{st as default,it as preload};
