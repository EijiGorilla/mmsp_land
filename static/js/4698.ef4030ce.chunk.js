"use strict";(self.webpackChunkmmsp_land=self.webpackChunkmmsp_land||[]).push([[4698],{24698:(e,t,n)=>{n.r(t),n.d(t,{executeScript:()=>Y,extend:()=>z,functionHelper:()=>W});var r=n(24102),a=n(56281),o=n(62357),l=n(22564),i=n(5431),s=n(790),c=n(44715),u=n(28183),f=n(44241),w=n(97512),d=n(7016),p=n(12271),h=n(85265),g=n(82197),y=n(63425),v=n(32238),m=n(78952);function b(e){return e&&"function"==typeof e.then}const x=100;async function V(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await C(e,t.arguments[r]));return n}async function S(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await V(e,t))}class H extends s.Rm{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){var t=this;return function(){var n;const r={spatialReference:t.context.spatialReference,console:t.context.console,lrucache:t.context.lrucache,timeZone:null!==(n=t.context.timeZone)&&void 0!==n?n:null,exports:t.context.exports,libraryResolver:t.context.libraryResolver,interceptor:t.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:t.context.globalScope};if(r.depthCounter.depth>64)throw new l.aV(e,l.rH.MaximumCallDepth,null);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return D(t.definition,r,o,null)}}call(e,t){return R(e,t,((n,r,a)=>{var o;const i={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:null!==(o=e.timeZone)&&void 0!==o?o:null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(i.depthCounter.depth>64)throw new l.aV(e,l.rH.MaximumCallDepth,t);return D(this.definition,i,a,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(a,o,l)=>{var i;const u={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:null!==(i=e.timeZone)&&void 0!==i?i:null,interceptor:e.interceptor,localScope:{}};return l=l.map((t=>!(0,c.i)(t)||t instanceof s.Vg?t:(0,s.aq)(t,e,r))),(0,s.aq)(await D(this.definition,u,l,t),n,r)}))}}class I extends r.P{constructor(e){super(e)}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await C(this.executingContext,t.node),t.valueset=!0),(0,c.i)(t.value)&&!(t.value instanceof s.Vg)){const e=new s.Vg;e.fn=t.value,e.parameterEvaluator=R,e.context=this.executingContext,t.value=e}return t.value}setGlobal(e,t){if((0,c.i)(t))throw new l.aV(null,l.rH.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){var t,n;let r=e.spatialReference;null==r&&(r=new m.Z({wkid:102100})),this.moduleScope=U({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:r,services:e.services,libraryResolver:new a.s(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:null!==(t=e.console)&&void 0!==t?t:_,lrucache:e.lrucache,timeZone:null!==(n=e.timeZone)&&void 0!==n?n:null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await C(this.executingContext,this.source.syntax)}}async function R(e,t,n){if(!0===t.preparsed){const r=n(e,null,t.arguments);return b(r),r}const r=n(e,t,await V(e,t));return b(r),r}async function C(e,t,n){if(t.breakpoint&&!0!==n){const n=t.breakpoint();return await n,C(e,t,!0)}try{switch(null===t||void 0===t?void 0:t.type){case"VariableDeclarator":return await async function(e,t){let n=null;if(n=null===t.init?null:await C(e,t.init),null!==e.localScope){if(n===c.x&&(n=null),"Identifier"!==t.id.type)throw new l.aV(e,l.rH.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return null!=e.localScope&&(e.localScope[r]={value:n,valueset:!0,node:t.init}),c.x}if("Identifier"!==t.id.type)throw new l.aV(e,l.rH.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return n===c.x&&(n=null),e.globalScope[r]={value:n,valueset:!0,node:t.init},c.x}(e,t);case"ImportDeclaration":return await async function(e,t){var n,r;const a=t.specifiers[0].local.name.toLowerCase(),o=e.libraryResolver.loadLibrary(a);let l=null;return null!==(n=e.libraryResolver._moduleSingletons)&&void 0!==n&&n.has(o.uri)?l=e.libraryResolver._moduleSingletons.get(o.uri):(l=new I(o),await l.loadModule(e),null===(r=e.libraryResolver._moduleSingletons)||void 0===r||r.set(o.uri,l)),e.globalScope[a]={value:l,valueset:!0,node:t},c.x}(e,t);case"ExportNamedDeclaration":return await async function(e,t){if(await C(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return c.x}(e,t);case"VariableDeclaration":return await E(e,t,0);case"BlockStatement":case"Program":return await async function(e,t){return N(e,t,0)}(e,t);case"FunctionDeclaration":return await async function(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new H(t,e)},c.x}(e,t);case"ReturnStatement":return await async function(e,t){if(null===t.argument)return new c.R(c.x);const n=await C(e,t.argument);return new c.R(n)}(e,t);case"IfStatement":return await async function(e,t){const n=await C(e,t.test);if(!0===n)return C(e,t.consequent);if(!1===n)return null!==t.alternate?C(e,t.alternate):c.x;throw new l.aV(e,l.rH.BooleanConditionRequired,t)}(e,t);case"ExpressionStatement":return await async function(e,t){if("AssignmentExpression"===t.expression.type)return C(e,t.expression);if("CallExpression"===t.expression.type){const n=await C(e,t.expression);return n===c.x?c.x:new c.I(n)}const n=await C(e,t.expression);return n===c.x?c.x:new c.I(n)}(e,t);case"UpdateExpression":return await async function(e,t){const n=t.argument;if("MemberExpression"===n.type){const r={t:null},a=await C(e,n.object);let i=null;r.t=a,!0===n.computed?i=await C(e,n.property):"Identifier"===n.property.type&&(i=n.property.name);const s=r.t;let u;if((0,c.o)(s)){if(!(0,c.b)(i))throw new l.aV(e,l.rH.ArrayAccessorMustBeNumber,t);if(i<0&&(i=s.length+i),i<0||i>=s.length)throw new l.aV(e,l.rH.OutOfBounds,t);u=(0,c.g)(s[i]),s[i]="++"===t.operator?u+1:u-1}else if(s instanceof o.Z){if(!1===(0,c.c)(i))throw new l.aV(e,l.rH.KeyAccessorMustBeString,t);if(!0!==s.hasField(i))throw new l.aV(e,l.rH.FieldNotFound,t,{key:i});u=(0,c.g)(s.field(i)),s.setField(i,"++"===t.operator?u+1:u-1)}else if(s instanceof I){if(!1===(0,c.c)(i))throw new l.aV(e,l.rH.ModuleAccessorMustBeString,t);if(!0!==s.hasGlobal(i))throw new l.aV(e,l.rH.ModuleExportNotFound,t);u=(0,c.g)(await s.global(i)),s.setGlobal(i,"++"===t.operator?u+1:u-1)}else{if(!(0,c.r)(s))throw(0,c.q)(s)?new l.aV(e,l.rH.Immutable,t):new l.aV(e,l.rH.InvalidParameter,t);if(!1===(0,c.c)(i))throw new l.aV(e,l.rH.KeyAccessorMustBeString,t);if(!0!==s.hasField(i))throw new l.aV(e,l.rH.FieldNotFound,t,{key:i});u=(0,c.g)(s.field(i)),s.setField(i,"++"===t.operator?u+1:u-1)}return!1===t.prefix?u:"++"===t.operator?u+1:u-1}const r="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!r)throw new l.aV(e,l.rH.InvalidIdentifier,t);let a;if(null!=e.localScope&&void 0!==e.localScope[r])return a=(0,c.g)(e.localScope[r].value),e.localScope[r]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},!1===t.prefix?a:"++"===t.operator?a+1:a-1;if(void 0!==e.globalScope[r])return a=(0,c.g)(e.globalScope[r].value),e.globalScope[r]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},!1===t.prefix?a:"++"===t.operator?a+1:a-1;throw new l.aV(e,l.rH.InvalidIdentifier,t)}(e,t);case"AssignmentExpression":return await async function(e,t){const n=t.left;if("MemberExpression"===n.type){const r=await C(e,n.object);let a=null;if(!0===n.computed)a=await C(e,n.property);else{if("Identifier"!==n.property.type)throw new l.aV(e,l.rH.InvalidIdentifier,t);a=n.property.name}const i=await C(e,t.right);if((0,c.o)(r)){if(!(0,c.b)(a))throw new l.aV(e,l.rH.ArrayAccessorMustBeNumber,t);if(a<0&&(a=r.length+a),a<0||a>r.length)throw new l.aV(e,l.rH.OutOfBounds,t);if(a===r.length){if("="!==t.operator)throw new l.aV(e,l.rH.OutOfBounds,t);r[a]=L(i,t.operator,r[a],t,e)}else r[a]=L(i,t.operator,r[a],t,e)}else if(r instanceof o.Z){if(!1===(0,c.c)(a))throw new l.aV(e,l.rH.KeyAccessorMustBeString,t);if(!0===r.hasField(a))r.setField(a,L(i,t.operator,r.field(a),t,e));else{if("="!==t.operator)throw new l.aV(e,l.rH.FieldNotFound,t,{key:a});r.setField(a,L(i,t.operator,null,t,e))}}else if(r instanceof I){if(!1===(0,c.c)(a))throw new l.aV(e,l.rH.KeyAccessorMustBeString,t);if(!0!==r.hasGlobal(a))throw new l.aV(e,l.rH.ModuleExportNotFound,t);r.setGlobal(a,L(i,t.operator,await r.global(a),t,e))}else{if(!(0,c.r)(r))throw(0,c.q)(r)?new l.aV(e,l.rH.Immutable,t):new l.aV(e,l.rH.InvalidParameter,t);if(!1===(0,c.c)(a))throw new l.aV(e,l.rH.KeyAccessorMustBeString,t);if(!0===r.hasField(a))r.setField(a,L(i,t.operator,r.field(a),t,e));else{if("="!==t.operator)throw new l.aV(e,l.rH.FieldNotFound,t,{key:a});r.setField(a,L(i,t.operator,null,t,e))}}return c.x}const r=n.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[r]){const n=await C(e,t.right);return e.localScope[r]={value:L(n,t.operator,e.localScope[r].value,t,e),valueset:!0,node:t.right},c.x}if(void 0!==e.globalScope[r]){const n=await C(e,t.right);return e.globalScope[r]={value:L(n,t.operator,e.globalScope[r].value,t,e),valueset:!0,node:t.right},c.x}throw new l.aV(e,l.rH.InvalidIdentifier,t)}(e,t);case"ForStatement":return await function(e,t){try{return null!==t.init?C(e,t.init).then((()=>new Promise(((n,r)=>{A(e,t,{testResult:!0,lastAction:c.x},(e=>{n(e)}),(e=>{r(e)}),0)})))):new Promise(((n,r)=>{A(e,t,{testResult:!0,lastAction:c.x},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(n){return Promise.reject(n)}}(e,t);case"WhileStatement":return await async function(e,t){const n={testResult:!0,lastAction:c.x};if(n.testResult=await C(e,t.test),!1===n.testResult)return c.x;if(!0!==n.testResult)throw new l.aV(e,l.rH.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=await C(e,t.body),n.lastAction!==c.y)&&!(n.lastAction instanceof c.R);)if(n.testResult=await C(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new l.aV(e,l.rH.BooleanConditionRequired,t);return n.lastAction instanceof c.R?n.lastAction:c.x}(e,t);case"ForInStatement":return await async function(e,t){return new Promise(((n,r)=>{C(e,t.right).then((a=>{try{let i=null;i="VariableDeclaration"===t.left.type?C(e,t.left):Promise.resolve(),i.then((()=>{try{let i="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(i=e.name)}else"Identifier"===t.left.type&&(i=t.left.name);if(!i)throw new l.aV(e,l.rH.InvalidIdentifier,t);i=i.toLowerCase();let s=null;if(null!=e.localScope&&void 0!==e.localScope[i]&&(s=e.localScope[i]),null===s&&void 0!==e.globalScope[i]&&(s=e.globalScope[i]),null===s)return void r(new l.aV(e,l.rH.InvalidIdentifier,t));(0,c.o)(a)||(0,c.c)(a)?O(e,t,a,{reject:r,resolve:n},s):(0,c.q)(a)?function(e,t,n,a,o,l){try{if(void 0===l&&(l="i"),0===n.length)return void a.resolve(c.x);k(e,t,n,o,0,l,(e=>{a.resolve(e)}),(e=>{a.reject(e)}),0)}catch(r){a.reject(r)}}(e,t,a,{reject:r,resolve:n},s):a instanceof o.Z||(0,c.r)(a)?function(e,t,r,a,o){try{O(e,t,r.keys(),a,o,"k")}catch(n){a.reject(n)}}(e,t,a,{reject:r,resolve:n},s):(0,c.u)(a)?B(a.iterator(e.abortSignal),e,t,a,s,(e=>{n(e)}),(e=>{r(e)}),0):O(e,t,[],{reject:r,resolve:n},s)}catch(i){r(i)}}),r)}catch(i){r(i)}}),r)}))}(e,t);case"BreakStatement":return c.y;case"EmptyStatement":return c.x;case"ContinueStatement":return c.z;case"TemplateElement":return await async function(e,t){return t.value?t.value.cooked:""}(0,t);case"TemplateLiteral":return await async function(e,t){const n=[];for(let o=0;o<t.expressions.length;o++){const r=await C(e,t.expressions[o]);n[o]=(0,c.j)(r)}let r="",a=0;for(const o of t.quasis)r+=o.value?o.value.cooked:"",!1===o.tail&&(r+=n[a]?j(n[a],e,t):"",a++);return r}(e,t);case"Identifier":return await Z(e,t);case"MemberExpression":return await async function(e,t){const n=await C(e,t.object);if(null===n)throw new l.aV(e,l.rH.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n instanceof o.Z||(0,c.r)(n))return n.field(t.property.name);if(n instanceof v.Z)return(0,p.Z)(n,t.property.name,e,t);if(n instanceof I){if(!n.hasGlobal(t.property.name))throw new l.aV(e,l.rH.InvalidIdentifier,t);return n.global(t.property.name)}throw new l.aV(e,l.rH.InvalidMemberAccessKey,t)}throw new l.aV(e,l.rH.InvalidMemberAccessKey,t)}let r=await C(e,t.property);if(n instanceof o.Z||(0,c.r)(n)){if((0,c.c)(r))return n.field(r);throw new l.aV(e,l.rH.InvalidMemberAccessKey,t)}if(n instanceof I){if((0,c.c)(r))return n.global(r);throw new l.aV(e,l.rH.InvalidMemberAccessKey,t)}if(n instanceof v.Z){if((0,c.c)(r))return(0,p.Z)(n,r,e,t);throw new l.aV(e,l.rH.InvalidMemberAccessKey,t)}if((0,c.o)(n)){if((0,c.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new l.aV(e,l.rH.OutOfBounds,t);return n[r]}throw new l.aV(e,l.rH.InvalidMemberAccessKey,t)}if((0,c.q)(n)){if((0,c.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new l.aV(e,l.rH.OutOfBounds,t);return n.get(r)}throw new l.aV(e,l.rH.InvalidMemberAccessKey,t)}if((0,c.c)(n)){if((0,c.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new l.aV(e,l.rH.OutOfBounds,t);return n[r]}throw new l.aV(e,l.rH.InvalidMemberAccessKey,t)}throw new l.aV(e,l.rH.InvalidMemberAccessKey,t)}(e,t);case"Literal":return t.value;case"CallExpression":return await async function(e,t){if("MemberExpression"===t.callee.type){const n=await C(e,t.callee.object);if(!(n instanceof I))throw new l.aV(e,l.rH.FunctionNotFound,t);const r=!1===t.callee.computed?t.callee.property.name:await C(e,t.callee.property);if(!n.hasGlobal(r))throw new l.aV(e,l.rH.FunctionNotFound,t);const a=await n.global(r);if(!(0,c.i)(a))throw new l.aV(e,l.rH.CallNonFunction,t);return a.call(e,t)}if("Identifier"!==t.callee.type)throw new l.aV(e,l.rH.FunctionNotFound,t);if(null!=e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];if((0,c.i)(n.value))return n.value.call(e,t);throw new l.aV(e,l.rH.CallNonFunction,t)}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];if((0,c.i)(n.value))return n.value.call(e,t);throw new l.aV(e,l.rH.CallNonFunction,t)}throw new l.aV(e,l.rH.FunctionNotFound,t)}(e,t);case"UnaryExpression":return await async function(e,t){const n=await C(e,t.argument);if((0,c.a)(n)){if("!"===t.operator)return!n;if("-"===t.operator)return-1*(0,c.g)(n);if("+"===t.operator)return 1*(0,c.g)(n);if("~"===t.operator)return~(0,c.g)(n);throw new l.aV(e,l.rH.UnsupportedUnaryOperator,t)}if("-"===t.operator)return-1*(0,c.g)(n);if("+"===t.operator)return 1*(0,c.g)(n);if("~"===t.operator)return~(0,c.g)(n);throw new l.aV(e,l.rH.UnsupportedUnaryOperator,t)}(e,t);case"BinaryExpression":return await async function(e,t){const n=[];n[0]=await C(e,t.left),n[1]=await C(e,t.right);const r=n[0],a=n[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return(0,c.D)((0,c.g)(r),(0,c.g)(a),t.operator);case"==":return(0,c.C)(r,a);case"!=":return!(0,c.C)(r,a);case"<":case">":case"<=":case">=":return(0,c.B)(r,a,t.operator);case"+":return(0,c.c)(r)||(0,c.c)(a)?(0,c.j)(r)+(0,c.j)(a):(0,c.g)(r)+(0,c.g)(a);case"-":return(0,c.g)(r)-(0,c.g)(a);case"*":return(0,c.g)(r)*(0,c.g)(a);case"/":return(0,c.g)(r)/(0,c.g)(a);case"%":return(0,c.g)(r)%(0,c.g)(a);default:throw new l.aV(e,l.rH.UnsupportedOperator,t)}}(e,t);case"LogicalExpression":return await async function(e,t){const n=await C(e,t.left);let r=null;if(!(0,c.a)(n))throw new l.aV(e,l.rH.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":if(!0===n)return n;if(r=await C(e,t.right),(0,c.a)(r))return r;throw new l.aV(e,l.rH.LogicExpressionOrAnd,t);case"&&":if(!1===n)return n;if(r=await C(e,t.right),(0,c.a)(r))return r;throw new l.aV(e,l.rH.LogicExpressionOrAnd,t);default:throw new l.aV(e,l.rH.LogicExpressionOrAnd,t)}}(e,t);case"ArrayExpression":return await async function(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await C(e,t.elements[r]));for(let r=0;r<n.length;r++){if((0,c.i)(n[r]))throw new l.aV(e,l.rH.NoFunctionInArray,t);n[r]===c.x&&(n[r]=null)}return n}(e,t);case"ObjectExpression":return await async function(e,t){const n=[];for(let o=0;o<t.properties.length;o++)n[o]=await C(e,t.properties[o]);const r={},a=new Map;for(let o=0;o<n.length;o++){const i=n[o];if((0,c.i)(i.value))throw new l.aV(e,l.rH.NoFunctionInDictionary,t);if(!1===(0,c.c)(i.key))throw new l.aV(e,l.rH.KeyMustBeString,t);let s=i.key.toString();const u=s.toLowerCase();a.has(u)?s=a.get(u):a.set(u,s),i.value===c.x?r[s]=null:r[s]=i.value}const i=new o.Z(r);return i.immutable=!1,i}(e,t);case"Property":return await async function(e,t){const n=await C(e,t.value);return"Identifier"===t.key.type?{key:t.key.name,value:n}:{key:await C(e,t.key),value:n}}(e,t);default:throw new l.aV(e,l.rH.Unrecognized,t)}}catch(r){throw(0,l.VO)(e,t,r)}}async function F(e,t,n){const r=await C(e,t.body);return n.lastAction=r,n.lastAction===c.y||n.lastAction instanceof c.R?(n.testResult=!1,n):null!==t.update?(await C(e,t.update),n):n}function A(e,t,n,r,a,o){try{(async function(e,t,n){if(null!==t.test){var r;const a=await C(e,t.test);if(!0===(null===(r=e.abortSignal)||void 0===r?void 0:r.aborted))throw new l.aV(e,l.rH.Cancelled,t);if(n.testResult=a,!1===n.testResult)return n;if(!0!==n.testResult)throw new l.aV(e,l.rH.BooleanConditionRequired,t);return F(e,t,n)}return F(e,t,n)})(e,t,n).then((()=>{try{!0===n.testResult?++o>x?(o=0,setTimeout((()=>{A(e,t,n,r,a,o)}),0)):A(e,t,n,r,a,o):n.lastAction instanceof c.R?r(n.lastAction):r(c.x)}catch(l){a(l)}}),(e=>{a(e)}))}catch(i){a(i)}}function M(e,t,n,r,a,o,l,i,s,u){try{if(r<=o)return void i(c.x);a.value="k"===l?n[o]:o,C(e,t.body).then((f=>{try{f instanceof c.R?i(f):f===c.y?i(c.x):++u>x?(u=0,setTimeout((()=>{M(e,t,n,r,a,o+1,l,i,s,u)}),0)):M(e,t,n,r,a,o+1,l,i,s,u)}catch(w){s(w)}}),(e=>{s(e)}))}catch(f){s(f)}}function k(e,t,n,r,a,o,l,i,s){try{if(n.length()<=a)return void l(c.x);r.value="k"===o?n.get(a):a,C(e,t.body).then((u=>{u instanceof c.R?l(u):u===c.y?l(c.x):++s>x?(s=0,setTimeout((()=>{k(e,t,n,r,a+1,o,l,i,s)}),0)):k(e,t,n,r,a+1,o,l,i,s)}),(e=>{i(e)}))}catch(u){i(u)}}function O(e,t,n,r,a,o){try{if(void 0===o&&(o="i"),0===n.length)return void r.resolve(c.x);M(e,t,n,n.length,a,0,o,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(l){r.reject(l)}}function B(e,t,n,r,a,o,l,s){try{e.next().then((u=>{try{if(null===u)o(c.x);else{const f=i.Z.createFromGraphicLikeObject(u.geometry,u.attributes,r,t.timeZone);f._underlyingGraphic=u,a.value=f,C(t,n.body).then((i=>{try{i===c.y?o(c.x):i instanceof c.R?o(i):++s>x?(s=0,setTimeout((()=>{B(e,t,n,r,a,o,l,s)}),0)):B(e,t,n,r,a,o,l,s)}catch(u){l(u)}}),(e=>{l(e)}))}}catch(f){l(f)}}),(e=>{l(e)}))}catch(u){l(u)}}function L(e,t,n,r,a){switch(t){case"=":return e===c.x?null:e;case"/=":return(0,c.g)(n)/(0,c.g)(e);case"*=":return(0,c.g)(n)*(0,c.g)(e);case"-=":return(0,c.g)(n)-(0,c.g)(e);case"+=":return(0,c.c)(n)||(0,c.c)(e)?(0,c.j)(n)+(0,c.j)(e):(0,c.g)(n)+(0,c.g)(e);case"%=":return(0,c.g)(n)%(0,c.g)(e);default:throw new l.aV(a,l.rH.UnsupportedOperator,r)}}async function N(e,t,n){if(n>=t.body.length)return c.x;const r=await C(e,t.body[n]);return r instanceof c.R||r===c.y||r===c.z||n===t.body.length-1?r:N(e,t,n+1)}async function E(e,t,n){return n>=t.declarations.length||(await C(e,t.declarations[n]),n===t.declarations.length-1||await E(e,t,n+1)),c.x}async function Z(e,t){const n=t.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[n]){const t=e.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=C(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e.globalScope[n]){const t=e.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=C(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new l.aV(e,l.rH.InvalidIdentifier,t)}function j(e,t,n){if((0,c.i)(e))throw new l.aV(t,l.rH.NoFunctionInTemplateLiteral,n);return e}const P={};async function q(e,t,n,r){const a=await C(e,t.arguments[n]);if((0,c.C)(a,r))return C(e,t.arguments[n+1]);const o=t.arguments.length-n;return 1===o?C(e,t.arguments[n]):2===o?null:3===o?C(e,t.arguments[n+2]):q(e,t,n+2,r)}async function K(e,t,n,r){if(!0===r)return C(e,t.arguments[n+1]);if(3===t.arguments.length-n)return C(e,t.arguments[n+2]);const a=await C(e,t.arguments[n+2]);if(!1===(0,c.a)(a))throw new l.aV(e,l.rH.ModuleExportNotFound,t.arguments[n+2]);return K(e,t,n+2,a)}async function D(e,t,n,r){const a=e.body;if(n.length!==e.params.length)throw new l.aV(t,l.rH.WrongNumberOfParameters,null);for(let l=0;l<n.length;l++){const r=e.params[l];"Identifier"===r.type&&null!=t.localScope&&(t.localScope[r.name.toLowerCase()]={d:null,value:n[l],valueset:!0,node:null})}const o=await C(t,a);if(o instanceof c.R)return o.value;if(o===c.y)throw new l.aV(t,l.rH.UnexpectedToken,r);if(o===c.z)throw new l.aV(t,l.rH.UnexpectedToken,r);return o instanceof c.I?o.value:o}(0,w.r)(P,S),(0,y.r)(P,S),(0,h.r)(P,S),(0,p.r)(P,S),(0,g.r)(P,S),(0,d.registerFunctions)({functions:P,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:S,standardFunctionAsync:R}),P.iif=async function(e,t){(0,c.E)(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await C(e,t.arguments[0]);if(!1===(0,c.a)(n))throw new l.aV(e,l.rH.BooleanConditionRequired,t);return C(e,n?t.arguments[1]:t.arguments[2])},P.decode=async function(e,t){if(t.arguments.length<2)throw new l.aV(e,l.rH.WrongNumberOfParameters,t);if(2===t.arguments.length)return C(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new l.aV(e,l.rH.WrongNumberOfParameters,t);return q(e,t,1,await C(e,t.arguments[0]))},P.when=async function(e,t){if(t.arguments.length<3)throw new l.aV(e,l.rH.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new l.aV(e,l.rH.WrongNumberOfParameters,t);const n=await C(e,t.arguments[0]);if(!1===(0,c.a)(n))throw new l.aV(e,l.rH.BooleanConditionRequired,t.arguments[0]);return K(e,t,0,n)};const G={fixSpatialReference:c.A,parseArguments:V,standardFunction:S,standardFunctionAsync:R,evaluateIdentifier:Z};for(const J in P)P[J]={value:new s.Bx(P[J]),valueset:!0,node:null};const T=function(){};function U(e,t,n){const r=new T;null==e&&(e={}),null==t&&(t={});const a=new o.Z({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,r.textformatting={value:a,valueset:!0,node:null};for(const o in t)r[o]={value:new s.Bx(t[o]),native:!0,valueset:!0,node:null};for(const o in e)e[o]&&"esri.Graphic"===e[o].declaredClass?r[o]={value:i.Z.createFromGraphic(e[o],n),valueset:!0,node:null}:r[o]={value:e[o],valueset:!0,node:null};return r}function _(e){console.log(e)}T.prototype=P,T.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},T.prototype.pi={value:Math.PI,valueset:!0,node:null};const W=G;function z(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:S,standardFunctionAsync:R,evaluateIdentifier:Z};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)P[n]={value:new s.Bx(t.functions[n]),valueset:!0,node:null},T.prototype[n]=P[n];for(let n=0;n<t.signatures.length;n++)(0,u.gW)(t.signatures[n],"async")}async function Y(e,t){var n,r;let o=t.spatialReference;null==o&&(o=new m.Z({wkid:102100}));let i=null;e.usesModules&&(i=new a.s(new Map,e.loadedModules));const s=U(t.vars,t.customfunctions,t.timeZone),u={spatialReference:o,services:t.services,exports:{},libraryResolver:i,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:s,console:null!==(n=t.console)&&void 0!==n?n:_,timeZone:null!==(r=t.timeZone)&&void 0!==r?r:null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}};let f=await C(u,e);if(f instanceof c.R&&(f=f.value),f instanceof c.I&&(f=f.value),f===c.x&&(f=null),f===c.y)throw new l.aV(u,l.rH.IllegalResult,null);if(f===c.z)throw new l.aV(u,l.rH.IllegalResult,null);if((0,c.i)(f))throw new l.aV(u,l.rH.IllegalResult,null);return f}z([f.A])}}]);
//# sourceMappingURL=4698.ef4030ce.chunk.js.map