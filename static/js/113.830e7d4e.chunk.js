"use strict";(self.webpackChunkliterate_octo_robot=self.webpackChunkliterate_octo_robot||[]).push([[113],{5872:function(e,t,n){n.d(t,{o:function(){return l}});var s=n(9439),i=n(2791),r=n(8597),a=n(3402),c=n(184),l=function(e){var t=e.items,n=e.max,l=e.count,o=e.unit,u=e.ordered,d=e.remainder,m=e.onSetCountByValue,_=e.onSetCountByStep,h=e.onSetUnit,f=e.page,p=(l===d||!d)&&u&&f&&"product"===f,j=l>n&&!u,x=l-1<1,v=(l===n||!d)&&u,N=(l>d||l>n)&&f&&"product"===f,b=(0,i.useRef)(null),g=(0,i.useState)(!1),w=(0,s.Z)(g,2),y=w[0],C=w[1],S=(0,i.useState)(null),O=(0,s.Z)(S,2),k=O[0],E=O[1];(0,i.useEffect)((function(){setTimeout((function(){E(null)}),3e3)}),[k]);var T=function(e){var t=e.currentTarget.getAttribute("data-type");t!==a.rp.SUP||l!==n||u?t===a.rp.SUP&&p?E("There are ".concat(d," items  left in stock.")):t===a.rp.SUP&&v?E("There are ".concat(n," items in stock.")):t===a.rp.SUB&&x?E("At least 1 item has to be to add to cart."):_(t):E("There are ".concat(n," items in stock."))},L=function(e){b.current&&!b.current.contains(e.target)&&C(!1)};(0,i.useEffect)((function(){return document.addEventListener("mousedown",L),function(){document.removeEventListener("mousedown",L)}}),[]);return(0,i.useEffect)((function(){C(!1)}),[o]),(0,c.jsxs)("div",{className:"count",children:[(0,c.jsx)("input",{type:"password",name:"password",autoComplete:"new-password",style:{display:"none"}}),(0,c.jsx)("input",{name:"count",type:"text",min:"1",max:n,placeholder:"1",className:"count__input",value:l,autoComplete:"off",onChange:function(e){var t=Number(e.currentTarget.value);if(!Number.isNaN(t))if(j)E("There are ".concat(n," items in stock."));else if(N)E("There are ".concat(d," items in stock."));else{if(!(t>n))return t?void m(t):(m(t),void E("At least 1 item has to be to add to cart."));E("There are ".concat(n," items in stock."))}},onBlur:function(){l||m(1)}}),(0,c.jsxs)("div",{className:"count__control",children:[(0,c.jsx)("button",{type:"button",className:"count__button","data-type":a.rp.SUP,onClick:T,children:(0,c.jsx)(r.r,{className:"count__icon count__icon_sup"})}),(0,c.jsx)("button",{type:"button",disabled:l<=1,className:"count__button","data-type":a.rp.SUB,onClick:T,children:(0,c.jsx)(r.r,{className:"count__icon count__icon_sub"})})]}),(0,c.jsx)("span",{className:"count__dash"}),(0,c.jsxs)("div",{className:"count__unit",onClick:function(){return C(!0)},children:[(0,c.jsx)("span",{children:o}),(0,c.jsx)(r.r,{className:"count__unit-icon"}),y&&(0,c.jsx)("div",{className:"count__dropdown",ref:b,children:(0,c.jsx)("ul",{className:"count__list",children:t.map((function(e){return(0,c.jsx)("li",{className:"count__item",onClick:function(){return function(e){h(e)}(e)},children:e},e)}))})})]}),k&&(0,c.jsx)("p",{className:"count__error",children:k})]})}},9285:function(e,t,n){n.d(t,{u:function(){return a}});var s=n(2791),i=n(4164),r=n(184),a=function(e){var t=e.closeModal,n=e.children;(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return(0,i.createPortal)((0,r.jsx)("div",{className:"modal__container",onClick:function(e){e.currentTarget===e.target&&t()},children:(0,r.jsx)("div",{className:"modal",children:n})}),document.querySelector("#modal-root"))}},776:function(e,t,n){n.d(t,{P:function(){return i}});n(2791);var s=n(184),i=function(e){var t=e.message;return(0,s.jsx)("p",{className:"notification",children:t})}},4417:function(e,t,n){n.d(t,{T:function(){return u}});n(2791);var s=n(1087),i=n(528),r=n(7910),a=n(5678),c=n(1770),l=n(8405),o=n(184),u=function(e){var t=e.item,n=t.id,u=t.previewImage,d=t.discount,m=t.title,_=t.overview,h=t.price,f=e.page,p=(0,r.TL)(),j=(0,r.CG)(a.nK).some((function(e){return e===n}));return(0,o.jsxs)("li",{className:"similar__item",children:[(0,o.jsxs)(s.OL,{to:"/products/".concat(n),className:"similar__thumb",children:[(0,o.jsx)("img",{src:u,alt:m,className:"similar__image"}),(0,o.jsxs)("div",{className:"similar__discount",children:["- ",d,"%"]})]}),(0,o.jsxs)("div",{className:"similar__info",children:[(0,o.jsx)("h3",{className:"similar__name",children:(0,o.jsx)(s.OL,{to:"/products/".concat(n),className:"similar__name-link",children:m.length>28?"".concat(m.substring(0,28),"..."):m})}),(0,o.jsxs)("p",{className:"similar__description",children:[_.substring(0,50),"..."]}),(0,o.jsxs)("div",{className:"similar__control",children:[(0,o.jsxs)("div",{className:"similar__price",children:[(0,o.jsxs)("span",{children:[(0,l.Kd)(h.pcs,d)," USD"]}),(0,o.jsxs)("span",{className:"similar__price_old",children:[h.pcs," USD"]})]}),(0,o.jsxs)("div",{className:"similar__button-wrapper",children:[(0,o.jsx)(s.OL,{to:"/products/".concat(n),className:"similar__button",children:"Buy now"}),f&&"wish"===f&&(0,o.jsxs)("button",{type:"button",className:"wish__button",onClick:function(){p((0,c.j)(n))},children:[(0,o.jsx)(i.r,{className:j?"wish__icon wish__icon_active":"wish__icon"}),(0,o.jsx)("span",{children:"Remove"})]})]})]})]})]})}},5666:function(e,t,n){n.d(t,{t:function(){return m}});var s,i=n(3433),r=n(2791),a=["title","titleId"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function o(e,t){var n=e.title,i=e.titleId,o=l(e,a);return r.createElement("svg",c({width:17,height:16,viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,s||(s=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.94835 2.12663C7.9944 1.9806 8.08581 1.85306 8.20929 1.76252C8.33277 1.67198 8.4819 1.62317 8.63502 1.62317C8.78814 1.62317 8.93727 1.67198 9.06075 1.76252C9.18423 1.85306 9.27564 1.9806 9.32169 2.12663L10.5617 5.93996H14.5617C14.7203 5.93397 14.8765 5.98006 15.0064 6.07119C15.1363 6.16232 15.2329 6.29348 15.2812 6.44464C15.3296 6.5958 15.3272 6.75863 15.2743 6.90827C15.2214 7.0579 15.121 7.18611 14.9884 7.2733L11.7417 9.62663L12.9817 13.4466C13.0307 13.5921 13.032 13.7495 12.9852 13.8958C12.9385 14.042 12.8462 14.1695 12.7218 14.2596C12.5975 14.3497 12.4476 14.3977 12.2941 14.3966C12.1405 14.3954 11.9913 14.3452 11.8684 14.2533L8.61502 11.8733L5.36835 14.2333C5.24536 14.3252 5.0962 14.3754 4.94265 14.3766C4.7891 14.3777 4.63921 14.3297 4.51487 14.2396C4.39052 14.1495 4.29824 14.022 4.25149 13.8758C4.20474 13.7295 4.20598 13.5721 4.25502 13.4266L5.49502 9.60663L2.24835 7.2533C2.11574 7.16611 2.01532 7.0379 1.96243 6.88827C1.90955 6.73863 1.9071 6.5758 1.95547 6.42464C2.00384 6.27348 2.10037 6.14232 2.2303 6.05119C2.36023 5.96006 2.51643 5.91397 2.67502 5.91996H6.67502L7.94835 2.12663Z",strokeLinecap:"round",strokeLinejoin:"round"})))}var u=r.forwardRef(o),d=(n.p,n(184)),m=function(e){var t=e.rating;return(0,d.jsxs)("ul",{className:"rating-list",children:[(0,i.Z)(Array(t)).map((function(e,t){return(0,d.jsx)("li",{className:"rating-list__item",children:(0,d.jsx)(u,{className:"rating-list__icon"})},t)})),t<5&&(0,i.Z)(Array(5-t)).map((function(e,t){return(0,d.jsx)("li",{className:"rating-item",children:(0,d.jsx)(u,{className:"rating-list__icon rating-list__icon_empty"})},t)}))]})}},8113:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var s,i,r=n(2791),a=n(7689),c=n(9439),l=n(6382),o=n(528),u=["title","titleId"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function _(e,t){var n=e.title,a=e.titleId,c=m(e,u);return r.createElement("svg",d({width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,s||(s=r.createElement("path",{d:"M14.1608 8H3.49414",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"bevel"})),i||(i=r.createElement("path",{d:"M8.82812 13.3333V2.66666",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"bevel"})))}var h=r.forwardRef(_),f=(n.p,n(184)),p=function(e){var t=e.addToCart,n=e.closeModal;return(0,f.jsxs)("div",{className:"change-unit",children:[(0,f.jsx)("p",{className:"change-unit__question",children:"You currently have a product of the same type in your cart. Are you sure you want to add more? If you proceed, the total quantity will be updated accordingly."}),(0,f.jsxs)("div",{className:"change-unit__button-wrapper",children:[(0,f.jsx)("button",{type:"button",className:"change-unit__button_primary",onClick:function(){t(),n()},children:"Add to cart"}),(0,f.jsx)("button",{type:"button",className:"change-unit__button_secondary",onClick:function(){return n()},children:"Cancel"})]})]})},j=n(5872),x=n(9285),v=function(e){var t=e.items;return(0,f.jsx)("ul",{className:"description__list",children:t.map((function(e,t){var n=e.name,s=e.details;return(0,f.jsxs)("li",{className:"description__item",children:[(0,f.jsx)("h2",{className:"description__title",children:n}),(0,f.jsx)("p",{children:s})]},t)}))})},N=n(776),b=function(e){var t=e.items;return t.length?(0,f.jsx)("ul",{className:"question__list",children:t.map((function(e,t){var n=e.question,s=e.answer;return(0,f.jsxs)("li",{className:"question__item",children:[(0,f.jsxs)("div",{className:"question__part",children:[(0,f.jsx)("span",{className:"question__part_bold question__part_question",children:"Question:"}),(0,f.jsx)("p",{children:n})]}),(0,f.jsxs)("div",{className:"question__part",children:[(0,f.jsx)("span",{className:"question__part_bold",children:"Answer:"}),(0,f.jsx)("p",{children:s})]})]},t)}))}):(0,f.jsx)(N.P,{message:"There is no questions."})},g=n(5666),w=function(e){var t=e.items;return t.length?(0,f.jsx)("ul",{className:"review__list",children:t.map((function(e,t){var n=e.user,s=e.rating,i=e.title,r=e.review;return(0,f.jsxs)("li",{className:"review__item",children:[(0,f.jsx)("p",{className:"review__user",children:n}),(0,f.jsx)(g.t,{rating:s}),(0,f.jsx)("p",{className:"review__title",children:i}),(0,f.jsx)("p",{className:"review__text",children:r})]},t)}))}):(0,f.jsx)(N.P,{message:"There is no reviews."})},y=n(1413),C=n(4925),S=["selected","children"],O=function(e){var t=e.selected,n=e.children,s=(0,C.Z)(e,S);return(0,f.jsx)("li",(0,y.Z)((0,y.Z)({className:t?"tab__item tab__item_selected":"tab__item"},s),{},{children:n}))},k=n(3402),E=function(e){var t=e.activeTab,n=e.reviews,s=e.questions,i=e.onSetTab,r=Object.values(k.mQ);return(0,f.jsx)("ul",{className:"tab__list",children:r.map((function(e){return(0,f.jsxs)(O,{selected:t===e,onClick:function(){return i(e)},children:[(0,f.jsx)("span",{children:e}),e===k.mQ.QUESTIONS&&Boolean(s.length)&&(0,f.jsx)("span",{className:"tab__tag",children:s.length}),e===k.mQ.REVIEWS&&Boolean(n.length)&&(0,f.jsx)("span",{className:"tab__tag",children:n.length})]},e)}))})},T=n(7910),L=n(3090),I=n(800),q=n(7797),P=n(5678),Z=n(1770),U=n(8405),B=function(){var e=(0,T.TL)(),t=(0,T.CG)(q.pI),n=(0,T.CG)(L.KY),s=(0,T.CG)(P.nK);if(!t)return null;var i=t.id,a=t.images,u=t.overview,d=t.title,m=t.country,_=t.color,N=t.stock,y=t.sizes,C=t.units,S=t.category,O=t.rating,B=t.shipping,R=t.deliveryArea,D=t.deliveryTime,A=t.discount,Q=t.price,G=t.reviews,M=t.questions,V=t.description,W={Country:m,Size:y.join(", "),Category:S,Units:C.join(", "),Stock:N?"In stock":"Out of stock",Delivery:"in ".concat(D," days"),Color:_,"Delivery area":R},K=parseInt(N),z=(0,r.useRef)(null),Y=(0,r.useState)(C[0]),H=(0,c.Z)(Y,2),F=H[0],X=H[1],J=(0,r.useState)(1),$=(0,c.Z)(J,2),ee=$[0],te=$[1],ne=(0,r.useState)(k.mQ.DESCRIPTION),se=(0,c.Z)(ne,2),ie=se[0],re=se[1],ae=(0,r.useState)(0),ce=(0,c.Z)(ae,2),le=ce[0],oe=ce[1],ue=(0,r.useState)(K),de=(0,c.Z)(ue,2),me=de[0],_e=de[1],he=(0,r.useState)(!1),fe=(0,c.Z)(he,2),pe=fe[0],je=fe[1],xe=(0,r.useState)(""),ve=(0,c.Z)(xe,2),Ne=ve[0],be=ve[1];(0,r.useEffect)((function(){z.current&&z.current.scrollTo(0,0)}),[ie]);var ge=function(e){return(0,U.Yr)(e*ee)};(0,r.useEffect)((function(){var e=n.filter((function(e){return e.id===i&&e.unit===F})).map((function(e){return e.quantity})).reduce((function(e,t){return e+t}),0);oe(e);var t=parseInt(N)-e;_e(t)}),[n,F,ee]);var we=function(){if(n.find((function(e){return e.id===i&&e.unit===F}))&&!pe)return je(!0);var t={_id:(0,l.x0)(),id:i,unit:F,quantity:ee,stock:N};return e((0,I.Xq)(t)),te(1)},ye=function(){je(!1)},Ce=s.some((function(e){return e===i})),Se=n.find((function(e){return e.id===i&&e.unit===F}));(0,r.useEffect)((function(){var e=Oe();be(e)}),[Ce]);var Oe=function(){return Ce?k.rr.REMOVE:k.rr.ADD};return(0,f.jsxs)("div",{className:"details",children:[(0,f.jsxs)("div",{className:"details__appearance",children:[(0,f.jsxs)("div",{className:"details__tag-wrapper",children:[(0,f.jsxs)("span",{className:"details__tag",children:["- ",A,"%"]}),(0,f.jsxs)("span",{className:"details__tag",children:[B," shipping"]})]}),(0,f.jsx)("div",{className:"details__image-wrapper",children:a.map((function(e){return(0,f.jsx)("div",{className:"details__thumb",children:(0,f.jsx)("img",{src:e,alt:d,className:"details__image"})},e)}))})]}),(0,f.jsxs)("div",{className:"details__overview",children:[(0,f.jsxs)("div",{className:"details__info",children:[(0,f.jsx)("h1",{className:"details__name",children:d}),(0,f.jsxs)("div",{className:"details__rating",children:[(0,f.jsx)(g.t,{rating:O}),(0,f.jsxs)("span",{className:"details__review",children:["(",null===G||void 0===G?void 0:G.length," customer review)"]})]})]}),(0,f.jsx)("p",{className:"details__description",children:u}),(0,f.jsx)("ul",{className:"details__list",children:function(){var e=[];return Object.entries(W).forEach((function(t){var n=(0,c.Z)(t,2),s=n[0],i=n[1];("Color"!==s||i)&&e.push((0,f.jsxs)("li",{className:"details__item",children:[(0,f.jsxs)("span",{className:"details__item_color_grey",children:[s,":"]}),(0,f.jsx)("span",{children:i})]},s))})),e}()}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"details__price-info",children:[(0,f.jsxs)("div",{className:"details__price",children:[(0,f.jsxs)("span",{children:[function(){var e=(0,U.Kd)(Q[F],A);return ge(e)}()," USD"]}),(0,f.jsxs)("span",{className:"details__price_old",children:[ge(Q[F])," USD"]})]}),(0,f.jsxs)("div",{className:"details__control-wrapper",children:[(0,f.jsx)(j.o,{items:C,max:K,count:ee,unit:F,onSetUnit:function(e){X(e)},onSetCountByValue:function(e){te(e)},onSetCountByStep:function(e){e===k.rp.SUP?te((function(e){return e+1})):e===k.rp.SUB&&te((function(e){return e-1}))},ordered:le,remainder:me,page:"product"}),(0,f.jsxs)("button",{type:"button",disabled:!me,className:"details__add-button",onClick:we,children:[(0,f.jsx)(h,{className:"details__add-icon"}),(0,f.jsx)("span",{children:"Add to cart"})]})]}),Se&&(0,f.jsx)("span",{className:"details__tag",children:"".concat(Se.quantity," ").concat(Se.unit," is in cart now")})]}),(0,f.jsxs)("button",{type:"button",className:"details__wish-button",onClick:function(){e((0,Z.j)(i))},children:[(0,f.jsx)(o.r,{className:Ce?"details__wish-icon details__wish-icon_active":"details__wish-icon"}),(0,f.jsx)("span",{children:Ne})]})]}),(0,f.jsxs)("div",{className:"details__tab",children:[(0,f.jsx)(E,{activeTab:ie,onSetTab:function(e){re(e)},reviews:G,questions:M}),(0,f.jsxs)("div",{className:"details__tab-text",ref:z,children:[ie===k.mQ.DESCRIPTION&&(0,f.jsx)(v,{items:V}),ie===k.mQ.REVIEWS&&(0,f.jsx)(w,{items:G}),ie===k.mQ.QUESTIONS&&(0,f.jsx)(b,{items:M})]})]})]}),pe&&(0,f.jsx)(x.u,{closeModal:ye,children:(0,f.jsx)(p,{addToCart:we,closeModal:ye})})]})},R=n(7457),D=n(2105),A=n(6030),Q=n(8597),G=n(4417),M=function(e){var t=e.items,n=(0,T.iP)(),s=(0,c.Z)(n,1)[0],i=(0,r.useRef)(null),a=(0,r.useState)(0),l=(0,c.Z)(a,2),o=l[0],u=l[1],d=(0,r.useState)((0,U.GD)(t.length,s)),m=(0,c.Z)(d,2),_=m[0],h=m[1];(0,r.useEffect)((function(){var e=(0,U.GD)(t.length,s);h(e),o>e&&u(e)}),[o,s]),(0,r.useEffect)((function(){i.current&&((0,U.tq)(s)?p(100):(0,U.Em)(s)?p(50):(0,U.nI)(s)?p(34):p(25))}),[o,s]);var p=function(e){i.current&&(i.current.style.transform="translateX(-".concat(o*e,"%)"))},j=function(e){e<0?e=0:e>=t.length&&(e=t.length-1),u(e)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"similar__heading",children:[(0,f.jsx)("h2",{className:"similar__title",children:"You will maybe love"}),(0,f.jsxs)("div",{className:"similar__control",children:[(0,f.jsx)("button",{type:"button",disabled:!o,className:"similar__arrow",onClick:function(){return j(o-1)},children:(0,f.jsx)(Q.r,{className:"similar__arrow-icon similar__arrow-icon_left"})}),(0,f.jsx)("span",{children:"More products"}),(0,f.jsx)("button",{type:"button",disabled:o===_,className:"similar__arrow",onClick:function(){return j(o+1)},children:(0,f.jsx)(Q.r,{className:"similar__arrow-icon similar__arrow-icon_right"})})]})]}),(0,f.jsx)("div",{className:"similar__carousel",children:(0,f.jsx)("ul",{className:"similar__list",ref:i,children:t.map((function(e){return(0,f.jsx)(G.T,{item:e},e.id)}))})})]})},V=n(2189),W=function(){var e=(0,T.TL)(),t=(0,T.CG)(q.zh),n=(0,T.CG)(q.xU),s=(0,T.CG)(P.ze),i=(0,a.UO)().productId,c=void 0===i?"":i;return(0,r.useEffect)((function(){e((0,V.g)(c)),window.scrollTo(0,0)}),[e,c]),n?(0,f.jsx)(A.a,{}):(t&&D.j,(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("section",{children:(0,f.jsx)(R.W,{children:(0,f.jsx)(B,{})})}),(0,f.jsx)("section",{className:"similar",children:(0,f.jsx)(R.W,{children:(0,f.jsx)(M,{items:s})})})]}))}},4925:function(e,t,n){function s(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=113.830e7d4e.chunk.js.map