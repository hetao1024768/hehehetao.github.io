(function(e){function t(t){for(var i,o,c=t[0],s=t[1],h=t[2],l=0,u=[];l<c.length;l++)o=c[l],r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(u.length)u.shift()();return a.push.apply(a,h||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var i=n("5c48"),r=n.n(i);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{attrs:{id:"canvas"}})},a=[],o=(n("7f7f"),n("ac4d"),n("8a81"),n("ac6a"),n("d225")),c=n("b0b4"),s=n("308d"),h=n("6bb5"),d=n("4e2b"),l=n("9ab4"),u=n("60a3"),f=n("5a89"),w=n("4721"),m=n("34ad"),p=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(s["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.cameraDistance=100,e.near=.1,e.far=1e3,e.fogColor=15658734,e.clearColor=15658734,e}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"mounted",value:function(){this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("webgl2"),this.context&&(this.cameraDistance=Math.max(window.innerWidth,window.innerHeight),this.init())}},{key:"init",value:function(){this.initScene(),this.initCamera(),this.initRender(),this.initWindowResizeEvent(),this.initLight(),this.initControl(),this.initGltf(),this.initAnimate()}},{key:"initStats",value:function(){}},{key:"initScene",value:function(){this.scene3D=new f["tb"],this.scene2D=new f["tb"]}},{key:"initCamera",value:function(){var e=this.calcFov(this.cameraDistance,window.innerWidth,window.innerWidth/window.innerHeight);this.camera3D=new f["ib"](e,window.innerWidth/window.innerHeight,this.near,this.far),this.camera3D.position.set(0,this.cameraDistance,4*this.cameraDistance/3),this.camera3D.lookAt(new f["Kb"](0,0,0)),this.camera3D.updateProjectionMatrix(),this.camera2D=new f["gb"](0,window.innerWidth,window.innerHeight,0,this.near,this.far),this.camera2D.position.set(0,0,this.cameraDistance),this.camera2D.updateProjectionMatrix()}},{key:"initRender",value:function(){this.renderer3D=new f["Ob"]({canvas:this.canvas,context:this.context,antialias:!0,powerPreference:"high-performance"}),this.renderer3D.autoClearColor=!1,this.renderer3D.setClearColor(this.clearColor,1),this.renderer3D.setSize(window.innerWidth,window.innerHeight,!0),this.renderer3D.setPixelRatio(window.devicePixelRatio),this.renderer3D.shadowMap.enabled=!0,this.renderer3D.shadowMap.type=f["hb"],document.body.appendChild(this.renderer3D.domElement)}},{key:"initWindowResizeEvent",value:function(){var e=this;window.onresize=function(){e.camera3D.fov=e.calcFov(e.cameraDistance,window.innerWidth,window.innerWidth/window.innerHeight),e.camera3D.aspect=window.innerWidth/window.innerHeight,e.camera3D.updateProjectionMatrix(),e.camera2D.left=0,e.camera2D.right=window.innerWidth,e.camera2D.top=window.innerHeight,e.camera2D.bottom=0,e.camera2D.updateProjectionMatrix(),e.renderer3D.setSize(window.innerWidth,window.innerHeight,!0)}}},{key:"initLight",value:function(){var e=new f["c"](15658734,.75);this.scene3D.add(e);var t=new f["jb"](15658734,1,1e3,1.5);t.castShadow=!0,t.shadow.mapSize.width=512,t.shadow.mapSize.height=512,t.shadow.camera.near=.1,t.shadow.camera.far=1e3,t.position.set(100,400,300),this.scene3D.add(t)}},{key:"initControl",value:function(){this.controls=new w["a"](this.camera3D,this.renderer3D.domElement),this.controls.minDistance=200,this.controls.maxDistance=800,this.controls.minPolarAngle=2*-Math.PI,this.controls.maxPolarAngle=2*Math.PI,this.controls.minAzimuthAngle=2*-Math.PI,this.controls.maxAzimuthAngle=2*Math.PI,this.controls.zoomSpeed=2,this.controls.rotateSpeed=1,this.controls.panSpeed=1,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1}},{key:"initGltf",value:function(){var e=new m["a"],t=this;e.load("./models/gltf/scene.gltf",function(e){var n=e.scene;n.scale.set(30,30,30);var i=!0,r=!1,a=void 0;try{for(var o,c=n.children[Symbol.iterator]();!(i=(o=c.next()).done);i=!0){var s=o.value;console.log(s),"RootNode_(gltf_orientation_matrix)"===s.name&&(s.castShadow=!0,s.receiveShadow=!0)}}catch(h){r=!0,a=h}finally{try{i||null==c.return||c.return()}finally{if(r)throw a}}t.scene3D.add(n),console.log(e),t.gltfHander=function(){}},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened")})}},{key:"initAnimate",value:function(){var e=this,t=this;this.animate=function(){requestAnimationFrame(t.animate),e.controls.update(),e.renderer3D.clearColor(),e.gltfHander&&e.gltfHander(),e.renderer3D.render(e.scene3D,e.camera3D),e.renderer3D.render(e.scene2D,e.camera2D)},this.animate()}},{key:"calcFov",value:function(e,t,n){return n<1&&(t/=n),2*Math.atan(t/2/e)*(180/Math.PI)}}]),t}(u["b"]);p=l["a"]([u["a"]],p);var v=p,D=v,g=(n("7c55"),n("2877")),b=Object(g["a"])(D,r,a,!1,null,null,null),y=b.exports,x=n("2f62");i["a"].use(x["a"]);var S=new x["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({store:S,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.68743c5a.js.map