"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[4192],{27570:function(e,r,t){t.d(r,{oe:function(){return I},mj:function(){return w},XB:function(){return x}});var o=t(27378),n=t(98383),a=t(94942),i=t(1520),s=t(30964),l=t(18091),p=t(9841),u=t(14503),d=t(54358),f=t(89193),c=t(24246),h=t(58493);function v(){return v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},v.apply(this,arguments)}var x={layers:["separators","parts","labels","annotations"],direction:"vertical",interpolation:"smooth",spacing:0,shapeBlending:.66,colors:{scheme:"nivo"},fillOpacity:1,borderWidth:6,borderColor:{from:"color"},borderOpacity:.66,enableLabel:!0,labelColor:{theme:"background"},enableBeforeSeparators:!0,beforeSeparatorLength:0,beforeSeparatorOffset:0,enableAfterSeparators:!0,afterSeparatorLength:0,afterSeparatorOffset:0,annotations:[],isInteractive:!0,currentPartSizeExtension:0,role:"img",animate:n.FJ.defaultProps.animate,motionConfig:n.FJ.defaultProps.config},y=function(e){var r=e.part;return(0,c.jsx)(f._5,{id:r.data.label,value:r.formattedValue,color:r.color,enableChip:!0})},b=function(e){var r,t,d=e.data,c=e.width,h=e.height,b=e.direction,g=void 0===b?x.direction:b,m=e.interpolation,S=void 0===m?x.interpolation:m,P=e.spacing,C=void 0===P?x.spacing:P,M=e.shapeBlending,O=void 0===M?x.shapeBlending:M,j=e.valueFormat,L=e.colors,I=void 0===L?x.colors:L,w=e.fillOpacity,B=void 0===w?x.fillOpacity:w,E=e.borderWidth,W=void 0===E?x.borderWidth:E,k=e.borderColor,F=void 0===k?x.borderColor:k,G=e.borderOpacity,A=void 0===G?x.borderOpacity:G,Z=e.labelColor,z=void 0===Z?x.labelColor:Z,q=e.enableBeforeSeparators,T=void 0===q?x.enableBeforeSeparators:q,_=e.beforeSeparatorLength,D=void 0===_?x.beforeSeparatorLength:_,V=e.beforeSeparatorOffset,H=void 0===V?x.beforeSeparatorOffset:V,J=e.enableAfterSeparators,N=void 0===J?x.enableAfterSeparators:J,U=e.afterSeparatorLength,X=void 0===U?x.afterSeparatorLength:U,K=e.afterSeparatorOffset,Q=void 0===K?x.afterSeparatorOffset:K,R=e.isInteractive,Y=void 0===R?x.isInteractive:R,$=e.currentPartSizeExtension,ee=void 0===$?x.currentPartSizeExtension:$,re=e.currentBorderWidth,te=e.onMouseEnter,oe=e.onMouseMove,ne=e.onMouseLeave,ae=e.onClick,ie=e.tooltip,se=(0,n.Fg)(),le=(0,u.U)(I,"id"),pe=(0,u.Bf)(F,se),ue=(0,u.Bf)(z,se),de=(0,n.O_)(j),fe=(0,o.useMemo)((function(){return function(e,r){var t=(0,a.Z)();return"vertical"===r?t.curve("smooth"===e?i.ZP:s.Z).x0((function(e){return e.x0})).x1((function(e){return e.x1})).y((function(e){return e.y})):t.curve("smooth"===e?i.ZP:s.Z).y0((function(e){return e.y0})).y1((function(e){return e.y1})).x((function(e){return e.x})),[t,(0,l.Z)().defined((function(e){return null!==e})).x((function(e){return e.x})).y((function(e){return e.y})).curve("smooth"===e?i.ZP:s.Z)]}(S,g)}),[S,g]),ce=fe[0],he=fe[1],ve=T?D+H:0,xe=N?X+Q:0;"vertical"===g?(r=c-ve-xe,t=h):(r=c,t=h-ve-xe);var ye=(0,o.useMemo)((function(){return function(e){var r,t,o=e.data,n=e.direction,a=e.width,i=e.height,s=e.spacing;"vertical"===n?(r=i,t=a):(r=a,t=i);var l=(r-s*(o.length-1))/o.length,u=function(e){return s*e+l*e};u.bandwidth=l;var d=o.map((function(e){return e.value}));return[u,(0,p.Z)().domain([0,Math.max.apply(Math,d)]).range([0,t])]}({data:d,direction:g,width:r,height:t,spacing:C})}),[d,g,r,t,C]),be=ye[0],ge=ye[1],me=(0,o.useState)(null),Se=me[0],Pe=me[1],Ce=(0,o.useMemo)((function(){var e=d.map((function(e,o){var n,a,i,s,l=e.id===Se;"vertical"===g?(n=ge(e.value),a=be.bandwidth,s=ve+.5*(r-n),i=be(o)):(n=be.bandwidth,a=ge(e.value),s=be(o),i=ve+.5*(t-a));var p=s+n,u=s+.5*n,d=i+a,f=i+.5*a,c={data:e,width:n,height:a,color:le(e),fillOpacity:B,borderWidth:l&&void 0!==re?re:W,borderOpacity:A,formattedValue:de(e.value),isCurrent:l,x:u,x0:s,x1:p,y:f,y0:i,y1:d,borderColor:"",labelColor:"",points:[],areaPoints:[],borderPoints:[]};return c.borderColor=pe(c),c.labelColor=ue(c),c})),o=O/2;return e.forEach((function(r,t){var n=e[t+1];if("vertical"===g){r.points.push({x:r.x0,y:r.y0}),r.points.push({x:r.x1,y:r.y0}),n?(r.points.push({x:n.x1,y:r.y1}),r.points.push({x:n.x0,y:r.y1})):(r.points.push({x:r.points[1].x,y:r.y1}),r.points.push({x:r.points[0].x,y:r.y1})),r.isCurrent&&(r.points[0].x-=ee,r.points[1].x+=ee,r.points[2].x+=ee,r.points[3].x-=ee),r.areaPoints=[{x:0,x0:r.points[0].x,x1:r.points[1].x,y:r.y0,y0:0,y1:0}],r.areaPoints.push(v({},r.areaPoints[0],{y:r.y0+r.height*o}));var a={x:0,x0:r.points[3].x,x1:r.points[2].x,y:r.y1,y0:0,y1:0};r.areaPoints.push(v({},a,{y:r.y1-r.height*o})),r.areaPoints.push(a),[0,1,2,3].map((function(e){r.borderPoints.push({x:r.areaPoints[e].x0,y:r.areaPoints[e].y})})),r.borderPoints.push(null),[3,2,1,0].map((function(e){r.borderPoints.push({x:r.areaPoints[e].x1,y:r.areaPoints[e].y})}))}else{r.points.push({x:r.x0,y:r.y0}),n?(r.points.push({x:r.x1,y:n.y0}),r.points.push({x:r.x1,y:n.y1})):(r.points.push({x:r.x1,y:r.y0}),r.points.push({x:r.x1,y:r.y1})),r.points.push({x:r.x0,y:r.y1}),r.isCurrent&&(r.points[0].y-=ee,r.points[1].y-=ee,r.points[2].y+=ee,r.points[3].y+=ee),r.areaPoints=[{x:r.x0,x0:0,x1:0,y:0,y0:r.points[0].y,y1:r.points[3].y}],r.areaPoints.push(v({},r.areaPoints[0],{x:r.x0+r.width*o}));var i={x:r.x1,x0:0,x1:0,y:0,y0:r.points[1].y,y1:r.points[2].y};r.areaPoints.push(v({},i,{x:r.x1-r.width*o})),r.areaPoints.push(i),[0,1,2,3].map((function(e){r.borderPoints.push({x:r.areaPoints[e].x,y:r.areaPoints[e].y0})})),r.borderPoints.push(null),[3,2,1,0].map((function(e){r.borderPoints.push({x:r.areaPoints[e].x,y:r.areaPoints[e].y1})}))}})),e}),[d,g,ge,be,r,t,ve,xe,O,le,de,pe,ue,Se]),Me=(0,f.lL)(),Oe=Me.showTooltipFromEvent,je=Me.hideTooltip,Le=(0,o.useMemo)((function(){return function(e){var r=e.parts,t=e.setCurrentPartId,n=e.isInteractive,a=e.onMouseEnter,i=e.onMouseLeave,s=e.onMouseMove,l=e.onClick,p=e.showTooltipFromEvent,u=e.hideTooltip,d=e.tooltip,f=void 0===d?y:d;return n?r.map((function(e){return v({},e,{onMouseEnter:function(r){t(e.data.id),p((0,o.createElement)(f,{part:e}),r),void 0!==a&&a(e,r)},onMouseLeave:function(r){t(null),u(),void 0!==i&&i(e,r)},onMouseMove:function(r){p((0,o.createElement)(f,{part:e}),r),void 0!==s&&s(e,r)},onClick:void 0!==l?function(r){l(e,r)}:void 0})})):r}({parts:Ce,setCurrentPartId:Pe,isInteractive:Y,onMouseEnter:te,onMouseLeave:ne,onMouseMove:oe,onClick:ae,showTooltipFromEvent:Oe,hideTooltip:je,tooltip:ie})}),[Ce,Pe,Y,te,ne,oe,ae,Oe,je,ie]),Ie=(0,o.useMemo)((function(){return function(e){var r=e.parts,t=e.direction,o=e.width,n=e.height,a=e.spacing,i=e.enableBeforeSeparators,s=e.beforeSeparatorOffset,l=e.enableAfterSeparators,p=e.afterSeparatorOffset,u=[],d=[],f=r[r.length-1];if("vertical"===t){r.forEach((function(e){var r=e.y0-a/2;i&&u.push({partId:e.data.id,x0:0,x1:e.x0-s,y0:r,y1:r}),l&&d.push({partId:e.data.id,x0:e.x1+p,x1:o,y0:r,y1:r})}));var c=f.y1;i&&u.push(v({},u[u.length-1],{partId:"none",y0:c,y1:c})),l&&d.push(v({},d[d.length-1],{partId:"none",y0:c,y1:c}))}else if("horizontal"===t){r.forEach((function(e){var r=e.x0-a/2;u.push({partId:e.data.id,x0:r,x1:r,y0:0,y1:e.y0-s}),d.push({partId:e.data.id,x0:r,x1:r,y0:e.y1+p,y1:n})}));var h=f.x1;u.push(v({},u[u.length-1],{partId:"none",x0:h,x1:h})),d.push(v({},d[d.length-1],{partId:"none",x0:h,x1:h}))}return[u,d]}({parts:Ce,direction:g,width:c,height:h,spacing:C,enableBeforeSeparators:T,beforeSeparatorOffset:H,enableAfterSeparators:N,afterSeparatorOffset:Q})}),[Ce,g,c,h,C,T,H,N,Q]),we=Ie[0],Be=Ie[1],Ee=(0,o.useMemo)((function(){return{width:c,height:h,parts:Le,areaGenerator:ce,borderGenerator:he,beforeSeparators:we,afterSeparators:Be,setCurrentPartId:Pe}}),[c,h,Le,ce,he,we,Be,Pe]);return{parts:Le,areaGenerator:ce,borderGenerator:he,beforeSeparators:we,afterSeparators:Be,setCurrentPartId:Pe,currentPartId:Se,customLayerProps:Ee}},g=function(e){var r=e.part,t=e.areaGenerator,o=e.borderGenerator,a=(0,n.tf)(),i=a.animate,s=a.config,l=(0,n.NS)(t(r.areaPoints)),p=(0,n.NS)(o(r.borderPoints)),u=(0,h.useSpring)({areaColor:r.color,borderWidth:r.borderWidth,borderColor:r.borderColor,config:s,immediate:!i});return(0,c.jsxs)(c.Fragment,{children:[r.borderWidth>0&&(0,c.jsx)(h.q.path,{d:p,stroke:u.borderColor,strokeWidth:u.borderWidth,strokeOpacity:r.borderOpacity,fill:"none"}),(0,c.jsx)(h.q.path,{d:l,fill:u.areaColor,fillOpacity:r.fillOpacity,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,onMouseMove:r.onMouseMove,onClick:r.onClick})]})},m=function(e){var r=e.parts,t=e.areaGenerator,o=e.borderGenerator;return(0,c.jsx)(c.Fragment,{children:r.map((function(e){return(0,c.jsx)(g,{part:e,areaGenerator:t,borderGenerator:o},e.data.id)}))})},S=function(e){var r=e.part,t=(0,n.Fg)(),o=(0,n.tf)(),a=o.animate,i=o.config,s=(0,h.useSpring)({transform:"translate("+r.x+", "+r.y+")",color:r.labelColor,config:i,immediate:!a});return(0,c.jsx)(h.q.g,{transform:s.transform,children:(0,c.jsx)(h.q.text,{textAnchor:"middle",dominantBaseline:"central",style:v({},t.labels.text,{fill:s.color,pointerEvents:"none"}),children:r.formattedValue})})},P=function(e){var r=e.parts;return(0,c.jsx)(c.Fragment,{children:r.map((function(e){return(0,c.jsx)(S,{part:e},e.data.id)}))})},C=function(e){var r=e.separator,t=(0,n.Fg)(),o=(0,n.tf)(),a=o.animate,i=o.config,s=(0,h.useSpring)({x1:r.x0,x2:r.x1,y1:r.y0,y2:r.y1,config:i,immediate:!a});return(0,c.jsx)(h.q.line,v({x1:s.x1,x2:s.x2,y1:s.y1,y2:s.y2,fill:"none"},t.grid.line))},M=function(e){var r=e.beforeSeparators,t=e.afterSeparators;return(0,c.jsxs)(c.Fragment,{children:[r.map((function(e){return(0,c.jsx)(C,{separator:e},e.partId)})),t.map((function(e){return(0,c.jsx)(C,{separator:e},e.partId)}))]})},O=function(e){var r=function(e,r){return(0,d.O2)({data:e,annotations:r,getPosition:function(e){return{x:e.x,y:e.y}},getDimensions:function(e){var r=e.width,t=e.height;return{size:Math.max(r,t),width:r,height:t}}})}(e.parts,e.annotations);return(0,c.jsx)(c.Fragment,{children:r.map((function(e,r){return(0,c.jsx)(d.q6,v({},e),r)}))})},j=["isInteractive","animate","motionConfig","theme","renderWrapper"],L=function(e){var r=e.data,t=e.width,a=e.height,i=e.margin,s=e.direction,l=void 0===s?x.direction:s,p=e.interpolation,u=void 0===p?x.interpolation:p,d=e.spacing,f=void 0===d?x.spacing:d,h=e.shapeBlending,v=void 0===h?x.shapeBlending:h,y=e.valueFormat,g=e.colors,S=void 0===g?x.colors:g,C=e.fillOpacity,j=void 0===C?x.fillOpacity:C,L=e.borderWidth,I=void 0===L?x.borderWidth:L,w=e.borderColor,B=void 0===w?x.borderColor:w,E=e.borderOpacity,W=void 0===E?x.borderOpacity:E,k=e.enableLabel,F=void 0===k?x.enableLabel:k,G=e.labelColor,A=void 0===G?x.labelColor:G,Z=e.enableBeforeSeparators,z=void 0===Z?x.enableBeforeSeparators:Z,q=e.beforeSeparatorLength,T=void 0===q?x.beforeSeparatorLength:q,_=e.beforeSeparatorOffset,D=void 0===_?x.beforeSeparatorOffset:_,V=e.enableAfterSeparators,H=void 0===V?x.enableAfterSeparators:V,J=e.afterSeparatorLength,N=void 0===J?x.afterSeparatorLength:J,U=e.afterSeparatorOffset,X=void 0===U?x.afterSeparatorOffset:U,K=e.layers,Q=void 0===K?x.layers:K,R=e.annotations,Y=void 0===R?x.annotations:R,$=e.isInteractive,ee=void 0===$?x.isInteractive:$,re=e.currentPartSizeExtension,te=void 0===re?x.currentPartSizeExtension:re,oe=e.currentBorderWidth,ne=e.onMouseEnter,ae=e.onMouseMove,ie=e.onMouseLeave,se=e.onClick,le=e.tooltip,pe=e.role,ue=void 0===pe?x.role:pe,de=e.ariaLabel,fe=e.ariaLabelledBy,ce=e.ariaDescribedBy,he=(0,n.Bs)(t,a,i),ve=he.margin,xe=he.innerWidth,ye=he.innerHeight,be=he.outerWidth,ge=he.outerHeight,me=b({data:r,width:xe,height:ye,direction:l,interpolation:u,spacing:f,shapeBlending:v,valueFormat:y,colors:S,fillOpacity:j,borderWidth:I,borderColor:B,borderOpacity:W,labelColor:A,enableBeforeSeparators:z,beforeSeparatorLength:T,beforeSeparatorOffset:D,enableAfterSeparators:H,afterSeparatorLength:N,afterSeparatorOffset:X,isInteractive:ee,currentPartSizeExtension:te,currentBorderWidth:oe,onMouseEnter:ne,onMouseMove:ae,onMouseLeave:ie,onClick:se,tooltip:le}),Se=me.areaGenerator,Pe=me.borderGenerator,Ce=me.parts,Me=me.beforeSeparators,Oe=me.afterSeparators,je=me.customLayerProps,Le={separators:null,parts:null,annotations:null,labels:null};return Q.includes("separators")&&(Le.separators=(0,c.jsx)(M,{beforeSeparators:Me,afterSeparators:Oe},"separators")),Q.includes("parts")&&(Le.parts=(0,c.jsx)(m,{parts:Ce,areaGenerator:Se,borderGenerator:Pe},"parts")),null!=Q&&Q.includes("annotations")&&(Le.annotations=(0,c.jsx)(O,{parts:Ce,annotations:Y},"annotations")),Q.includes("labels")&&F&&(Le.labels=(0,c.jsx)(P,{parts:Ce},"labels")),(0,c.jsx)(n.tM,{width:be,height:ge,margin:ve,role:ue,ariaLabel:de,ariaLabelledBy:fe,ariaDescribedBy:ce,children:Q.map((function(e,r){var t;return"function"==typeof e?(0,c.jsx)(o.Fragment,{children:(0,o.createElement)(e,je)},r):null!=(t=null==Le?void 0:Le[e])?t:null}))})},I=function(e){var r=e.isInteractive,t=void 0===r?x.isInteractive:r,o=e.animate,a=void 0===o?x.animate:o,i=e.motionConfig,s=void 0===i?x.motionConfig:i,l=e.theme,p=e.renderWrapper,u=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,j);return(0,c.jsx)(n.W2,{animate:a,isInteractive:t,motionConfig:s,renderWrapper:p,theme:l,children:(0,c.jsx)(L,v({isInteractive:t},u))})},w=function(e){return(0,c.jsx)(n.d,{children:function(r){var t=r.width,o=r.height;return(0,c.jsx)(I,v({width:t,height:o},e))}})}}}]);
//# sourceMappingURL=cd7010ad5fca76ac762052a4528b8fc5edbbf764-3ea8d496d30ccb6ff7b9.js.map