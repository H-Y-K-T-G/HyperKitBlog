!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=373)}({373:function(e,r,t){e.exports=t(374)},374:function(e,r,t){"use strict";function n(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(a,o){try{var i=r[a](o),u=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}("next")})}}$(function(){var e=$("#register"),r=$("#requestCode"),t=$("#code"),a=$("#email"),o=$("#nick"),i=$("#password"),u=$("#passwordrpt");e.hide(),r.click(function(){var o=n(regeneratorRuntime.mark(function n(o){var i,u,c;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r.prop("disabled",!0),i=a.val(),Valid.validEmail(i)){n.next=5;break}return alert("邮箱格式错误"),n.abrupt("return");case 5:return n.prev=5,n.next=8,Net.postRaw("/code",{email:i});case 8:u=n.sent,(c=u.data)&&c.mock&&t.val(c.mock),r.hide(),e.show(),e.prop("disabled",!1),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(5),alert("服务器错误，请稍后尝试"),$(o.target).prop("disabled",!1);case 20:case"end":return n.stop()}},n,void 0,[[5,16]])}));return function(e){return o.apply(this,arguments)}}()),e.click(function(){var r=n(regeneratorRuntime.mark(function r(n){var c,l,s,p,d,f,v,b;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e.prop("disabled",!0),c=a.val(),Valid.validEmail(c)){r.next=5;break}return alert("邮箱格式错误"),r.abrupt("return");case 5:if(l=o.val(),s=i.val(),Valid.validPassword(s)){r.next=10;break}return alert("密码长度应在6~100之间"),r.abrupt("return");case 10:if(p=u.val(),s===p){r.next=14;break}return alert("两次密码不一致"),r.abrupt("return");case 14:if(d=t.val(),Valid.validCode(d)){r.next=18;break}return alert("验证码应为6位数字"),r.abrupt("return");case 18:return r.prev=18,r.next=21,Srp.doRegister(c,s,l,d);case 21:f=r.sent,v=f.respUp,(b=f.respRe)?201===b.status?(alert("注册成功"),window.location.href="/person.html?id="+Srp.uid()):alert("注册失败 - 注册失败，请稍后重试"):409===v.status?alert("注册失败 - 验证码错误"):alert("注册失败 - 请检查是否填写正确"),e.prop("disabled",!1),r.next=33;break;case 28:r.prev=28,r.t0=r.catch(18),alert("很抱歉 - 服务器异常，请稍后重试"),console.warn(r.t0),e.prop("disabled",!1);case 33:case"end":return r.stop()}},r,void 0,[[18,28]])}));return function(e){return r.apply(this,arguments)}}())})}});