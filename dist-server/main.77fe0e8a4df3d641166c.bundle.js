!function(l,n){for(var e in n)l[e]=n[e]}(exports,function(l){function n(t){if(e[t])return e[t].exports;var u=e[t]={i:t,l:!1,exports:{}};return l[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}var e={};return n.m=l,n.c=e,n.d=function(l,e,t){n.o(l,e)||Object.defineProperty(l,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(l){var e=l&&l.__esModule?function(){return l.default}:function(){return l};return n.d(e,"a",e),e},n.o=function(l,n){return Object.prototype.hasOwnProperty.call(l,n)},n.p="",n(n.s=0)}({"/3iT":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("A7Ap"),u=function(){function l(l,n){this.route=l,this.router=n}return l.prototype.ngOnInit=function(){var l=this;this.route.paramMap.subscribe(function(n){l.id=parseInt(n.get("id"))})},l.ctorParameters=function(){return[{type:t.ActivatedRoute},{type:t.Router}]},l}();n.DetailsviewComponent=u},0:function(l,n,e){l.exports=e("Zq8w")},"2ha/":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function l(){}return l}();n.AppServerModule=t},"7dx1":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function l(){}return l}();n.DetailsModule=t},"8wGh":function(l,n){l.exports=require("@angular/animations/browser")},A7Ap:function(l,n){l.exports=require("@angular/router")},ASwt:function(l,n){l.exports=require("@angular/platform-server")},"Hq/i":function(l,n){l.exports=require("@angular/platform-browser/animations")},Ir0Z:function(l,n){l.exports=require("@angular/common/http")},KnLC:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("OQ0P"),u=e("2ha/"),o=e("wQAS"),r=e("yFfL"),i=e("eDwf"),d=e("q4dy"),a=e("yv0u"),c=e("wp5R"),p=e("ASwt"),s=e("8wGh"),m=e("Hq/i"),f=e("A7Ap"),M=e("f9NF"),y=e("Ir0Z"),g=e("l0JX"),v=e("7dx1"),R=e("MlZX"),A=e("/3iT"),L=e("aR8+");n.AppServerModuleNgFactory=t.\u0275cmf(u.AppServerModule,[o.AppComponent],function(l){return t.\u0275mod([t.\u0275mpd(512,t.ComponentFactoryResolver,t.\u0275CodegenComponentFactoryResolver,[[8,[r.ListComponentNgFactory,i.DetailsviewComponentNgFactory,d.AppComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.\u0275mpd(5120,t.LOCALE_ID,t.\u0275m,[[3,t.LOCALE_ID]]),t.\u0275mpd(4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID]),t.\u0275mpd(5120,t.IterableDiffers,t.\u0275k,[]),t.\u0275mpd(5120,t.KeyValueDiffers,t.\u0275l,[]),t.\u0275mpd(4608,c.DomSanitizer,c.\u0275e,[a.DOCUMENT]),t.\u0275mpd(6144,t.Sanitizer,null,[c.DomSanitizer]),t.\u0275mpd(4608,c.HAMMER_GESTURE_CONFIG,c.HammerGestureConfig,[]),t.\u0275mpd(5120,c.EVENT_MANAGER_PLUGINS,function(l,n,e,t){return[new c.\u0275DomEventsPlugin(l),new c.\u0275KeyEventsPlugin(n),new c.\u0275HammerGesturesPlugin(e,t)]},[a.DOCUMENT,a.DOCUMENT,a.DOCUMENT,c.HAMMER_GESTURE_CONFIG]),t.\u0275mpd(4608,c.EventManager,c.EventManager,[c.EVENT_MANAGER_PLUGINS,t.NgZone]),t.\u0275mpd(135680,c.\u0275DomSharedStylesHost,c.\u0275DomSharedStylesHost,[a.DOCUMENT]),t.\u0275mpd(4608,c.\u0275DomRendererFactory2,c.\u0275DomRendererFactory2,[c.EventManager,c.\u0275DomSharedStylesHost]),t.\u0275mpd(4608,p.\u0275b,p.\u0275b,[c.DOCUMENT,[2,c.\u0275TRANSITION_ID]]),t.\u0275mpd(6144,c.\u0275SharedStylesHost,null,[p.\u0275b]),t.\u0275mpd(4608,p.\u0275ServerRendererFactory2,p.\u0275ServerRendererFactory2,[t.NgZone,c.DOCUMENT,c.\u0275SharedStylesHost]),t.\u0275mpd(4608,s.AnimationDriver,s.\u0275NoopAnimationDriver,[]),t.\u0275mpd(5120,s.\u0275AnimationStyleNormalizer,m.\u0275d,[]),t.\u0275mpd(4608,s.\u0275AnimationEngine,m.\u0275b,[s.AnimationDriver,s.\u0275AnimationStyleNormalizer]),t.\u0275mpd(5120,t.RendererFactory2,p.\u0275a,[p.\u0275ServerRendererFactory2,s.\u0275AnimationEngine,t.NgZone]),t.\u0275mpd(4352,t.Testability,null,[]),t.\u0275mpd(4608,c.Meta,c.Meta,[a.DOCUMENT]),t.\u0275mpd(4608,c.Title,c.Title,[a.DOCUMENT]),t.\u0275mpd(5120,f.ActivatedRoute,f.\u0275f,[f.Router]),t.\u0275mpd(4608,f.NoPreloading,f.NoPreloading,[]),t.\u0275mpd(6144,f.PreloadingStrategy,null,[f.NoPreloading]),t.\u0275mpd(135680,f.RouterPreloader,f.RouterPreloader,[f.Router,t.NgModuleFactoryLoader,t.Compiler,t.Injector,f.PreloadingStrategy]),t.\u0275mpd(4608,f.PreloadAllModules,f.PreloadAllModules,[]),t.\u0275mpd(5120,f.ROUTER_INITIALIZER,f.\u0275i,[f.\u0275g]),t.\u0275mpd(5120,t.APP_BOOTSTRAP_LISTENER,function(l){return[l]},[f.ROUTER_INITIALIZER]),t.\u0275mpd(4608,M.BrowserXhr,p.\u0275c,[]),t.\u0275mpd(4608,M.ResponseOptions,M.BaseResponseOptions,[]),t.\u0275mpd(4608,M.XSRFStrategy,p.\u0275d,[]),t.\u0275mpd(4608,M.XHRBackend,M.XHRBackend,[M.BrowserXhr,M.ResponseOptions,M.XSRFStrategy]),t.\u0275mpd(4608,M.RequestOptions,M.BaseRequestOptions,[]),t.\u0275mpd(5120,M.Http,p.\u0275e,[M.XHRBackend,M.RequestOptions]),t.\u0275mpd(4608,y.HttpXsrfTokenExtractor,y.\u0275g,[a.DOCUMENT,t.PLATFORM_ID,y.\u0275e]),t.\u0275mpd(4608,y.\u0275h,y.\u0275h,[y.HttpXsrfTokenExtractor,y.\u0275f]),t.\u0275mpd(5120,y.HTTP_INTERCEPTORS,function(l){return[l]},[y.\u0275h]),t.\u0275mpd(4608,y.XhrFactory,p.\u0275c,[]),t.\u0275mpd(4608,y.HttpXhrBackend,y.HttpXhrBackend,[y.XhrFactory]),t.\u0275mpd(6144,y.HttpBackend,null,[y.HttpXhrBackend]),t.\u0275mpd(5120,y.HttpHandler,p.\u0275f,[y.HttpBackend,[2,y.HTTP_INTERCEPTORS]]),t.\u0275mpd(4608,y.HttpClient,y.HttpClient,[y.HttpHandler]),t.\u0275mpd(4608,y.\u0275d,y.\u0275d,[]),t.\u0275mpd(4608,g.AnimationBuilder,m.\u0275BrowserAnimationBuilder,[t.RendererFactory2]),t.\u0275mpd(512,a.CommonModule,a.CommonModule,[]),t.\u0275mpd(1024,t.ErrorHandler,c.\u0275a,[]),t.\u0275mpd(1024,t.NgProbeToken,function(){return[f.\u0275b()]},[]),t.\u0275mpd(256,t.APP_ID,"my-app",[]),t.\u0275mpd(2048,c.\u0275TRANSITION_ID,null,[t.APP_ID]),t.\u0275mpd(512,f.\u0275g,f.\u0275g,[t.Injector]),t.\u0275mpd(1024,t.APP_INITIALIZER,function(l,n,e,t,u,o){return[c.\u0275c(l,n),c.\u0275f(e,t,u),f.\u0275h(o)]},[[2,c.NgProbeToken],[2,t.NgProbeToken],c.\u0275TRANSITION_ID,a.DOCUMENT,t.Injector,f.\u0275g]),t.\u0275mpd(512,t.ApplicationInitStatus,t.ApplicationInitStatus,[[2,t.APP_INITIALIZER]]),t.\u0275mpd(131584,t.\u0275e,t.\u0275e,[t.NgZone,t.\u0275Console,t.Injector,t.ErrorHandler,t.ComponentFactoryResolver,t.ApplicationInitStatus]),t.\u0275mpd(2048,t.ApplicationRef,null,[t.\u0275e]),t.\u0275mpd(512,t.ApplicationModule,t.ApplicationModule,[t.ApplicationRef]),t.\u0275mpd(512,c.BrowserModule,c.BrowserModule,[[3,c.BrowserModule]]),t.\u0275mpd(512,v.DetailsModule,v.DetailsModule,[]),t.\u0275mpd(1024,f.\u0275a,f.\u0275d,[[3,f.Router]]),t.\u0275mpd(512,f.UrlSerializer,f.DefaultUrlSerializer,[]),t.\u0275mpd(512,f.ChildrenOutletContexts,f.ChildrenOutletContexts,[]),t.\u0275mpd(256,f.ROUTER_CONFIGURATION,{},[]),t.\u0275mpd(1024,a.LocationStrategy,f.\u0275c,[a.PlatformLocation,[2,a.APP_BASE_HREF],f.ROUTER_CONFIGURATION]),t.\u0275mpd(512,a.Location,a.Location,[a.LocationStrategy]),t.\u0275mpd(512,t.Compiler,t.Compiler,[]),t.\u0275mpd(512,t.NgModuleFactoryLoader,t.SystemJsNgModuleLoader,[t.Compiler,[2,t.SystemJsNgModuleLoaderConfig]]),t.\u0275mpd(1024,f.ROUTES,function(){return[[{path:"",component:R.ListComponent},{path:"details/:id",component:A.DetailsviewComponent}]]},[]),t.\u0275mpd(1024,f.Router,f.\u0275e,[t.ApplicationRef,f.UrlSerializer,f.ChildrenOutletContexts,a.Location,t.Injector,t.NgModuleFactoryLoader,t.Compiler,f.ROUTES,f.ROUTER_CONFIGURATION,[2,f.UrlHandlingStrategy],[2,f.RouteReuseStrategy]]),t.\u0275mpd(512,f.RouterModule,f.RouterModule,[[2,f.\u0275a],[2,f.Router]]),t.\u0275mpd(512,L.AppModule,L.AppModule,[]),t.\u0275mpd(512,M.HttpModule,M.HttpModule,[]),t.\u0275mpd(512,y.HttpClientXsrfModule,y.HttpClientXsrfModule,[]),t.\u0275mpd(512,y.HttpClientModule,y.HttpClientModule,[]),t.\u0275mpd(512,m.NoopAnimationsModule,m.NoopAnimationsModule,[]),t.\u0275mpd(512,p.ServerModule,p.ServerModule,[]),t.\u0275mpd(512,u.AppServerModule,u.AppServerModule,[]),t.\u0275mpd(256,y.\u0275e,"XSRF-TOKEN",[]),t.\u0275mpd(256,y.\u0275f,"X-XSRF-TOKEN",[])])})},MlZX:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}();n.ListComponent=t},NhKt:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.styles=["h1[_ngcontent-%COMP%]{font-family:cursive}"]},OQ0P:function(l,n){l.exports=require("@angular/core")},Zq8w:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("2ha/");n.AppServerModule=t.AppServerModule;var u=e("KnLC");n.AppServerModuleNgFactory=u.AppServerModuleNgFactory,n.LAZY_MODULE_MAP={}},Zsbt:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.styles=[""]},"aR8+":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function l(){}return l}();n.AppModule=t},bOzK:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.styles=[""]},eDwf:function(l,n,e){"use strict";function t(l){return r.\u0275vid(0,[(l()(),r.\u0275eld(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n  detailsview works!\n  Value received is: ","\n"])),(l()(),r.\u0275ted(null,["\n"]))],null,function(l,n){l(n,1,0,n.component.id)})}function u(l){return r.\u0275vid(0,[(l()(),r.\u0275eld(0,null,null,1,"app-detailsview",[],null,null,null,t,n.RenderType_DetailsviewComponent)),r.\u0275did(114688,null,0,i.DetailsviewComponent,[d.ActivatedRoute,d.Router],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var o=e("bOzK"),r=e("OQ0P"),i=e("/3iT"),d=e("A7Ap"),a=[o.styles];n.RenderType_DetailsviewComponent=r.\u0275crt({encapsulation:0,styles:a,data:{}}),n.View_DetailsviewComponent_0=t,n.View_DetailsviewComponent_Host_0=u,n.DetailsviewComponentNgFactory=r.\u0275ccf("app-detailsview",i.DetailsviewComponent,u,{},{},[])},f9NF:function(l,n){l.exports=require("@angular/http")},l0JX:function(l,n){l.exports=require("@angular/animations")},q4dy:function(l,n,e){"use strict";function t(l){return r.\u0275vid(0,[(l()(),r.\u0275ted(null,["\n"])),(l()(),r.\u0275eld(0,null,null,11,"div",[["style","text-align:center"]],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n    Welcome to ","!\n  "])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,7).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(1),(l()(),r.\u0275ted(null,["\n    "])),(l()(),r.\u0275eld(0,null,null,0,"img",[["src","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo="],["width","300"]],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275ted(null,["\n"])),(l()(),r.\u0275ted(null,["\n"])),(l()(),r.\u0275eld(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r.\u0275did(212992,null,0,i.RouterOutlet,[i.ChildrenOutletContexts,r.ViewContainerRef,r.ComponentFactoryResolver,[8,null],r.ChangeDetectorRef],null,null),(l()(),r.\u0275ted(null,["\n"])),(l()(),r.\u0275eld(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),r.\u0275ted(null,["Here are some links to help you start: "])),(l()(),r.\u0275ted(null,["\n"])),(l()(),r.\u0275eld(0,null,null,22,"ul",[],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,5,"li",[],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n    "])),(l()(),r.\u0275eld(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,1,"a",[["href","https://angular.io/tutorial"],["target","_blank"]],null,null,null,null,null)),(l()(),r.\u0275ted(null,["Tour of Heroes"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,5,"li",[],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n    "])),(l()(),r.\u0275eld(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,1,"a",[["href","https://github.com/angular/angular-cli/wiki"],["target","_blank"]],null,null,null,null,null)),(l()(),r.\u0275ted(null,["CLI Documentation"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,5,"li",[],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n    "])),(l()(),r.\u0275eld(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,1,"a",[["href","https://blog.angular.io//"],["target","_blank"]],null,null,null,null,null)),(l()(),r.\u0275ted(null,["Angular blog"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275ted(null,["\n"]))],function(l,n){l(n,7,0,l(n,8,0,"/")),l(n,15,0)},function(l,n){l(n,4,0,n.component.title),l(n,6,0,r.\u0275nov(n,7).target,r.\u0275nov(n,7).href)})}function u(l){return r.\u0275vid(0,[(l()(),r.\u0275eld(0,null,null,1,"app-root",[],null,null,null,t,n.RenderType_AppComponent)),r.\u0275did(49152,null,0,a.AppComponent,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var o=e("NhKt"),r=e("OQ0P"),i=e("A7Ap"),d=e("yv0u"),a=e("wQAS"),c=[o.styles];n.RenderType_AppComponent=r.\u0275crt({encapsulation:0,styles:c,data:{}}),n.View_AppComponent_0=t,n.View_AppComponent_Host_0=u,n.AppComponentNgFactory=r.\u0275ccf("app-root",a.AppComponent,u,{},{},[])},wQAS:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function l(){this.title="app"}return l}();n.AppComponent=t},wp5R:function(l,n){l.exports=require("@angular/platform-browser")},yFfL:function(l,n,e){"use strict";function t(l){return r.\u0275vid(0,[(l()(),r.\u0275eld(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n  list works!\n"])),(l()(),r.\u0275ted(null,["\n"])),(l()(),r.\u0275eld(0,null,null,61,"ul",[],null,null,null,null,null)),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,7).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["1"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,13).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["2"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,19).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["3"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,25).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["4"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,31).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["5"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,37).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["6"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,43).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["7"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,49).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["8"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,55).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["9"])),(l()(),r.\u0275ted(null,["\n  "])),(l()(),r.\u0275eld(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),r.\u0275eld(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==r.\u0275nov(l,61).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}return t},null,null)),r.\u0275did(671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),r.\u0275pad(2),(l()(),r.\u0275ted(null,["10"])),(l()(),r.\u0275ted(null,["\n"]))],function(l,n){l(n,7,0,l(n,8,0,"/details",1)),l(n,13,0,l(n,14,0,"/details",2)),l(n,19,0,l(n,20,0,"/details",3)),l(n,25,0,l(n,26,0,"/details",4)),l(n,31,0,l(n,32,0,"/details",5)),l(n,37,0,l(n,38,0,"/details",6)),l(n,43,0,l(n,44,0,"/details",7)),l(n,49,0,l(n,50,0,"/details",8)),l(n,55,0,l(n,56,0,"/details",9)),l(n,61,0,l(n,62,0,"/details",10))},function(l,n){l(n,6,0,r.\u0275nov(n,7).target,r.\u0275nov(n,7).href),l(n,12,0,r.\u0275nov(n,13).target,r.\u0275nov(n,13).href),l(n,18,0,r.\u0275nov(n,19).target,r.\u0275nov(n,19).href),l(n,24,0,r.\u0275nov(n,25).target,r.\u0275nov(n,25).href),l(n,30,0,r.\u0275nov(n,31).target,r.\u0275nov(n,31).href),l(n,36,0,r.\u0275nov(n,37).target,r.\u0275nov(n,37).href),l(n,42,0,r.\u0275nov(n,43).target,r.\u0275nov(n,43).href),l(n,48,0,r.\u0275nov(n,49).target,r.\u0275nov(n,49).href),l(n,54,0,r.\u0275nov(n,55).target,r.\u0275nov(n,55).href),l(n,60,0,r.\u0275nov(n,61).target,r.\u0275nov(n,61).href)})}function u(l){return r.\u0275vid(0,[(l()(),r.\u0275eld(0,null,null,1,"app-list",[],null,null,null,t,n.RenderType_ListComponent)),r.\u0275did(114688,null,0,a.ListComponent,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var o=e("Zsbt"),r=e("OQ0P"),i=e("A7Ap"),d=e("yv0u"),a=e("MlZX"),c=[o.styles];n.RenderType_ListComponent=r.\u0275crt({encapsulation:0,styles:c,data:{}}),n.View_ListComponent_0=t,n.View_ListComponent_Host_0=u,n.ListComponentNgFactory=r.\u0275ccf("app-list",a.ListComponent,u,{},{},[])},yv0u:function(l,n){l.exports=require("@angular/common")}}));