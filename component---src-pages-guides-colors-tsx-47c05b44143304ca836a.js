(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[2146],{41584:function(e,n){"use strict";var t=Math.PI,r=2*t,o=1e-6,i=r-o;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function l(){return new a}a.prototype=l.prototype={constructor:a,moveTo:function(e,n){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,n){this._+="L"+(this._x1=+e)+","+(this._y1=+n)},quadraticCurveTo:function(e,n,t,r){this._+="Q"+ +e+","+ +n+","+(this._x1=+t)+","+(this._y1=+r)},bezierCurveTo:function(e,n,t,r,o,i){this._+="C"+ +e+","+ +n+","+ +t+","+ +r+","+(this._x1=+o)+","+(this._y1=+i)},arcTo:function(e,n,r,i,a){e=+e,n=+n,r=+r,i=+i,a=+a;var l=this._x1,u=this._y1,s=r-e,c=i-n,d=l-e,h=u-n,f=d*d+h*h;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=n);else if(f>o)if(Math.abs(h*s-c*d)>o&&a){var m=r-l,p=i-u,v=s*s+c*c,g=m*m+p*p,y=Math.sqrt(v),x=Math.sqrt(f),b=a*Math.tan((t-Math.acos((v+f-g)/(2*y*x)))/2),C=b/x,M=b/y;Math.abs(C-1)>o&&(this._+="L"+(e+C*d)+","+(n+C*h)),this._+="A"+a+","+a+",0,0,"+ +(h*m>d*p)+","+(this._x1=e+M*s)+","+(this._y1=n+M*c)}else this._+="L"+(this._x1=e)+","+(this._y1=n);else;},arc:function(e,n,a,l,u,s){e=+e,n=+n,s=!!s;var c=(a=+a)*Math.cos(l),d=a*Math.sin(l),h=e+c,f=n+d,m=1^s,p=s?l-u:u-l;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+h+","+f:(Math.abs(this._x1-h)>o||Math.abs(this._y1-f)>o)&&(this._+="L"+h+","+f),a&&(p<0&&(p=p%r+r),p>i?this._+="A"+a+","+a+",0,1,"+m+","+(e-c)+","+(n-d)+"A"+a+","+a+",0,1,"+m+","+(this._x1=h)+","+(this._y1=f):p>o&&(this._+="A"+a+","+a+",0,"+ +(p>=t)+","+m+","+(this._x1=e+a*Math.cos(u))+","+(this._y1=n+a*Math.sin(u))))},rect:function(e,n,t,r){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+n)+"h"+ +t+"v"+ +r+"h"+-t+"Z"},toString:function(){return this._}},n.Z=l},94942:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(41584),o=t(3583),i=t(30964),a=t(18091),l=t(92519);function u(){var e=l.x,n=null,t=(0,o.Z)(0),u=l.y,s=(0,o.Z)(!0),c=null,d=i.Z,h=null;function f(o){var i,a,l,f,m,p=o.length,v=!1,g=new Array(p),y=new Array(p);for(null==c&&(h=d(m=(0,r.Z)())),i=0;i<=p;++i){if(!(i<p&&s(f=o[i],i,o))===v)if(v=!v)a=i,h.areaStart(),h.lineStart();else{for(h.lineEnd(),h.lineStart(),l=i-1;l>=a;--l)h.point(g[l],y[l]);h.lineEnd(),h.areaEnd()}v&&(g[i]=+e(f,i,o),y[i]=+t(f,i,o),h.point(n?+n(f,i,o):g[i],u?+u(f,i,o):y[i]))}if(m)return h=null,m+""||null}function m(){return(0,a.Z)().defined(s).curve(d).context(c)}return f.x=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.Z)(+t),n=null,f):e},f.x0=function(n){return arguments.length?(e="function"==typeof n?n:(0,o.Z)(+n),f):e},f.x1=function(e){return arguments.length?(n=null==e?null:"function"==typeof e?e:(0,o.Z)(+e),f):n},f.y=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),u=null,f):t},f.y0=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),f):t},f.y1=function(e){return arguments.length?(u=null==e?null:"function"==typeof e?e:(0,o.Z)(+e),f):u},f.lineX0=f.lineY0=function(){return m().x(e).y(t)},f.lineY1=function(){return m().x(e).y(u)},f.lineX1=function(){return m().x(n).y(t)},f.defined=function(e){return arguments.length?(s="function"==typeof e?e:(0,o.Z)(!!e),f):s},f.curve=function(e){return arguments.length?(d=e,null!=c&&(h=d(c)),f):d},f.context=function(e){return arguments.length?(null==e?c=h=null:h=d(c=e),f):c},f}},3583:function(e,n,t){"use strict";function r(e){return function(){return e}}t.d(n,{Z:function(){return r}})},18091:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(41584),o=t(3583),i=t(30964),a=t(92519);function l(){var e=a.x,n=a.y,t=(0,o.Z)(!0),l=null,u=i.Z,s=null;function c(o){var i,a,c,d=o.length,h=!1;for(null==l&&(s=u(c=(0,r.Z)())),i=0;i<=d;++i)!(i<d&&t(a=o[i],i,o))===h&&((h=!h)?s.lineStart():s.lineEnd()),h&&s.point(+e(a,i,o),+n(a,i,o));if(c)return s=null,c+""||null}return c.x=function(n){return arguments.length?(e="function"==typeof n?n:(0,o.Z)(+n),c):e},c.y=function(e){return arguments.length?(n="function"==typeof e?e:(0,o.Z)(+e),c):n},c.defined=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(!!e),c):t},c.curve=function(e){return arguments.length?(u=e,null!=l&&(s=u(l)),c):u},c.context=function(e){return arguments.length?(null==e?l=s=null:s=u(l=e),c):l},c}},92519:function(e,n,t){"use strict";function r(e){return e[0]}function o(e){return e[1]}t.d(n,{x:function(){return r},y:function(){return o}})},18957:function(e,n,t){"use strict";t.d(n,{a:function(){return a}});var r=t(61904),o=t(15050),i=(0,r.Z)((function(e){e.setHours(0,0,0,0)}),(function(e,n){e.setDate(e.getDate()+n)}),(function(e,n){return(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*o.yB)/o.UD}),(function(e){return e.getDate()-1}));n.Z=i;var a=i.range},45395:function(e,n,t){"use strict";var r,o,i=t(91542),a=t(51302);function l(e,n){return n||(n=e.slice(0)),e.raw=n,e}n.Z=i.default.div.withConfig({displayName:"PageContent",componentId:"sc-5c9r0p-0"})(["margin:0 50px;position:relative;"," ",""],a.Z.tablet(r||(r=l(["\n        & {\n            margin: 0 30px;\n        }\n    "]))),a.Z.mobile(o||(o=l(["\n        & {\n            margin: 0 15px;\n        }\n    "]))))},80500:function(e,n,t){"use strict";t.d(n,{Xh:function(){return u},rm:function(){return s},Zb:function(){return c}});var r,o,i=t(91542),a=t(51302);function l(e,n){return n||(n=e.slice(0)),e.raw=n,e}var u=i.default.div.withConfig({displayName:"styled__FullWidthBanner",componentId:"sc-1aonzv1-0"})(["background:",";margin-bottom:40px;padding:20px;"],(function(e){return e.theme.colors.cardBackground})),s=i.default.div.withConfig({displayName:"styled__DescriptionBlock",componentId:"sc-1aonzv1-1"})(["max-width:800px;margin:0 auto 50px;"," ",""],a.Z.tablet(r||(r=l(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "]))),a.Z.mobile(o||(o=l(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "])))),c=i.default.div.withConfig({displayName:"styled__Card",componentId:"sc-1aonzv1-2"})(["background:",";box-shadow:",";"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.cardShadow}))},838:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});t(27378);var r=t(81739),o=t(95546),i=t(45395),a=t(91542),l=t(74186),u=t(62443),s=t(46222),c=t(38681),d=t(80500),h=t(24246),f=function(){var e=(0,a.useTheme)();return(0,h.jsx)(d.Xh,{children:(0,h.jsxs)("div",{className:"guide__illustrations",children:[(0,h.jsx)("div",{className:"guide__illustrations__item",children:(0,h.jsx)(u.p_,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:(0,c.aw)(["a","b","c","d","e"],{size:9}),indexBy:"country",keys:["a","b","c","d","e"],offsetType:"expand",axisLeft:null,axisBottom:null,enableGridX:!1,colors:{scheme:"nivo"},borderWidth:0,borderColor:"#333",isInteractive:!1,animate:!1,theme:e.nivo})}),(0,h.jsx)("div",{className:"guide__illustrations__item",children:(0,h.jsx)(l.jM,{margin:{top:15,right:10,bottom:-2,left:10},data:(0,c.aw)(["a","b","c"],{size:9}),indexBy:"country",keys:["a","b","c"],padding:.2,axisLeft:null,axisBottom:null,enableGridY:!1,enableLabel:!1,colors:{scheme:"spectral"},borderWidth:0,borderColor:"#333",isInteractive:!1,animate:!1,theme:e.nivo})}),(0,h.jsx)("div",{className:"guide__illustrations__item",children:(0,h.jsx)(s.R0,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:{country:"root",children:(0,c.aw)(["value"],{size:18})},colors:{scheme:"spectral"},colorBy:"id",identity:"country",leavesOnly:!0,outerPadding:10,innerPadding:4,borderWidth:0,nodeOpacity:1,isInteractive:!1,animate:!1,enableLabel:!1,theme:e.nivo})}),(0,h.jsx)("div",{className:"guide__illustrations__legend",children:"various color ranges applied to nivo components."})]})})},m=t(14503),p=function(){return(0,h.jsx)(d.Zb,{className:"guide__table",children:(0,h.jsx)("table",{children:(0,h.jsxs)("tbody",{children:[(0,h.jsx)("tr",{children:(0,h.jsx)("th",{colSpan:2,children:"Categorical colors"})}),m.uU.map((function(e){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e}),(0,h.jsx)("td",{children:m.BN[e].map((function(e){return(0,h.jsx)("span",{style:{display:"inline-block",background:e,width:18,height:18}},e)}))})]},e)})),(0,h.jsx)("tr",{children:(0,h.jsx)("th",{colSpan:2,children:"Diverging colors"})}),m.u6.map((function(e){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e}),(0,h.jsx)("td",{children:m.BN[e][11].map((function(e){return(0,h.jsx)("span",{style:{display:"inline-block",background:e,width:18,height:18}},e)}))})]},e)})),(0,h.jsx)("tr",{children:(0,h.jsx)("th",{colSpan:2,children:"Sequential colors"})}),m.qE.map((function(e){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e}),(0,h.jsx)("td",{children:m.BN[e][9].map((function(e){return(0,h.jsx)("span",{style:{display:"inline-block",background:e,width:18,height:18}},e)}))})]},e)}))]})})})},v=t(64131),g=t.n(v),y=t(17621),x=t(80398),b=function(){return(0,h.jsxs)(d.rm,{children:[(0,h.jsx)("h2",{children:"Single color property"}),(0,h.jsx)(y.U,{source:g()("\n                The main `colors` property defines the main colors to use\n                for your charts for main elements, for example the bars of a\n                [Bar](self:/bar) chart or the rectangles of a [TreeMap](self:/treemap).\n\n                For other elements such as borders, links (for [Pie](self:/pie) radial\n                labels for example), dots… you'll often have a dedicated color\n                property such as `borderColor` or `linkColor`.\n\n                Those are peripheral elements and sometimes to have a coherent\n                style you might want to use a color derived from the main element\n                they're bound to (rect —> border), or from the main theme.\n\n                So those properties support several strategies:\n            ")}),(0,h.jsx)("h3",{children:"Inheriting from parent element color"}),(0,h.jsx)(y.U,{source:g()("\n                The following example will use the `nivo` color scheme\n                to determine main element's color and then use this color\n                for the border of those elements.\n            ")}),(0,h.jsx)(x.y,{code:g()("\n                <Chart\n                    colors={{ scheme: 'nivo' }}\n                    borderColor={{ from: 'color' }}\n                />\n            "),language:"jsx"}),(0,h.jsx)(y.U,{source:g()("\n                However it's not that useful as increasing the elements\n                size would visually give the same result.\n                That's where **modifiers** come into play, you can inherit\n                from the main color but apply modifiers to dissociate it\n                from the main element while keeping consistency.\n\n                The folowing code will inherit use the color from parent\n                element and darken it by an amount of `.6` and change its\n                opacity to `.5`:\n            ")}),(0,h.jsx)(x.y,{code:g()("\n                <Chart\n                    colors={{ scheme: 'nivo' }}\n                    borderColor={{\n                        from: 'color',\n                        modifiers: [\n                            ['darker', .6],\n                            ['opacity', .5]\n                        ]\n                    }}\n                />\n            "),language:"jsx"}),(0,h.jsx)(y.U,{source:g()("\n                Available modifiers are `darker`, `brighter` and `opacity`.\n            ")}),(0,h.jsx)("h3",{children:"Using a color from current theme"}),(0,h.jsx)(y.U,{source:g()("\n                If you want to use a fixed color but want it to match current\n                theme, you can use the following config:\n            ")}),(0,h.jsx)(x.y,{code:g()("\n                <Chart\n                    colors={{ scheme: 'nivo' }}\n                    borderColor={{ theme: 'background' }}\n                />\n            "),language:"jsx"}),(0,h.jsx)(y.U,{source:g()("\n                Now all borders will use the `background` property\n                from current theme.\n            ")}),(0,h.jsx)("h3",{children:"Using a static custom color"}),(0,h.jsx)(y.U,{source:g()("\n                Using a custom color is pretty straightforward:\n            ")}),(0,h.jsx)(x.y,{code:g()("\n                <Chart\n                    colors={{ scheme: 'nivo' }}\n                    borderColor=\"#000000\"\n                />\n            "),language:"jsx"})]})},C=function(){return(0,h.jsxs)(r.Z,{children:[(0,h.jsx)(o.p,{title:"Colors Guide",description:"Using colors in nivo, color schemes, color scales…"}),(0,h.jsx)(i.Z,{children:(0,h.jsx)("div",{className:"guide__header",children:(0,h.jsx)("h1",{children:"Colors"})})}),(0,h.jsxs)(d.rm,{children:[(0,h.jsx)("h2",{children:"The colors property"}),(0,h.jsxs)("p",{children:["Beside highlighting data insights, your dataviz should be pretty, right?",(0,h.jsx)("br",{}),"nivo provides an easy way to deal with colors, very useful when using nested components."]})]}),(0,h.jsx)(f,{}),(0,h.jsxs)(d.rm,{children:[(0,h.jsx)("h2",{children:"Available color schemes"}),(0,h.jsxs)("p",{children:["Almost all color schemes come from"," ",(0,h.jsx)("a",{href:"https://github.com/d3/d3-scale-chromatic",target:"_blank",rel:"noopener noreferrer",children:"d3-scale-chromatic"}),"."]})]}),(0,h.jsx)(p,{}),(0,h.jsx)(b,{})]})}},38681:function(e,n,t){"use strict";t.d(n,{j2:function(){return v},wQ:function(){return g},aw:function(){return z},x$:function(){return O},ak:function(){return G},UE:function(){return F},$j:function(){return y},BO:function(){return b},Tz:function(){return Z},O$:function(){return _},B7:function(){return N},gq:function(){return w},zn:function(){return R},Ls:function(){return A},FQ:function(){return T},vQ:function(){return p}});var r=t(4215),o=t.n(r),i=t(91311),a=t.n(i),l=t(19193),u=t.n(l),s=t(18957),c=t(6164),d=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},h=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],f=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],m=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],p=Object.freeze({__proto__:null,countryCodes:h,names:f,programmingLanguages:m}),v=function(e,n,t){var r=void 0===t?{}:t,i=r.title,l=r.subtitle,u=r.rangeCount,s=void 0===u?5:u,c=r.measureCount,d=void 0===c?1:c,h=r.markerCount,f=void 0===h?1:h,m=r.float,p=void 0!==m&&m;return{id:e,title:i,subtitle:l,ranges:o()(s-1).reduce((function(e){var t=n-e[0];return[a()(t,p)].concat(e)}),[n]),measures:o()(d).reduce((function(e){return 0===e.length?[a()(n,p)]:[a()(e[0],p)].concat(e)}),[]),markers:o()(f).map((function(){return.6*n+a()(.4*n)}))}},g=function(e){var n=void 0===e?{}:e,t=n.keys,r=void 0===t?f:t,i=n.size,l=void 0===i?7:i,u=n.minValue,s=void 0===u?0:u,c=n.maxValue,d=void 0===c?2e3:c,h=Math.min(r.length,l),m=r.slice(0,h);return{matrix:o()(h).map((function(){return o()(h).map((function(){return Math.random()<.66?a()(s,d/4):a()(s,d)}))})),keys:m}},y=function(e){var n=void 0===e?{}:e,t=n.rootSize,r=void 0===t?32:t,o=n.midSize,i=void 0===o?24:o,l=n.leafSize,u=void 0===l?12:l,s=n.minMidNodes,c=void 0===s?5:s,d=n.maxMidNodes,h=void 0===d?11:d,f=n.minLeaves,m=void 0===f?3:f,p=n.maxLeaves,v=void 0===p?9:p,g={id:"Node 0",height:2,size:r,color:"rgb(244, 117, 96)"},y=Array.from({length:a()(c,h)},(function(e,n){return{id:"Node "+(n+1),height:1,size:i,color:"rgb(97, 205, 187)"}})),x=[],b=[];return y.forEach((function(e){x.push({source:"Node 0",target:e.id,distance:80}),y.forEach((function(n){Math.random()<.04&&x.push({source:e.id,target:n.id,distance:80})})),Array.from({length:a()(m,v)},(function(n,t){return b.push({id:e.id+"."+t,height:0,size:u,color:"rgb(232, 193, 160)"}),x.push({source:e.id,target:e.id+"."+t,distance:50}),null}))})),y.push(g),{nodes:y=y.concat(b),links:x}};function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}var b=function(e){var n=void 0===e?{}:e,t=n.size,r=void 0===t?26:t,i=n.keys,l=void 0===i?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:i;return o()(r).map((function(){return l.reduce((function(e,n){var t,r;return void 0!==n.random?r=a().apply(void 0,n.random):void 0!==n.shuffle&&(r=u()(n.shuffle)[0]),x({},e,((t={})[n.key]=r,t))}),{})}))},C=f.map((function(e){return{id:e}})),M=function e(n,t,r){var o=t.filter((function(e){return e.source===n})).map((function(e){var t=e.target;if(t===n)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+n+" —> "+n);if(null!=r&&r.includes(t))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+t);return t}));return o.reduce((function(o,i){return o.concat(e(i,t,r?[].concat(r,[i]):[n,i]))}),o)},j=function(e){return e.reduce((function(n,t){return n[t.source]||(n[t.source]=M(t.source,e)),n}),{})},_=function(e){var n=void 0===e?{}:e,t=n.nodeCount,r=n.maxIterations,i=void 0===r?3:r,l=C.slice(0,t).map((function(e){return Object.assign({},e,{nodeColor:d()})})),s=[];return u()(l).forEach((function(e){var n=e.id;o()(a()(1,i)).forEach((function(){var e=j(s),t=u()(l.filter((function(e){return e.id!==n})).map((function(e){return e.id})))[0];e[t]&&e[t].includes(n)||e[n]&&e[n].includes(t)||s.push({source:n,target:t,value:a()(5,200)})}))})),{nodes:l,links:s}},k=function(){return a()(0,500)},B=function(){return a()(4,20)},S=function(){return a()(3,17)},w=function(e,n){var t=n.min,r=void 0===t?60:t,i=n.max,l=void 0===i?100:i,u=n.categoryCount,s=void 0===u?0:u;return{groups:e,data:e.reduce((function(e,n,t){return[].concat(e,o()(a()(r,l)).map((function(){return k()})).map((function(e,r){var i={id:t+"."+r,group:n,price:e,volume:B()};return s>0&&(i.categories=o()(s).map(S)),i})))}),[])}},T=function(e){return{groups:e.groups,data:e.data.map((function(n){var t=x({},n,{group:u()(e.groups)[0],price:k(),volume:B()});return void 0!==n.categories&&(t.categories=o()(3).map(S)),t}))}},L=function(e){return"values"in e?function(n){return e.values[n]}:function(){var n=e.min+Math.random()*(e.max-e.min);return e.round&&(n=Math.round(n)),n}},A=function(e){var n=e.serieIds,t=e.x,r=e.y,o="length"in t?t.length:t.values.length,i=L(t),a=L(r);return n.map((function(e){return{id:e,data:Array.from({length:o}).map((function(e,n){return{x:i(n),y:a(n)}}))}}))},E=d,Z=function(e,n){void 0===e&&(e=!0),void 0===n&&(n=-1);var t=m;return e&&(t=u()(t)),n<1&&(n=1+Math.round(Math.random()*(m.length-1))),t.slice(0,n).map((function(e){return{label:e,value:Math.round(600*Math.random()),color:E()}}))},I=function(e){var n=[];return function(){var t;do{t=e.apply(void 0,arguments)}while(n.includes(t));return n.push(t),t}},W=function(){return u()(h)[0]},G=function(e){void 0===e&&(e=16);var n=["whisky","rhum","gin","vodka","cognac"],t=I(W),r=n.map((function(e){return{id:e,color:E(),data:[]}}));return o()(e).forEach((function(){var e=t();n.forEach((function(n){var t;null==(t=r.find((function(e){return e.id===n})))||t.data.push({color:E(),x:e,y:a()(0,60)})}))})),r},N=function(e,n){return e.map((function(e){return{id:e,color:E(),data:n.map((function(e){return{x:e,y:Math.round(300*Math.random())}}))}}))},O=function(e,n,t){void 0===t&&(t=.9);var r=function(e,n){var t=(0,s.a)(e,n),r=(0,c.i$)("%Y-%m-%d");return t.map((function(e){return{value:Math.round(400*Math.random()),day:r(e)}}))}(e,n),o=Math.round(r.length*(.4*t))+Math.round(Math.random()*(r.length*(.6*t)));return u()(r).slice(0,o)},z=function(e,n){var t=void 0===n?{}:n,r=t.size,o=void 0===r?12:r,i=t.min,l=void 0===i?0:i,u=t.max,s=void 0===u?200:u,c=t.withColors,d=void 0===c||c;return h.slice(0,o).map((function(n){var t={country:n};return e.forEach((function(e){t[e]=a()(l,s),!0===d&&(t[e+"Color"]=E())})),t}))},D=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],F=function e(n,t,r){var i;void 0===n&&(n="nivo"),void 0===r&&(r=D),(t=t||r.length)>r.length&&(t=r.length);var a={name:n,color:E()};return(null==(i=r)?void 0:i.length)>0?a.children=o()(t).map((function(n,t){var o,i=r[t];return e(i[0],null,null!=(o=i[1])?o:[])})):a.loc=Math.round(2e5*Math.random()),a},U=["chardonay","carmenere","syrah"],P=["fruity","bitter","heavy","strong","sunny"],R=function(e){var n=void 0===e?{}:e,t=n.randMin,r=void 0===t?20:t,o=n.randMax,i=void 0===o?120:o;return{data:P.map((function(e){var n={taste:e};return U.forEach((function(e){n[e]=a()(r,i)})),n})),keys:U}}},62443:function(e,n,t){"use strict";t.d(n,{p_:function(){return B},F6:function(){return k},lG:function(){return C},XB:function(){return M}});var r=t(27378),o=t(98383),i=t(44365),a=t(47425),l=t(58493),u=t(89193),s=t(24246),c=t(94942),d=t(26681),h=t(14503),f=t(770);function m(){return m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}var p=function(e){var n=e.layer,t=e.fillOpacity,i=e.borderWidth,a=e.getBorderColor,c=e.isInteractive,d=e.tooltip,h=(0,u.lL)(),f=h.showTooltipFromEvent,m=h.hideTooltip,p=(0,r.useCallback)((function(e){f((0,r.createElement)(d,{layer:n}),e,"left")}),[f,n]),v=(0,o.tf)(),g=v.animate,y=v.config,x=(0,o.NS)(n.path),b=(0,l.useSpring)({color:n.color,config:y,immediate:!g});return(0,s.jsx)(l.q.path,{d:x,fill:n.fill?n.fill:b.color,fillOpacity:t,stroke:a(n),strokeWidth:i,onMouseMove:c?p:void 0,onMouseEnter:c?p:void 0,onMouseLeave:c?m:void 0})},v=function(e){var n=e.layers,t=e.fillOpacity,r=e.borderWidth,o=e.getBorderColor,i=e.isInteractive,a=e.tooltip;return(0,s.jsx)("g",{children:n.map((function(e,n){return(0,s.jsx)(p,{layer:e,getBorderColor:o,borderWidth:r,fillOpacity:t,isInteractive:i,tooltip:a},n)}))})},g=function(e,n){var t=e.y2;return"center"===n?t=e.y1+(e.y2-e.y1)/2:"start"===n&&(t=e.y1),t},y=function(e){var n=e.data,t=e.dotComponent,o=e.position,i=e.getSize,a=e.getColor,l=e.getBorderWidth,u=e.getBorderColor;return(0,s.jsx)(s.Fragment,{children:n.map((function(e,n){return(0,r.createElement)(t,{key:n,datum:e,x:e.x,y:g(e,o),size:i(e),color:a(e),borderWidth:l(e),borderColor:u(e)})}))})},x=function(e){var n=e.slice,t=e.height,o=e.tooltip,i=(0,r.useState)(!1),a=i[0],l=i[1],c=(0,u.lL)(),d=c.showTooltipFromEvent,h=c.hideTooltip,f=(0,r.useCallback)((function(e){l(!0),d((0,r.createElement)(o,{slice:n}),e,"left")}),[l,d,o,n]),m=(0,r.useCallback)((function(){l(!1),h()}),[l,h]);return(0,s.jsxs)("g",{transform:"translate("+n.x+", 0)",children:[a&&(0,s.jsx)("line",{x1:0,x2:0,y1:0,y2:t,stroke:"#000",strokeOpacity:.35,strokeWidth:1}),(0,s.jsx)("rect",{x:-20,width:40,height:t,fill:"#000",fillOpacity:0,onMouseEnter:f,onMouseMove:f,onMouseLeave:m})]})},b=function(e){var n=e.slices,t=e.height,r=e.tooltip;return(0,s.jsx)("g",{children:n.map((function(e){return(0,s.jsx)(x,{slice:e,height:t,tooltip:r},e.index)}))})},C={label:"id",order:"none",offsetType:"wiggle",curve:"catmullRom",axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,colors:{scheme:"nivo"},fillOpacity:1,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableDots:!1,dotPosition:"center",dotComponent:function(e){var n=e.x,t=e.y,r=e.size,i=e.color,a=e.borderWidth,u=e.borderColor,c=(0,o.tf)(),d=c.animate,h=c.config,f=(0,l.useSpring)({x:n,y:t,radius:.5*r,color:i,config:h,immediate:!d});return(0,s.jsx)(l.q.circle,{cx:f.x,cy:f.y,r:f.radius,fill:f.color,strokeWidth:a,stroke:u})},dotSize:6,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{from:"color"},isInteractive:!0,tooltip:function(e){var n=e.layer;return(0,s.jsx)(u._5,{id:n.label,enableChip:!0,color:n.color})},enableStackTooltip:!0,stackTooltip:function(e){var n=e.slice,t=(0,r.useMemo)((function(){return n.stack.map((function(e){return[(0,s.jsx)(u.Af,{color:e.color},e.layerId),e.layerLabel,e.formattedValue]}))}),[n]);return(0,s.jsx)(u.zI,{rows:t})},legends:[],legendLabel:"id",role:"application"},M=m({},C,{layers:["grid","axes","layers","dots","slices","legends"],defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),j=["isInteractive","animate","motionConfig","theme","renderWrapper"],_=function(e){var n=e.data,t=e.keys,l=e.label,u=e.valueFormat,p=e.offsetType,g=e.order,x=e.curve,j=e.layers,_=void 0===j?M.layers:j,k=e.width,B=e.height,S=e.margin,w=e.axisTop,T=e.axisRight,L=e.axisBottom,A=void 0===L?M.axisBottom:L,E=e.axisLeft,Z=void 0===E?M.axisLeft:E,I=e.enableGridX,W=void 0===I?M.enableGridX:I,G=e.enableGridY,N=void 0===G?M.enableGridY:G,O=e.colors,z=e.fillOpacity,D=void 0===z?M.fillOpacity:z,F=e.borderWidth,U=void 0===F?M.borderWidth:F,P=e.borderColor,R=e.defs,H=void 0===R?M.defs:R,K=e.fill,Y=void 0===K?M.fill:K,V=e.enableDots,J=void 0===V?M.enableDots:V,X=e.dotPosition,Q=void 0===X?M.dotPosition:X,q=e.dotComponent,$=void 0===q?M.dotComponent:q,ee=e.dotSize,ne=e.dotColor,te=e.dotBorderWidth,re=e.dotBorderColor,oe=e.isInteractive,ie=void 0===oe?M.isInteractive:oe,ae=e.tooltip,le=void 0===ae?M.tooltip:ae,ue=e.enableStackTooltip,se=void 0===ue?M.enableStackTooltip:ue,ce=e.stackTooltip,de=void 0===ce?M.stackTooltip:ce,he=e.legends,fe=void 0===he?M.legends:he,me=e.role,pe=e.ariaLabel,ve=e.ariaLabelledBy,ge=e.ariaDescribedBy,ye=(0,o.Bs)(k,B,S),xe=ye.margin,be=ye.innerWidth,Ce=ye.innerHeight,Me=ye.outerWidth,je=ye.outerHeight,_e=function(e){var n=e.width,t=e.height,i=e.data,a=e.keys,l=e.label,u=void 0===l?C.label:l,s=e.valueFormat,p=e.offsetType,v=void 0===p?C.offsetType:p,g=e.order,y=void 0===g?C.order:g,x=e.curve,b=void 0===x?C.curve:x,M=e.colors,j=void 0===M?C.colors:M,_=e.borderColor,k=void 0===_?C.borderColor:_,B=e.dotSize,S=void 0===B?C.dotSize:B,w=e.dotColor,T=void 0===w?C.dotColor:w,L=e.dotBorderWidth,A=void 0===L?C.dotBorderWidth:L,E=e.dotBorderColor,Z=void 0===E?C.dotBorderColor:E,I=(0,o.d4)(b),W=(0,r.useMemo)((function(){return(0,c.Z)().x((function(e){return e.x})).y0((function(e){return e.y1})).y1((function(e){return e.y2})).curve(I)}),[I]),G=(0,r.useMemo)((function(){return(0,d.Z)().keys(a).offset((0,o.kI)(v)).order((0,o.WC)(y))}),[a,v,y]),N=(0,r.useMemo)((function(){var e=[],r=[],o=G(i).map((function(n){return n.map((function(t){return e.push(t[0]),r.push(t[1]),m({},t,{value:t.data[n.key]})}))})),a=Math.min.apply(Math,e),l=Math.max.apply(Math,r);return[o,(0,f.j1)({type:"point"},{all:Array.from({length:i.length},(function(e,n){return n})),min:0,max:i.length},n),(0,f._S)({type:"linear"},{all:[a,l],min:a,max:l},t,"y")]}),[G,i,n,t]),O=N[0],z=N[1],D=N[2],F=(0,o.Fg)(),U=(0,h.U)(j,"id"),P=(0,h.Bf)(k,F),R=(0,r.useMemo)((function(){return"function"==typeof S?S:function(){return S}}),[S]),H=(0,h.Bf)(T,F),K=(0,r.useMemo)((function(){return"function"==typeof A?A:function(){return A}}),[A]),Y=(0,h.Bf)(Z,F),V=(0,o.LR)(u),J=(0,o.O_)(s),X=(0,r.useMemo)((function(){return O.map((function(e,n){var t=e.map((function(e,t){return{layerId:a[n],layerLabel:"",index:t,color:"",x:z(t),value:e.value,formattedValue:J(e.value),y1:D(e[0]),y2:D(e[1])}})),r={id:a[n],path:W(t)},o=m({},r,{label:V(r),color:U(r)});return m({},o,{data:t.map((function(e){return e.layerLabel=o.label,e.color=o.color,e}))})}))}),[O,a,V,W,U,z,D,J]),Q=(0,r.useMemo)((function(){return Array.from({length:i.length},(function(e,n){var t=X.map((function(e){return e.data[n]})).sort((function(e,n){return e.y2-n.y2}));return{index:n,x:X[0].data[n].x,stack:t}}))}),[i.length,X]),q=(0,r.useMemo)((function(){return{xScale:z,yScale:D,layers:X,slices:Q}}),[z,D,X,Q]);return{xScale:z,yScale:D,layers:X,slices:Q,getBorderColor:P,getDotSize:R,getDotColor:H,getDotBorderWidth:K,getDotBorderColor:Y,layerContext:q}}({width:be,height:Ce,data:n,keys:t,label:l,valueFormat:u,offsetType:p,order:g,curve:x,colors:O,borderColor:P,dotSize:ee,dotColor:ne,dotBorderWidth:te,dotBorderColor:re}),ke=_e.xScale,Be=_e.yScale,Se=_e.layers,we=_e.slices,Te=_e.getBorderColor,Le=_e.getDotSize,Ae=_e.getDotColor,Ee=_e.getDotBorderWidth,Ze=_e.getDotBorderColor,Ie=_e.layerContext,We=(0,o.yU)(H,Se,Y),Ge={grid:null,axes:null,layers:null,dots:null,slices:null,legends:null};return _.includes("grid")&&(Ge.grid=(0,s.jsx)(i.rj,{width:be,height:Ce,xScale:W?ke:null,yScale:N?Be:null},"grid")),_.includes("axes")&&(Ge.axes=(0,s.jsx)(i.dk,{xScale:ke,yScale:Be,width:be,height:Ce,top:w,right:T,bottom:A,left:Z},"axes")),_.includes("layers")&&(Ge.layers=(0,s.jsx)(v,{layers:Se,fillOpacity:D,borderWidth:U,getBorderColor:Te,isInteractive:ie,tooltip:le},"layers")),_.includes("dots")&&J&&(Ge.dots=(0,s.jsx)(r.Fragment,{children:Se.map((function(e){return(0,s.jsx)(y,{id:e.id,color:e.color,data:e.data,dotComponent:$,position:Q,getSize:Le,getColor:Ae,getBorderWidth:Ee,getBorderColor:Ze},e.id)}))},"dots")),_.includes("slices")&&ie&&se&&(Ge.slices=(0,s.jsx)(b,{slices:we,height:Ce,tooltip:de},"slices")),_.includes("legends")&&(Ge.legends=(0,s.jsx)(r.Fragment,{children:fe.map((function(e,n){var t=Se.map((function(e){return{id:e.id,label:e.label,color:e.color,fill:e.fill}})).reverse();return(0,s.jsx)(a.$6,m({},e,{containerWidth:be,containerHeight:Ce,data:t}),n)}))},"legends")),(0,s.jsx)(o.tM,{width:Me,height:je,margin:xe,defs:We,role:me,ariaLabel:pe,ariaLabelledBy:ve,ariaDescribedBy:ge,children:_.map((function(e,n){var t;return"function"==typeof e?(0,s.jsx)(r.Fragment,{children:(0,r.createElement)(e,Ie)},n):null!=(t=null==Ge?void 0:Ge[e])?t:null}))})},k=function(e){var n=e.isInteractive,t=void 0===n?M.isInteractive:n,r=e.animate,i=void 0===r?M.animate:r,a=e.motionConfig,l=void 0===a?M.motionConfig:a,u=e.theme,c=e.renderWrapper,d=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,j);return(0,s.jsx)(o.W2,{animate:i,isInteractive:t,motionConfig:l,renderWrapper:c,theme:u,children:(0,s.jsx)(_,m({isInteractive:t},d))})},B=function(e){return(0,s.jsx)(o.d,{children:function(n){var t=n.width,r=n.height;return(0,s.jsx)(k,m({width:t,height:r},e))}})}},91573:function(e,n,t){var r=t(37561),o=t(74305);e.exports=function(e){return o(r(e))}},26194:function(e,n,t){var r=t(49819),o=t(50098);e.exports=function(e,n){return e&&r(e,n,o)}},76418:function(e){var n=Math.floor,t=Math.random;e.exports=function(e,r){return e+n(t()*(r-e+1))}},16326:function(e,n,t){var r=t(74305),o=t(58185);e.exports=function(e){return r(o(e))}},42231:function(e,n,t){var r=t(66070);e.exports=function(e,n){return r(n,(function(n){return e[n]}))}},74305:function(e,n,t){var r=t(76418);e.exports=function(e,n){var t=-1,o=e.length,i=o-1;for(n=void 0===n?o:n;++t<n;){var a=r(t,i),l=e[a];e[a]=e[t],e[t]=l}return e.length=n,e}},91311:function(e,n,t){var r=t(76418),o=t(57535),i=t(94919),a=parseFloat,l=Math.min,u=Math.random;e.exports=function(e,n,t){if(t&&"boolean"!=typeof t&&o(e,n,t)&&(n=t=void 0),void 0===t&&("boolean"==typeof n?(t=n,n=void 0):"boolean"==typeof e&&(t=e,e=void 0)),void 0===e&&void 0===n?(e=0,n=1):(e=i(e),void 0===n?(n=e,e=0):n=i(n)),e>n){var s=e;e=n,n=s}if(t||e%1||n%1){var c=u();return l(e+c*(n-e+a("1e-"+((c+"").length-1))),n)}return r(e,n)}},19193:function(e,n,t){var r=t(91573),o=t(16326),i=t(19785);e.exports=function(e){return(i(e)?r:o)(e)}},58185:function(e,n,t){var r=t(42231),o=t(50098);e.exports=function(e){return null==e?[]:r(e,o(e))}}}]);
//# sourceMappingURL=component---src-pages-guides-colors-tsx-47c05b44143304ca836a.js.map