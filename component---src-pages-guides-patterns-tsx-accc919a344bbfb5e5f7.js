(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[8883],{41584:function(e,n){"use strict";var t=Math.PI,r=2*t,o=1e-6,i=r-o;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function l(){return new a}a.prototype=l.prototype={constructor:a,moveTo:function(e,n){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,n){this._+="L"+(this._x1=+e)+","+(this._y1=+n)},quadraticCurveTo:function(e,n,t,r){this._+="Q"+ +e+","+ +n+","+(this._x1=+t)+","+(this._y1=+r)},bezierCurveTo:function(e,n,t,r,o,i){this._+="C"+ +e+","+ +n+","+ +t+","+ +r+","+(this._x1=+o)+","+(this._y1=+i)},arcTo:function(e,n,r,i,a){e=+e,n=+n,r=+r,i=+i,a=+a;var l=this._x1,u=this._y1,s=r-e,c=i-n,d=l-e,f=u-n,h=d*d+f*f;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=n);else if(h>o)if(Math.abs(f*s-c*d)>o&&a){var p=r-l,g=i-u,m=s*s+c*c,v=p*p+g*g,y=Math.sqrt(m),x=Math.sqrt(h),b=a*Math.tan((t-Math.acos((m+h-v)/(2*y*x)))/2),C=b/x,k=b/y;Math.abs(C-1)>o&&(this._+="L"+(e+C*d)+","+(n+C*f)),this._+="A"+a+","+a+",0,0,"+ +(f*p>d*g)+","+(this._x1=e+k*s)+","+(this._y1=n+k*c)}else this._+="L"+(this._x1=e)+","+(this._y1=n);else;},arc:function(e,n,a,l,u,s){e=+e,n=+n,s=!!s;var c=(a=+a)*Math.cos(l),d=a*Math.sin(l),f=e+c,h=n+d,p=1^s,g=s?l-u:u-l;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+f+","+h:(Math.abs(this._x1-f)>o||Math.abs(this._y1-h)>o)&&(this._+="L"+f+","+h),a&&(g<0&&(g=g%r+r),g>i?this._+="A"+a+","+a+",0,1,"+p+","+(e-c)+","+(n-d)+"A"+a+","+a+",0,1,"+p+","+(this._x1=f)+","+(this._y1=h):g>o&&(this._+="A"+a+","+a+",0,"+ +(g>=t)+","+p+","+(this._x1=e+a*Math.cos(u))+","+(this._y1=n+a*Math.sin(u))))},rect:function(e,n,t,r){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+n)+"h"+ +t+"v"+ +r+"h"+-t+"Z"},toString:function(){return this._}},n.Z=l},94942:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(41584),o=t(3583),i=t(30964),a=t(18091),l=t(92519);function u(){var e=l.x,n=null,t=(0,o.Z)(0),u=l.y,s=(0,o.Z)(!0),c=null,d=i.Z,f=null;function h(o){var i,a,l,h,p,g=o.length,m=!1,v=new Array(g),y=new Array(g);for(null==c&&(f=d(p=(0,r.Z)())),i=0;i<=g;++i){if(!(i<g&&s(h=o[i],i,o))===m)if(m=!m)a=i,f.areaStart(),f.lineStart();else{for(f.lineEnd(),f.lineStart(),l=i-1;l>=a;--l)f.point(v[l],y[l]);f.lineEnd(),f.areaEnd()}m&&(v[i]=+e(h,i,o),y[i]=+t(h,i,o),f.point(n?+n(h,i,o):v[i],u?+u(h,i,o):y[i]))}if(p)return f=null,p+""||null}function p(){return(0,a.Z)().defined(s).curve(d).context(c)}return h.x=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.Z)(+t),n=null,h):e},h.x0=function(n){return arguments.length?(e="function"==typeof n?n:(0,o.Z)(+n),h):e},h.x1=function(e){return arguments.length?(n=null==e?null:"function"==typeof e?e:(0,o.Z)(+e),h):n},h.y=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),u=null,h):t},h.y0=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),h):t},h.y1=function(e){return arguments.length?(u=null==e?null:"function"==typeof e?e:(0,o.Z)(+e),h):u},h.lineX0=h.lineY0=function(){return p().x(e).y(t)},h.lineY1=function(){return p().x(e).y(u)},h.lineX1=function(){return p().x(n).y(t)},h.defined=function(e){return arguments.length?(s="function"==typeof e?e:(0,o.Z)(!!e),h):s},h.curve=function(e){return arguments.length?(d=e,null!=c&&(f=d(c)),h):d},h.context=function(e){return arguments.length?(null==e?c=f=null:f=d(c=e),h):c},h}},3583:function(e,n,t){"use strict";function r(e){return function(){return e}}t.d(n,{Z:function(){return r}})},18091:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(41584),o=t(3583),i=t(30964),a=t(92519);function l(){var e=a.x,n=a.y,t=(0,o.Z)(!0),l=null,u=i.Z,s=null;function c(o){var i,a,c,d=o.length,f=!1;for(null==l&&(s=u(c=(0,r.Z)())),i=0;i<=d;++i)!(i<d&&t(a=o[i],i,o))===f&&((f=!f)?s.lineStart():s.lineEnd()),f&&s.point(+e(a,i,o),+n(a,i,o));if(c)return s=null,c+""||null}return c.x=function(n){return arguments.length?(e="function"==typeof n?n:(0,o.Z)(+n),c):e},c.y=function(e){return arguments.length?(n="function"==typeof e?e:(0,o.Z)(+e),c):n},c.defined=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(!!e),c):t},c.curve=function(e){return arguments.length?(u=e,null!=l&&(s=u(l)),c):u},c.context=function(e){return arguments.length?(null==e?l=s=null:s=u(l=e),c):l},c}},92519:function(e,n,t){"use strict";function r(e){return e[0]}function o(e){return e[1]}t.d(n,{x:function(){return r},y:function(){return o}})},18957:function(e,n,t){"use strict";t.d(n,{a:function(){return a}});var r=t(61904),o=t(15050),i=(0,r.Z)((function(e){e.setHours(0,0,0,0)}),(function(e,n){e.setDate(e.getDate()+n)}),(function(e,n){return(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*o.yB)/o.UD}),(function(e){return e.getDate()-1}));n.Z=i;var a=i.range},45395:function(e,n,t){"use strict";var r,o,i=t(91542),a=t(51302);function l(e,n){return n||(n=e.slice(0)),e.raw=n,e}n.Z=i.default.div.withConfig({displayName:"PageContent",componentId:"sc-5c9r0p-0"})(["margin:0 50px;position:relative;"," ",""],a.Z.tablet(r||(r=l(["\n        & {\n            margin: 0 30px;\n        }\n    "]))),a.Z.mobile(o||(o=l(["\n        & {\n            margin: 0 15px;\n        }\n    "]))))},80500:function(e,n,t){"use strict";t.d(n,{Xh:function(){return u},rm:function(){return s},Zb:function(){return c}});var r,o,i=t(91542),a=t(51302);function l(e,n){return n||(n=e.slice(0)),e.raw=n,e}var u=i.default.div.withConfig({displayName:"styled__FullWidthBanner",componentId:"sc-1aonzv1-0"})(["background:",";margin-bottom:40px;padding:20px;"],(function(e){return e.theme.colors.cardBackground})),s=i.default.div.withConfig({displayName:"styled__DescriptionBlock",componentId:"sc-1aonzv1-1"})(["max-width:800px;margin:0 auto 50px;"," ",""],a.Z.tablet(r||(r=l(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "]))),a.Z.mobile(o||(o=l(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "])))),c=i.default.div.withConfig({displayName:"styled__Card",componentId:"sc-1aonzv1-2"})(["background:",";box-shadow:",";"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.cardShadow}))},94930:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return te}});var r,o,i=t(27378),a=t(25414),l=t(81739),u=t(95546),s=t(45395),c=t(98383),d=t(91542),f=t(51302),h=t(16872),p=t(80500),g=t(24246),m=function(e){var n=e.title,t=e.expandedByDefault,r=void 0!==t&&t,o=e.children,a=(0,i.useState)(r),l=a[0],u=a[1],s=(0,i.useCallback)((function(){u((function(e){return!e}))}),[u]);return(0,g.jsxs)(v,{isExpanded:l,children:[(0,g.jsxs)(y,{className:"no-select",onClick:s,children:[(0,g.jsx)(x,{children:n}),l?(0,g.jsx)(h.y$z,{}):(0,g.jsx)(h.gwH,{})]}),l&&(0,g.jsx)("div",{className:"card_body",children:o})]})},v=(0,d.default)(p.Zb).withConfig({displayName:"CollapsibleCard__Wrapper",componentId:"sc-1jg0pc-0"})(["margin-bottom:",";svg{font-size:26px;}"],(function(e){return e.isExpanded?"30px":0})),y=d.default.div.withConfig({displayName:"CollapsibleCard__Header",componentId:"sc-1jg0pc-1"})(["height:52px;width:100%;position:relative;padding:0 24px;cursor:pointer;color:",";display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.borderLight})),x=d.default.h3.withConfig({displayName:"CollapsibleCard__Title",componentId:"sc-1jg0pc-2"})(["margin:0;color:",";"],(function(e){return e.theme.colors.text})),b=t(82222),C=t(80398);function k(e,n){return n||(n=e.slice(0)),e.raw=n,e}function j(e){var n=e.title,t=e.initialSettings,r=e.controls,o=e.generateCode,a=e.children,l=(0,i.useState)(t),u=l[0],s=l[1];return(0,g.jsx)(m,{title:n,expandedByDefault:!0,children:(0,g.jsxs)(M,{children:[(0,g.jsx)(_,{children:a(u)}),(0,g.jsx)(S,{children:(0,g.jsx)(b.e,{name:n,controls:r,settings:u,onChange:s})}),(0,g.jsx)(w,{children:(0,g.jsx)(C.y,{language:"jsx",code:o(u)})})]})})}var M=d.default.div.withConfig({displayName:"GuideDemoBlock__Container",componentId:"sc-akbb1d-0"})(["display:grid;grid-template-columns:4fr 6fr;grid-template-rows:4fr 6fr;max-height:600px;",""],f.Z.mobile(r||(r=k(["\n        & {\n            display: block;\n            max-height: none;\n        }\n    "])))),_=d.default.div.withConfig({displayName:"GuideDemoBlock__Preview",componentId:"sc-akbb1d-1"})(["display:flex;align-items:center;justify-content:center;background:",";",""],(function(e){return e.theme.colors.cardAltBackground}),f.Z.mobile(o||(o=k(["\n        & {\n            padding: 20px 0;\n            border-bottom: 1px solid ",";\n        }\n    "])),(function(e){return e.theme.colors.borderLight}))),w=d.default.div.withConfig({displayName:"GuideDemoBlock__Code",componentId:"sc-akbb1d-2"})(["grid-column-start:1;grid-row-start:2;overflow-x:hidden;overflow-y:auto;border-top:1px solid ",";"],(function(e){return e.theme.colors.borderLight})),S=d.default.div.withConfig({displayName:"GuideDemoBlock__Controls",componentId:"sc-akbb1d-3"})(["background:",";border-left:1px solid ",";grid-row-start:1;grid-row-end:3;grid-column-start:2;overflow-x:hidden;overflow-y:auto;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.borderLight})),B=c.W4.defaultProps,L=120,T="dots-pattern",D={size:B.size,padding:B.padding,stagger:B.stagger,background:B.background,color:B.color},I=[{name:"size",type:"number",help:"dots size.",defaultValue:B.size,control:{type:"range",unit:"px",min:1,max:24}},{name:"padding",type:"number",help:"padding between dots.",defaultValue:B.padding,control:{type:"range",unit:"px",min:0,max:36}},{name:"stagger",type:"boolean",help:"staggered dots.",defaultValue:B.stagger,control:{type:"switch"}},{name:"background",type:"string",help:"pattern background color.",defaultValue:B.background,control:{type:"colorPicker"}},{name:"color",type:"string",help:"dots color.",defaultValue:B.color,control:{type:"colorPicker"}}],W=function(e){return("\n// helper\nimport { patternDotsDef } from '@nivo/core'\npatternDotsDef('dots-pattern', "+JSON.stringify(e,null,"  ")+")\n// plain object\n"+JSON.stringify((0,c.Qr)(T,e),null,"    ")+"\n").trim()},A=function(){return(0,g.jsx)(j,{title:"Dots",controls:I,initialSettings:D,generateCode:W,children:function(e){return(0,g.jsxs)("svg",{width:L,height:L,children:[(0,g.jsx)(c.eP,{defs:[(0,c.Qr)(T,e)]}),(0,g.jsx)("rect",{width:L,height:L,fill:"url(#dots-pattern)"})]})}})},N="\nimport { patternDotsDef, patternSquaresDef } from '@nivo/core'\nimport { Stream } from '@nivo/stream'\n\nconst MyChart = () => (\n    <Stream\n        data={/*…*/}\n        keys={['react', 'vue', 'elm']}\n        // 1. defining patterns\n        defs={[\n            // using helpers (cannot be used with http rendering API)\n            // will use color from current element\n            patternDotsDef('dots', { color: 'inherit' }),\n            // will use background color from current element\n            patternSquaresDef('squares', { background: 'inherit' }),\n            // using plain object\n            { id: 'custom', type: 'patternSquares', size: 24 },\n        ]}\n        // 2. defining rules to apply those patterns\n        fill={[\n            // match using query object\n            // (can be used with http rendering API\n            { match: { id: 'react' }, id: 'dots' },\n            // match using function\n            // (cannot be used with http rendering API\n            { match: d => d.id === 'vue', id: 'squares' },\n            // match all, will only affect 'elm' because once\n            // a rule match, others are skipped\n            // (can be used with http rendering API\n            { match: '*', id: 'custom' },\n        ]}\n    />\n)\n".trim(),z=function(){return(0,g.jsx)(C.y,{code:N,language:"jsx"})},E=t(74186),Z=t(62443),P=t(46222),O=t(38681),G=function(){var e=(0,d.useTheme)();return(0,g.jsx)(p.Xh,{children:(0,g.jsxs)("div",{className:"guide__illustrations",children:[(0,g.jsx)("div",{className:"guide__illustrations__item",children:(0,g.jsx)(Z.p_,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:(0,O.aw)(["a","b","c"],{size:7}),indexBy:"country",keys:["a","b","c"],offsetType:"expand",axisLeft:null,axisBottom:null,enableGridX:!1,defs:[(0,c.l0)("example1.lines.1",{rotation:45,lineWidth:4,spacing:6,background:"transparent",color:"inherit"}),(0,c.l0)("example1.lines.2",{rotation:-45,lineWidth:1,spacing:3,background:"transparent",color:"inherit"}),(0,c.Qr)("example1.dots",{background:"transparent",color:"inherit",size:4,padding:0,stagger:!0})],fill:[{match:{id:"a"},id:"example1.lines.1"},{match:{id:"b"},id:"example1.dots"},{match:{id:"c"},id:"example1.lines.2"}],borderWidth:2,borderColor:"#333",isInteractive:!1,animate:!1,theme:e.nivo})}),(0,g.jsx)("div",{className:"guide__illustrations__item",children:(0,g.jsx)(E.jM,{margin:{top:15,right:-2,bottom:-2,left:-2},data:(0,O.aw)(["a","b","c"],{size:7}),indexBy:"country",keys:["a","b","c"],colors:{scheme:"spectral"},padding:.3,axisLeft:null,axisBottom:null,enableGridY:!1,enableLabel:!1,colorBy:"index",defs:[(0,c.l0)("example2.lines",{rotation:-45,lineWidth:4,spacing:6,background:"transparent",color:"inherit"}),(0,c.Qr)("example2.dots",{background:"transparent",color:"inherit",size:4,padding:0,stagger:!0}),(0,c.wU)("example2.squares",{background:"transparent",color:"inherit",stagger:!0,size:8,padding:0})],fill:[{match:function(e){return e.data.index%3==0},id:"example2.lines"},{match:function(e){return e.data.index%3==1},id:"example2.dots"},{match:function(e){return e.data.index%3==2},id:"example2.squares"}],borderWidth:2,borderColor:"inherit",isInteractive:!1,animate:!1,theme:e.nivo})}),(0,g.jsx)("div",{className:"guide__illustrations__item",children:(0,g.jsx)(P.R0,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:{country:"root",children:(0,O.aw)(["value"],{size:9})},identity:"country",leavesOnly:!0,colors:{scheme:"spectral"},colorBy:"id",borderWidth:4,outerPadding:10,innerPadding:4,nodeOpacity:1,borderColor:"inherit",isInteractive:!1,animate:!1,enableLabel:!1,enableParentLabel:!1,defs:[(0,c.l0)("example3.lines",{rotation:-45,lineWidth:4,spacing:6,background:"transparent",color:"inherit"})],fill:[{match:"*",id:"example3.lines"}],theme:e.nivo})}),(0,g.jsx)("div",{className:"guide__illustrations__legend",children:"patterns applied to various nivo components."})]})})},V=c.rr.defaultProps,q=120,F="lines-pattern",R={spacing:V.spacing,rotation:V.rotation,lineWidth:V.lineWidth,background:V.background,color:V.color},H=[{name:"spacing",type:"number",required:!1,help:"spacing between lines.",defaultValue:V.spacing,control:{type:"range",min:0,max:32}},{name:"rotation",type:"number",required:!1,help:"lines rotation.",defaultValue:V.rotation,control:{type:"angle",start:90,min:-360,max:360}},{name:"lineWidth",type:"number",required:!1,help:"lines thickness.",defaultValue:V.lineWidth,control:{type:"lineWidth",min:1}},{name:"background",type:"string",required:!1,help:"pattern background color.",defaultValue:V.background,control:{type:"colorPicker"}},{name:"color",type:"string",required:!1,help:"lines color.",defaultValue:V.color,control:{type:"colorPicker"}}],U=function(e){return("\n// helper\nimport { patternLinesDef } from '@nivo/core'\npatternLinesDef('lines-pattern', "+JSON.stringify(e,null,"  ")+")\n// plain object\n"+JSON.stringify((0,c.l0)(F,e),null,"    ")+"\n").trim()},J=function(){return(0,g.jsx)(j,{title:"Lines",controls:H,initialSettings:R,generateCode:U,children:function(e){return(0,g.jsxs)("svg",{width:q,height:q,children:[(0,g.jsx)(c.eP,{defs:[(0,c.l0)(F,e)]}),(0,g.jsx)("rect",{width:q,height:q,fill:"url(#lines-pattern)"})]})}})},K=c.Ho.defaultProps,Y=120,Q="squares-pattern",X={size:K.size,padding:K.padding,stagger:K.stagger,background:K.background,color:K.color},$=[{name:"size",type:"number",help:"squares size.",defaultValue:K.size,control:{type:"range",unit:"px",min:1,max:24}},{name:"padding",type:"number",help:"padding between squares.",defaultValue:K.padding,control:{type:"range",unit:"px",min:0,max:36}},{name:"stagger",type:"boolean",help:"staggered squares.",defaultValue:K.stagger,control:{type:"switch"}},{name:"background",type:"string",help:"pattern background color.",defaultValue:K.background,control:{type:"colorPicker"}},{name:"color",type:"string",help:"squares color.",defaultValue:K.color,control:{type:"colorPicker"}}],ee=function(e){return("\n// helper\nimport { patternSquaresDef } from '@nivo/core'\npatternSquaresDef('squares-pattern', "+JSON.stringify(e,null,"  ")+")\n// plain object\n"+JSON.stringify((0,c.wU)(Q,e),null,"    ")+"\n").trim()},ne=function(){return(0,g.jsx)(j,{title:"Squares",controls:$,initialSettings:X,generateCode:ee,children:function(e){return(0,g.jsxs)("svg",{width:Y,height:Y,children:[(0,g.jsx)(c.eP,{defs:[(0,c.wU)(Q,e)]}),(0,g.jsx)("rect",{width:Y,height:Y,fill:"url(#squares-pattern)"})]})}})},te=function(){return(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(u.p,{title:"Patterns Guide"}),(0,g.jsx)(s.Z,{children:(0,g.jsx)("div",{className:"guide__header",children:(0,g.jsx)("h1",{children:"Patterns"})})}),(0,g.jsxs)(p.rm,{children:[(0,g.jsx)("h2",{children:"Purpose"}),(0,g.jsxs)("p",{children:["Using patterns can be useful to ",(0,g.jsx)("strong",{children:"group similar items"}),", for example imagine you want to build a pie chart displaying various foods, you can use a color scale to assign a unique color to each one, then you can group vegetables/fruits/meats/… using a similar pattern for each group (while keeping color variation)."]}),(0,g.jsx)("h2",{children:"Using patterns in nivo"}),(0,g.jsxs)("p",{children:["Defining patterns in nivo is a ",(0,g.jsx)("strong",{children:"2 steps process"}),", first you'll have to declare available definitions (the same goes for"," ",(0,g.jsx)(a.Link,{to:"/guides/gradients",children:"gradients"}),") using dedicated helpers or providing plain objects.",(0,g.jsx)("br",{}),"Then you must define the rules to apply those definitions using the"," ",(0,g.jsx)("code",{children:"fill"})," property."]})]}),(0,g.jsx)(G,{}),(0,g.jsxs)(p.rm,{children:[(0,g.jsxs)("p",{children:[(0,g.jsx)("strong",{children:"Separating pattern definitions from application"})," allows us to reuse those in various places, like fills and borders, and while maintaining a direct mapping for a bar chart with 5 items can be simple enough, when you're dealing with a complex heatmap with tens of nodes it can quickly become cumbersome. Doing so also provides the ability to"," ",(0,g.jsx)("strong",{children:"use a pattern depending on chart element value"}),". Last but not least,"," ",(0,g.jsx)("strong",{children:"patterns colors can be inherited"})," from current node ones."]}),(0,g.jsx)("h2",{children:"Example"}),(0,g.jsx)(z,{}),(0,g.jsx)("h2",{children:"Available patterns"}),(0,g.jsx)(A,{}),(0,g.jsx)(J,{}),(0,g.jsx)(ne,{}),(0,g.jsx)("h2",{children:"Known limitations"}),(0,g.jsxs)("p",{children:["Please be aware that pattern usage has some limitations, it's"," ",(0,g.jsx)("strong",{children:"not supported for canvas"})," chart implementations for now, and tooltips involving colored chips will use plain element color."]})]})]})}},38681:function(e,n,t){"use strict";t.d(n,{j2:function(){return m},wQ:function(){return v},aw:function(){return P},x$:function(){return Z},ak:function(){return z},UE:function(){return G},$j:function(){return y},BO:function(){return b},Tz:function(){return W},O$:function(){return M},B7:function(){return E},gq:function(){return B},zn:function(){return F},Ls:function(){return D},FQ:function(){return L},vQ:function(){return g}});var r=t(4215),o=t.n(r),i=t(91311),a=t.n(i),l=t(19193),u=t.n(l),s=t(18957),c=t(6164),d=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},f=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],h=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],p=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],g=Object.freeze({__proto__:null,countryCodes:f,names:h,programmingLanguages:p}),m=function(e,n,t){var r=void 0===t?{}:t,i=r.title,l=r.subtitle,u=r.rangeCount,s=void 0===u?5:u,c=r.measureCount,d=void 0===c?1:c,f=r.markerCount,h=void 0===f?1:f,p=r.float,g=void 0!==p&&p;return{id:e,title:i,subtitle:l,ranges:o()(s-1).reduce((function(e){var t=n-e[0];return[a()(t,g)].concat(e)}),[n]),measures:o()(d).reduce((function(e){return 0===e.length?[a()(n,g)]:[a()(e[0],g)].concat(e)}),[]),markers:o()(h).map((function(){return.6*n+a()(.4*n)}))}},v=function(e){var n=void 0===e?{}:e,t=n.keys,r=void 0===t?h:t,i=n.size,l=void 0===i?7:i,u=n.minValue,s=void 0===u?0:u,c=n.maxValue,d=void 0===c?2e3:c,f=Math.min(r.length,l),p=r.slice(0,f);return{matrix:o()(f).map((function(){return o()(f).map((function(){return Math.random()<.66?a()(s,d/4):a()(s,d)}))})),keys:p}},y=function(e){var n=void 0===e?{}:e,t=n.rootSize,r=void 0===t?32:t,o=n.midSize,i=void 0===o?24:o,l=n.leafSize,u=void 0===l?12:l,s=n.minMidNodes,c=void 0===s?5:s,d=n.maxMidNodes,f=void 0===d?11:d,h=n.minLeaves,p=void 0===h?3:h,g=n.maxLeaves,m=void 0===g?9:g,v={id:"Node 0",height:2,size:r,color:"rgb(244, 117, 96)"},y=Array.from({length:a()(c,f)},(function(e,n){return{id:"Node "+(n+1),height:1,size:i,color:"rgb(97, 205, 187)"}})),x=[],b=[];return y.forEach((function(e){x.push({source:"Node 0",target:e.id,distance:80}),y.forEach((function(n){Math.random()<.04&&x.push({source:e.id,target:n.id,distance:80})})),Array.from({length:a()(p,m)},(function(n,t){return b.push({id:e.id+"."+t,height:0,size:u,color:"rgb(232, 193, 160)"}),x.push({source:e.id,target:e.id+"."+t,distance:50}),null}))})),y.push(v),{nodes:y=y.concat(b),links:x}};function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}var b=function(e){var n=void 0===e?{}:e,t=n.size,r=void 0===t?26:t,i=n.keys,l=void 0===i?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:i;return o()(r).map((function(){return l.reduce((function(e,n){var t,r;return void 0!==n.random?r=a().apply(void 0,n.random):void 0!==n.shuffle&&(r=u()(n.shuffle)[0]),x({},e,((t={})[n.key]=r,t))}),{})}))},C=h.map((function(e){return{id:e}})),k=function e(n,t,r){var o=t.filter((function(e){return e.source===n})).map((function(e){var t=e.target;if(t===n)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+n+" —> "+n);if(null!=r&&r.includes(t))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+t);return t}));return o.reduce((function(o,i){return o.concat(e(i,t,r?[].concat(r,[i]):[n,i]))}),o)},j=function(e){return e.reduce((function(n,t){return n[t.source]||(n[t.source]=k(t.source,e)),n}),{})},M=function(e){var n=void 0===e?{}:e,t=n.nodeCount,r=n.maxIterations,i=void 0===r?3:r,l=C.slice(0,t).map((function(e){return Object.assign({},e,{nodeColor:d()})})),s=[];return u()(l).forEach((function(e){var n=e.id;o()(a()(1,i)).forEach((function(){var e=j(s),t=u()(l.filter((function(e){return e.id!==n})).map((function(e){return e.id})))[0];e[t]&&e[t].includes(n)||e[n]&&e[n].includes(t)||s.push({source:n,target:t,value:a()(5,200)})}))})),{nodes:l,links:s}},_=function(){return a()(0,500)},w=function(){return a()(4,20)},S=function(){return a()(3,17)},B=function(e,n){var t=n.min,r=void 0===t?60:t,i=n.max,l=void 0===i?100:i,u=n.categoryCount,s=void 0===u?0:u;return{groups:e,data:e.reduce((function(e,n,t){return[].concat(e,o()(a()(r,l)).map((function(){return _()})).map((function(e,r){var i={id:t+"."+r,group:n,price:e,volume:w()};return s>0&&(i.categories=o()(s).map(S)),i})))}),[])}},L=function(e){return{groups:e.groups,data:e.data.map((function(n){var t=x({},n,{group:u()(e.groups)[0],price:_(),volume:w()});return void 0!==n.categories&&(t.categories=o()(3).map(S)),t}))}},T=function(e){return"values"in e?function(n){return e.values[n]}:function(){var n=e.min+Math.random()*(e.max-e.min);return e.round&&(n=Math.round(n)),n}},D=function(e){var n=e.serieIds,t=e.x,r=e.y,o="length"in t?t.length:t.values.length,i=T(t),a=T(r);return n.map((function(e){return{id:e,data:Array.from({length:o}).map((function(e,n){return{x:i(n),y:a(n)}}))}}))},I=d,W=function(e,n){void 0===e&&(e=!0),void 0===n&&(n=-1);var t=p;return e&&(t=u()(t)),n<1&&(n=1+Math.round(Math.random()*(p.length-1))),t.slice(0,n).map((function(e){return{label:e,value:Math.round(600*Math.random()),color:I()}}))},A=function(e){var n=[];return function(){var t;do{t=e.apply(void 0,arguments)}while(n.includes(t));return n.push(t),t}},N=function(){return u()(f)[0]},z=function(e){void 0===e&&(e=16);var n=["whisky","rhum","gin","vodka","cognac"],t=A(N),r=n.map((function(e){return{id:e,color:I(),data:[]}}));return o()(e).forEach((function(){var e=t();n.forEach((function(n){var t;null==(t=r.find((function(e){return e.id===n})))||t.data.push({color:I(),x:e,y:a()(0,60)})}))})),r},E=function(e,n){return e.map((function(e){return{id:e,color:I(),data:n.map((function(e){return{x:e,y:Math.round(300*Math.random())}}))}}))},Z=function(e,n,t){void 0===t&&(t=.9);var r=function(e,n){var t=(0,s.a)(e,n),r=(0,c.i$)("%Y-%m-%d");return t.map((function(e){return{value:Math.round(400*Math.random()),day:r(e)}}))}(e,n),o=Math.round(r.length*(.4*t))+Math.round(Math.random()*(r.length*(.6*t)));return u()(r).slice(0,o)},P=function(e,n){var t=void 0===n?{}:n,r=t.size,o=void 0===r?12:r,i=t.min,l=void 0===i?0:i,u=t.max,s=void 0===u?200:u,c=t.withColors,d=void 0===c||c;return f.slice(0,o).map((function(n){var t={country:n};return e.forEach((function(e){t[e]=a()(l,s),!0===d&&(t[e+"Color"]=I())})),t}))},O=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],G=function e(n,t,r){var i;void 0===n&&(n="nivo"),void 0===r&&(r=O),(t=t||r.length)>r.length&&(t=r.length);var a={name:n,color:I()};return(null==(i=r)?void 0:i.length)>0?a.children=o()(t).map((function(n,t){var o,i=r[t];return e(i[0],null,null!=(o=i[1])?o:[])})):a.loc=Math.round(2e5*Math.random()),a},V=["chardonay","carmenere","syrah"],q=["fruity","bitter","heavy","strong","sunny"],F=function(e){var n=void 0===e?{}:e,t=n.randMin,r=void 0===t?20:t,o=n.randMax,i=void 0===o?120:o;return{data:q.map((function(e){var n={taste:e};return V.forEach((function(e){n[e]=a()(r,i)})),n})),keys:V}}},62443:function(e,n,t){"use strict";t.d(n,{p_:function(){return w},F6:function(){return _},lG:function(){return C},XB:function(){return k}});var r=t(27378),o=t(98383),i=t(44365),a=t(47425),l=t(58493),u=t(89193),s=t(24246),c=t(94942),d=t(26681),f=t(14503),h=t(770);function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}var g=function(e){var n=e.layer,t=e.fillOpacity,i=e.borderWidth,a=e.getBorderColor,c=e.isInteractive,d=e.tooltip,f=(0,u.lL)(),h=f.showTooltipFromEvent,p=f.hideTooltip,g=(0,r.useCallback)((function(e){h((0,r.createElement)(d,{layer:n}),e,"left")}),[h,n]),m=(0,o.tf)(),v=m.animate,y=m.config,x=(0,o.NS)(n.path),b=(0,l.useSpring)({color:n.color,config:y,immediate:!v});return(0,s.jsx)(l.q.path,{d:x,fill:n.fill?n.fill:b.color,fillOpacity:t,stroke:a(n),strokeWidth:i,onMouseMove:c?g:void 0,onMouseEnter:c?g:void 0,onMouseLeave:c?p:void 0})},m=function(e){var n=e.layers,t=e.fillOpacity,r=e.borderWidth,o=e.getBorderColor,i=e.isInteractive,a=e.tooltip;return(0,s.jsx)("g",{children:n.map((function(e,n){return(0,s.jsx)(g,{layer:e,getBorderColor:o,borderWidth:r,fillOpacity:t,isInteractive:i,tooltip:a},n)}))})},v=function(e,n){var t=e.y2;return"center"===n?t=e.y1+(e.y2-e.y1)/2:"start"===n&&(t=e.y1),t},y=function(e){var n=e.data,t=e.dotComponent,o=e.position,i=e.getSize,a=e.getColor,l=e.getBorderWidth,u=e.getBorderColor;return(0,s.jsx)(s.Fragment,{children:n.map((function(e,n){return(0,r.createElement)(t,{key:n,datum:e,x:e.x,y:v(e,o),size:i(e),color:a(e),borderWidth:l(e),borderColor:u(e)})}))})},x=function(e){var n=e.slice,t=e.height,o=e.tooltip,i=(0,r.useState)(!1),a=i[0],l=i[1],c=(0,u.lL)(),d=c.showTooltipFromEvent,f=c.hideTooltip,h=(0,r.useCallback)((function(e){l(!0),d((0,r.createElement)(o,{slice:n}),e,"left")}),[l,d,o,n]),p=(0,r.useCallback)((function(){l(!1),f()}),[l,f]);return(0,s.jsxs)("g",{transform:"translate("+n.x+", 0)",children:[a&&(0,s.jsx)("line",{x1:0,x2:0,y1:0,y2:t,stroke:"#000",strokeOpacity:.35,strokeWidth:1}),(0,s.jsx)("rect",{x:-20,width:40,height:t,fill:"#000",fillOpacity:0,onMouseEnter:h,onMouseMove:h,onMouseLeave:p})]})},b=function(e){var n=e.slices,t=e.height,r=e.tooltip;return(0,s.jsx)("g",{children:n.map((function(e){return(0,s.jsx)(x,{slice:e,height:t,tooltip:r},e.index)}))})},C={label:"id",order:"none",offsetType:"wiggle",curve:"catmullRom",axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,colors:{scheme:"nivo"},fillOpacity:1,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableDots:!1,dotPosition:"center",dotComponent:function(e){var n=e.x,t=e.y,r=e.size,i=e.color,a=e.borderWidth,u=e.borderColor,c=(0,o.tf)(),d=c.animate,f=c.config,h=(0,l.useSpring)({x:n,y:t,radius:.5*r,color:i,config:f,immediate:!d});return(0,s.jsx)(l.q.circle,{cx:h.x,cy:h.y,r:h.radius,fill:h.color,strokeWidth:a,stroke:u})},dotSize:6,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{from:"color"},isInteractive:!0,tooltip:function(e){var n=e.layer;return(0,s.jsx)(u._5,{id:n.label,enableChip:!0,color:n.color})},enableStackTooltip:!0,stackTooltip:function(e){var n=e.slice,t=(0,r.useMemo)((function(){return n.stack.map((function(e){return[(0,s.jsx)(u.Af,{color:e.color},e.layerId),e.layerLabel,e.formattedValue]}))}),[n]);return(0,s.jsx)(u.zI,{rows:t})},legends:[],legendLabel:"id",role:"application"},k=p({},C,{layers:["grid","axes","layers","dots","slices","legends"],defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),j=["isInteractive","animate","motionConfig","theme","renderWrapper"],M=function(e){var n=e.data,t=e.keys,l=e.label,u=e.valueFormat,g=e.offsetType,v=e.order,x=e.curve,j=e.layers,M=void 0===j?k.layers:j,_=e.width,w=e.height,S=e.margin,B=e.axisTop,L=e.axisRight,T=e.axisBottom,D=void 0===T?k.axisBottom:T,I=e.axisLeft,W=void 0===I?k.axisLeft:I,A=e.enableGridX,N=void 0===A?k.enableGridX:A,z=e.enableGridY,E=void 0===z?k.enableGridY:z,Z=e.colors,P=e.fillOpacity,O=void 0===P?k.fillOpacity:P,G=e.borderWidth,V=void 0===G?k.borderWidth:G,q=e.borderColor,F=e.defs,R=void 0===F?k.defs:F,H=e.fill,U=void 0===H?k.fill:H,J=e.enableDots,K=void 0===J?k.enableDots:J,Y=e.dotPosition,Q=void 0===Y?k.dotPosition:Y,X=e.dotComponent,$=void 0===X?k.dotComponent:X,ee=e.dotSize,ne=e.dotColor,te=e.dotBorderWidth,re=e.dotBorderColor,oe=e.isInteractive,ie=void 0===oe?k.isInteractive:oe,ae=e.tooltip,le=void 0===ae?k.tooltip:ae,ue=e.enableStackTooltip,se=void 0===ue?k.enableStackTooltip:ue,ce=e.stackTooltip,de=void 0===ce?k.stackTooltip:ce,fe=e.legends,he=void 0===fe?k.legends:fe,pe=e.role,ge=e.ariaLabel,me=e.ariaLabelledBy,ve=e.ariaDescribedBy,ye=(0,o.Bs)(_,w,S),xe=ye.margin,be=ye.innerWidth,Ce=ye.innerHeight,ke=ye.outerWidth,je=ye.outerHeight,Me=function(e){var n=e.width,t=e.height,i=e.data,a=e.keys,l=e.label,u=void 0===l?C.label:l,s=e.valueFormat,g=e.offsetType,m=void 0===g?C.offsetType:g,v=e.order,y=void 0===v?C.order:v,x=e.curve,b=void 0===x?C.curve:x,k=e.colors,j=void 0===k?C.colors:k,M=e.borderColor,_=void 0===M?C.borderColor:M,w=e.dotSize,S=void 0===w?C.dotSize:w,B=e.dotColor,L=void 0===B?C.dotColor:B,T=e.dotBorderWidth,D=void 0===T?C.dotBorderWidth:T,I=e.dotBorderColor,W=void 0===I?C.dotBorderColor:I,A=(0,o.d4)(b),N=(0,r.useMemo)((function(){return(0,c.Z)().x((function(e){return e.x})).y0((function(e){return e.y1})).y1((function(e){return e.y2})).curve(A)}),[A]),z=(0,r.useMemo)((function(){return(0,d.Z)().keys(a).offset((0,o.kI)(m)).order((0,o.WC)(y))}),[a,m,y]),E=(0,r.useMemo)((function(){var e=[],r=[],o=z(i).map((function(n){return n.map((function(t){return e.push(t[0]),r.push(t[1]),p({},t,{value:t.data[n.key]})}))})),a=Math.min.apply(Math,e),l=Math.max.apply(Math,r);return[o,(0,h.j1)({type:"point"},{all:Array.from({length:i.length},(function(e,n){return n})),min:0,max:i.length},n),(0,h._S)({type:"linear"},{all:[a,l],min:a,max:l},t,"y")]}),[z,i,n,t]),Z=E[0],P=E[1],O=E[2],G=(0,o.Fg)(),V=(0,f.U)(j,"id"),q=(0,f.Bf)(_,G),F=(0,r.useMemo)((function(){return"function"==typeof S?S:function(){return S}}),[S]),R=(0,f.Bf)(L,G),H=(0,r.useMemo)((function(){return"function"==typeof D?D:function(){return D}}),[D]),U=(0,f.Bf)(W,G),J=(0,o.LR)(u),K=(0,o.O_)(s),Y=(0,r.useMemo)((function(){return Z.map((function(e,n){var t=e.map((function(e,t){return{layerId:a[n],layerLabel:"",index:t,color:"",x:P(t),value:e.value,formattedValue:K(e.value),y1:O(e[0]),y2:O(e[1])}})),r={id:a[n],path:N(t)},o=p({},r,{label:J(r),color:V(r)});return p({},o,{data:t.map((function(e){return e.layerLabel=o.label,e.color=o.color,e}))})}))}),[Z,a,J,N,V,P,O,K]),Q=(0,r.useMemo)((function(){return Array.from({length:i.length},(function(e,n){var t=Y.map((function(e){return e.data[n]})).sort((function(e,n){return e.y2-n.y2}));return{index:n,x:Y[0].data[n].x,stack:t}}))}),[i.length,Y]),X=(0,r.useMemo)((function(){return{xScale:P,yScale:O,layers:Y,slices:Q}}),[P,O,Y,Q]);return{xScale:P,yScale:O,layers:Y,slices:Q,getBorderColor:q,getDotSize:F,getDotColor:R,getDotBorderWidth:H,getDotBorderColor:U,layerContext:X}}({width:be,height:Ce,data:n,keys:t,label:l,valueFormat:u,offsetType:g,order:v,curve:x,colors:Z,borderColor:q,dotSize:ee,dotColor:ne,dotBorderWidth:te,dotBorderColor:re}),_e=Me.xScale,we=Me.yScale,Se=Me.layers,Be=Me.slices,Le=Me.getBorderColor,Te=Me.getDotSize,De=Me.getDotColor,Ie=Me.getDotBorderWidth,We=Me.getDotBorderColor,Ae=Me.layerContext,Ne=(0,o.yU)(R,Se,U),ze={grid:null,axes:null,layers:null,dots:null,slices:null,legends:null};return M.includes("grid")&&(ze.grid=(0,s.jsx)(i.rj,{width:be,height:Ce,xScale:N?_e:null,yScale:E?we:null},"grid")),M.includes("axes")&&(ze.axes=(0,s.jsx)(i.dk,{xScale:_e,yScale:we,width:be,height:Ce,top:B,right:L,bottom:D,left:W},"axes")),M.includes("layers")&&(ze.layers=(0,s.jsx)(m,{layers:Se,fillOpacity:O,borderWidth:V,getBorderColor:Le,isInteractive:ie,tooltip:le},"layers")),M.includes("dots")&&K&&(ze.dots=(0,s.jsx)(r.Fragment,{children:Se.map((function(e){return(0,s.jsx)(y,{id:e.id,color:e.color,data:e.data,dotComponent:$,position:Q,getSize:Te,getColor:De,getBorderWidth:Ie,getBorderColor:We},e.id)}))},"dots")),M.includes("slices")&&ie&&se&&(ze.slices=(0,s.jsx)(b,{slices:Be,height:Ce,tooltip:de},"slices")),M.includes("legends")&&(ze.legends=(0,s.jsx)(r.Fragment,{children:he.map((function(e,n){var t=Se.map((function(e){return{id:e.id,label:e.label,color:e.color,fill:e.fill}})).reverse();return(0,s.jsx)(a.$6,p({},e,{containerWidth:be,containerHeight:Ce,data:t}),n)}))},"legends")),(0,s.jsx)(o.tM,{width:ke,height:je,margin:xe,defs:Ne,role:pe,ariaLabel:ge,ariaLabelledBy:me,ariaDescribedBy:ve,children:M.map((function(e,n){var t;return"function"==typeof e?(0,s.jsx)(r.Fragment,{children:(0,r.createElement)(e,Ae)},n):null!=(t=null==ze?void 0:ze[e])?t:null}))})},_=function(e){var n=e.isInteractive,t=void 0===n?k.isInteractive:n,r=e.animate,i=void 0===r?k.animate:r,a=e.motionConfig,l=void 0===a?k.motionConfig:a,u=e.theme,c=e.renderWrapper,d=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,j);return(0,s.jsx)(o.W2,{animate:i,isInteractive:t,motionConfig:l,renderWrapper:c,theme:u,children:(0,s.jsx)(M,p({isInteractive:t},d))})},w=function(e){return(0,s.jsx)(o.d,{children:function(n){var t=n.width,r=n.height;return(0,s.jsx)(_,p({width:t,height:r},e))}})}},91573:function(e,n,t){var r=t(37561),o=t(74305);e.exports=function(e){return o(r(e))}},26194:function(e,n,t){var r=t(49819),o=t(50098);e.exports=function(e,n){return e&&r(e,n,o)}},76418:function(e){var n=Math.floor,t=Math.random;e.exports=function(e,r){return e+n(t()*(r-e+1))}},16326:function(e,n,t){var r=t(74305),o=t(58185);e.exports=function(e){return r(o(e))}},42231:function(e,n,t){var r=t(66070);e.exports=function(e,n){return r(n,(function(n){return e[n]}))}},74305:function(e,n,t){var r=t(76418);e.exports=function(e,n){var t=-1,o=e.length,i=o-1;for(n=void 0===n?o:n;++t<n;){var a=r(t,i),l=e[a];e[a]=e[t],e[t]=l}return e.length=n,e}},91311:function(e,n,t){var r=t(76418),o=t(57535),i=t(94919),a=parseFloat,l=Math.min,u=Math.random;e.exports=function(e,n,t){if(t&&"boolean"!=typeof t&&o(e,n,t)&&(n=t=void 0),void 0===t&&("boolean"==typeof n?(t=n,n=void 0):"boolean"==typeof e&&(t=e,e=void 0)),void 0===e&&void 0===n?(e=0,n=1):(e=i(e),void 0===n?(n=e,e=0):n=i(n)),e>n){var s=e;e=n,n=s}if(t||e%1||n%1){var c=u();return l(e+c*(n-e+a("1e-"+((c+"").length-1))),n)}return r(e,n)}},19193:function(e,n,t){var r=t(91573),o=t(16326),i=t(19785);e.exports=function(e){return(i(e)?r:o)(e)}},58185:function(e,n,t){var r=t(42231),o=t(50098);e.exports=function(e){return null==e?[]:r(e,o(e))}}}]);
//# sourceMappingURL=component---src-pages-guides-patterns-tsx-accc919a344bbfb5e5f7.js.map