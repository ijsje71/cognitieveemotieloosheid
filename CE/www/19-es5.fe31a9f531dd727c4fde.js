function _defineProperties(n,t){for(var e=0;e<t.length;e++){var l=t[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"tp/a":function(n,t,e){"use strict";e.r(t);var l=e("8Y7J"),o=function n(){_classCallCheck(this,n)},i=e("pMnS"),a=e("oBZk"),u=e("ZZ/e"),c=e("iInd"),r=e("SVse"),s=function(){function n(){var t=this;_classCallCheck(this,n),this.progress=0,setInterval((function(){t.progress+=7e-4}),100)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),b=l.zb({encapsulation:0,styles:['@keyframes inhale {\n\t0%   { opacity: 1; }\n\t10%  { opacity: 1; }\n\t20%  { opacity: 0; }\n\t100% { opacity: 0; }\n}\n\n@keyframes hold {\n\t0%   { opacity: 0; }\n\t19%  { opacity: 0; }\n\t20%  { opacity: 1; }\n\t38%  { opacity: 1; }\n\t55%  { opacity: 0; }\n\t100% { opacity: 0; }\n}\n\n@keyframes exhale {\n\t0%   { opacity: 0; }\n\t54%  { opacity: 0; }\n\t55%  { opacity: 1; }\n\t75%  { opacity: 1; }\n\t95%  { opacity: 0; }\n\t100% { opacity: 0; }\n}\n\n@keyframes lungs {\n\t0%  { padding: 0.4em; }\n\t21% { padding: 0.75rem; }\n\t58% { padding: 0.75rem; }\n\t95% { padding: 0.4em; }\n}\n\nsection[_ngcontent-%COMP%] {\n\talign-items: center;\n\tbackground-color: #ffffff;\n\tcolor: #F0F0F0;\n\tdisplay: flex;\n\tjustify-content: center;\n\theight: 99%;\n\tmargin: 0;\n\toverflow: hidden;\n}\n\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n\tanimation-delay: 0s;\n\tanimation-duration: 20s;\n\tanimation-iteration-count: infinite;\n\tanimation-name: lungs;\n\tbackground-color: #ffd493;\n\tborder: 0.0125em solid #ffe2b7;\n\tborder-radius: 0.5em;\n\tbox-sizing: border-box;\n\tcolor: #ffffff;\n\tfont-size: 90vh;\n\theight: 0.8em;\n\tline-height: 1em;\n\tmargin: 0 auto;\n\tpadding: 0.4em;\n\tposition: relative;\n\twidth: 0.8em;\n}\n\n\tsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n\t\tbackground-color: #ffbe5c;\n\t\tborder-radius: 0.5em;\n\t\theight: 100%;\n\t\tmargin: auto;\n\t\ttext-align: center;\n\t\tuser-select: none;\n\t\twidth: 100%;\n\t}\n\n\t\tsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n\t\t\tanimation-name: inhale;\n\t\t\topacity: 1;\n\t\t}\n\n\t\tsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n\t\t\tanimation-name: hold;\n\t\t\topacity: 0;\n\t\t}\n\n\t\tsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n\t\t\tanimation-name: exhale;\n\t\t\topacity: 0;\n\t\t}\n\n\tsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n\t\tanimation-delay: 0s;\n\t\tanimation-duration: 20s;\n\t\tanimation-iteration-count: infinite;\n\t\tfont-family: "Roboto Condensed", sans-serif;\n\t\tfont-size: 0.05em;\n\t\tfont-weight: bold;\n\t\theight: 19.5em;\n\t\tleft: -1.8em;\n\t\tline-height: 19.5em;\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t\ttop: -1.8em;\n\t\twidth: 19.5em;\n\t}\n\nbutton[_ngcontent-%COMP%] {\n\tbackground-color: #455A64;\n\tborder-color: #263238;\n\tborder-radius: 1em 1em 0 0;\n\tborder-style: solid;\n\tborder-width: 0.25em 0.75em 0 0.75em;\n\tbottom: -2.5em;\n\tline-height: 1.5em;\n\tpadding: 0.25em 0.75em 0 0.75em;\n\tposition: absolute;\n\ttransition-duration: 0.5s;\n\ttransition-property: bottom;\n\ttransition-timing-function: ease;\n}\n\nhtml[_ngcontent-%COMP%] {\n\tfont-size: 16px;\n\theight: 100%;\n}\n\n@media (max-width: 100vh) {\n\tsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n\t\tfont-size: 90vw;\n\t}\n}',[""]],data:{}});function d(n){return l.Sb(0,[(n()(),l.Bb(0,0,null,null,1,"ion-header",[],null,null,null,a.P,a.m)),l.Ab(1,49152,null,0,u.A,[l.j,l.p,l.F],null,null),(n()(),l.Bb(2,0,null,null,14,"ion-content",[],null,null,null,a.M,a.j)),l.Ab(3,49152,null,0,u.t,[l.j,l.p,l.F],null,null),(n()(),l.Bb(4,0,null,0,8,"section",[],null,null,null,null,null)),(n()(),l.Bb(5,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),l.Bb(6,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),l.Bb(7,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Rb(-1,null,["Inhale"])),(n()(),l.Bb(9,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Rb(-1,null,[" Hold "])),(n()(),l.Bb(11,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l.Rb(-1,null,["Exhale"])),(n()(),l.Bb(13,0,null,0,3,"ion-progress-bar",[["color",""],["routerDirection","root"],["routerLink","/mindfulnesscompleted"]],null,[[null,"click"]],(function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l.Mb(n,15).onClick()&&o),"click"===t&&(o=!1!==l.Mb(n,16).onClick(e)&&o),o}),a.ab,a.x)),l.Ab(14,49152,null,0,u.Y,[l.j,l.p,l.F],{color:[0,"color"],value:[1,"value"]},null),l.Ab(15,16384,null,0,c.n,[c.m,c.a,[8,null],l.K,l.p],{routerLink:[0,"routerLink"]},null),l.Ab(16,737280,null,0,u.Jb,[r.g,u.Gb,l.p,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null)],(function(n,t){n(t,14,0,"",t.component.progress),n(t,15,0,"/mindfulnesscompleted"),n(t,16,0,"root")}),null)}var p=l.xb("app-mindfulnessexercise",s,(function(n){return l.Sb(0,[(n()(),l.Bb(0,0,null,null,1,"app-mindfulnessexercise",[],null,null,null,d,b)),l.Ab(1,114688,null,0,s,[],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),m=e("s7LF"),f=function n(){_classCallCheck(this,n)};e.d(t,"MindfulnessexercisePageModuleNgFactory",(function(){return g}));var g=l.yb(o,[],(function(n){return l.Jb([l.Kb(512,l.m,l.jb,[[8,[i.a,p]],[3,l.m],l.D]),l.Kb(4608,r.k,r.j,[l.z,[2,r.s]]),l.Kb(4608,m.j,m.j,[]),l.Kb(4608,u.a,u.a,[l.F,l.g]),l.Kb(4608,u.Fb,u.Fb,[u.a,l.m,l.w]),l.Kb(4608,u.Ib,u.Ib,[u.a,l.m,l.w]),l.Kb(1073742336,r.b,r.b,[]),l.Kb(1073742336,m.i,m.i,[]),l.Kb(1073742336,m.b,m.b,[]),l.Kb(1073742336,u.Db,u.Db,[]),l.Kb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),l.Kb(1073742336,f,f,[]),l.Kb(1073742336,o,o,[]),l.Kb(1024,c.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);