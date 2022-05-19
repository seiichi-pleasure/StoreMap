(this["webpackJsonpgeolonia-pwa"]=this["webpackJsonpgeolonia-pwa"]||[]).push([[0],{106:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},133:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(29),r=c.n(s),i=c(14),o=c(46),l=c(7),j=c(58),d=c(47),u=c.n(d),h=c(6),b=(c(77),c(59)),p=c.n(b),x=function(e){var t={type:"FeatureCollection",features:[]};for(var c in e){var n=e[c];if(!n["\u7d4c\u5ea6"]||!n["\u7def\u5ea6"]||!n["\u30b9\u30dd\u30c3\u30c8\u540d"])return;for(var a={type:"Feature",geometry:{type:"Point",coordinates:[Number(n["\u7d4c\u5ea6"]),Number(n["\u7def\u5ea6"])]},properties:{_id:c}},s=0;s<Object.keys(n).length;s++){var r=Object.keys(n)[s];a.properties[r]=n[r]}t.features.push(a)}return t},f=function(e){e.addLayer({id:"clusters",type:"circle",source:"shops",filter:["has","point_count"],paint:{"circle-radius":20,"circle-color":"#FF0000","circle-opacity":1}}),e.addLayer({id:"cluster-count",type:"symbol",source:"shops",filter:["has","point_count"],paint:{"text-color":"#FFFFFF"},layout:{"text-field":"{point_count_abbreviated} \u4ef6","text-size":12,"text-font":["Noto Sans Regular"]}}),e.on("click","clusters",(function(t){var c=e.queryRenderedFeatures(t.point,{layers:["clusters"]}),n=c[0].properties.cluster_id;e.getSource("shops").getClusterExpansionZoom(n,(function(t,n){t||e.easeTo({center:c[0].geometry.coordinates,zoom:n})}))})),e.on("mouseenter","clusters",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","clusters",(function(){e.getCanvas().style.cursor=""}))},O=c(20),m=(c(84),c(2)),g=function(e){e.stopPropagation()},v=function(e){return Object(m.jsxs)("div",{className:"links",children:[e.data.Instagram?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://instagram.com/".concat(e.data.Instagram),children:Object(m.jsx)(O.b,{onClick:g,size:"20px"})})}):"",e.data.Twitter?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://twitter.com/".concat(e.data.Twitter),children:Object(m.jsx)(O.f,{onClick:g,size:"20px"})})}):"",e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"]?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"],children:Object(m.jsx)(O.a,{onClick:g,size:"20px"})})}):""]})},y=(c(86),c(60)),N=function(e){var t="";return"number"!==typeof e||Number.isNaN(e)||(t=e>1e3?Math.round(e/1e3)+" km":Math.round(e)+" m"),t},w=function(e){var t=a.a.useRef(null),c=a.a.useState(null),n=Object(l.a)(c,2),s=n[0],r=n[1],o=e.shop,j=function(){e.close(),t.current&&(t.current.remove(),s.remove())};a.a.useEffect((function(){if(t.current){var e=new window.geolonia.Map({container:t.current,interactive:!1,zoom:14,style:"geolonia/gsi"});r(e)}}),[o,t]);var d,u=N(o.distance),h=o["\u30ab\u30c6\u30b4\u30ea"],b=o["\u7d39\u4ecb\u6587"];return Object(m.jsxs)("div",{className:"shop-single",children:[Object(m.jsx)("div",{className:"head",children:Object(m.jsxs)("button",{onClick:j,children:[Object(m.jsx)(y.a,{size:"16px",color:"#FFFFFF"})," \u9589\u3058\u308b"]})}),Object(m.jsx)("div",{className:"container",children:o?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:o["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(i.b,{to:"/list?category=".concat(h),children:Object(m.jsx)("span",{onClick:j,className:"category",children:h})}),Object(m.jsx)("span",{className:"nowrap",children:u&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",u]})})]}),Object(m.jsx)("div",{style:{margin:"24px 0"},children:Object(m.jsx)(v,{data:o})}),o["\u753b\u50cf"]&&Object(m.jsx)("img",{src:o["\u753b\u50cf"],alt:o["\u30b9\u30dd\u30c3\u30c8\u540d"],style:{width:"100%"}}),Object(m.jsx)("p",{style:{margin:"24px 0"},children:(d=b,d.split(/(\r\n)|(\n)|(\r)/g).map((function(e,t){var c="";return"\r\n"===e||"\n"===e||"\r"===e?c=Object(m.jsx)("br",{},t):void 0!==e&&(c=e),c})))}),Object(m.jsx)("div",{ref:t,style:{width:"100%",height:"200px",marginTop:"24px"},"data-lat":o["\u7def\u5ea6"],"data-lng":o["\u7d4c\u5ea6"],"data-navigation-control":"off"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{className:"small",href:"http://maps.apple.com/?q=".concat(o["\u7def\u5ea6"],",").concat(o["\u7d4c\u5ea6"]),children:"\u5e97\u8217\u307e\u3067\u306e\u30eb\u30fc\u30c8"})}),Object(m.jsxs)("div",{className:"small",children:[Object(m.jsxs)("pre",{children:["O/O or FSM \uff1a ",o["\u30ab\u30c6\u30b4\u30ea"]]}),Object(m.jsxs)("pre",{children:["\u62c5\u5f53BC \uff1a ",o["\u62c5\u5f53BC"]]})]})]}):Object(m.jsx)(m.Fragment,{})})]})},F={width:"100%",height:"100%",position:"relative"},k=function(e){for(var t=["poi","poi-primary","poi-r0-r9","poi-r10-r24","poi-r25","poi-bus","poi-entrance"],c=0;c<t.length;c++){var n=t[c];e.setLayoutProperty(n,"visibility","none")}},C=function(e){var t=a.a.useRef(null),c=a.a.useState(),n=Object(l.a)(c,2),s=n[0],r=n[1],i=a.a.useState(void 0),o=Object(l.a)(i,2),j=o[0],d=o[1];a.a.useEffect((function(){!function(e,t){e&&t&&e.on("render",(function(){if(!e.getSource("shops")){k(e);var c=x(t);e.addSource("shops",{type:"geojson",data:c,cluster:!0,clusterMaxZoom:14,clusterRadius:25}),e.addLayer({id:"shop-points",type:"circle",source:"shops",filter:["all",["==","$type","Point"]],paint:{"circle-radius":13,"circle-color":"#FF0000","circle-opacity":.4,"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF","circle-stroke-opacity":1}}),e.addLayer({id:"shop-symbol",type:"symbol",source:"shops",filter:["all",["==","$type","Point"]],paint:{"text-color":"#000000","text-halo-color":"#FFFFFF","text-halo-width":2},layout:{"text-field":"{\u30b9\u30dd\u30c3\u30c8\u540d}","text-font":["Noto Sans Regular"],"text-variable-anchor":["top","bottom","left","right"],"text-radial-offset":.5,"text-justify":"auto","text-size":12,"text-anchor":"top","text-max-width":12,"text-allow-overlap":!1}}),e.on("mouseenter","shop-points",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-points",(function(){e.getCanvas().style.cursor=""})),e.on("mouseenter","shop-symbol",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-symbol",(function(){e.getCanvas().style.cursor=""})),e.on("click","shop-points",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),e.on("click","shop-symbol",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),f(e)}}))}(s,e.data)}),[s,e.data]),a.a.useEffect((function(){if(t.current&&!s){var c=window.geolonia,n=x(e.data),a=p()(n),i=new c.Map({container:t.current,style:"geolonia/gsi",bounds:a,fitBoundsOptions:{padding:50}});a&&i.fitBounds(a,{padding:50});var o=function(){k(i),r(i)},l=function(){i.resize()};return i.on("load",o),window.addEventListener("orientationchange",l),function(){window.removeEventListener("orientationchange",l),i.off("load",o)}}}),[t,s,e.data]);return Object(m.jsxs)("div",{style:F,children:[Object(m.jsx)("div",{ref:t,style:F,"data-geolocate-control":"on","data-marker":"off","data-gesture-handling":"off"}),j?Object(m.jsx)(w,{shop:j,close:function(){d(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},S=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C,{data:e.data})})},_=c(16),M=c(62),z=(c(87),function(e){var t=function(){e.popupHandler(e.data)},c=N(e.data.distance),n=e.data["\u30ab\u30c6\u30b4\u30ea"],a=e.data["\u753b\u50cf"],s=!!e.queryCategory;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"shop-link",children:[Object(m.jsx)("h2",{className:"shop-title",onClick:t,children:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{className:"tag-box",children:[Object(m.jsx)("span",{className:"nowrap",children:!s&&Object(m.jsx)(i.b,{to:"/list?category=".concat(n),children:Object(m.jsx)("span",{className:"category",children:n})})}),Object(m.jsx)("span",{className:"nowrap",children:c&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",c]})})]}),Object(m.jsx)("div",{style:{margin:"10px 10px 10px 0"},children:a&&Object(m.jsx)("img",{src:a,alt:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"],onClick:t})}),Object(m.jsx)("div",{className:"right",onClick:t,children:Object(m.jsx)(M.a,{size:"40px",color:"#CCCCCC"})})]})})}),E=(c(88),c(63)),P=function(e){var t=a.a.useState(),c=Object(l.a)(t,2),n=c[0],s=c[1],r=a.a.useState(e.data),o=Object(l.a)(r,2),j=o[0],d=o[1],u=a.a.useState([]),h=Object(l.a)(u,2),b=h[0],p=h[1],x=a.a.useState(10),f=Object(l.a)(x,2),O=f[0],g=f[1],v=a.a.useState(!0),y=Object(l.a)(v,2),N=y[0],F=y[1],k=Object(i.c)(),C=Object(l.a)(k,1)[0].get("category");a.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e["\u30ab\u30c6\u30b4\u30ea"]===C})));var c=!0;return c&&(p(t.slice(0,O)),d(t)),function(){c=!1}}),[e.data,C,O]);var S=function(e){e&&s(e)},M=Object(m.jsx)("div",{className:"loader",style:{width:"100%",textAlign:"center"},children:"Loading ..."},0);return Object(m.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(m.jsx)("div",{className:"shop-list-category",children:"\u30ab\u30c6\u30b4\u30ea\uff1a\u300c".concat(C,"\u300d")}),Object(m.jsx)(E.a,{dataLength:b.length,next:function(){b.length>=j.length?F(!1):(p([].concat(Object(_.a)(b),Object(_.a)(j.slice(O,O+10)))),g(O+10))},hasMore:N,loader:M,scrollableTarget:"shop-list",children:0===b.length?Object(m.jsx)("div",{className:"shop-list-not-found",children:"\u304a\u63a2\u3057\u306e\u5834\u6240\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f"}):b.map((function(e,t){return Object(m.jsx)("div",{className:"shop",children:Object(m.jsx)(z,{data:e,popupHandler:S,queryCategory:C})},t)}))}),n?Object(m.jsx)(w,{shop:n,close:function(){s(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},L=(c(89),c(18)),W=function(){return Object(m.jsx)("div",{className:"about-us",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"branding",children:[Object(m.jsx)("div",{className:"image",children:Object(m.jsx)("img",{src:"".concat("/StoreMap","/geolonia_logo.svg"),alt:""})}),Object(m.jsx)("div",{className:"logo",children:"Geolonia PWA"})]}),Object(m.jsx)("p",{children:"Geolonia PWA\u30de\u30c3\u30d7\u306f\u3001Google \u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u3092\u66f4\u65b0\u3059\u308b\u3060\u3051\u3067\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u5730\u56f3\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),Object(m.jsx)("p",{children:"\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u3067\u516c\u958b\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u81ea\u7531\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059\u3002"}),Object(m.jsx)("p",{children:"\u307e\u305f\u3001\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3067\u306e\u5229\u7528\u3084\u30c7\u30b6\u30a4\u30f3\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3084\u5229\u7528\u306b\u5fc5\u8981\u306a\u7def\u5ea6\u30fb\u7d4c\u5ea6\u60c5\u5831\u306e\u63d0\u4f9b\u3082\u6709\u511f\u3067\u5225\u9014\u627f\u308a\u307e\u3059\u3002\u3054\u5e0c\u671b\u306e\u65b9\u306f\u4e0b\u8a18\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"}),Object(m.jsx)("h2",{children:"Geolonia \u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://geolonia.com/contact/",children:"https://geolonia.com/contact/"})}),Object(m.jsx)("p",{children:"\u203b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u304a\u3088\u3073\u30a2\u30d7\u30ea\u306e\u4f5c\u6210\u30fb\u5229\u7528\u306b\u3064\u3044\u3066\u306f\u30b5\u30dd\u30fc\u30c8\u5bfe\u8c61\u5916\u3068\u306a\u308a\u307e\u3059\u3002\u3042\u3089\u304b\u3058\u3081\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002"}),L.form_url?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u3064\u3044\u3066"}),Object(m.jsx)("p",{children:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u4e0b\u306e\u300c + \u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30d5\u30a9\u30fc\u30e0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(m.jsx)("div",{className:"goto-form",children:Object(m.jsx)("button",{children:Object(m.jsx)(O.d,{color:"#FFFFFF",onClick:function(){L.form_url&&(window.location.href=L.form_url)}})})})]}):Object(m.jsx)(m.Fragment,{})]})})},T=c(68),A=(c(90),function(e){var t=Object(h.f)(),c=a.a.useState([]),n=Object(l.a)(c,2),s=n[0],r=n[1];return a.a.useEffect((function(){for(var t=[],c=0;c<e.data.length;c++){var n=e.data[c];-1===t.indexOf(n["\u30ab\u30c6\u30b4\u30ea"])&&t.push(n["\u30ab\u30c6\u30b4\u30ea"])}r(t)}),[e.data]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"category",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"category-item",children:[Object(m.jsx)("label",{htmlFor:"category-select",children:"O/O or FSM"}),Object(m.jsx)(T.a,{onChange:function(e){e&&t("/list?category=".concat(e.value))},options:s.map((function(e){return{value:e,label:e}}))})]})})})]})}),R=c(153),$=c(155),B=(c(106),function(e){var t=e.data,c=Object(n.useState)([]),a=Object(l.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(),o=Object(l.a)(i,2),j=o[0],d=o[1];return Object(n.useEffect)((function(){for(var e=[],c=function(c){var n=t[c];n["\u753b\u50cf"]&&e.push(Object(m.jsx)(R.a,{className:"mui-image-list-item",children:Object(m.jsx)("img",{src:n["\u753b\u50cf"],alt:n["\u30b9\u30dd\u30c3\u30c8\u540d"],loading:"lazy",onClick:function(){return function(e){e&&d(e)}(n)},onError:function(e){e.target.parentNode.remove()}})},c))},n=0;n<t.length;n++)c(n);r(e)}),[t]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"images",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)($.a,{id:"mui-image-list",sx:{width:"100%",height:"100%"},cols:2,rowHeight:164,children:s}),j?Object(m.jsx)(w,{shop:j,close:function(){d(void 0)}}):Object(m.jsx)(m.Fragment,{})]})})]})}),q=(c(109),function(){return Object(m.jsx)("div",{className:"tabbar",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.a,{})}),Object(m.jsx)("div",{className:"text",children:"\u30db\u30fc\u30e0"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/list",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.c,{})}),Object(m.jsx)("div",{className:"text",children:"\u4e00\u89a7"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/category",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.e,{})}),Object(m.jsx)("div",{className:"text",children:"O/O"})]})})]})})}),D=function(e){return e.replace(/[\uff01-\uff5e]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)})).replace(/\u3000/g," ")},G=function(e){var t=e[0];return e.slice(1).map((function(e){return t.reduce((function(c,n){var a=e[t.indexOf(n)];return c[n]=D(a||""),c}),{})}))},J=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sort((function(e,t){return Date.parse(t["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])-Date.parse(e["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return a.a.useEffect((function(){fetch("".concat("/StoreMap","/data.json?timestamp=").concat((new Date).getTime())).then((function(e){return e.ok?e.text():Promise.reject(e.status)})).then((function(e){var t=JSON.parse(e);if("values"in t===!1)return console.log("No Data Found at Spreadsheet"),void n([]);for(var c=G(t.values),a=[],s=0;s<c.length;s++){var r=c[s];if(r["\u7def\u5ea6"]&&r["\u7d4c\u5ea6"]&&r["\u30b9\u30dd\u30c3\u30c8\u540d"]&&(r["\u7def\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/)&&r["\u7d4c\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/))){var i=Object(o.a)(Object(o.a)({},r),{},{index:s});a.push(i)}}J(a).then((function(e){n(e)}))}))}),[]),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("div",{className:"app-body",children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/",element:Object(m.jsx)(S,{data:c})}),Object(m.jsx)(h.a,{path:"/list",element:Object(m.jsx)(P,{data:c})}),Object(m.jsx)(h.a,{path:"/category",element:Object(m.jsx)(A,{data:c})}),Object(m.jsx)(h.a,{path:"/images",element:Object(m.jsx)(B,{data:c})}),Object(m.jsx)(h.a,{path:"/about",element:Object(m.jsx)(W,{})})]})}),Object(m.jsx)("div",{className:"app-footer",children:Object(m.jsx)(q,{})})]})},I=(c(110),c(66));var U=function(e){var t=e.url,c=Object(I.a)().Canvas;return Object(m.jsx)(c,{text:t,options:{type:"image/png",margin:0,width:128}})},Z=c(147),K=c(149),Q=c(151),V=c(148),X=c(150),Y=c(152),ee=(c(133),function(){var e=window.location.href.replace(/\?.+$/,"").replace(/#.+$/,"");return Object(m.jsx)("div",{className:"share",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(Z.a,{url:e,hashtags:["".concat(L.title)],title:"".concat(L.title),children:Object(m.jsx)(V.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(K.a,{url:e,hashtag:"#".concat(L.title),children:Object(m.jsx)(X.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(Q.a,{url:e,title:"".concat(L.title),children:Object(m.jsx)(Y.a,{size:32,round:!0})})})})]})})}),te=function(){var e=L.logo_image_url||"".concat("/StoreMap","/logo.svg");return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)("div",{className:"branding",children:Object(m.jsx)("img",{className:"image",src:e,alt:""})}),Object(m.jsx)("div",{className:"description",children:L.description}),Object(m.jsx)("div",{className:"qrcode",children:Object(m.jsx)(U,{url:window.location.href})}),Object(m.jsx)(ee,{})]})};c(134);var ce=function(){return Object(m.jsx)("div",{className:"outer-container",children:Object(m.jsxs)("div",{className:"inner-container",children:[Object(m.jsx)(te,{}),Object(m.jsx)(H,{})]})})},ne=(c(135),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(ce,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/StoreMap",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/StoreMap","/service-worker.js");ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ae(t,e)}))}}()},18:function(e){e.exports=JSON.parse('{"title":"Pleasure Store Map","description":"Pleasure \u6226\u7565","form_url":"","logo_image_url":"https://geoloniamaps.github.io/pwamap/icon-pwamap.svg","background_image_url":"https://geoloniamaps.github.io/pwamap/geolonia_bgimage_1920_1080.png","primary_color":"#dc143c"}')},77:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){}},[[136,1,2]]]);
//# sourceMappingURL=main.39d3a819.chunk.js.map