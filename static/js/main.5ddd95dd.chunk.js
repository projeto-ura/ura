(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],Array(23).concat([function(e,t,n){e.exports=n.p+"static/media/sensor.687ac6fd.jpg"},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/01.1126c0dc.JPG"},function(e,t,n){e.exports=n.p+"static/media/02.1aebf31e.JPG"},function(e,t,n){e.exports=n.p+"static/media/03.73102c1b.JPG"},function(e,t,n){e.exports=n.p+"static/media/04.ed4e1098.JPG"},function(e,t,n){e.exports=n.p+"static/media/study.855adeac.svg"},function(e,t,n){e.exports=n.p+"static/media/school.d83f15b8.svg"},function(e,t,n){e.exports=n.p+"static/media/training.e44c8f30.svg"},function(e,t,n){e.exports=n.p+"static/media/teacher.fd0dee78.svg"},,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo-ura.332ca720.png"},,,function(e,t,n){e.exports=n(66)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo-facebookv2.25500a5c.png"},function(e,t,n){e.exports=n.p+"static/media/logo-instagramv2.f29a34b7.png"},function(e,t,n){e.exports=n.p+"static/media/logo-githubv2.5a2d5cfe.png"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(22),i=n.n(o),c=n(17),r=n(10),l=n(1),u=n(2),m=n(4),d=n(3),h=n(5),p=(n(45),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-wallpaper"})}}]),t}(a.Component)),v=(n(46),n(23)),f=n.n(v),b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-quem-somos"},s.a.createElement("div",{className:"container-text"},s.a.createElement("h1",null,"Quem Somos"),s.a.createElement("p",null,"Acreditamos que a escola deve ser o lugar onde os alunos despertem sua criatividade, deem vidas aos seus sonhos e construam o seu pr\xf3prio futuro. Al\xe9m disso, atuamos com abordagens de ensino capazes de estimular o pensamento empreendedor na constru\xe7\xe3o de conhecimentos, projetos e prop\xf3sitos de vida!")),s.a.createElement("div",{className:"container-image"},s.a.createElement("img",{src:f.a,className:"image"})))}}]),t}(a.Component),E=n(14),x=n(6),g=(n(38),function(){function e(){Object(l.a)(this,e),"undefined"!==typeof window&&(this.image=new Image,this.resolve=null,this.video=document.createElement("video"),this.events())}return Object(u.a)(e,[{key:"events",value:function(){var e=this;this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!0)})),this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!1)})),this.image.onload=function(){return e.resolve&&e.resolve(!0)},this.image.onerror=function(){return e.resolve&&e.resolve(!1)}}},{key:"load",value:function(e){var t=this;return new Promise((function(n){e||n(!0),t.resolve=n,t.loading=!0,t.ended=!1,e.match(/\.(mp4|webm)/i)&&t.video.setAttribute("src",e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&(t.image.src=e,(t.image.width>0||t.image.height>0)&&n(!0))}))}}]),e}());function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t&&t[e]||e}var N=n(39);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){var t=[];return(e.constructor===Array?e:[e]).forEach((function(e){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props);e.props["data-src"]&&(n.url=e.props["data-src"]),t.push(n)})),t}var L=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).bulletClick=function(e){var t=e.currentTarget;t.classList.add(y("".concat(n.rootElement,"__bullets--loading"),n.props.cssModule));var a=parseInt(t.getAttribute("data-index"),10),s=!(n.props.selected>a);n.props.onClick({index:a,direction:s})},n.rootElement=e.rootElement,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderBullets",value:function(){var e=this,t=this.props,n=t.cssModule,a=t.selected;return this.props.media.map((function(t,o){var i=o===a?y("".concat(e.rootElement,"__bullets--active"),n):null;return s.a.createElement("button",{key:"bullet-".concat(o),"data-index":o,onClick:e.bulletClick,className:i},o)}))}},{key:"render",value:function(){var e=this.props,t=e.cssModule,n=e.rootElement;return s.a.createElement("nav",{className:y("".concat(n,"__bullets"),t)},this.renderBullets())}}]),t}(s.a.Component);L.defaultProps={cssModule:null,selected:0};var _=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onMount({element:this.controls,next:this.next,prev:this.prev})}},{key:"render",value:function(){var e=this,t=this.props,n=t.rootElement,a=t.cssModule,o=t.organicArrows,i=t.onNext,c=t.onPrev;return s.a.createElement("div",{ref:function(t){e.controls=t},className:y("".concat(n,"__controls"),a)},s.a.createElement("button",{ref:function(t){e.next=t},className:y("".concat(n,"__next"),a),onClick:i},o&&s.a.createElement("span",{className:y("".concat(n,"__controls__arrow-right"),a)})),s.a.createElement("button",{ref:function(t){e.prev=t},className:y("".concat(n,"__prev"),a),onClick:c},o&&s.a.createElement("span",{className:y("".concat(n,"__controls__arrow-left"),a)})))}}]),t}(s.a.Component);_.defaultProps={cssModule:null,organicArrows:!0};var S=n(15),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.media,n=e.className,a=t.url,o=t.children,i=t.style,c=(t.loader,t["data-src"],t.className),r=Object(S.a)(t,["url","children","style","loader","data-src","className"]),l=null;return a&&(l=a.match(/\.(mp4|webm)/)?s.a.createElement("video",{title:t.title,src:a,type:"video/mp4",controls:!0}):s.a.createElement("img",{alt:t.alt||t.title||null,src:a})),s.a.createElement("div",Object.assign({className:n,style:i||null},r),l,o&&s.a.createElement("div",{className:c},t.children))}}]),t}(s.a.Component);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C="awssld",w=new g,T=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).clickNext=function(){n.transitionRequest("next");var e=null===n.index?0:n.index+1;n.goTo({index:e,direction:!0})},n.clickPrev=function(){n.transitionRequest("prev"),n.goTo({index:n.index-1,direction:!1})},n.touchStart=function(e){if(!n.animating&&null!==n.index){var t=e.nativeEvent;n.touchStartPoint=t.touches[0].clientX}},n.touchMove=function(e){if(!n.animating&&n.touchStartPoint){var t=e.nativeEvent,a=t.touches[0].clientX-n.touchStartPoint,s=n[n.active],o=n[n.loader],i=!(a>0),c=Math.abs(a);!1!==n.touchEnabled?c>=10&&(!1===n.loading?n.goTo({index:i?n.index+1:n.index-1,direction:i,touch:!0}):!0===n.direction?(a+=10,Math.abs(a)>s.offsetWidth?a=-s.offsetWidth:a>0&&(a=0),s.style.transform="translate3d(".concat(a,"px, 0, 0)"),o.style.transform="translate3d(calc(100% + ".concat(a,"px), 0, 0)")):(a-=10,Math.abs(a)>s.offsetWidth?a=s.offsetWidth:a<0&&(a=0),s.style.transform="translate3d(".concat(a,"px, 0, 0)"),o.style.transform="translate3d(calc(-100% + ".concat(a,"px), 0, 0)"))):c>20&&(n.touchEnabled=!0,n.touchStartPoint=t.touches[0].clientX)}},n.touchEnd=function(){!n.animating&&n.touchStartPoint&&n.loading&&(n.touchStartPoint=null,n.animating=!0,n.touchEnabled=!1,n.animateMobileEnd((function(){n.index=n.nextIndex,n.setState({index:n.index}),n.props.onTransitionEnd&&n.props.onTransitionEnd(k({},n.getInfo())),n.animating=!1,n.loading=!1,n.unchargeIndex()})))},n.bulletClick=function(e){var t=e.currentTarget,a=parseInt(t.getAttribute("data-index"),10);n.goTo({index:a,direction:!(n.index>a)},(function(){Object(x.onceNextCssLayout)().then((function(){t.classList.add(n.classNames.bulletsLoading)}))}))},n.rootElement=e.rootElement||C,n.boxA=null,n.boxB=null,n.loaded=[],n.active="boxA",n.loader="boxB",n.nextIndex=null,n.loading=!1,n.media=null,n.started=!1,n.touchEnabled=!1,n.setupStartup(e),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.boxA.classList.add(this.classNames.active),this.props.startupScreen&&(this.buttons.element.classList.add(this.classNames.controlsActive),!0===this.props.startup&&this.startup()),this.props.onFirstMount&&this.props.onFirstMount(k({},this.getInfo()))}},{key:"componentWillReceiveProps",value:function(e){if(this.checkChildren(e),this.setupClassNames(e.cssModule),e.name===this.props.name)if(!0!==e.startup||!1!==this.started)if(e.selected===this.props.selected)this.refreshSlider();else{var t=e.selected,n=!0===e.infinite&&0===t||!(this.index>t);this.goTo({index:t,direction:n})}else this.startup();else this.resetSlider(e.selected)}},{key:"getRootClassName",value:function(){var e=this.props,t=e.fillParent,n=e.infinite,a=e.className,s=e.organicArrows,o=e.disabled;return function(e){var t,n=e.rootElement,a=e.cssModule,s=e.disabled,o=e.organicArrows,i=e.className,c=e.total,r=e.current,l=e.infinite,u=e.fillParent,m=[n];return!0===o&&m.push("".concat(n,"--organic-arrows")),!0===s&&m.push("".concat(n,"--disabled")),u&&m.push("".concat(n,"--fill-parent")),!1===l&&(0===r&&m.push("".concat(n,"--first")),r===c-1&&m.push("".concat(n,"--last"))),a&&a[n]&&(m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(!t)return e.join(" ").trim();for(var n=[],a=e.length;a--;)t[e[a]]&&n.push(t[e[a]]);return n}(m,a)),i&&(t=m).push.apply(t,Object(N.a)(i.split(" "))),m.join(" ").trim().replace(/[\s]+/gi," ")}({cssModule:e.cssModule,disabled:o,organicArrows:s,className:a,infinite:n,fillParent:t,rootElement:this.rootElement,current:this.state.index,total:this.media.length})}},{key:"setupStartup",value:function(e){this.checkChildren(e),this.setupClassNames(e.cssModule),e.startupScreen?(this.index=null,this.state={index:this.index,boxA:{className:this.classNames.startUp,children:e.startupScreen},boxB:null}):(this.started=!0,this.index=this.props.selected,this.state={index:this.index,boxA:this.media[this.index]||null,boxB:null})}},{key:"getInfo",value:function(){return{slides:this.media.length,currentIndex:this.index,currentSlide:this[this.active],element:this.slider}}},{key:"getBar",value:function(){if(!document)return{};var e=document.createElement("div");return e.className=this.classNames.bar,e}},{key:"setupClassNames",value:function(e){this.classNames=function(e,t){return{boxA:y("".concat(e,"__boxA"),t),boxB:y("".concat(e,"__boxB"),t),box:y("".concat(e,"__box"),t),container:y("".concat(e,"__container"),t),wrapper:y("".concat(e,"__wrapper"),t),bar:y("".concat(e,"__bar"),t),barActive:y("".concat(e,"__bar--active"),t),barEnd:y("".concat(e,"__bar--end"),t),content:y("".concat(e,"__content"),t),contentStatic:y("".concat(e,"__content--static"),t),contentMoveLeft:y("".concat(e,"__content--moveLeft"),t),contentMoveRight:y("".concat(e,"__content--moveRight"),t),controlsActive:y("".concat(e,"__controls--active"),t),animated:y("".concat(e,"--animated"),t),animatedMobile:y("".concat(e,"--animated-mobile"),t),contentExit:y("".concat(e,"__content--exit"),t),exit:y("".concat(e,"--exit"),t),active:y("".concat(e,"--active"),t),moveLeft:y("".concat(e,"--moveLeft"),t),moveRight:y("".concat(e,"--moveRight"),t),startUp:y("".concat(e,"__startUp"),t),bulletsLoading:y("".concat(e,"__bullets--loading"),t)}}(this.rootElement,e)}},{key:"refreshSlider",value:function(){if(!0!==this.loading&&!1!==this.props.startup&&null!==this.index){var e=this.index;this.setState({index:e,boxA:this.media[e],boxB:this.media[e]})}}},{key:"startup",value:function(){var e=this;this.started=!0,setTimeout((function(){Object(x.onceNextCssLayout)().then((function(){e.goTo({index:e.props.selected,direction:!0,touch:!1})}))}),100)}},{key:"resetSlider",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.index=t,this.setState({index:t,boxA:this.media[t],boxB:this.media[t]},(function(){e.props.onResetSlider&&e.props.onResetSlider(k({},e.getInfo()))}))}},{key:"checkChildren",value:function(e){e.children?e.children===this.props.children&&this.media||(this.media=j(e.children)):e.media!==this.props.media&&(this.media=e.media)}},{key:"loadContent",value:function(e,t){var n=this;return new Promise((function(a){if(!n.loaded.includes(t)&&t){var s=n.getBar();e.appendChild(s),Object(x.onceNextCssLayout)().then((function(){Object(x.onceNextCssLayout)().then((function(){s.classList.add(n.classNames.barActive)})),w.load(t).then((function(){n.loaded.push(t),Object(x.onceNextCssLayout)().then((function(){Object(x.onceTransitionEnd)(s).then((function(){a(s)})),s.classList.add(n.classNames.barEnd)}))}))}))}else a(null)}))}},{key:"startAnimationMobile",value:function(){var e=this.direction,t=this[this.active],n=this[this.loader],a=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,s=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight;this.props.onTransitionStart&&this.props.onTransitionStart(k({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex}));var o=t.querySelector(".".concat(this.classNames.content));o.classList.add(s),o.classList.add(this.classNames.contentExit);var i=n.querySelector(".".concat(this.classNames.content));i.classList.add(a),i.classList.add(this.classNames.contentStatic)}},{key:"animateMobileEnd",value:function(e){var t=this,n=this.direction,a=this[this.active],s=this[this.loader],o=n?this.classNames.moveLeft:this.classNames.moveRight,i=n?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,c=n?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,r=s.querySelector(".".concat(this.classNames.content)),l=a.querySelector(".".concat(this.classNames.content));r.classList.remove(this.classNames.contentStatic),s.classList.add(this.classNames.animatedMobile),a.classList.add(this.classNames.animatedMobile),Object(x.onceNextCssLayout)().then((function(){s.style.transform="translate3d(0, 0, 0)",a.style.transform="translate3d(".concat(t.direction?"-":"","100%, 0, 0)"),Object(x.onceTransitionEnd)(a).then((function(){t.loading&&(s.classList.add(t.classNames.active),a.classList.remove(t.classNames.active),a.classList.remove(o),s.classList.remove(t.classNames.animatedMobile),a.classList.remove(t.classNames.animatedMobile),l.classList.remove(c),l.classList.remove(t.classNames.contentExit),r.classList.remove(i),setTimeout((function(){Object(x.onceNextCssLayout)().then((function(){t.buttons.element.classList.remove(t.classNames.controlsActive)}))}),t.props.controlsReturnDelay),t.activeArrow&&(t.activeArrow.classList.remove(t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA",e&&e())}))}))}},{key:"runAnimation",value:function(e){var t=this,n=e.active,a=e.media,s=e.contentExitMoveClass,o=e.contentEnterMoveClass,i=e.activeContentElement,c=e.loaderContentElement,r=e.loader,l=e.loaderPosition,u=e.exitPosition,m=e.callback,d=e.transitionDelay;this.loadContent(n,a.url).then((function(e){i.classList.add(s),i.classList.add(t.classNames.contentExit),c.classList.add(o),c.classList.add(t.classNames.contentStatic),setTimeout((function(){Object(x.onceNextCssLayout)().then((function(){n.classList.add(t.classNames.animated),r.classList.add(t.classNames.animated),c.classList.remove(t.classNames.contentStatic),n.classList.add(t.classNames.exit),r.classList.add(l),n.classList.add(u),Object(x.onceAnimationEnd)(n).then((function(){r.classList.add(t.classNames.active),r.classList.remove(l),r.classList.remove(t.classNames.animated),n.classList.remove(t.classNames.animated),n.classList.remove(t.classNames.active),n.classList.remove(u),n.classList.remove(t.classNames.exit),i.classList.remove(s),i.classList.remove(t.classNames.contentExit),c.classList.remove(o),e&&n.removeChild(e),setTimeout((function(){Object(x.onceNextCssLayout)().then((function(){t.buttons.element.classList.remove(t.classNames.controlsActive)}))}),t.props.controlsReturnDelay),t.activeArrow&&Object(x.onceNextCssLayout)().then((function(){t.activeArrow.classList.remove(t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null})),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA",m&&m()}))}))}),d)}))}},{key:"startAnimation",value:function(e,t,n){var a=this.props.transitionDelay,s=this[this.active],o=this[this.loader],i=e?this.classNames.moveRight:this.classNames.moveLeft,c=e?this.classNames.moveLeft:this.classNames.moveRight,r=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,l=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,u=s.querySelector(".".concat(this.classNames.content)),m=o.querySelector(".".concat(this.classNames.content));s.style.removeProperty("transform"),o.style.removeProperty("transform"),this.props.onTransitionStart&&this.props.onTransitionStart(k({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex}));var d={active:s,media:t,contentExitMoveClass:l,contentEnterMoveClass:r,activeContentElement:u,loaderContentElement:m,loader:o,loaderPosition:i,exitPosition:c,callback:n,transitionDelay:a};this.runAnimation(d)}},{key:"goTo",value:function(e){var t=this,n=e.index,a=e.direction,s=e.touch,o=void 0!==s&&s;!0!==this.loading&&n!==this.index&&(this.loading=!0,this.direction=a,!1===o?this.activateArrows(a,(function(){t.chargeIndex(n,(function(e){t.renderedLoader=!0,t.startAnimation(a,e,(function(){t.index=t.nextIndex,t.loading=!1,t.setState({index:t.index}),t.props.onTransitionEnd&&t.props.onTransitionEnd(k({},t.getInfo()))}))}))})):this.chargeIndex(n,(function(){t.activateArrows(a),t.startAnimationMobile()})))}},{key:"chargeIndex",value:function(e,t){this.nextIndex=e>this.media.length-1?0:e<0?this.media.length-1:e;var n={},a=this.media[this.nextIndex];n[this.loader]=k({loader:!0},a),this.setState(n,(function(){t(a)}))}},{key:"unchargeIndex",value:function(){var e={};e[this.loader]=null,this.setState(e,(function(){}))}},{key:"activateArrows",value:function(e,t){var n=e?this.buttons.next:this.buttons.prev,a=e?"right":"left";this.activeArrow=n.querySelector("span"),this.activeArrow?(this.activeArrowClass=y("".concat(this.rootElement,"__controls__arrow-").concat(a,"--active"),this.props.cssModule),Object(x.onceTransitionEnd)(this.activeArrow,{tolerance:null===this.index?0:2}).then((function(){t&&t()})),this.buttons.element.classList.add(this.classNames.controlsActive),this.activeArrow.classList.add(this.activeArrowClass)):t&&t()}},{key:"transitionRequest",value:function(e){this.props.onTransitionRequest&&this.props.onTransitionRequest(k({eventName:e},this.getInfo()))}},{key:"renderBox",value:function(e){var t=this;return s.a.createElement("div",{ref:function(n){t["box".concat(e)]=n},className:this.classNames.box,onTouchStart:this.touchStart,onTouchMove:this.touchMove,onTouchEnd:this.touchEnd},this.state["box".concat(e)]&&s.a.createElement(A,{media:this.state["box".concat(e)],className:this.classNames.content}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.cssModule,a=t.organicArrows,o=t.bullets,i=t.style,c=this.rootElement;return s.a.createElement("div",{ref:function(t){e.slider=t},className:this.getRootClassName(),style:i},s.a.createElement("div",{ref:function(t){e.wrapper=t},className:this.classNames.wrapper},s.a.createElement("div",{ref:function(t){e.container=t},className:this.classNames.container},this.renderBox("A"),this.renderBox("B")),s.a.createElement(_,{rootElement:c,cssModule:n,onMount:function(t){e.buttons=t},onNext:this.clickNext,onPrev:this.clickPrev,organicArrows:a})),o&&s.a.createElement(L,{cssModule:n,rootElement:c,media:this.media,selected:this.state.index,onClick:function(t){e.transitionRequest("bullet"),e.goTo(t)}}))}}]),t}(s.a.Component);T.defaultProps={startup:!0,children:null,className:null,controlsReturnDelay:0,cssModule:null,disabled:!1,infinite:!0,media:[],bullets:!0,fillParent:!1,name:"awesome-slider",onFirstMount:null,onResetSlider:null,onTransitionEnd:null,onTransitionStart:null,onTransitionRequest:null,organicArrows:!0,rootElement:C,selected:0,startupScreen:null,style:{},transitionDelay:0};var P="awssld";var B=function(e){var t,n;return n=t=function(t){function n(e){var t;return Object(l.a)(this,n),(t=Object(m.a)(this,Object(d.a)(n).call(this,e))).forceStop=!1,t.rootElement=e.rootElement||P,t.state={selected:0},t}return Object(h.a)(n,t),Object(u.a)(n,[{key:"setInfo",value:function(e){this.currentInfo=e,e.currentIndex!==this.state.selected&&this.setState({selected:e.currentIndex})}},{key:"setTimer",value:function(e){var t=this;if(!0!==this.forceStop){var n=e.querySelector(".".concat(y("".concat(this.rootElement,"__timer"),this.props.cssModule)));n||(n=this.createBarElement(),e.querySelector("div").appendChild(n)),n.classList.remove(y("".concat(this.rootElement,"__timer--animated"),this.props.cssModule)),Object(x.onceNextCssLayout)().then((function(){n.classList.remove(y("".concat(t.rootElement,"__timer--run"),t.props.cssModule)),n.classList.remove(y("".concat(t.rootElement,"__timer--fast"),t.props.cssModule)),Object(x.onceNextCssLayout)().then((function(){n.classList.add(y("".concat(t.rootElement,"__timer--animated"),t.props.cssModule)),Object(x.onceNextCssLayout)().then((function(){n.classList.add(y("".concat(t.rootElement,"__timer--run"),t.props.cssModule)),Object(x.onceTransitionEnd)(n).then((function(){t.clearBarAnimation(n),!0!==t.forceStop&&!1!==t.props.play&&t.goTonext()}))}))}))}))}}},{key:"getBarFromSlide",value:function(e){return e.querySelector(".".concat(y("".concat(this.rootElement,"__timer"),this.props.cssModule)))||null}},{key:"createBarElement",value:function(){var e=document.createElement("div");return e.classList.add(y("".concat(this.rootElement,"__timer"),this.props.cssModule)),e.style.setProperty("--timer-delay","".concat(this.props.interval,"ms")),e.style.setProperty("--timer-height",this.props.timerHeight),e.style.setProperty("--timer-background-color",this.props.timerBackgroundColor),e}},{key:"clearBar",value:function(e){var t=this,n=this.getBarFromSlide(e.currentSlide);n&&(n.clearCssEndEvent&&n.clearCssEndEvent(),n.classList.add(y("".concat(this.rootElement,"__timer--fast"),this.props.cssModule)),Object(x.onceTransitionEnd)(n).then((function(){t.clearBarAnimation(n)})))}},{key:"clearBarAnimation",value:function(e){e.classList.remove(y("".concat(this.rootElement,"__timer--animated"),this.props.cssModule))}},{key:"restartBarAnimation",value:function(e){e.classList.remove(y("".concat(this.rootElement,"__timer--run"),this.props.cssModule)),e.classList.remove(y("".concat(this.rootElement,"__timer--fast"),this.props.cssModule))}},{key:"goTonext",value:function(){var e=this.currentInfo,t=e.currentIndex+1,n=t>e.slides-1?0:t;this.setState({selected:n})}},{key:"render",value:function(){var t=this,n=this.props,a=(n.inverval,n.play,n.cancelOnInteraction),o=(n.showTimer,n.onTransitionStart),i=n.onTransitionEnd,c=n.onFirstMount,r=n.onTransitionRequest,l=Object(S.a)(n,["inverval","play","cancelOnInteraction","showTimer","onTransitionStart","onTransitionEnd","onFirstMount","onTransitionRequest"]);return s.a.createElement(e,Object.assign({},l,{selected:this.state.selected,onFirstMount:function(e){l.startupScreen||(t.setInfo(e),t.setTimer(e.currentSlide)),c&&c(e)},onTransitionStart:function(e){var n=t.getBarFromSlide(e.nextSlide);n&&t.restartBarAnimation(n),o&&o(e)},onTransitionRequest:function(e){t.clearBar(e),t.currentInfo=e,!0===a&&(t.forceStop=!0),r&&r(e)},onTransitionEnd:function(e){t.setInfo(e),t.setTimer(e.currentSlide),i&&i(e)}}))}}]),n}(a.Component),t.defaultProps={interval:2e3,play:!1,cancelOnInteraction:!1,timerHeight:"6px",cssModule:null,timerBackgroundColor:"rgba(0, 0, 0, 0.15)",showTimer:!0,onTransitionStart:null,onTransitionEnd:null,onTransitionRequest:null,rootElement:P},n}(T),I=function(e){return s.a.createElement(B,Object.assign({transitionDelay:100},e))},R=(n(47),n(24)),q=(n.n(R).a,n(48),n(25)),D=n.n(q),F=n(26),z=n.n(F),J=n(27),Q=n.n(J),W=n(28),G=n.n(W),U=n(29),X=n.n(U),H=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-carousel"},s.a.createElement("div",{className:"carousel"},s.a.createElement(I,{play:!0,cancelOnInteraction:!1,interval:2800,cssModule:D.a},s.a.createElement("div",{"data-src":z.a}),s.a.createElement("div",{"data-src":Q.a}),s.a.createElement("div",{"data-src":G.a}),s.a.createElement("div",{"data-src":X.a}))))}}]),t}(a.Component),K=n(30),V=n.n(K),Y=n(31),Z=n.n(Y),$=n(32),ee=n.n($),te=n(33),ne=n.n(te),ae=(n(49),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-cont"},s.a.createElement("div",{className:"container-study"},s.a.createElement("div",{className:"study-logo"},s.a.createElement("img",{src:V.a})),s.a.createElement("div",{className:"study-text"},s.a.createElement("h1",null,"+ de ",s.a.createElement("span",{className:"title-number"},"1000")),s.a.createElement("p",{className:"text-main"},"alunos impactados"))),s.a.createElement("div",{className:"container-school"},s.a.createElement("div",{className:"school-logo"},s.a.createElement("img",{src:ee.a})),s.a.createElement("div",{className:"school-text"},s.a.createElement("h1",null,s.a.createElement("span",{className:"title-number"},"30")),s.a.createElement("p",{className:"text-main"},"interven\xe7\xf5es"))),s.a.createElement("div",{className:"container-training"},s.a.createElement("div",{className:"training-logo"},s.a.createElement("img",{src:ne.a})),s.a.createElement("div",{className:"training-text"},s.a.createElement("h1",null,"+ de ",s.a.createElement("span",{className:"title-number"},"20")),s.a.createElement("p",{className:"text-main"},"professores impactados"))),s.a.createElement("div",{className:"container-teacher"},s.a.createElement("div",{className:"teacher-logo"},s.a.createElement("img",{src:Z.a})),s.a.createElement("div",{className:"teacher-text"},s.a.createElement("h1",null,s.a.createElement("span",{className:"title-number"},"5")),s.a.createElement("p",{className:"text-main"},"participando ativamente do programa"))))}}]),t}(a.Component)),se=(n(50),a.Component,n(51),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-content"},s.a.createElement(p,null),s.a.createElement(b,null),s.a.createElement(ae,null),s.a.createElement(H,null))}}]),t}(a.Component)),oe=(n(52),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"main-text"},s.a.createElement("h1",{className:"main-title"},"Quem Somos"),s.a.createElement("p",null,"Aplicamos oficinas em que os estudantes desenvolvem suas capacidades intelectuais de forma pr\xe1tica e interdisciplinar. Nossa metodologia est\xe1 alinhada \xe0s compet\xeancias da BNCC, logo, formamos os nossos alunos com pensamentos cr\xedticos e disruptivos impactando o mundo e a sociedade com suas cria\xe7\xf5es.")),s.a.createElement("div",null))}}]),t}(a.Component)),ie=(n(53),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Tutoriais"))}}]),t}(a.Component)),ce=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Notc\xedas"))}}]),t}(a.Component),re=(n(54),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main-metodologia"},s.a.createElement("h1",null,"Metologia"))}}]),t}(a.Component)),le=(n(55),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{id:"new-post"},s.a.createElement("h1",{className:"title"},"Ouvidoria"),s.a.createElement("input",{className:"all",type:"text",name:"nome",placeholder:"Seu nome"}),s.a.createElement("input",{className:"all",type:"text",name:"email",placeholder:"Seu email"}),s.a.createElement("input",{className:"all",type:"text",name:"telefone",placeholder:"Telefone"}),s.a.createElement("input",{className:"msg",type:"text",name:"mensagem",placeholder:"Mensagem"}),s.a.createElement("button",{type:"submit"},"Enviar"))}}]),t}(a.Component));var ue=function(){return s.a.createElement(r.c,null,s.a.createElement(r.a,{path:"/ura",exact:!0,component:se}),s.a.createElement(r.a,{path:"/ura/QuemSomos",component:oe}),s.a.createElement(r.a,{path:"/ura/Tutoriais",component:ie}),s.a.createElement(r.a,{path:"/ura/Not\xedciais",component:ce}),s.a.createElement(r.a,{path:"/ura/Metodologia",component:re}),s.a.createElement(r.a,{path:"/ura/FaleConosco",component:le}))},me=n(12),de=n(36),he=(n.n(de).a,n(61),n(37)),pe=n.n(he),ve=(n(62),n(63),n(64),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("header",{className:"main-header"},s.a.createElement("div",{className:"header-content"},s.a.createElement("div",{className:"header-logo"},s.a.createElement("a",{href:"/ura",className:"a-logo"},s.a.createElement("img",{src:pe.a,className:"img-logo",alt:""}))),s.a.createElement("nav",{className:"main-nav"},s.a.createElement("ul",{className:"ul-nav"},s.a.createElement("li",null,s.a.createElement("a",{href:"/ura/QuemSomos"},s.a.createElement(me.AwesomeButton,{type:"primary",size:"medium"},"Quem Somos"))),s.a.createElement("li",null,s.a.createElement("a",{href:"/ura/Tutoriais"},s.a.createElement(me.AwesomeButton,{type:"primary",size:"medium"},"Tutoriais"))),s.a.createElement("li",null,s.a.createElement("a",{href:"/ura/Not\xedciais"},s.a.createElement(me.AwesomeButton,{type:"primary",size:"medium"},"Not\xedciais"))),s.a.createElement("li",null,s.a.createElement("a",{href:"/ura/Metodologia"},s.a.createElement(me.AwesomeButton,{type:"primary",size:"medium"},"Metodologia"))),"\\                                ",s.a.createElement("li",null,s.a.createElement("a",{href:"/ura/FaleConosco"},s.a.createElement(me.AwesomeButton,{type:"primary",size:"medium"},"Contato")))))))}}]),t}(a.Component));a.Component;var fe=function(){return s.a.createElement(c.a,null,s.a.createElement(ve,null),s.a.createElement(ue,null))};n(65);i.a.render(s.a.createElement(fe,null),document.getElementById("root"))}]),[[40,1,2]]]);
//# sourceMappingURL=main.5ddd95dd.chunk.js.map