(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["daily"],{2231:function(e,t,n){},6312:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"daily"}},[n("div",{attrs:{id:"bg"}})])}],o=n("cb3c"),r={name:"daily",components:{Moonlight:o["a"]}},l=r,s=(n("b331"),n("2877")),u=Object(s["a"])(l,a,i,!1,null,"06fb2cc8",null);t["default"]=u.exports},b331:function(e,t,n){"use strict";var a=n("2231"),i=n.n(a);i.a},cb3c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"moonlight"}},[n("canvas",{staticClass:"landscape"})])}],o={name:"moonlight",data:function(){return{}},mounted:function(){function e(e){var t,n,a,i,o=document.querySelector(".landscape"),r=window.innerWidth,l=window.innerHeight,s={x:0,y:0,xDamped:0,yDamped:0},u="undefined"!==typeof window.orientation;function c(){d(),m(),f(),h(),u?window.addEventListener("touchmove",E,{passive:!1}):window.addEventListener("mousemove",E),window.addEventListener("resize",p),p()}function d(){t=new THREE.Scene;var e=new THREE.Color(0);t.background=e,t.fog=new THREE.Fog(e,10,400),v(),a=new THREE.PerspectiveCamera(60,r/l,.1,1e4),a.position.y=8,a.position.z=4;var i=new THREE.AmbientLight(16777215,1);t.add(i),n=new THREE.WebGLRenderer({canvas:o,antialias:!0}),n.setPixelRatio=devicePixelRatio,n.setSize(r,l)}function m(){var e=new THREE.PlaneBufferGeometry(100,400,400,400),n={time:{type:"f",value:0},distortCenter:{type:"f",value:.1},roadWidth:{type:"f",value:.5},pallete:{type:"t",value:null},speed:{type:"f",value:1},maxHeight:{type:"f",value:10},color:new THREE.Color(1,1,1)},a=new THREE.ShaderMaterial({uniforms:THREE.UniformsUtils.merge([THREE.ShaderLib.basic.uniforms,n]),vertexShader:document.getElementById("custom-vertex").textContent,fragmentShader:document.getElementById("custom-fragment").textContent,wireframe:!1,fog:!0});i=new THREE.Mesh(e,a),i.position.z=-180,i.rotation.x=-Math.PI/2,t.add(i)}function f(){console.log(e.palleteImage),(new THREE.TextureLoader).load(e.palleteImage,(function(e){i.material.uniforms.pallete.value=e,i.material.needsUpdate=!0}))}function v(){v=new THREE.Sky,v.scale.setScalar(45e4),v.material.uniforms.turbidity.value=1,v.material.uniforms.rayleigh.value=.01,v.material.uniforms.luminance.value=1,v.material.uniforms.mieCoefficient.value=3e-4,v.material.uniforms.mieDirectionalG.value=.99995,t.add(v);var e=new THREE.Mesh(new THREE.SphereBufferGeometry(2e4,16,8),new THREE.MeshBasicMaterial({color:16777215}));e.visible=!1,t.add(e);var n=-.03*Math.PI,a=2*Math.PI*-.25;e.position.x=4e5*Math.cos(a),e.position.y=4e5*Math.sin(a)*Math.sin(n),e.position.z=4e5*Math.sin(a)*Math.cos(n),v.material.uniforms.sunPosition.value.copy(e.position)}function p(){r=window.innerWidth,l=window.innerHeight,a.aspect=r/l,a.updateProjectionMatrix(),n.setSize(r,l)}function E(e){var t,n;e.preventDefault(),"mousemove"==e.type?(t=e.clientX,n=e.clientY):(t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY),s.x=t,s.y=n}function h(){requestAnimationFrame(h),s.xDamped=y(s.xDamped,s.x,.1),s.yDamped=y(s.yDamped,s.y,.1);var e=.001*performance.now();i.material.uniforms.time.value=e,i.material.uniforms.distortCenter.value=.1*Math.sin(e),i.material.uniforms.maxHeight.value=w(s.yDamped,0,l,20,5),n.render(t,a)}function w(e,t,n,a,i){return a+(e-t)/(n-t)*(i-a)}function y(e,t,n){return(1-n)*e+n*t}c()}e({})}},r=o,l=n("2877"),s=Object(l["a"])(r,a,i,!1,null,"3302bd18",null);t["a"]=s.exports}}]);
//# sourceMappingURL=daily.74bdc679.js.map