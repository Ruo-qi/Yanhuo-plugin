(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"95eJ":function(e,t,n){},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},X70a:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),r=n.n(a),l=n("Zvn+"),i=n("1i7f"),c=n("PAHk"),o=n("v8OG"),u=r.a.memo((e=>{var t=e.demos,n=t["usedocumentvisibility-demo1"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"usedocumentvisibility-\u76d1\u542c\u9875\u9762"},r.a.createElement(l["AnchorLink"],{to:"#usedocumentvisibility-\u76d1\u542c\u9875\u9762","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useDocumentVisibility \u76d1\u542c\u9875\u9762"),r.a.createElement("p",null,"\u76d1\u542c\u9875\u9762\u662f\u5426\u53ef\u89c1\uff0c\u53c2\u8003 ",r.a.createElement(l["Link"],{to:"https://developer.mozilla.org/docs/Web/API/Document/visibilityState"},"visibilityState API")),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(i["default"],t["usedocumentvisibility-demo1"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"const documentVisibility = useDocumentVisibility();",lang:"typescript"}),r.a.createElement("h3",{id:"result"},r.a.createElement(l["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Result"),r.a.createElement(o["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"documentVisibility"),r.a.createElement("td",null,"\u5224\u65ad document \u662f\u5426\u5904\u4e8e\u53ef\u89c1\u72b6\u6001"),r.a.createElement("td",null,r.a.createElement("code",null,"visible"),"| ",r.a.createElement("code",null,"hidden")," | ",r.a.createElement("code",null,"prerender")," | ",r.a.createElement("code",null,"undefined"))))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(u,{demos:n})}},v8OG:function(e,t,n){"use strict";var a=n("ahKI"),r=n.n(a),l=n("bIC1"),i=n.n(l);n("95eJ");function c(e,t){return m(e)||s(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(a=n.next()).done);i=!0)if(l.push(a.value),t&&l.length===t)break}catch(o){c=!0,r=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),o=c(l,2),u=o[0],d=o[1],s=Object(a["useState"])(!1),m=c(s,2),E=m[0],f=m[1];return Object(a["useEffect"])((function(){var e=n.current,t=i()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":E||void 0},r.a.createElement("table",null,t)))};t["a"]=E}}]);