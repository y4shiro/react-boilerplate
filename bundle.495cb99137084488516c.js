!function(e){function t(t){for(var a,l,u=t[0],i=t[1],s=t[2],_=0,p=[];_<u.length;_++)l=u[_],n[l]&&p.push(n[l][0]),n[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(c&&c(t);p.length;)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},n={0:0},o=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=i;o.push([117,1]),r()}({117:function(e,t,r){"use strict";(function(e){var t=l(r(1)),a=l(r(17)),n=l(r(126)),o=l(r(197));function l(e){return e&&e.__esModule?e:{default:e}}!function(){var t=r(3).enterModule;t&&t(e)}();var u=function(e){a.default.render(t.default.createElement(n.default,null,t.default.createElement(e,null)),document.querySelector("#root"))};u(o.default),function(){var t=r(3).default,a=r(3).leaveModule;t&&(t.register(u,"render","/Users/t01935/dev/hanson/caad-react-boilerplate/src/index.jsx"),a(e))}()}).call(this,r(14)(e))},126:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(1)),n=u(r(0)),o=r(33),l=u(r(188));function u(e){return e&&e.__esModule?e:{default:e}}r(192),function(){var t=r(3).enterModule;t&&t(e)}();var i=function(e){var t=e.children;return a.default.createElement(o.MuiThemeProvider,{theme:l.default},t)};i.propTypes={children:n.default.node.isRequired};var s=i;t.default=s,function(){var t=r(3).default,a=r(3).leaveModule;t&&(t.register(i,"AppContainer","/Users/t01935/dev/hanson/caad-react-boilerplate/src/AppContainer/index.jsx"),t.register(s,"default","/Users/t01935/dev/hanson/caad-react-boilerplate/src/AppContainer/index.jsx"),a(e))}()}).call(this,r(14)(e))},188:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(33),n=l(r(189)),o=l(r(190));function l(e){return e&&e.__esModule?e:{default:e}}!function(){var t=r(3).enterModule;t&&t(e)}();var u=(0,a.createMuiTheme)({palette:{primary:{main:n.default[500]},secondary:{main:o.default.A700}}});t.default=u,function(){var t=r(3).default,a=r(3).leaveModule;t&&(t.register(u,"default","/Users/t01935/dev/hanson/caad-react-boilerplate/src/config/muiTheme.jsx"),a(e))}()}).call(this,r(14)(e))},192:function(e,t,r){var a=r(193);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(195)(a,n);a.locals&&(e.exports=a.locals)},193:function(e,t,r){(e.exports=r(194)(!1)).push([e.i,"body {\n  font-family: HiraKakuProN-W3, Roboto, sans-serif, Helvetica;\n  font-feature-settings: 'palt';\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0;\n  background-color: white;\n  overflow-x: hidden;\n}\n\nh2 {\n  font-size: 1rem;\n}\n\n",""])},197:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=p(r(1)),n=r(115),o=r(90),l=r(91),u=p(r(200)),i=p(r(204)),s=p(r(213)),c=p(r(264)),_=p(r(265));function p(e){return e&&e.__esModule?e:{default:e}}!function(){var t=r(3).enterModule;t&&t(e)}();var d=(0,i.default)(),f=(0,u.default)(),m=(0,l.syncHistoryWithStore)(f,d.routing);m.listen(function(e,t){"PUSH"===t&&console.log(e,t)});var v=function(){return a.default.createElement(o.Provider,d,a.default.createElement(n.HashRouter,{history:m},a.default.createElement(n.Switch,null,a.default.createElement(n.Route,{path:"/app",component:c.default}),a.default.createElement(n.Route,{path:"/legacy",component:s.default}),a.default.createElement(n.Route,{path:"/readme",component:_.default}),a.default.createElement(n.Route,{exact:!0,path:"/",component:c.default}),a.default.createElement(n.Redirect,{from:"*",to:"/notfound"}))))},h=v;t.default=h,function(){var t=r(3).default,a=r(3).leaveModule;t&&(t.register(d,"stores","/Users/t01935/dev/hanson/caad-react-boilerplate/src/config/routes.jsx"),t.register(f,"browserHistory","/Users/t01935/dev/hanson/caad-react-boilerplate/src/config/routes.jsx"),t.register(m,"syncHistory","/Users/t01935/dev/hanson/caad-react-boilerplate/src/config/routes.jsx"),t.register(v,"routes","/Users/t01935/dev/hanson/caad-react-boilerplate/src/config/routes.jsx"),t.register(h,"default","/Users/t01935/dev/hanson/caad-react-boilerplate/src/config/routes.jsx"),a(e))}()}).call(this,r(14)(e))},204:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(91),n=function(e){return e&&e.__esModule?e:{default:e}}(r(205));!function(){var t=r(3).enterModule;t&&t(e)}();var o=function(){return{routing:new a.RouterStore,app:new n.default}};t.default=o,function(){var t=r(3).default,a=r(3).leaveModule;t&&(t.register(o,"default","/Users/t01935/dev/hanson/caad-react-boilerplate/src/stores/createStores.js"),a(e))}()}).call(this,r(14)(e))},205:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty=__webpack_require__(93),_defineProperty2=_interopRequireDefault(_defineProperty),_getOwnPropertyDescriptor=__webpack_require__(209),_getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor),_classCallCheck2=__webpack_require__(60),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(61),_createClass3=_interopRequireDefault(_createClass2),_desc,_value,_class,_descriptor,_mobx=__webpack_require__(6);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _initDefineProp(e,t,r,a){r&&(0,_defineProperty2.default)(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}function _applyDecoratedDescriptor(e,t,r,a,n){var o={};return Object.keys(a).forEach(function(e){o[e]=a[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(r,a){return a(e,t,r)||r},o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}function _initializerWarningHelper(e,t){throw new Error("Decorating class property failed. Please ensure that transform-class-properties is enabled.")}!function(){var e=__webpack_require__(3).enterModule;e&&e(module)}();var AppStore=(_class=function(){function AppStore(){(0,_classCallCheck3.default)(this,AppStore),_initDefineProp(this,"count",_descriptor,this),this.init()}return(0,_createClass3.default)(AppStore,[{key:"addCount",value:function(e){this.count=this.count+e}},{key:"init",value:function(){this.count=0}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),AppStore}(),_descriptor=_applyDecoratedDescriptor(_class.prototype,"count",[_mobx.observable],{enumerable:!0,initializer:function(){return 0}}),_applyDecoratedDescriptor(_class.prototype,"addCount",[_mobx.action],(0,_getOwnPropertyDescriptor2.default)(_class.prototype,"addCount"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"init",[_mobx.action],(0,_getOwnPropertyDescriptor2.default)(_class.prototype,"init"),_class.prototype),_class);exports.default=AppStore,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(AppStore,"AppStore","/Users/t01935/dev/hanson/caad-react-boilerplate/src/stores/AppStore.js"),t(module))}()}).call(this,__webpack_require__(14)(module))},213:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__(99),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(60),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(61),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(102),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(109),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactHotLoader=__webpack_require__(3),_propTypes=__webpack_require__(0),_propTypes2=_interopRequireDefault(_propTypes),_Button=__webpack_require__(110),_Button2=_interopRequireDefault(_Button),_Typography=__webpack_require__(72),_Typography2=_interopRequireDefault(_Typography),_styles=__webpack_require__(33);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__(3).enterModule;e&&e(module)}();var styles={root:{width:"100%",maxWidth:800},button:{margin:8,color:"white"}},App=function(_React$Component){function App(){(0,_classCallCheck3.default)(this,App);var e=(0,_possibleConstructorReturn3.default)(this,(App.__proto__||(0,_getPrototypeOf2.default)(App)).call(this));return e.state={count:0},e}return(0,_inherits3.default)(App,_React$Component),(0,_createClass3.default)(App,[{key:"handleButton",value:function(e){var t=this.state.count;this.setState({count:t+e})}},{key:"handleResetButton",value:function(){this.setState({count:0})}},{key:"render",value:function(){var e=this,t=this.props.classes,r=this.state.count;return _react2.default.createElement("div",{className:t.root},_react2.default.createElement(_Typography2.default,{variant:"display3",gutterBottom:!0},"Hello World!"),_react2.default.createElement(_Typography2.default,{variant:"display2",gutterBottom:!0},"count: "+r),_react2.default.createElement("div",null,_react2.default.createElement(_Button2.default,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.handleButton(1)}},"+"),_react2.default.createElement(_Button2.default,{variant:"contained",color:"secondary",className:t.button,onClick:function(){return e.handleButton(-1)}},"-")),_react2.default.createElement("div",null,_react2.default.createElement(_Button2.default,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.handleResetButton(0)}},"Reset")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(_react2.default.Component);App.propTypes={classes:_propTypes2.default.shape().isRequired},App.defaultProp={classes:{}};var _default=(0,_reactHotLoader.hot)(module)((0,_styles.withStyles)(styles)(App));exports.default=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(styles,"styles","/Users/t01935/dev/hanson/caad-react-boilerplate/src/LegacyApp/index.jsx"),e.register(App,"App","/Users/t01935/dev/hanson/caad-react-boilerplate/src/LegacyApp/index.jsx"),e.register(_default,"default","/Users/t01935/dev/hanson/caad-react-boilerplate/src/LegacyApp/index.jsx"),t(module))}()}).call(this,__webpack_require__(14)(module))},264:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__(99),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(60),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(61),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(102),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(109),_inherits3=_interopRequireDefault(_inherits2),_dec,_class,_class2,_temp,_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactHotLoader=__webpack_require__(3),_reactRouterDom=__webpack_require__(115),_propTypes=__webpack_require__(0),_propTypes2=_interopRequireDefault(_propTypes),_mobxReact=__webpack_require__(90),_Button=__webpack_require__(110),_Button2=_interopRequireDefault(_Button),_Typography=__webpack_require__(72),_Typography2=_interopRequireDefault(_Typography),_styles=__webpack_require__(33);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__(3).enterModule;e&&e(module)}();var styles={root:{width:"100%",maxWidth:800},button:{margin:8,color:"white"}},App=(_dec=(0,_mobxReact.inject)("app"),_dec(_class=(0,_mobxReact.observer)((_temp=_class2=function(_React$Component){function App(){return(0,_classCallCheck3.default)(this,App),(0,_possibleConstructorReturn3.default)(this,(App.__proto__||(0,_getPrototypeOf2.default)(App)).apply(this,arguments))}return(0,_inherits3.default)(App,_React$Component),(0,_createClass3.default)(App,[{key:"handleButton",value:function(e){this.props.app.addCount(e)}},{key:"handleResetButton",value:function(){this.props.app.init()}},{key:"render",value:function(){var e=this,t=this.props,r=t.classes,a=t.app.count;return _react2.default.createElement("div",{className:r.root},_react2.default.createElement("div",null,_react2.default.createElement(_Typography2.default,{variant:"display3",gutterBottom:!0},"Counter"),_react2.default.createElement(_Typography2.default,{variant:"display2",gutterBottom:!0},"count: "+a),_react2.default.createElement(_Button2.default,{variant:"contained",color:"primary",className:r.button,onClick:function(){return e.handleButton(1)}},"+"),_react2.default.createElement(_Button2.default,{variant:"contained",color:"secondary",className:r.button,onClick:function(){return e.handleButton(-1)}},"-")),_react2.default.createElement("div",null,_react2.default.createElement(_Button2.default,{variant:"contained",color:"primary",className:r.button,onClick:function(){return e.handleResetButton()}},"Reset"),_react2.default.createElement(_Typography2.default,{variant:"display5",gutterBottom:!0},_react2.default.createElement(_reactRouterDom.Link,{to:"/readme"},"Readme"))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(_react2.default.Component),_class2.propTypes={app:_propTypes2.default.shape().isRequired,classes:_propTypes2.default.shape().isRequired},_class=_temp))||_class)||_class),_default=(0,_reactHotLoader.hot)(module)((0,_styles.withStyles)(styles)(App));exports.default=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(styles,"styles","/Users/t01935/dev/hanson/caad-react-boilerplate/src/App/index.jsx"),e.register(App,"App","/Users/t01935/dev/hanson/caad-react-boilerplate/src/App/index.jsx"),e.register(_default,"default","/Users/t01935/dev/hanson/caad-react-boilerplate/src/App/index.jsx"),t(module))}()}).call(this,__webpack_require__(14)(module))},265:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=_(r(1)),n=r(3),o=_(r(0)),l=_(r(72)),u=r(33),i=_(r(266)),s=_(r(270)),c=_(r(272));function _(e){return e&&e.__esModule?e:{default:e}}!function(){var t=r(3).enterModule;t&&t(e)}();var p={root:{width:"100%",maxWidth:800,margin:24},card:{minWidth:275,margin:24},title:{marginBottom:16,fontSize:24},content:{marginTop:16,marginBottom:16,fontSize:24}},d=function(e){var t=e.classes;return a.default.createElement("div",{className:t.root},a.default.createElement(l.default,{variant:"display3",gutterBottom:!0},"Profile"),a.default.createElement(i.default,{className:t.card},a.default.createElement(s.default,null,a.default.createElement(l.default,{className:t.title},"Name"),a.default.createElement(c.default,null),a.default.createElement(l.default,{className:t.content,component:"h2"},"Naoki Yamashiro"))),a.default.createElement(i.default,{className:t.card},a.default.createElement(s.default,null,a.default.createElement(l.default,{className:t.title},"Skill"),a.default.createElement(c.default,null),a.default.createElement(l.default,{className:t.content,component:"h2"},"JavaScript(ES6)"),a.default.createElement(l.default,{className:t.content,component:"h2"},"Vue.js"),a.default.createElement(l.default,{className:t.content,component:"h2"},"Node.js"))))};d.propTypes={classes:o.default.shape().isRequired},d.defaultProp={classes:{}};var f=(0,n.hot)(e)((0,u.withStyles)(p)(d));t.default=f,function(){var t=r(3).default,a=r(3).leaveModule;t&&(t.register(p,"styles","/Users/t01935/dev/hanson/caad-react-boilerplate/src/Readme/index.jsx"),t.register(d,"App","/Users/t01935/dev/hanson/caad-react-boilerplate/src/Readme/index.jsx"),t.register(f,"default","/Users/t01935/dev/hanson/caad-react-boilerplate/src/Readme/index.jsx"),a(e))}()}).call(this,r(14)(e))}});