!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=373)}({373:function(e,r,t){e.exports=t(374)},374:function(e,r,t){"use strict";function n(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(a,o){try{var u=r[a](o),i=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}}$(function(){var e=$("#register"),r=$("#requestCode"),t=$("#code"),a=$("#email"),o=$("#nick"),u=$("#password"),i=$("#passwordrpt");e.hide(),r.click(function(){var o=n(regeneratorRuntime.mark(function n(o){var u,i,c;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r.prop("disabled",!0),u=a.val(),Valid.validEmail(u)){n.next=6;break}return alert("邮箱格式错误"),r.prop("disabled",!1),n.abrupt("return");case 6:return n.prev=6,n.next=9,Net.postRaw("/code",{email:u});case 9:i=n.sent,(c=i.data)&&c.mock&&t.val(c.mock),r.hide(),e.show(),e.prop("disabled",!1),n.next=21;break;case 17:n.prev=17,n.t0=n.catch(6),alert("服务器错误，请稍后尝试"),r.prop("disabled",!1);case 21:case"end":return n.stop()}},n,void 0,[[6,17]])}));return function(e){return o.apply(this,arguments)}}()),e.click(function(){var r=n(regeneratorRuntime.mark(function r(n){var c,p,s,l,d,f,b,v;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e.prop("disabled",!0),c=a.val(),Valid.validEmail(c)){r.next=6;break}return alert("邮箱格式错误"),e.prop("disabled",!1),r.abrupt("return");case 6:if(p=o.val(),s=u.val(),Valid.validPassword(s)){r.next=12;break}return alert("密码长度应在6~100之间"),e.prop("disabled",!1),r.abrupt("return");case 12:if(l=i.val(),s===l){r.next=17;break}return alert("两次密码不一致"),e.prop("disabled",!1),r.abrupt("return");case 17:if(d=t.val(),Valid.validCode(d)){r.next=22;break}return alert("验证码应为6位数字"),e.prop("disabled",!1),r.abrupt("return");case 22:return r.prev=22,r.next=25,Srp.doRegister(c,s,p,d);case 25:if(f=r.sent,b=f.respUp,v=f.respRe){r.next=40;break}if(409!==b.status){r.next=35;break}return alert("注册失败 - 验证码错误"),e.prop("disabled",!1),r.abrupt("return");case 35:return alert("注册失败 - 请检查是否填写正确"),e.prop("disabled",!1),r.abrupt("return");case 38:r.next=49;break;case 40:if(201!==v.status){r.next=46;break}return alert("注册成功"),window.location.href="/person.html?id="+Srp.uid(),r.abrupt("return");case 46:return alert("注册失败 - 注册失败，请稍后重试"),e.prop("disabled",!1),r.abrupt("return");case 49:r.next=56;break;case 51:r.prev=51,r.t0=r.catch(22),alert("很抱歉 - 服务器异常，请稍后重试"),console.warn(r.t0),e.prop("disabled",!1);case 56:case"end":return r.stop()}},r,void 0,[[22,51]])}));return function(e){return r.apply(this,arguments)}}())})}});