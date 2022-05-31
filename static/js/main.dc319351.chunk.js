(this["webpackJsonpgeolonia-pwa"]=this["webpackJsonpgeolonia-pwa"]||[]).push([[0],{107:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(31),r=c.n(s),i=c(9),o=c(50),l=c(6),j=c(62),d=c(51),u=c.n(d),h=c(7),b=(c(79),c(63)),O=c.n(b),x=function(e){var t={type:"FeatureCollection",features:[]};for(var c in e){var a=e[c];if(!a["\u7d4c\u5ea6"]||!a["\u7def\u5ea6"]||!a["\u30b9\u30dd\u30c3\u30c8\u540d"])return;for(var n={type:"Feature",geometry:{type:"Point",coordinates:[Number(a["\u7d4c\u5ea6"]),Number(a["\u7def\u5ea6"])]},properties:{_id:c}},s=0;s<Object.keys(a).length;s++){var r=Object.keys(a)[s];n.properties[r]=a[r]}t.features.push(n)}return t},p=function(e){e.addLayer({id:"clusters",type:"circle",source:"shops",filter:["has","point_count"],paint:{"circle-radius":20,"circle-color":"#FF0000","circle-opacity":1}}),e.addLayer({id:"cluster-count",type:"symbol",source:"shops",filter:["has","point_count"],paint:{"text-color":"#FFFFFF"},layout:{"text-field":"{point_count_abbreviated} \u4ef6","text-size":12,"text-font":["Noto Sans Regular"]}}),e.on("click","clusters",(function(t){var c=e.queryRenderedFeatures(t.point,{layers:["clusters"]}),a=c[0].properties.cluster_id;e.getSource("shops").getClusterExpansionZoom(a,(function(t,a){t||e.easeTo({center:c[0].geometry.coordinates,zoom:a})}))})),e.on("mouseenter","clusters",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","clusters",(function(){e.getCanvas().style.cursor=""}))},f=c(18),m=(c(86),c(1)),v=function(e){e.stopPropagation()},g=function(e){return Object(m.jsxs)("div",{className:"links",children:[e.data.Instagram?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://instagram.com/".concat(e.data.Instagram),children:Object(m.jsx)(f.b,{onClick:v,size:"20px"})})}):"",e.data.Twitter?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://twitter.com/".concat(e.data.Twitter),children:Object(m.jsx)(f.f,{onClick:v,size:"20px"})})}):"",e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"]?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"],children:Object(m.jsx)(f.a,{onClick:v,size:"20px"})})}):""]})},N=(c(88),c(64)),y=function(e){var t="";return"number"!==typeof e||Number.isNaN(e)||(t=e>1e3?Math.round(e/1e3)+" km":Math.round(e)+" m"),t},w=function(e){var t=n.a.useRef(null),c=n.a.useState(null),a=Object(l.a)(c,2),s=a[0],r=a[1],o=e.shop,j=function(){e.close(),t.current&&(t.current.remove(),s.remove())};n.a.useEffect((function(){if(t.current){var e=new window.geolonia.Map({container:t.current,interactive:!1,zoom:14,style:"geolonia/gsi"});r(e)}}),[o,t]);var d,u=y(o.distance),h=o["\u30ab\u30c6\u30b4\u30ea"],b=o["\u7d39\u4ecb\u6587"];return Object(m.jsxs)("div",{className:"shop-single",children:[Object(m.jsx)("div",{className:"head",children:Object(m.jsxs)("button",{onClick:j,children:[Object(m.jsx)(N.a,{size:"16px",color:"#FFFFFF"})," \u9589\u3058\u308b"]})}),Object(m.jsx)("div",{className:"container",children:o?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:o["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(i.b,{to:"/list?category=".concat(h),children:Object(m.jsx)("span",{onClick:j,className:"category",children:h})}),Object(m.jsx)("span",{className:"nowrap",children:u&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",u]})})]}),Object(m.jsx)("div",{style:{margin:"24px 0"},children:Object(m.jsx)(g,{data:o})}),o["\u753b\u50cf"]&&Object(m.jsx)("img",{src:o["\u753b\u50cf"],alt:o["\u30b9\u30dd\u30c3\u30c8\u540d"],style:{width:"100%"}}),Object(m.jsx)("p",{style:{margin:"24px 0"},children:(d=b,d.split(/(\r\n)|(\n)|(\r)/g).map((function(e,t){var c="";return"\r\n"===e||"\n"===e||"\r"===e?c=Object(m.jsx)("br",{},t):void 0!==e&&(c=e),c})))}),Object(m.jsx)("div",{ref:t,style:{width:"100%",height:"200px",marginTop:"24px"},"data-lat":o["\u7def\u5ea6"],"data-lng":o["\u7d4c\u5ea6"],"data-navigation-control":"off"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{className:"small",href:"http://maps.apple.com/?q=".concat(o["\u7def\u5ea6"],",").concat(o["\u7d4c\u5ea6"]),children:"\u5e97\u8217\u307e\u3067\u306e\u30eb\u30fc\u30c8"})}),Object(m.jsxs)("p",{className:"small",children:["BCOM\uff1a",o.BCOM]})]}):Object(m.jsx)(m.Fragment,{})})]})},F={width:"100%",height:"100%",position:"relative"},S=function(e){for(var t=["poi","poi-primary","poi-r0-r9","poi-r10-r24","poi-r25","poi-bus","poi-entrance"],c=0;c<t.length;c++){var a=t[c];e.setLayoutProperty(a,"visibility","none")}},C=function(e){var t=n.a.useRef(null),c=n.a.useState(),a=Object(l.a)(c,2),s=a[0],r=a[1],i=n.a.useState(void 0),o=Object(l.a)(i,2),j=o[0],d=o[1];n.a.useEffect((function(){!function(e,t){e&&t&&e.on("render",(function(){if(!e.getSource("shops")){S(e);var c=x(t);e.addSource("shops",{type:"geojson",data:c,cluster:!0,clusterMaxZoom:14,clusterRadius:25}),e.addLayer({id:"shop-points",type:"circle",source:"shops",filter:["all",["==","$type","Point"]],paint:{"circle-radius":13,"circle-color":"#FF0000","circle-opacity":.4,"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF","circle-stroke-opacity":1}}),e.addLayer({id:"shop-symbol",type:"symbol",source:"shops",filter:["all",["==","$type","Point"]],paint:{"text-color":"#000000","text-halo-color":"#FFFFFF","text-halo-width":2},layout:{"text-field":"{\u30b9\u30dd\u30c3\u30c8\u540d}","text-font":["Noto Sans Regular"],"text-variable-anchor":["top","bottom","left","right"],"text-radial-offset":.5,"text-justify":"auto","text-size":12,"text-anchor":"top","text-max-width":12,"text-allow-overlap":!1}}),e.on("mouseenter","shop-points",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-points",(function(){e.getCanvas().style.cursor=""})),e.on("mouseenter","shop-symbol",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-symbol",(function(){e.getCanvas().style.cursor=""})),e.on("click","shop-points",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),e.on("click","shop-symbol",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),p(e)}}))}(s,e.data)}),[s,e.data]),n.a.useEffect((function(){if(t.current&&!s){var c=window.geolonia,a=x(e.data),n=O()(a),i=new c.Map({container:t.current,style:"geolonia/gsi",bounds:n,fitBoundsOptions:{padding:50}});n&&i.fitBounds(n,{padding:50});var o=function(){S(i),r(i)},l=function(){i.resize()};return i.on("load",o),window.addEventListener("orientationchange",l),function(){window.removeEventListener("orientationchange",l),i.off("load",o)}}}),[t,s,e.data]);return Object(m.jsxs)("div",{style:F,children:[Object(m.jsx)("div",{ref:t,style:F,"data-geolocate-control":"on","data-marker":"off","data-gesture-handling":"off"}),j?Object(m.jsx)(w,{shop:j,close:function(){d(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},k=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C,{data:e.data})})},M=c(11),_=c(66),E=(c(89),function(e){var t=function(){e.popupHandler(e.data)},c=y(e.data.distance),a=e.data["\u30ab\u30c6\u30b4\u30ea"],n=e.data["\u753b\u50cf"],s=!!e.queryCategory;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"shop-link",children:[Object(m.jsx)("h2",{className:"shop-title",onClick:t,children:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{className:"tag-box",children:[Object(m.jsx)("span",{className:"nowrap",children:!s&&Object(m.jsx)(i.b,{to:"/list?category=".concat(a),children:Object(m.jsx)("span",{className:"category",children:a})})}),Object(m.jsx)("span",{className:"nowrap",children:c&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",c]})})]}),Object(m.jsx)("div",{style:{margin:"10px 10px 10px 0"},children:n&&Object(m.jsx)("img",{src:n,alt:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"],onClick:t})}),Object(m.jsx)("div",{className:"right",onClick:t,children:Object(m.jsx)(_.a,{size:"40px",color:"#CCCCCC"})})]})})}),L=(c(38),c(22)),z=function(e){var t=n.a.useState(),c=Object(l.a)(t,2),a=c[0],s=c[1],r=n.a.useState(e.data),o=Object(l.a)(r,2),j=o[0],d=o[1],u=n.a.useState([]),h=Object(l.a)(u,2),b=h[0],O=h[1],x=n.a.useState(10),p=Object(l.a)(x,2),f=p[0],v=p[1],g=n.a.useState(!0),N=Object(l.a)(g,2),y=N[0],F=N[1],S=Object(i.c)(),C=Object(l.a)(S,1)[0].get("category");n.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e["\u30ab\u30c6\u30b4\u30ea"]===C})));var c=!0;return c&&(O(t.slice(0,f)),d(t)),function(){c=!1}}),[e.data,C,f]);var k=function(e){e&&s(e)},_=Object(m.jsx)("div",{className:"loader",style:{width:"100%",textAlign:"center"},children:"Loading ..."},0);return Object(m.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(m.jsx)("div",{className:"shop-list-category",children:"\u30ab\u30c6\u30b4\u30ea\uff1a\u300c".concat(C,"\u300d").concat(j.length,"\u4ef6")}),Object(m.jsx)(L.a,{dataLength:b.length,next:function(){b.length>=j.length?F(!1):(O([].concat(Object(M.a)(b),Object(M.a)(j.slice(f,f+10)))),v(f+10))},hasMore:y,loader:_,scrollableTarget:"shop-list",children:0===b.length?Object(m.jsx)("div",{className:"shop-list-not-found",children:"\u304a\u63a2\u3057\u306e\u5834\u6240\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f"}):b.map((function(e,t){return Object(m.jsx)("div",{className:"shop",children:Object(m.jsx)(E,{data:e,popupHandler:k,queryCategory:C})},t)}))}),a?Object(m.jsx)(w,{shop:a,close:function(){s(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},B=(c(90),c(19)),P=function(){return Object(m.jsx)("div",{className:"about-us",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"branding",children:[Object(m.jsx)("div",{className:"image",children:Object(m.jsx)("img",{src:"".concat("/StoreMap","/geolonia_logo.svg"),alt:""})}),Object(m.jsx)("div",{className:"logo",children:"Geolonia PWA"})]}),Object(m.jsx)("p",{children:"Geolonia PWA\u30de\u30c3\u30d7\u306f\u3001Google \u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u3092\u66f4\u65b0\u3059\u308b\u3060\u3051\u3067\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u5730\u56f3\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),Object(m.jsx)("p",{children:"\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u3067\u516c\u958b\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u81ea\u7531\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059\u3002"}),Object(m.jsx)("p",{children:"\u307e\u305f\u3001\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3067\u306e\u5229\u7528\u3084\u30c7\u30b6\u30a4\u30f3\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3084\u5229\u7528\u306b\u5fc5\u8981\u306a\u7def\u5ea6\u30fb\u7d4c\u5ea6\u60c5\u5831\u306e\u63d0\u4f9b\u3082\u6709\u511f\u3067\u5225\u9014\u627f\u308a\u307e\u3059\u3002\u3054\u5e0c\u671b\u306e\u65b9\u306f\u4e0b\u8a18\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"}),Object(m.jsx)("h2",{children:"Geolonia \u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://geolonia.com/contact/",children:"https://geolonia.com/contact/"})}),Object(m.jsx)("p",{children:"\u203b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u304a\u3088\u3073\u30a2\u30d7\u30ea\u306e\u4f5c\u6210\u30fb\u5229\u7528\u306b\u3064\u3044\u3066\u306f\u30b5\u30dd\u30fc\u30c8\u5bfe\u8c61\u5916\u3068\u306a\u308a\u307e\u3059\u3002\u3042\u3089\u304b\u3058\u3081\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002"}),B.form_url?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u3064\u3044\u3066"}),Object(m.jsx)("p",{children:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u4e0b\u306e\u300c + \u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30d5\u30a9\u30fc\u30e0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(m.jsx)("div",{className:"goto-form",children:Object(m.jsx)("button",{children:Object(m.jsx)(f.d,{color:"#FFFFFF",onClick:function(){B.form_url&&(window.location.href=B.form_url)}})})})]}):Object(m.jsx)(m.Fragment,{})]})})},T=c(23),A=(c(91),function(e){var t=Object(h.f)(),c=n.a.useState([]),a=Object(l.a)(c,2),s=a[0],r=a[1];return n.a.useEffect((function(){for(var t=[],c=0;c<e.data.length;c++){var a=e.data[c];-1===t.indexOf(a["\u30ab\u30c6\u30b4\u30ea"])&&t.push(a["\u30ab\u30c6\u30b4\u30ea"])}r(t)}),[e.data]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"category",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"category-item",children:[Object(m.jsx)("label",{htmlFor:"category-select",children:"O/O or FSM"}),Object(m.jsx)(T.a,{onChange:function(e){e&&t("/list?category=".concat(e.value))},options:s.map((function(e){return{value:e,label:e}}))})]})})})]})}),W=function(e){var t=n.a.useState(),c=Object(l.a)(t,2),a=c[0],s=c[1],r=n.a.useState(e.data),o=Object(l.a)(r,2),j=o[0],d=o[1],u=n.a.useState([]),h=Object(l.a)(u,2),b=h[0],O=h[1],x=n.a.useState(10),p=Object(l.a)(x,2),f=p[0],v=p[1],g=n.a.useState(!0),N=Object(l.a)(g,2),y=N[0],F=N[1],S=Object(i.c)(),C=Object(l.a)(S,1)[0].get("store");n.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e["\u30b9\u30dd\u30c3\u30c8\u540d"]===C})));var c=!0;return c&&(O(t.slice(0,f)),d(t)),function(){c=!1}}),[e.data,C,f]);var k=function(e){e&&s(e)},_=Object(m.jsx)("div",{className:"loader",style:{width:"100%",textAlign:"center"},children:"Loading ..."},0);return Object(m.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(m.jsx)("div",{className:"shop-list-category",children:"\u30b9\u30dd\u30c3\u30c8\u540d\uff1a\u300c".concat(C,"\u300d").concat(j.length,"\u4ef6")}),Object(m.jsx)(L.a,{dataLength:b.length,next:function(){b.length>=j.length?F(!1):(O([].concat(Object(M.a)(b),Object(M.a)(j.slice(f,f+10)))),v(f+10))},hasMore:y,loader:_,scrollableTarget:"shop-list",children:0===b.length?Object(m.jsx)("div",{className:"shop-list-not-found",children:"\u304a\u63a2\u3057\u306e\u5834\u6240\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f"}):b.map((function(e,t){return Object(m.jsx)("div",{className:"shop",children:Object(m.jsx)(E,{data:e,popupHandler:k,queryCategory:C})},t)}))}),a?Object(m.jsx)(w,{shop:a,close:function(){s(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},q=(c(46),function(e){var t=Object(h.f)(),c=n.a.useState([]),a=Object(l.a)(c,2),s=a[0],r=a[1];return n.a.useEffect((function(){for(var t=[],c=0;c<e.data.length;c++){var a=e.data[c];-1===t.indexOf(a["\u30b9\u30dd\u30c3\u30c8\u540d"])&&t.push(a["\u30b9\u30dd\u30c3\u30c8\u540d"])}r(t)}),[e.data]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"store",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"store-item",children:[Object(m.jsx)("label",{htmlFor:"store-select",children:"\u5e97\u8217"}),Object(m.jsx)(T.a,{onChange:function(e){e&&t("/storelist?store=".concat(e.value))},options:s.map((function(e){return{value:e,label:e}}))})]})})})]})}),R=function(e){var t=n.a.useState(),c=Object(l.a)(t,2),a=c[0],s=c[1],r=n.a.useState(e.data),o=Object(l.a)(r,2),j=o[0],d=o[1],u=n.a.useState([]),h=Object(l.a)(u,2),b=h[0],O=h[1],x=n.a.useState(10),p=Object(l.a)(x,2),f=p[0],v=p[1],g=n.a.useState(!0),N=Object(l.a)(g,2),y=N[0],F=N[1],S=Object(i.c)(),C=Object(l.a)(S,1)[0].get("bc");n.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e.BCOM===C})));var c=!0;return c&&(O(t.slice(0,f)),d(t)),function(){c=!1}}),[e.data,C,f]);var k=function(e){e&&s(e)},_=Object(m.jsx)("div",{className:"loader",style:{width:"100%",textAlign:"center"},children:"Loading ..."},0);return Object(m.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(m.jsx)("div",{className:"shop-list-category",children:"BC/OM\uff1a\u300c".concat(C,"\u300d").concat(j.length,"\u4ef6")}),Object(m.jsx)(L.a,{dataLength:b.length,next:function(){b.length>=j.length?F(!1):(O([].concat(Object(M.a)(b),Object(M.a)(j.slice(f,f+10)))),v(f+10))},hasMore:y,loader:_,scrollableTarget:"shop-list",children:0===b.length?Object(m.jsx)("div",{className:"shop-list-not-found",children:"\u304a\u63a2\u3057\u306e\u5834\u6240\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f"}):b.map((function(e,t){return Object(m.jsx)("div",{className:"shop",children:Object(m.jsx)(E,{data:e,popupHandler:k,queryCategory:C})},t)}))}),a?Object(m.jsx)(w,{shop:a,close:function(){s(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},$=function(e){var t=Object(h.f)(),c=n.a.useState([]),a=Object(l.a)(c,2),s=a[0],r=a[1];return n.a.useEffect((function(){for(var t=[],c=0;c<e.data.length;c++){var a=e.data[c];-1===t.indexOf(a["\u90fd\u9053\u5e9c\u770c"])&&t.push(a["\u90fd\u9053\u5e9c\u770c"])}r(t)}),[e.data]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"store",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"store-item",children:[Object(m.jsx)("label",{htmlFor:"store-select",children:"\u90fd\u9053\u5e9c\u770c"}),Object(m.jsx)(T.a,{onChange:function(e){e&&t("/prefecturelist?prefecture=".concat(e.value))},options:s.map((function(e){return{value:e,label:e}}))})]})})})]})},H=function(e){var t=n.a.useState(),c=Object(l.a)(t,2),a=c[0],s=c[1],r=n.a.useState(e.data),o=Object(l.a)(r,2),j=o[0],d=o[1],u=n.a.useState([]),h=Object(l.a)(u,2),b=h[0],O=h[1],x=n.a.useState(10),p=Object(l.a)(x,2),f=p[0],v=p[1],g=n.a.useState(!0),N=Object(l.a)(g,2),y=N[0],F=N[1],S=Object(i.c)(),C=Object(l.a)(S,1)[0].get("prefecture");n.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e["\u90fd\u9053\u5e9c\u770c"]===C})));var c=!0;return c&&(O(t.slice(0,f)),d(t)),function(){c=!1}}),[e.data,C,f]);var k=function(e){e&&s(e)},_=Object(m.jsx)("div",{className:"loader",style:{width:"100%",textAlign:"center"},children:"Loading ..."},0);return Object(m.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(m.jsx)("div",{className:"shop-list-category",children:"\u90fd\u9053\u5e9c\u770c\uff1a\u300c".concat(C,"\u300d").concat(j.length,"\u4ef6")}),Object(m.jsx)(L.a,{dataLength:b.length,next:function(){b.length>=j.length?F(!1):(O([].concat(Object(M.a)(b),Object(M.a)(j.slice(f,f+10)))),v(f+10))},hasMore:y,loader:_,scrollableTarget:"shop-list",children:0===b.length?Object(m.jsx)("div",{className:"shop-list-not-found",children:"\u304a\u63a2\u3057\u306e\u5834\u6240\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f"}):b.map((function(e,t){return Object(m.jsx)("div",{className:"shop",children:Object(m.jsx)(E,{data:e,popupHandler:k,queryCategory:C})},t)}))}),a?Object(m.jsx)(w,{shop:a,close:function(){s(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},D=function(e){var t=Object(h.f)(),c=n.a.useState([]),a=Object(l.a)(c,2),s=a[0],r=a[1];return n.a.useEffect((function(){for(var t=[],c=0;c<e.data.length;c++){var a=e.data[c];-1===t.indexOf(a.BCOM)&&t.push(a.BCOM)}r(t)}),[e.data]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"store",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"store-item",children:[Object(m.jsx)("label",{htmlFor:"store-select",children:"BCOM"}),Object(m.jsx)(T.a,{onChange:function(e){e&&t("/bclist?bc=".concat(e.value))},options:s.map((function(e){return{value:e,label:e}}))})]})})})]})},G=c(154),J=c(156),I=(c(107),function(e){var t=e.data,c=Object(a.useState)([]),n=Object(l.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(),o=Object(l.a)(i,2),j=o[0],d=o[1];return Object(a.useEffect)((function(){for(var e=[],c=function(c){var a=t[c];a["\u753b\u50cf"]&&e.push(Object(m.jsx)(G.a,{className:"mui-image-list-item",children:Object(m.jsx)("img",{src:a["\u753b\u50cf"],alt:a["\u30b9\u30dd\u30c3\u30c8\u540d"],loading:"lazy",onClick:function(){return function(e){e&&d(e)}(a)},onError:function(e){e.target.parentNode.remove()}})},c))},a=0;a<t.length;a++)c(a);r(e)}),[t]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"images",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(J.a,{id:"mui-image-list",sx:{width:"100%",height:"100%"},cols:2,rowHeight:164,children:s}),j?Object(m.jsx)(w,{shop:j,close:function(){d(void 0)}}):Object(m.jsx)(m.Fragment,{})]})})]})}),U=(c(110),function(){return Object(m.jsx)("div",{className:"tabbar",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(f.a,{})}),Object(m.jsx)("div",{className:"text",children:"\u30db\u30fc\u30e0"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/category",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(f.e,{})}),Object(m.jsx)("div",{className:"text",children:"O/O"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/store",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(f.e,{})}),Object(m.jsx)("div",{className:"text",children:"\u5e97\u8217"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/bc",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(f.e,{})}),Object(m.jsx)("div",{className:"text",children:"BC"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/prefecture",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(f.e,{})}),Object(m.jsx)("div",{className:"text",children:"\u90fd\u9053\u5e9c\u770c"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/list",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(f.c,{})}),Object(m.jsx)("div",{className:"text",children:"\u4e00\u89a7"})]})})]})})}),Z=function(e){return e.replace(/[\uff01-\uff5e]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)})).replace(/\u3000/g," ")},K=function(e){var t=e[0];return e.slice(1).map((function(e){return t.reduce((function(c,a){var n=e[t.indexOf(a)];return c[a]=Z(n||""),c}),{})}))},Q=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sort((function(e,t){return Date.parse(t["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])-Date.parse(e["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=n.a.useState([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return n.a.useEffect((function(){fetch("".concat("/StoreMap","/data.json?timestamp=").concat((new Date).getTime())).then((function(e){return e.ok?e.text():Promise.reject(e.status)})).then((function(e){var t=JSON.parse(e);if("values"in t===!1)return console.log("No Data Found at Spreadsheet"),void a([]);for(var c=K(t.values),n=[],s=0;s<c.length;s++){var r=c[s];if(r["\u7def\u5ea6"]&&r["\u7d4c\u5ea6"]&&r["\u30b9\u30dd\u30c3\u30c8\u540d"]&&(r["\u7def\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/)&&r["\u7d4c\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/))){var i=Object(o.a)(Object(o.a)({},r),{},{index:s});n.push(i)}}Q(n).then((function(e){a(e)}))}))}),[]),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("div",{className:"app-body",children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/",element:Object(m.jsx)(k,{data:c})}),Object(m.jsx)(h.a,{path:"/list",element:Object(m.jsx)(z,{data:c})}),Object(m.jsx)(h.a,{path:"/category",element:Object(m.jsx)(A,{data:c})}),Object(m.jsx)(h.a,{path:"/storelist",element:Object(m.jsx)(W,{data:c})}),Object(m.jsx)(h.a,{path:"/store",element:Object(m.jsx)(q,{data:c})}),Object(m.jsx)(h.a,{path:"/bclist",element:Object(m.jsx)(R,{data:c})}),Object(m.jsx)(h.a,{path:"/bc",element:Object(m.jsx)(D,{data:c})}),Object(m.jsx)(h.a,{path:"/prefecturelist",element:Object(m.jsx)(H,{data:c})}),Object(m.jsx)(h.a,{path:"/prefecture",element:Object(m.jsx)($,{data:c})}),Object(m.jsx)(h.a,{path:"/images",element:Object(m.jsx)(I,{data:c})}),Object(m.jsx)(h.a,{path:"/about",element:Object(m.jsx)(P,{})})]})}),Object(m.jsx)("div",{className:"app-footer",children:Object(m.jsx)(U,{})})]})},X=(c(111),c(69));var Y=function(e){var t=e.url,c=Object(X.a)().Canvas;return Object(m.jsx)(c,{text:t,options:{type:"image/png",margin:0,width:128}})},ee=c(148),te=c(150),ce=c(152),ae=c(149),ne=c(151),se=c(153),re=(c(134),function(){var e=window.location.href.replace(/\?.+$/,"").replace(/#.+$/,"");return Object(m.jsx)("div",{className:"share",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(ee.a,{url:e,hashtags:["".concat(B.title)],title:"".concat(B.title),children:Object(m.jsx)(ae.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(te.a,{url:e,hashtag:"#".concat(B.title),children:Object(m.jsx)(ne.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(ce.a,{url:e,title:"".concat(B.title),children:Object(m.jsx)(se.a,{size:32,round:!0})})})})]})})}),ie=function(){var e=B.logo_image_url||"".concat("/StoreMap","/logo.svg");return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)("div",{className:"branding",children:Object(m.jsx)("img",{className:"image",src:e,alt:""})}),Object(m.jsx)("div",{className:"description",children:B.description}),Object(m.jsx)("div",{className:"qrcode",children:Object(m.jsx)(Y,{url:window.location.href})}),Object(m.jsx)(re,{})]})};c(135);var oe=function(){return Object(m.jsx)("div",{className:"outer-container",children:Object(m.jsxs)("div",{className:"inner-container",children:[Object(m.jsx)(ie,{}),Object(m.jsx)(V,{})]})})},le=(c(136),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(oe,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/StoreMap",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/StoreMap","/service-worker.js");le?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var a=c.headers.get("content-type");404===c.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):je(t,e)}))}}()},19:function(e){e.exports=JSON.parse('{"title":"Pleasure Store Map","description":"Pleasure \u6226\u7565","form_url":"","logo_image_url":"https://geoloniamaps.github.io/pwamap/icon-pwamap.svg","background_image_url":"https://geoloniamaps.github.io/pwamap/geolonia_bgimage_1920_1080.png","primary_color":"#dc143c"}')},38:function(e,t,c){},46:function(e,t,c){},79:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){}},[[137,1,2]]]);
//# sourceMappingURL=main.dc319351.chunk.js.map