function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{p1XJ:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_textarea",(function(){return r}));var n=i("c1op"),a=(i("AfW+"),i("aiEM")),o=i("Dl6n"),r=function(){function e(t){var i=this;_classCallCheck(this,e),Object(n.l)(this,t),this.inputId="ion-input-".concat(l++),this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.autoGrow=!1,this.value="",this.onInput=function(e){i.nativeInput&&(i.value=i.nativeInput.value),i.emitStyle(),i.ionInput.emit(e)},this.onFocus=function(){i.hasFocus=!0,i.focusChange(),i.ionFocus.emit()},this.onBlur=function(){i.hasFocus=!1,i.focusChange(),i.ionBlur.emit()},this.onKeyDown=function(){i.checkClearOnEdit()},this.ionChange=Object(n.e)(this,"ionChange",7),this.ionInput=Object(n.e)(this,"ionInput",7),this.ionStyle=Object(n.e)(this,"ionStyle",7),this.ionBlur=Object(n.e)(this,"ionBlur",7),this.ionFocus=Object(n.e)(this,"ionFocus",7)}return _createClass(e,[{key:"debounceChanged",value:function(){this.ionChange=Object(a.d)(this.ionChange,this.debounce)}},{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"valueChanged",value:function(){var e=this.nativeInput,t=this.getValue();e&&e.value!==t&&(e.value=t),this.runAutoGrow(),this.emitStyle(),this.ionChange.emit({value:t})}},{key:"connectedCallback",value:function(){this.emitStyle(),this.debounceChanged(),this.el.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}},{key:"disconnectedCallback",value:function(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))}},{key:"componentDidLoad",value:function(){this.runAutoGrow()}},{key:"runAutoGrow",value:function(){var e=this.nativeInput;e&&this.autoGrow&&Object(n.g)((function(){e.style.height="inherit",e.style.height=e.scrollHeight+"px"}))}},{key:"setFocus",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.nativeInput&&this.nativeInput.focus();case 1:case"end":return e.stop()}}),null,this)}},{key:"getInputElement",value:function(){return Promise.resolve(this.nativeInput)}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus})}},{key:"checkClearOnEdit",value:function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)}},{key:"focusChange",value:function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()}},{key:"hasValue",value:function(){return""!==this.getValue()}},{key:"getValue",value:function(){return this.value||""}},{key:"render",value:function(){var e=this,t=Object(n.d)(this),i=this.getValue(),r=this.inputId+"-lbl",l=Object(a.f)(this.el);return l&&(l.id=r),Object(n.i)(n.a,{"aria-disabled":this.disabled?"true":null,class:Object.assign(Object.assign({},Object(o.a)(this.color)),_defineProperty({},t,!0))},Object(n.i)("textarea",{class:"native-textarea",ref:function(t){return e.nativeInput=t},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},i))}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},{key:"style",get:function(){return".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-md-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h, ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md, [dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md, [dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-floating.sc-ion-textarea-md-h, .item-label-floating .sc-ion-textarea-md-h, .item-label-stacked.sc-ion-textarea-md-h, .item-label-stacked .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}"}}]),e}(),l=0}}]);