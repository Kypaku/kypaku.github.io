(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],d=0,u=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);m&&m(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i={app:0},s=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-cc589914":"6353cc17"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-cc589914":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-cc589914":"eb67903c"}[t]+".css",i=o.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===i))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===n||d===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],m.parentNode.removeChild(m),a(s)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(m);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}i[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=d;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},2906:function(t,e,a){},4710:function(t,e,a){},"478e":function(t,e,a){"use strict";var n=a("7c85"),r=a.n(n);r.a},"4ba9":function(t,e,a){},"5c64":function(t,e,a){"use strict";var n=a("d32a"),r=a.n(n);r.a},"5d96":function(t,e,a){"use strict";var n=a("7780"),r=a.n(n);r.a},7186:function(t,e,a){"use strict";var n=a("2906"),r=a.n(n);r.a},"73ca":function(t,e,a){},"743f":function(t,e,a){},7780:function(t,e,a){},"7c85":function(t,e,a){},9051:function(t,e,a){"use strict";var n=a("4710"),r=a.n(n);r.a},c06e:function(t,e,a){"use strict";var n=a("743f"),r=a.n(n);r.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"logo-text"},[t._v("KyDiagrams")])]),a("v-spacer"),a("router-link",{staticClass:"about",attrs:{to:"/about"}},[t._v("About")])],1),a("v-main",[a("router-view")],1)],1)},i=[],s=(a("7db0"),a("5530")),c=a("4dd0"),o=a.n(c),l=a("2f62"),d=n["a"].extend({name:"App",components:{},data:function(){return{}},computed:Object(s["a"])({},Object(l["b"])(["diagrams"])),methods:Object(s["a"])({},Object(l["c"])(["SET_DIAGRAMS","SET_CURRENT"])),created:function(){var t=o()("diagrams");if(t){this.SET_DIAGRAMS(t);var e=o()("current");if("undefined"!==e){var a=e?this.diagrams.find((function(t){return t.id===e.id})):this.diagrams[0];this.SET_CURRENT(a)}}}}),u=d,m=(a("478e"),a("5c64"),a("2877")),f=a("6544"),h=a.n(f),v=a("7496"),p=a("40dc"),g=a("f6c4"),b=a("2fa4"),_=Object(m["a"])(u,r,i,!1,null,"072ab68c",null),D=_.exports;h()(_,{VApp:v["a"],VAppBar:p["a"],VMain:g["a"],VSpacer:b["a"]});a("d3b7");var y=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Main")],1)},w=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-page mt-3"},[a("v-container",[a("Navigation",{attrs:{items:t.diagrams}}),t.current.id?a("div",{staticClass:"diagram-wrap"},[a("h3",{staticClass:"mt-4"},[t._v("Diagram:")]),a("Diagram")],1):t._e(),t.current.id?a("v-row",{staticClass:"footer"},[a("v-col",{staticClass:"add-layer"},[a("AddLayer")],1),t.currentLayer.id?a("v-col",{staticClass:"add-block-wrap"},[a("AddBlock")],1):t._e()],1):t._e()],1)],1)},k=[],O=a("60a3"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation d-flex"},[a("div",{staticClass:"diagrams flex-center"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.items.length,expression:"!items.length"}],staticClass:"helper"},[t._v("Create new diagram: ")]),t._l(t.items,(function(t){return a("DiagramItem",{key:t.id,attrs:{item:t}})}))],2),a("v-dialog",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"add-button ml-2",attrs:{icon:""}},"v-btn",r,!1),n),[t._v("+")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("AddDiagram",{on:{close:function(e){t.dialog=!1}}})],1)],1)},A=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"diagram-item",class:{active:t.current.id===t.item.id},on:{click:function(e){return t.SET_CURRENT(t.item)}}},[t.isRenaming?a("div",[a("v-layout",{staticClass:"ml-2",attrs:{row:"","align-center":""}},[a("v-text-field",{attrs:{label:"",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-btn",{attrs:{icon:""},on:{click:t.rename}},[a("v-icon",{attrs:{size:"14"}},[t._v("done")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.del}},[a("v-icon",{attrs:{size:"14"}},[t._v("close")])],1)],1)],1):a("v-btn",{staticClass:"feed left",attrs:{text:""}},[a("span",[t._v(t._s(t.item.name||"_"))]),a("span",{staticClass:"rename_button pointer",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.isRenaming=!0}}},[a("v-icon",{attrs:{size:"14"}},[t._v("edit")])],1)])],1)},R=[],T=(a("b0c0"),O["a"].extend({props:{item:{type:Object,required:!0}},data:function(){return{isRenaming:!1,name:this.item.name}},components:{},computed:Object(s["a"])({},Object(l["b"])(["current","diagrams"])),methods:Object(s["a"])(Object(s["a"])({},Object(l["c"])(["SET_CURRENT","UPD_DIAGRAM","DEL_DIAGRAM"])),{},{del:function(){this.DEL_DIAGRAM(this.item.id),this.isRenaming=!1,this.current.id===this.item.id&&this.SET_CURRENT(this.diagrams[0]||{})},rename:function(){this.UPD_DIAGRAM({id:this.item.id,name:this.name}),this.isRenaming=!1}})})),j=T,x=a("8336"),B=a("132d"),M=a("a722"),I=a("8654"),V=Object(m["a"])(j,L,R,!1,null,"20e06f50",null),N=V.exports;h()(V,{VBtn:x["a"],VIcon:B["a"],VLayout:M["a"],VTextField:I["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"add-diagram"},[a("v-card-title",{staticClass:"headline"},[t._v(" Add diagram ")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-textarea",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("h3",[t._v("Or load from file:")]),a("input",{staticClass:"mt-2",attrs:{type:"file"},on:{change:t.loadTextFromFile}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:t.add}},[t._v("+")])],1)],1)},U=[],F=(a("a4d3"),a("e01a"),a("a15b"),a("ac1f"),a("25f0"),a("5319"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))});function P(t){t=t.replace("#","");var e=parseInt(t.substr(0,2),16),a=parseInt(t.substr(2,2),16),n=parseInt(t.substr(4,2),16),r=(299*e+587*a+114*n)/1e3;return r/255}var K={second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2592e6,year:31536e6};function $(t){var e=t.getMonth()+1,a=t.getDate();return[t.getFullYear(),(e>9?"":"0")+e,(a>9?"":"0")+a].join("-")}function W(){return{name:"",description:"",json:""}}var q=O["a"].extend({components:{},data:W,computed:Object(s["a"])({},Object(l["b"])(["diagrams"])),methods:Object(s["a"])(Object(s["a"])({},Object(l["c"])(["ADD_DIAGRAM","SET_CURRENT"])),{},{add:function(){var t;this.json?(t=JSON.parse(this.json),t.name=this.name,t.description=this.description):t={name:this.name,description:this.description,layers:[],id:F()},this.ADD_DIAGRAM(t),this.SET_CURRENT(this.diagrams[this.diagrams.length-1]),this.$emit("close"),Object.assign(this.$data,W())},loadTextFromFile:function(t){var e=this,a=t.target.files[0],n=new FileReader;n.onload=function(t){e.json=t.target.result},n.readAsText(a)}})}),H=q,G=a("b0af"),z=a("99d9"),X=a("a844"),J=Object(m["a"])(H,Y,U,!1,null,"4b189f72",null),Q=J.exports;h()(J,{VBtn:x["a"],VCard:G["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VSpacer:b["a"],VTextField:I["a"],VTextarea:X["a"]});var Z=O["a"].extend({props:{items:{type:Array,required:!0}},data:function(){return{dialog:!1}},components:{AddDiagram:Q,DiagramItem:N},computed:{},methods:{}}),tt=Z,et=(a("d115"),a("169a")),at=Object(m["a"])(tt,C,A,!1,null,"57dfd54d",null),nt=at.exports;h()(at,{VBtn:x["a"],VDialog:et["a"]});var rt,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"diagram"},[a("div",{staticClass:"periods"}),a("div",{staticClass:"scale mt-5"},[a("Timescale",{model:{value:t.timescale,callback:function(e){t.timescale=e},expression:"timescale"}})],1),t.current.id?a("div",{staticClass:"diagram-body"},[a("div",{staticClass:"layers pt-7 pb-3"},[a("h3",[t._v("Layers:")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.current.layers.length,expression:"!current.layers.length"}],staticClass:"helper"},[t._v("Add new layer below ↓")]),t._l(t.current.layers,(function(e,n){return a("div",{key:e.id,staticClass:"layer-wrap mt-3 flex-center"},[a("h5",{staticClass:"mr-2"},[t._v("#"+t._s(n+1))]),a("Layer",{attrs:{item:e,"time-interval":t.timescale}})],1)}))],2),a("v-row",{staticClass:"diagram-footer pt-3"},[a("v-col",{directives:[{name:"show",rawName:"v-show",value:t.currentBlock.description&&t.currentBlock.description.length,expression:"currentBlock.description && currentBlock.description.length"}],staticClass:"block-data"},[a("h4",[t._v("Block description: ")]),t._v(" "+t._s(t.currentBlock.description)+" ")]),a("v-col",{staticClass:"overflow-hidden"},[a("v-btn",{staticClass:"right",on:{click:t.saveFile}},[t._v("Save")])],1)],1)],1):t._e()])},st=[],ct=(a("3ca3"),a("ddb0"),a("2b3d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"timescale",staticClass:"time-scale",on:{wheel:t.scale,mousedown:t.dragToScrollStart,mouseup:t.dragToScrollEnd,mousemove:t.dragToScroll}},[a("div",{staticClass:"switches"},[a("v-btn-toggle",{staticClass:"right",attrs:{tile:"",color:"deep-purple accent-3",group:""}},[a("v-btn",{on:{click:function(e){t.setScale(new Date(+new Date+t.dates.day))}}},[t._v("DAY")]),a("v-btn",{on:{click:function(e){t.setScale(new Date(+new Date+t.dates.week))}}},[t._v("WEEK")]),a("v-btn",{on:{click:function(e){t.setScale(new Date(+new Date+t.dates.month))}}},[t._v("MONTH")]),a("v-btn",{on:{click:function(e){t.setScale(new Date(+new Date+t.dates.year))}}},[t._v("YEAR")])],1)],1),a("div",{ref:"scale_line",staticClass:"scale-line",class:{drag:t.isDrag}},t._l(t.scalemarks,(function(e,n){return a("div",{key:n,staticClass:"scalemark",class:"scalemark-"+e.scale,style:e.style},[a("div",{staticClass:"scalemark-body"}),a("div",{staticClass:"scalemark-label"},[t._v(" "+t._s(e.label)+" ")])])})),0)])}),ot=[],lt=(a("4de4"),a("4160"),a("fb6a"),a("07ac"),a("1276"),a("159b"),a("b85c")),dt=a("0391"),ut=a.n(dt),mt=864e5,ft=31536e7;(function(t){t[t["Hour"]=0]="Hour",t[t["Day"]=1]="Day",t[t["Week"]=2]="Week",t[t["Mount"]=3]="Mount",t[t["Year"]=4]="Year"})(rt||(rt={}));var ht=function(t,e){var a=0;t.addEventListener("touchstart",(function(t){a=t.targetTouches[0].clientX}),!1),t.addEventListener("touchcancel",(function(t){a=t.targetTouches[0].clientX}),!1),t.addEventListener("touchmove",(function(t){if(1===t.touches.length){var n=t.touches[0];return e(n.clientX-a),a=n.clientX,t.preventDefault(),!1}}),{passive:!1})},vt=O["a"].extend({props:{start:{type:Date},end:{type:Date},scrollable:{type:Boolean,default:!0},value:{type:Object}},components:{},data:function(){return{startScale:this.start||this.value.start,endScale:this.end||this.value.end,isDrag:!1,startDragPos:0,dates:K,scaleWidth:0}},computed:{currentScale:function(){var t,e=0,a=Math.ceil(this.scaleWidth/50),n=Object(lt["a"])(Object.values(K).slice(2));try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e++,(+this.endScale-+this.startScale)/r<a)return e-1}}catch(i){n.e(i)}finally{n.f()}return 0},scalemarks:function(){var t=this,e=[],a=[],n=this.startScale,r=1e3-n.getMilliseconds(),i=59-n.getSeconds(),s=59-n.getMinutes(),c=23-n.getHours(),o=n.getDay(),l=o?7-o:0,d=+n+r+i*K.second+s*K.minute,u=d+c*K.hour,m=u+l*K.day,f=+new Date(n.getFullYear(),n.getMonth()+1,1),h=+new Date(n.getFullYear()+1,0);[d,u,m,f,h].forEach((function(a,n){if(a<+t.endScale&&n>=t.currentScale){var r=a;while(r<+t.endScale)e.push({date:new Date(r),scale:n,style:{left:Math.floor((r-+t.startScale)/(+t.endScale-+t.startScale)*t.scaleWidth)+"px"},label:["".concat(new Date(r).getHours()+1," : 00"),"".concat(String(new Date(r)).split(" ").slice(0,3).join(" ")),"".concat(String(new Date(r)).split(" ").slice(0,3).join(" ")),"".concat(String(new Date(r)).split(" ")[1]),"".concat(new Date(r).getFullYear())][n]}),3===n?r=+new Date(new Date(r).getFullYear(),new Date(r).getMonth()+1,1):4===n?r=+new Date(new Date(r).getFullYear()+1,0):r+=Object.values(K)[2+n]}})),e.sort((function(t,e){return t.date>e.date?1:-1}));var v=e[0];return a.push(v),e.forEach((function(t,e){e&&(+t.date===+v.date?t.scale>v.scale&&(a.pop(),a.push(t)):a.push(t)),v=t})),a.filter(Boolean)}},methods:{dragToScrollStart:function(t){this.isDrag=!0,this.startDragPos=t.clientX},dragToScrollEnd:function(){this.isDrag=!1},dragToScroll:function(t){if(this.isDrag){var e=t.clientX-this.startDragPos,a=-e/this.scaleWidth,n=a*(+this.endScale-+this.startScale),r=new Date(+this.startScale+n),i=new Date(+this.endScale+n);this.setScale(r,i),this.startDragPos=t.clientX}},scale:function(t){t.preventDefault();var e=+this.endScale-+this.startScale,a=-t.deltaY;if((e>mt||a<0)&&(e<ft||a>0)){var n=Math.floor(e*(a/2e3)),r=new Date(+this.startScale+n),i=new Date(+this.endScale-n);this.setScale(r,i)}},setScale:function(t,e){e?(this.startScale=t,this.endScale=e):(this.startScale=new Date,this.endScale=t),this.value&&this.$emit("input",{start:this.startScale,end:this.endScale})}},created:function(){if(!this.value&&(!this.start||!this.end))throw new Error("Vue Timescale: value and one of time borders were not defined");if(+this.start>=+this.end)throw new Error("start parametr must be less than end")},mounted:function(){var t=this;this.$nextTick((function(){t.scaleWidth=t.$refs.scale_line&&t.$refs.scale_line.clientWidth,ut()(t.$refs.timescale).on("change",(function(e,a){var n=+t.endScale-+t.startScale,r=e-a;if((n>mt||r<0)&&(n<ft||r>0)){var i=Math.floor(n*(r/200)),s=new Date(+t.startScale+i),c=new Date(+t.endScale-i);t.setScale(s,c)}})),ht(t.$refs.timescale,(function(e){var a=-e/t.scaleWidth,n=a*(+t.endScale-+t.startScale),r=new Date(+t.startScale+n),i=new Date(+t.endScale+n);t.setScale(r,i)}))}))}}),pt=vt,gt=(a("5d96"),a("a609")),bt=Object(m["a"])(pt,ct,ot,!1,null,"28401396",null),_t=bt.exports;h()(bt,{VBtn:x["a"],VBtnToggle:gt["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"layer",staticClass:"layer",class:{active:t.item.id===t.currentLayer.id},on:{click:t.setCurrent}},[t.isRenaming?a("div",[a("v-layout",{attrs:{row:"","align-center":""}},[a("v-text-field",{attrs:{label:"",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-btn",{attrs:{icon:""},on:{click:t.rename}},[t._v("✓")]),a("v-btn",{attrs:{icon:""},on:{click:t.del}},[a("v-icon",{attrs:{size:"14"}},[t._v("close")])],1)],1)],1):a("div",{staticClass:"label"},[a("span",[t._v(t._s(t.item.name||"_"))]),a("span",{staticClass:"rename_button pointer",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.isRenaming=!0}}},[a("v-icon",{attrs:{size:"14"}},[t._v("edit")])],1)]),a("div",{staticClass:"blocks"},t._l(t.item.blocks,(function(e,n){return a("div",{key:e.id,staticClass:"block-wrap",style:t.blockStyles[n]},[a("Block",{attrs:{item:e,layer:t.item,width:parseInt(t.blockStyles[n].width)}})],1)})),0),a("div",{staticClass:"description"},[t._v(" "+t._s(t.item.description)+" ")])])},yt=[],Et=(a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"block",staticClass:"block diagram-item",class:{active:t.item.id===t.currentBlock.id},style:t.style,on:{click:function(e){return e.stopPropagation(),t.setCurrent(e)}}},[t.isRenaming?a("div",[a("v-layout",{attrs:{row:"","align-center":""}},[a("v-text-field",{attrs:{label:"",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-btn",{attrs:{icon:""},on:{click:t.rename}},[t._v("✓")]),a("v-btn",{attrs:{icon:""},on:{click:t.del}},[a("v-icon",{attrs:{size:"14"}},[t._v("close")])],1)],1)],1):a("div",{directives:[{name:"show",rawName:"v-show",value:t.width>100,expression:"width > 100"}],attrs:{text:""}},[a("span",[t._v(t._s(t.item.name||"_"))]),a("span",{staticClass:"rename_button pointer",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.isRenaming=!0,t.name=t.item.name}}},[a("v-icon",{attrs:{size:"14"}},[t._v("edit")])],1)])])}),wt=[],St=(a("a9e3"),O["a"].extend({props:{item:{type:Object,required:!0},layer:{type:Object,required:!0},width:{type:Number,required:!0}},data:function(){return{isRenaming:!1,name:this.item.name}},components:{},computed:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["currentBlock","currentLayer","current"])),{},{style:function(){return{background:this.item.color,color:P(this.item.color)>.5?"black":"white",opacity:this.item.intensity/100}}}),methods:Object(s["a"])(Object(s["a"])({},Object(l["c"])(["SET_CURRENT_BLOCK","DEL_BLOCK","UPD_BLOCK","SET_ADD_BLOCK_MODE","SET_CURRENT_LAYER","SET_ADD_LAYER_MODE"])),{},{setCurrent:function(){this.SET_CURRENT_LAYER(this.layer),this.SET_CURRENT_BLOCK(this.item),this.SET_ADD_BLOCK_MODE(1),this.SET_ADD_LAYER_MODE(1)},getContrastYIQ:P,del:function(){this.DEL_BLOCK({diagramId:this.current.id,layerId:this.currentLayer.id,blockId:this.item.id}),this.isRenaming=!1,this.currentBlock.id===this.item.id&&this.SET_CURRENT_BLOCK(this.item)},rename:function(){this.UPD_BLOCK({diagramId:this.current.id,layerId:this.currentLayer.id,data:{id:this.item.id,name:this.name}}),this.isRenaming=!1}})})),kt=St,Ot=(a("9051"),Object(m["a"])(kt,Et,wt,!1,null,"6bc03cfc",null)),Ct=Ot.exports;h()(Ot,{VBtn:x["a"],VIcon:B["a"],VLayout:M["a"],VTextField:I["a"]});var At=O["a"].extend({props:{item:{type:Object,required:!0},timeInterval:{type:Object,required:!0}},components:{Block:Ct},data:function(){return{isCreated:!1,isRenaming:!1,name:this.item.name}},computed:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["currentLayer","current"])),{},{scaleWidth:function(){return this.isCreated?this.$refs.layer&&this.$refs.layer.clientWidth:0},blockStyles:function(){var t=this;return this.item.blocks.map((function(e){return{left:Math.floor((+e.start-+t.timeInterval.start)/(+t.timeInterval.end-+t.timeInterval.start)*t.scaleWidth)+"px",width:Math.floor((+e.end-+e.start)/(+t.timeInterval.end-+t.timeInterval.start)*t.scaleWidth)+"px"}}))}}),methods:Object(s["a"])(Object(s["a"])({},Object(l["c"])(["SET_CURRENT_LAYER","DEL_LAYER","UPD_LAYER","SET_CURRENT_BLOCK","SET_ADD_BLOCK_MODE","SET_ADD_LAYER_MODE"])),{},{setCurrent:function(){this.SET_CURRENT_BLOCK(),this.SET_ADD_BLOCK_MODE(0),this.SET_CURRENT_LAYER(this.item),this.SET_ADD_LAYER_MODE(1)},del:function(){this.DEL_LAYER({diagramId:this.current.id,layerId:this.item.id}),this.isRenaming=!1,this.currentLayer.id===this.item.id&&this.SET_CURRENT_LAYER(this.item)},rename:function(){this.UPD_LAYER({diagramId:this.current.id,data:{id:this.item.id,name:this.name}}),this.isRenaming=!1},parseInt:parseInt}),mounted:function(){this.isCreated=!0}}),Lt=At,Rt=(a("f924"),Object(m["a"])(Lt,Dt,yt,!1,null,"57e91610",null)),Tt=Rt.exports;h()(Rt,{VBtn:x["a"],VIcon:B["a"],VLayout:M["a"],VTextField:I["a"]});var jt=O["a"].extend({components:{Timescale:_t,Layer:Tt},data:function(){return{timescale:{start:new Date,end:new Date("2021")}}},computed:Object(s["a"])({},Object(l["b"])(["current","currentLayer","currentBlock"])),methods:{saveFile:function(){var t=JSON.stringify(this.current),e=new Blob([t],{type:"text/plain"}),a=document.createEvent("MouseEvents"),n=document.createElement("a");n.download="test.json",n.href=window.URL.createObjectURL(e),n.dataset.downloadurl=["text/json",n.download,n.href].join(":"),a.initEvent("click",!0,!1),n.dispatchEvent(a)}}}),xt=jt,Bt=(a("7186"),a("62ad")),Mt=a("0fd9"),It=Object(m["a"])(xt,it,st,!1,null,"25bc2a88",null),Vt=It.exports;h()(It,{VBtn:x["a"],VCol:Bt["a"],VRow:Mt["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-block"},[a("v-btn-toggle",{attrs:{tile:"",color:"deep-purple accent-3",group:""},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[a("v-btn",{attrs:{value:1,disabled:!t.currentBlock.id}},[t._v("Edit block")]),a("v-btn",{attrs:{value:0}},[t._v("Add block")])],1),a("v-text-field",{attrs:{rules:[function(){return!!t.name||"This field is required"}],label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-textarea",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-color-picker",{staticClass:"ma-2",attrs:{swatches:t.swatches,"show-swatches":""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),a("v-slider",{attrs:{min:"0",max:"100",label:"Intensity"},model:{value:t.intensity,callback:function(e){t.intensity=e},expression:"intensity"}}),a("div",{staticClass:"label"},[t._v("Time start/end:")]),a("v-row",[a("v-col",{staticClass:"col-6"},[a("v-time-picker",{attrs:{format:"24hr","allowed-hours":t.allowedHoursStart,"allowed-minutes":t.allowedMinutesStart},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1),a("v-col",{staticClass:"col-6"},[a("v-time-picker",{attrs:{format:"24hr","allowed-hours":t.allowedHoursEnd,"allowed-minutes":t.allowedMinutesEnd},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1)],1),a("div",{staticClass:"label"},[t._v("Date interval:")]),a("v-row",[a("v-col",{staticClass:"col-6"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.dateIsWrong,expression:"dateIsWrong"}],staticClass:"error-label"},[t._v("Date interval shouldn't conflict with other blocks")]),a("v-date-picker",{attrs:{"allowed-dates":t.allowedDatesStart,range:""},on:{input:function(e){t.dateWasSelected=!0}},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}})],1)],1),a("div",{staticClass:"overflow-hidden"},[a("v-btn",{staticClass:"right",attrs:{disabled:!t.isValidated},on:{click:t.apply}},[t._v(t._s(t.mode?"EDIT":"ADD")+" BLOCK")])],1)],1)},Yt=[],Ut=(a("99af"),a("a623"),a("0481"),a("45fc"),a("4069"),new Date);function Ft(){return{name:"",description:"",color:"#FF0000",swatches:[["#FF0000","#AA0000","#550000"],["#FFFF00","#AAAA00","#555500"],["#00FF00","#00AA00","#005500"],["#00FFFF","#00AAAA","#005555"],["#0000FF","#0000AA","#000055"]],intensity:100,timeStart:"".concat(Ut.getHours(),":").concat(Ut.getMinutes()),dateStart:[$(Ut)],timeEnd:"23:59",dateWasSelected:!1,id:""}}var Pt=O["a"].extend({components:{},data:Ft,computed:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["current","currentLayer","currentBlock","addBlockMode"])),{},{allowedDates:function(){var t=this;if(!this.currentLayer)return[];var e=this.currentLayer.blocks.filter((function(e){return e.id!==t.id}));return e.map((function(t){return{start:t.start,end:t.end}}))},sortedDates:function(){return this.dateStart[1]?[this.dateStart[0],this.dateStart[1]].sort((function(t,e){return+new Date(t)-+new Date(e)})):[this.dateStart[0],this.dateStart[0]]},isValidated:function(){return!!this.name.length&&!this.dateIsWrong},dateIsWrong:function(){var t=+new Date(this.sortedDates[0]),e=+new Date(this.sortedDates[1]),a=this.allowedDates.map((function(t){return[t.start,t.end]})).flat();return console.log(a.filter((function(a){return+a>t&&+a<e}))),a.some((function(a){return+a>t&&+a<e}))},start:function(){var t=this.sortedDates[0];return new Date("".concat(t," ").concat(this.timeStart))},end:function(){var t=this.sortedDates[1];return new Date("".concat(t," ").concat(this.timeEnd))},mode:{get:function(){return this.addBlockMode},set:function(t){t||Object.assign(this.$data,Ft()),this.SET_ADD_BLOCK_MODE(t)}}}),methods:Object(s["a"])({allowedHoursStart:function(t){var e=new Date("".concat(this.sortedDates[0]," ").concat(t,":00"));return this.allowedDates.every((function(t){return!(+t.start<+e&&+t.end>+e&&+t.start<+e+K.hour-1&&+t.end>+e+K.hour-1)}))&&+this.end>+e},allowedMinutesStart:function(t){var e=new Date("".concat(this.sortedDates[0]," ").concat(this.timeStart.split(":")[0],":").concat(t));return console.log(111),this.allowedDates.every((function(t){return!(+t.start<+e&&+t.end>+e)}))},allowedHoursEnd:function(t){var e=new Date("".concat(this.sortedDates[1]," ").concat(t,":00"));return this.allowedDates.every((function(t){return!(+t.start<+e&&+t.end>+e&&+t.start<+e+K.hour-1&&+t.end>+e+K.hour-1)}))&&+this.start<+e},allowedMinutesEnd:function(t){var e=new Date("".concat(this.sortedDates[1]," ").concat(this.timeEnd.split(":")[0],":").concat(t));return this.allowedDates.every((function(t){return!(+t.start<+e&&+t.end>+e)}))},allowedDatesStart:function(t){var e=new Date(t);return this.allowedDates.every((function(t){return!(+t.start<+e&&+t.end>+e&&+t.start<+e+K.day-1&&+t.end>+e+K.day-1)}))},apply:function(){var t=this.mode?this.UPD_BLOCK:this.ADD_BLOCK,e={name:this.name,description:this.description,color:this.color,intensity:this.intensity,start:this.start,end:this.end};this.mode&&(e.id=this.id),t({data:e}),Object.assign(this.$data,Ft())}},Object(l["c"])(["ADD_LAYER","ADD_BLOCK","SET_CURRENT_LAYER","SET_ADD_BLOCK_MODE","UPD_BLOCK"])),watch:{currentBlock:function(t,e){t.id&&(this.name=t.name,this.description=t.description,this.color=t.color,this.intensity=t.intensity,this.id=t.id,this.timeStart="".concat(t.start.getHours(),":").concat(t.start.getMinutes()),this.dateStart=[$(t.start),$(t.end)],this.timeEnd="".concat(t.end.getHours(),":").concat(t.end.getMinutes()),this.dateWasSelected=!1)}}}),Kt=Pt,$t=(a("c06e"),a("03a4")),Wt=a("2e4b"),qt=a("ba0d"),Ht=a("c964"),Gt=Object(m["a"])(Kt,Nt,Yt,!1,null,"57b15d24",null),zt=Gt.exports;h()(Gt,{VBtn:x["a"],VBtnToggle:gt["a"],VCol:Bt["a"],VColorPicker:$t["a"],VDatePicker:Wt["a"],VRow:Mt["a"],VSlider:qt["a"],VTextField:I["a"],VTextarea:X["a"],VTimePicker:Ht["a"]});var Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-layer"},[a("v-btn-toggle",{attrs:{tile:"",color:"deep-purple accent-3",group:""},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[a("v-btn",{attrs:{value:1,disabled:!t.currentLayer.id}},[t._v("Edit layer")]),a("v-btn",{attrs:{value:0}},[t._v("Add layer")])],1),a("v-text-field",{attrs:{label:"Name",required:"",rules:[function(){return!!t.name||"This field is required"}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-textarea",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("div",{staticClass:"overflow-hidden"},[a("v-btn",{staticClass:"right",attrs:{disabled:!t.isValidated},on:{click:t.apply}},[t._v(t._s(t.mode?"EDIT":"ADD")+" LAYER")])],1)],1)},Jt=[];function Qt(){return{name:"",description:"",id:""}}var Zt=O["a"].extend({components:{},data:Qt,computed:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["current","currentLayer","addLayerMode"])),{},{isValidated:function(){return!!this.name.length},mode:{get:function(){return this.addLayerMode},set:function(t){t||Object.assign(this.$data,Qt()),this.SET_ADD_LAYER_MODE(t)}}}),methods:Object(s["a"])(Object(s["a"])({},Object(l["c"])(["ADD_LAYER","SET_CURRENT_LAYER","SET_ADD_LAYER_MODE","UPD_LAYER"])),{},{apply:function(){var t=this.mode?this.UPD_LAYER:this.ADD_LAYER,e={name:this.name,description:this.description};this.mode&&(e.id=this.id),t({data:e}),this.mode||this.SET_CURRENT_LAYER(this.current.layers[this.current.layers.length-1]),Object.assign(this.$data,Qt())}}),watch:{addLayerMode:function(t,e){t&&(this.name=this.currentLayer.name,this.description=this.currentLayer.description,this.id=this.currentLayer.id)}}}),te=Zt,ee=Object(m["a"])(te,Xt,Jt,!1,null,"56ec67c9",null),ae=ee.exports;h()(ee,{VBtn:x["a"],VBtnToggle:gt["a"],VTextField:I["a"],VTextarea:X["a"]});var ne=O["a"].extend({components:{Navigation:nt,Diagram:Vt,AddLayer:ae,AddBlock:zt},computed:Object(s["a"])({},Object(l["b"])(["diagrams","current","currentLayer"])),methods:Object(s["a"])({},Object(l["c"])(["ADD_DIAGRAM"]))}),re=ne,ie=a("a523"),se=Object(m["a"])(re,S,k,!1,null,"a18fead4",null),ce=se.exports;h()(se,{VCol:Bt["a"],VContainer:ie["a"],VRow:Mt["a"]});var oe={name:"Home",components:{Main:ce}},le=oe,de=Object(m["a"])(le,E,w,!1,null,null,null),ue=de.exports;n["a"].use(y["a"]);var me=[{path:"/",name:"Home",component:ue},{path:"/about",name:"About",component:function(){return a.e("chunk-cc589914").then(a.bind(null,"f820"))}}],fe=new y["a"]({mode:"history",base:"/",routes:me}),he=fe,ve={addBlockMode:function(t){return t.settings.addBlockMode},addLayerMode:function(t){return t.settings.addLayerMode},diagrams:function(t){return t.diagrams.diagrams},current:function(t){return t.diagrams.current},currentLayer:function(t){return t.diagrams.currentLayer},currentBlock:function(t){return t.diagrams.currentBlock}},pe={state:{addBlockMode:0,addLayerMode:0},mutations:{SET_ADD_LAYER_MODE:function(t,e){t.addLayerMode=e},SET_ADD_BLOCK_MODE:function(t,e){t.addBlockMode=e}},actions:{}},ge=a("2ef0"),be={state:{diagrams:[],current:{},currentLayer:{},currentBlock:{}},mutations:{SET_DIAGRAMS:function(t,e){var a=Object(ge["cloneDeep"])(e);a.forEach((function(t){t.layers&&t.layers.forEach((function(t){t.blocks.forEach((function(t){t.start=new Date(t.start),t.end=new Date(t.end)}))}))})),t.diagrams=a||[],o()("diagrams",e)},SET_CURRENT:function(t,e){t.current=e,o()("current",e),e&&e.layers&&e.layers[0]&&(t.currentLayer=e.layers[0])},SET_CURRENT_LAYER:function(t,e){t.currentLayer=e},SET_CURRENT_BLOCK:function(t,e){t.currentBlock=e||{}},ADD_DIAGRAM:function(t,e){if(e.layers){var a=Object(ge["cloneDeep"])(e);a.id=F(),a.layers.forEach((function(t){t.blocks.forEach((function(t){t.start=new Date(t.start),t.end=new Date(t.end)}))})),t.diagrams.push(a||defaultData),o()("diagrams",t.diagrams)}},DEL_DIAGRAM:function(t,e){t.diagrams=t.diagrams.filter((function(t){return t.id!==e})),o()("diagrams",t.diagrams)},UPD_DIAGRAM:function(t,e){var a=t.diagrams.find((function(t){return t.id===e.id}));for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);o()("diagrams",t.diagrams)},ADD_LAYER:function(t,e){var a=e.diagramId,n=e.data,r=t.diagrams.find((function(e){return e.id===(a||t.current.id)}));r.layers.push(Object(s["a"])({id:F(),blocks:[]},n)),o()("diagrams",t.diagrams)},DEL_LAYER:function(t,e){var a=e.diagramId,n=e.layerId,r=t.diagrams.find((function(e){return e.id===(a||t.current.id)}));r.layers=r.layers.filter((function(t){return t.id!==n})),o()("diagrams",t.diagrams)},UPD_LAYER:function(t,e){var a=e.diagramId,n=e.data,r=t.diagrams.find((function(e){return e.id===(a||t.current.id)})),i=r.layers.find((function(t){return t.id===n.id}));for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s]);o()("diagrams",t.diagrams)},ADD_BLOCK:function(t,e){var a=e.diagramId,n=e.layerId,r=e.data,i=t.diagrams.find((function(e){return e.id===(a||t.current.id)})),c=i.layers.find((function(e){return e.id===(n||t.currentLayer.id)}))||i.layers[0];c&&(c.blocks.push(Object(s["a"])({id:F()},r)),o()("diagrams",t.diagrams))},DEL_BLOCK:function(t,e){var a=e.diagramId,n=e.layerId,r=e.blockId,i=t.diagrams.find((function(e){return e.id===(a||t.current.id)})),s=i.layers.find((function(e){return e.id===(n||t.currentLayer.id)}))||i.layers[0];s&&(s.blocks=s.blocks.filter((function(t){return t.id!==r})),o()("diagrams",t.diagrams))},UPD_BLOCK:function(t,e){var a=e.diagramId,n=e.layerId,r=e.data,i=t.diagrams.find((function(e){return e.id===(a||t.current.id)})),s=i.layers.find((function(e){return e.id===(n||t.currentLayer.id)}))||i.layers[0];if(s){var c=s.blocks.find((function(t){return t.id===r.id}));for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(c[l]=r[l]);o()("diagrams",t.diagrams)}}},actions:{}};n["a"].use(l["a"]);var _e=new l["a"].Store({modules:{settings:pe,diagrams:be},getters:ve}),De=a("9483");Object(De["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var ye=a("f309");n["a"].use(ye["a"]);var Ee=new ye["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:he,store:_e,vuetify:Ee,render:function(t){return t(D)}}).$mount("#app")},d115:function(t,e,a){"use strict";var n=a("73ca"),r=a.n(n);r.a},d32a:function(t,e,a){},f924:function(t,e,a){"use strict";var n=a("4ba9"),r=a.n(n);r.a}});
//# sourceMappingURL=app.d525518a.js.map