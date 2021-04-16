/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t,r,e,i,n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};function o(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}function s(t,r,e,i){return new(e||(e=Promise))((function(n,o){function s(t){try{h(i.next(t))}catch(t){o(t)}}function a(t){try{h(i.throw(t))}catch(t){o(t)}}function h(t){var r;t.done?n(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(s,a)}h((i=i.apply(t,r||[])).next())}))}function a(t,r){var e,i,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){s.label=o[1];break}if(6===o[0]&&s.label<n[1]){s.label=n[1],n=o;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(o);break}n[2]&&s.ops.pop(),s.trys.pop();continue}o=r.call(t,s)}catch(t){o=[6,t],i=0}finally{e=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}!function(t){t.WEBGL_CANVAS_ID="qrius-glCanvas",t.WEBGL_CONTEXT="webgl2",t.WEBGL_CONTEXT_EXPERIMENTAL="experimental-webgl",t.WEBGL_CONTEXT_WEBKIT="webkit-3d",t.WEBGL_CONTEXT_MOZ="moz-webgl",t.WEBGL_CONTEXT_ERROR_MESSAGE="Could not initialise WebGL",t.PATH_ASSETS_SPHERE="/assets/resources/yoshi/source/yoshi.obj",t.PATH_ASSETS_DIFFUSE="/assets/resources/yoshi/textures/yoshi.png",t.PATH_SHADE_VERTEX="/shaders/basic.vert",t.PATH_SHADE_FRAGMENT="/shaders/basic.frag",t.PRIMITIVE_SHADER_VERTEX="/shaders/primitive.vert",t.PRIMITIVE_SHADER_FRAGMENT="/shaders/primitive.frag"}(t||(t={})),function(t){t[t.CAMERA_ANGLE_DIVISION=120]="CAMERA_ANGLE_DIVISION",t[t.NEAR_PLANE=1]="NEAR_PLANE",t[t.FAR_PLANE=2e3]="FAR_PLANE",t[t.FIELD_OF_VIEW=60]="FIELD_OF_VIEW",t[t.PROJECTION_DEPTH=400]="PROJECTION_DEPTH",t[t.SCREEN_LEFT=0]="SCREEN_LEFT",t[t.SCREEN_TOP=0]="SCREEN_TOP",t[t.ORTHO_NEAR=400]="ORTHO_NEAR",t[t.ORTHO_FAR=-400]="ORTHO_FAR"}(r||(r={})),function(t){t.KEY_DOWN_EVENT="keydown",t.KEY_UP_EVENT="keyup",t[t.KEY_DOWN=40]="KEY_DOWN",t[t.KEY_UP=38]="KEY_UP",t[t.KEY_LEFT=37]="KEY_LEFT",t[t.KEY_RIGHT=39]="KEY_RIGHT"}(e||(e={})),function(t){t[t.DEFAULT_OFFSET=0]="DEFAULT_OFFSET",t[t.DEFAULT_STRIDE=0]="DEFAULT_STRIDE",t.ATTR_POSITION_NAME="a_position",t[t.ATTR_POSITION_LOC=0]="ATTR_POSITION_LOC",t.ATTR_NORMAL_NAME="a_norm",t[t.ATTR_NORMAL_LOC=1]="ATTR_NORMAL_LOC",t.ATTR_UV_NAME="a_uv",t[t.ATTR_UV_LOC=2]="ATTR_UV_LOC",t[t.ATTR_GRID_POSITION_LOC=4]="ATTR_GRID_POSITION_LOC",t[t.ATTR_GRID_COLOR_LOC=5]="ATTR_GRID_COLOR_LOC",t[t.GRID_VECTOR_SIZE=3]="GRID_VECTOR_SIZE",t[t.GRID_COLOR_SIZE=1]="GRID_COLOR_SIZE",t[t.GRID_VERTEX_LEN=4]="GRID_VERTEX_LEN",t.UNI_MODEL_MAT="uMVMatrix",t.UNI_PERSPECTIV_MAT="uPMatrix",t.UNI_CAMERA_MAT="uCameraMatrix",t.UNI_TEXTURE_MAT="uMainTexture",t.UNI_LIGHT_AMBIENT="ambientLight",t.UNI_LIGHT_DIRECTION="lightDirection"}(i||(i={}));var h=function(t){return t*Math.PI/180};const u=function(){function r(r){var e,i,n,o,s,a,h,u=this;this.gl=null,this.rgb_32_bit=255,this.alpha=1;var c=document.getElementById(r);[t.WEBGL_CONTEXT,t.WEBGL_CONTEXT_EXPERIMENTAL,t.WEBGL_CONTEXT_WEBKIT,t.WEBGL_CONTEXT_MOZ].some((function(t){return u.gl=c.getContext(t)})),null!==(e=this.gl)&&void 0!==e||alert(t.WEBGL_CONTEXT_ERROR_MESSAGE),null===(i=this.gl)||void 0===i||i.cullFace(this.gl.BACK),null===(n=this.gl)||void 0===n||n.frontFace(this.gl.CCW),null===(o=this.gl)||void 0===o||o.enable(this.gl.DEPTH_TEST),null===(s=this.gl)||void 0===s||s.enable(this.gl.CULL_FACE),null===(a=this.gl)||void 0===a||a.depthFunc(this.gl.LEQUAL),null===(h=this.gl)||void 0===h||h.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.canvas=c}return r.prototype.setSize=function(t,r){var e;return this.canvas.style.width=t+"px",this.canvas.style.height=r+"px",this.canvas.width=t,this.canvas.height=r,null===(e=this.gl)||void 0===e||e.viewport(0,0,t,r),this},r.prototype.fitScreen=function(t,r){return this.setSize(window.innerWidth*(t||1),window.innerHeight*(r||1))},r.prototype.setClearColor=function(t,r,e,i){var n;return void 0===i&&(i=1),null===(n=this.gl)||void 0===n||n.clearColor(t/this.rgb_32_bit,r/this.rgb_32_bit,e/this.rgb_32_bit,i),this},r.prototype.clear=function(){var t,r,e;return null===(t=this.gl)||void 0===t||t.clear((null===(r=this.gl)||void 0===r?void 0:r.COLOR_BUFFER_BIT)|(null===(e=this.gl)||void 0===e?void 0:e.DEPTH_BUFFER_BIT)),this},r.prototype.getContext=function(){return this.gl},r}();var c=function(){function t(t,r,e){this.x=t||0,this.y=r||0,this.z=e||0}return t.prototype.magnitude=function(t){if(void 0===t&&(t={x:0,y:0,z:0}),void 0===t)return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);var r=t.x-this.x,e=t.y-this.y,i=t.y-this.z;return Math.sqrt(r*r+e*e+i*i)},t.prototype.normalize=function(){var t=this.magnitude();return this.x/=t,this.y/=t,this.z/=t,this},t.prototype.set=function(t,r,e){return this.x=t,this.y=r,this.z=e,this},t.prototype.multiScalar=function(t){return this.x*=t,this.y*=t,this.z*=t,this},t.prototype.getArray=function(){return[this.x,this.y,this.z]},t.prototype.getFloatArray=function(){return new Float32Array([this.x,this.y,this.z])},t.prototype.clone=function(){return new t(this.x,this.y,this.z)},t}(),l=function(){function t(){this.matrix=t.identity()}return t.prototype.vtranslate=function(r){return t.translate(this.matrix,r.x,r.y,r.z),this},t.prototype.translate=function(r,e,i){return t.translate(this.matrix,r,e,i),this},t.prototype.rotateY=function(r){return t.rotateY(this.matrix,r),this},t.prototype.rotateX=function(r){return t.rotateX(this.matrix,r),this},t.prototype.rotateZ=function(r){return t.rotateZ(this.matrix,r),this},t.prototype.vscale=function(r){return t.scale(this.matrix,r.x,r.y,r.z),this},t.prototype.scale=function(r,e,i){return t.scale(this.matrix,r,e,i),this},t.prototype.invert=function(){return t.invert(this.matrix),this},t.prototype.resetRotation=function(){for(var t=0;t<this.matrix.length;t++)t>=12&&t<=14||(this.matrix[t]=t%5==0?1:0);return this},t.prototype.resetMat=function(){for(var t=0;t<this.matrix.length;t++)this.matrix[t]=t%5==0?1:0;return this},t.identity=function(){var t=new Float32Array(16);return t[0]=t[5]=t[10]=t[15]=1,t},t.perspective=function(t,r,e,i,n){var o=1/Math.tan(r/2),s=1/(i-n);t[0]=o/e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+i)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*i*s,t[15]=0},t.ortho=function(t,r,e,i,n,o,s){var a=1/(r-e),h=1/(i-n),u=1/(o-s);t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(r+e)*a,t[13]=(n+i)*h,t[14]=(s+o)*u,t[15]=1},t.transpose=function(t,r){if(t===r){var e=r[1],i=r[2],n=r[3],o=r[6],s=r[7],a=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=e,t[6]=r[9],t[7]=r[13],t[8]=i,t[9]=o,t[11]=r[14],t[12]=n,t[13]=s,t[14]=a}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t},t.normalMat3=function(t,r){var e=r[0],i=r[1],n=r[2],o=r[3],s=r[4],a=r[5],h=r[6],u=r[7],c=r[8],l=r[9],f=r[10],p=r[11],d=r[12],E=r[13],m=r[14],v=r[15],_=e*a-i*s,T=e*h-n*s,R=e*u-o*s,M=i*h-n*a,x=i*u-o*a,g=n*u-o*h,A=c*E-l*d,y=c*m-f*d,I=c*v-p*d,O=l*m-f*E,S=l*v-p*E,L=f*v-p*m,C=_*L-T*S+R*O+M*I-x*y+g*A;return C?(C=1/C,t[0]=(a*L-h*S+u*O)*C,t[1]=(h*I-s*L-u*y)*C,t[2]=(s*S-a*I+u*A)*C,t[3]=(n*S-i*L-o*O)*C,t[4]=(e*L-n*I+o*y)*C,t[5]=(i*I-e*S-o*A)*C,t[6]=(E*g-m*x+v*M)*C,t[7]=(m*R-d*g-v*T)*C,t[8]=(d*x-E*R+v*_)*C,t):null},t.multiplyVector=function(t,r){var e=r[0],i=r[1],n=r[2],o=r[3],s=t[0],a=t[1],h=t[2],u=t[3],c=t[4],l=t[5],f=t[6],p=t[7],d=t[8],E=t[9],m=t[10],v=t[11];return[e*s+i*c+n*d+o*t[12],e*a+i*l+n*E+o*t[13],e*h+i*f+n*m+o*t[14],e*u+i*p+n*v+o*t[15]]},t.transformVec4=function(t,r,e){return t[0]=e[0]*r[0]+e[4]*r[1]+e[8]*r[2]+e[12]*r[3],t[1]=e[1]*r[0]+e[5]*r[1]+e[9]*r[2]+e[13]*r[3],t[2]=e[2]*r[0]+e[6]*r[1]+e[10]*r[2]+e[14]*r[3],t[3]=e[3]*r[0]+e[7]*r[1]+e[11]*r[2]+e[15]*r[3],t},t.mult=function(t,r,e){var i=r[0],n=r[1],o=r[2],s=r[3],a=r[4],h=r[5],u=r[6],c=r[7],l=r[8],f=r[9],p=r[10],d=r[11],E=r[12],m=r[13],v=r[14],_=r[15],T=e[0],R=e[1],M=e[2],x=e[3];return t[0]=T*i+R*a+M*l+x*E,t[1]=T*n+R*h+M*f+x*m,t[2]=T*o+R*u+M*p+x*v,t[3]=T*s+R*c+M*d+x*_,T=e[4],R=e[5],M=e[6],x=e[7],t[4]=T*i+R*a+M*l+x*E,t[5]=T*n+R*h+M*f+x*m,t[6]=T*o+R*u+M*p+x*v,t[7]=T*s+R*c+M*d+x*_,T=e[8],R=e[9],M=e[10],x=e[11],t[8]=T*i+R*a+M*l+x*E,t[9]=T*n+R*h+M*f+x*m,t[10]=T*o+R*u+M*p+x*v,t[11]=T*s+R*c+M*d+x*_,T=e[12],R=e[13],M=e[14],x=e[15],t[12]=T*i+R*a+M*l+x*E,t[13]=T*n+R*h+M*f+x*m,t[14]=T*o+R*u+M*p+x*v,t[15]=T*s+R*c+M*d+x*_,t},t.scale=function(t,r,e,i){return t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t[4]*=e,t[5]*=e,t[6]*=e,t[7]*=e,t[8]*=i,t[9]*=i,t[10]*=i,t[11]*=i,t},t.rotateY=function(t,r){var e=Math.sin(r),i=Math.cos(r),n=t[0],o=t[1],s=t[2],a=t[3],h=t[8],u=t[9],c=t[10],l=t[11];return t[0]=n*i-h*e,t[1]=o*i-u*e,t[2]=s*i-c*e,t[3]=a*i-l*e,t[8]=n*e+h*i,t[9]=o*e+u*i,t[10]=s*e+c*i,t[11]=a*e+l*i,t},t.rotateX=function(t,r){var e=Math.sin(r),i=Math.cos(r),n=t[4],o=t[5],s=t[6],a=t[7],h=t[8],u=t[9],c=t[10],l=t[11];return t[4]=n*i+h*e,t[5]=o*i+u*e,t[6]=s*i+c*e,t[7]=a*i+l*e,t[8]=h*i-n*e,t[9]=u*i-o*e,t[10]=c*i-s*e,t[11]=l*i-a*e,t},t.rotateZ=function(t,r){var e=Math.sin(r),i=Math.cos(r),n=t[0],o=t[1],s=t[2],a=t[3],h=t[4],u=t[5],c=t[6],l=t[7];return t[0]=n*i+h*e,t[1]=o*i+u*e,t[2]=s*i+c*e,t[3]=a*i+l*e,t[4]=h*i-n*e,t[5]=u*i-o*e,t[6]=c*i-s*e,t[7]=l*i-a*e,t},t.rotate=function(t,r,e){var i,n,o,s,a,h,u,c,l,f,p,d,E,m,v,_,T,R,M,x,g,A,y,I,O=e[0],S=e[1],L=e[2],C=Math.sqrt(O*O+S*S+L*L);if(Math.abs(C)<1e-6)return null;O*=C=1/C,S*=C,L*=C,i=Math.sin(r),o=1-(n=Math.cos(r)),s=t[0],a=t[1],h=t[2],u=t[3],c=t[4],l=t[5],f=t[6],p=t[7],d=t[8],E=t[9],m=t[10],v=t[11],_=O*O*o+n,T=S*O*o+L*i,R=L*O*o-S*i,M=O*S*o-L*i,x=S*S*o+n,g=L*S*o+O*i,A=O*L*o+S*i,y=S*L*o-O*i,I=L*L*o+n,t[0]=s*_+c*T+d*R,t[1]=a*_+l*T+E*R,t[2]=h*_+f*T+m*R,t[3]=u*_+p*T+v*R,t[4]=s*M+c*x+d*g,t[5]=a*M+l*x+E*g,t[6]=h*M+f*x+m*g,t[7]=u*M+p*x+v*g,t[8]=s*A+c*y+d*I,t[9]=a*A+l*y+E*I,t[10]=h*A+f*y+m*I,t[11]=u*A+p*y+v*I},t.invert=function(t,r){void 0===r&&(r=t);var e=r[0],i=r[1],n=r[2],o=r[3],s=r[4],a=r[5],h=r[6],u=r[7],c=r[8],l=r[9],f=r[10],p=r[11],d=r[12],E=r[13],m=r[14],v=r[15],_=e*a-i*s,T=e*h-n*s,R=e*u-o*s,M=i*h-n*a,x=i*u-o*a,g=n*u-o*h,A=c*E-l*d,y=c*m-f*d,I=c*v-p*d,O=l*m-f*E,S=l*v-p*E,L=f*v-p*m,C=_*L-T*S+R*O+M*I-x*y+g*A;return!!C&&(C=1/C,t[0]=(a*L-h*S+u*O)*C,t[1]=(n*S-i*L-o*O)*C,t[2]=(E*g-m*x+v*M)*C,t[3]=(f*x-l*g-p*M)*C,t[4]=(h*I-s*L-u*y)*C,t[5]=(e*L-n*I+o*y)*C,t[6]=(m*R-d*g-v*T)*C,t[7]=(c*g-f*R+p*T)*C,t[8]=(s*S-a*I+u*A)*C,t[9]=(i*I-e*S-o*A)*C,t[10]=(d*x-E*R+v*_)*C,t[11]=(l*R-c*x-p*_)*C,t[12]=(a*y-s*O-h*A)*C,t[13]=(e*O-i*y+n*A)*C,t[14]=(E*T-d*M-m*_)*C,t[15]=(c*M-l*T+f*_)*C,!0)},t.translate=function(t,r,e,i){t[12]=t[0]*r+t[4]*e+t[8]*i+t[12],t[13]=t[1]*r+t[5]*e+t[9]*i+t[13],t[14]=t[2]*r+t[6]*e+t[10]*i+t[14],t[15]=t[3]*r+t[7]*e+t[11]*i+t[15]},t}();const f=function(){function t(){this.position=new c(0,0,0),this.scale=new c(1,1,1),this.rotation=new c(0,0,0),this.matModel=new l,this.matNormal=new Float32Array(9),this.forward=new Float32Array(4),this.up=new Float32Array(4),this.right=new Float32Array(4)}return t.prototype.updateMatrix=function(){return this.matModel.resetMat().vtranslate(this.position).rotateX(h(this.rotation.x)).rotateZ(h(this.rotation.z)).rotateY(h(this.rotation.y)).vscale(this.scale),l.normalMat3(this.matNormal,this.matModel.matrix),l.transformVec4(this.forward,[0,0,1,0],this.matModel.matrix),l.transformVec4(this.up,[0,1,0,0],this.matModel.matrix),l.transformVec4(this.right,[1,0,0,0],this.matModel.matrix),this.matModel.matrix},t.prototype.updateDirection=function(){return l.transformVec4(this.forward,[0,0,1,0],this.matModel.matrix),l.transformVec4(this.up,[0,1,0,0],this.matModel.matrix),l.transformVec4(this.right,[1,0,0,0],this.matModel.matrix),this},t.prototype.getModelMatrix=function(){return this.matModel.matrix},t.prototype.getNormalMatrix=function(){return this.matNormal},t.prototype.reset=function(){this.position.set(0,0,0),this.scale.set(1,1,1),this.rotation.set(0,0,0)},t}();var p=function(){function t(r,e,i,n){void 0===e&&(e=45),void 0===i&&(i=.1),void 0===n&&(n=100),this.projection=new Float32Array(16);var o=r.canvas.width/r.canvas.height;l.perspective(this.projection,e,o,i,n),this.transform=new f,this.viewMatrix=new Float32Array(16),this.mode=t.MODE_ORBIT}return t.prototype.panX=function(r){this.mode!=t.MODE_ORBIT&&(this.updateViewMatrix(),this.transform.position.x+=this.transform.right[0]*r,this.transform.position.y+=this.transform.right[1]*r,this.transform.position.z+=this.transform.right[2]*r)},t.prototype.panY=function(r){this.updateViewMatrix(),this.transform.position.y+=this.transform.up[1]*r,this.mode!=t.MODE_ORBIT&&(this.transform.position.x+=this.transform.up[0]*r,this.transform.position.z+=this.transform.up[2]*r)},t.prototype.panZ=function(r){this.updateViewMatrix(),this.mode==t.MODE_ORBIT?this.transform.position.z+=r:(this.transform.position.x+=this.transform.forward[0]*r,this.transform.position.y+=this.transform.forward[1]*r,this.transform.position.z+=this.transform.forward[2]*r)},t.prototype.updateViewMatrix=function(){return this.mode==t.MODE_FREE?this.transform.matModel.resetMat().vtranslate(this.transform.position).rotateX(h(this.transform.rotation.x)).rotateY(h(this.transform.rotation.y)):this.transform.matModel.resetMat().rotateX(h(this.transform.rotation.x)).rotateY(h(this.transform.rotation.y)).vtranslate(this.transform.position),this.transform.updateDirection(),l.invert(this.viewMatrix,this.transform.matModel.matrix),this.viewMatrix},t.MODE_FREE=0,t.MODE_ORBIT=1,t}(),d=function(){function t(t,r){var e=this,i=t.canvas.getBoundingClientRect();this.canvas=t.canvas,this.camera=r,this.rotateRate=-300,this.panRate=5,this.zoomRate=200,this.offsetX=i.left,this.offsetY=i.top,this.initX=0,this.initY=0,this.prevX=0,this.prevY=0,this.onUpHandler=function(t){e.onMouseUp(t)},this.onMoveHandler=function(t){e.onMouseMove(t)},this.canvas.addEventListener("mousedown",(function(t){e.onMouseDown(t)})),this.canvas.addEventListener("mousewheel",(function(t){e.onMouseWheel(t)}))}return t.prototype.getMouseVec2=function(t){return{x:t.pageX-this.offsetX,y:t.pageY-this.offsetY}},t.prototype.onMouseDown=function(t){this.initX=this.prevX=t.pageX-this.offsetX,this.initY=this.prevY=t.pageY-this.offsetY,this.canvas.addEventListener("mouseup",this.onUpHandler),this.canvas.addEventListener("mousemove",this.onMoveHandler)},t.prototype.onMouseUp=function(t){this.canvas.removeEventListener("mouseup",this.onUpHandler),this.canvas.removeEventListener("mousemove",this.onMoveHandler)},t.prototype.onMouseWheel=function(t){var r=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));this.camera.panZ(-r*(this.zoomRate/this.canvas.height))},t.prototype.onMouseMove=function(t){var r=t.pageX-this.offsetX,e=t.pageY-this.offsetY,i=r-this.prevX,n=e-this.prevY;t.shiftKey?(this.camera.panX(-i*(this.panRate/this.canvas.width)),this.camera.panY(n*(this.panRate/this.canvas.height))):(this.camera.transform.rotation.y+=i*(this.rotateRate/this.canvas.width),this.camera.transform.rotation.x+=n*(this.rotateRate/this.canvas.height)),this.prevX=r,this.prevY=e},t}();const E=function(){function t(t,r,e){this.gl=null,this.positionIndex=null,this.normalIndex=null,this.uvIndex=null,this.modelMatrix=null,this.perspective=null,this.cameraMatrix=null,this.mainTexture=null,this.ambientLight=null,this.lightDirection=null,this.vertexShader=null,this.fragmentShader=null,this.shaderProgram=null;var n=this.createShader(t,t.VERTEX_SHADER,r),o=this.createShader(t,t.FRAGMENT_SHADER,e);this.createShaderProgram(t,o,n),this.gl=t,this.shaderProgram&&(this.activateShader(),this.positionIndex=t.getAttribLocation(this.shaderProgram,i.ATTR_POSITION_NAME),this.normalIndex=t.getAttribLocation(this.shaderProgram,i.ATTR_NORMAL_NAME),this.uvIndex=t.getAttribLocation(this.shaderProgram,i.ATTR_UV_NAME),this.modelMatrix=t.getUniformLocation(this.shaderProgram,i.UNI_MODEL_MAT),this.perspective=t.getUniformLocation(this.shaderProgram,i.UNI_PERSPECTIV_MAT),this.cameraMatrix=t.getUniformLocation(this.shaderProgram,i.UNI_CAMERA_MAT),this.mainTexture=t.getUniformLocation(this.shaderProgram,i.UNI_TEXTURE_MAT))}return t.prototype.createShader=function(t,r,e){var i=t.createShader(r);return t.shaderSource(i,e),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.error("An error occurred compiling the shaders: "+t.getShaderInfoLog(i)),t.deleteShader(i),null)},t.prototype.createShaderProgram=function(t,r,e){var i=t.createProgram();if(t.attachShader(i,r),t.attachShader(i,e),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS))throw console.error("Error creating shader program.",t.getProgramInfoLog(i)),t.deleteProgram(i),new Error("Failed to link shaderProgram");this.vertexShader=r,this.fragmentShader=e,this.shaderProgram=i,t.detachShader(i,r),t.detachShader(i,e),t.deleteShader(e),t.deleteShader(r)},t.prototype.activateShader=function(){return this.gl.useProgram(this.shaderProgram),this},t.prototype.deactivateShader=function(){return this.gl.useProgram(null),this},t.prototype.setPerspective=function(t){return this.gl.uniformMatrix4fv(this.perspective,!1,t),this},t.prototype.setModelMatrix=function(t){return this.gl.uniformMatrix4fv(this.modelMatrix,!1,t),this},t.prototype.setCameraMatrix=function(t){return this.gl.uniformMatrix4fv(this.cameraMatrix,!1,t),this},t.prototype.dispose=function(){this.gl.getParameter(this.gl.CURRENT_PROGRAM)===this.shaderProgram&&this.deactivateShader(),this.gl.deleteProgram(this.shaderProgram)},t.prototype.preRender=function(){},t.prototype.renderModel=function(t){var r=this.gl;return this.setModelMatrix(t.transform.getModelMatrix()),t.mesh.noCulling&&r.disable(r.CULL_FACE),t.mesh.doBlending&&r.enable(r.BLEND),r.drawArrays(t.mesh.drawMode,0,t.mesh.vertexCount),t.mesh.noCulling&&r.enable(r.CULL_FACE),t.mesh.doBlending&&r.disable(r.BLEND),this},t}();var m=function(t){function r(r,e){var i=this;(i=t.call(this,r,"#version 300 es\nlayout(location=4) in vec3 a_position;layout(location=5) in float a_color;uniform mat4 uPMatrix;uniform mat4 uMVMatrix;uniform mat4 uCameraMatrix;uniform vec3 uColor[4];out lowp vec4 color;void main(void){color = vec4(uColor[ int(a_color) ],1.0);gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(a_position, 1.0);}","#version 300 es\nprecision mediump float;in vec4 color;out vec4 finalColor;void main(void){ finalColor = color; }")||this).setPerspective(e);var n=r.getUniformLocation(i.shaderProgram,"uColor");return r.uniform3fv(n,new Float32Array([.8,.8,.8,1,0,0,0,1,0,0,0,1])),i.deactivateShader(),i}return o(r,t),r}(E),v=function(t){function r(r,e){var i=this;return(i=t.call(this,r,"#version 300 es\nin vec3 a_position;in vec3 a_norm;in vec2 a_uv;uniform mat4 uMVMatrix;uniform mat4 uCameraMatrix;uniform mat4 uPMatrix;out vec3 vNormal;out highp vec2 texCoord;void main(void){texCoord = a_uv;vNormal = (uMVMatrix * vec4(a_norm, 0.)).xyz;gl_Position = uPMatrix * uCameraMatrix * uMVMatrix * vec4(a_position, 1.0);}","#version 300 es\nprecision mediump float;uniform vec3 lightDirection;uniform float ambientLight;uniform sampler2D uMainTexture;in vec3 vNormal;in highp vec2 texCoord;out vec4 finalColor;void main(void) {float lightness = -clamp(dot(normalize(vNormal), normalize(lightDirection)), -1.0, 0.0);lightness = ambientLight + (1.0 - ambientLight) * lightness;finalColor = texture(uMainTexture, texCoord);}")||this).setPerspective(e),i.deactivateShader(),i}return o(r,t),r}(E);const _=function(){function t(t){this.mesh=t,this.transform=new f}return t.prototype.setScale=function(t,r,e){return this.transform.scale.set(t,r,e),this},t.prototype.setPosition=function(t,r,e){return this.transform.position.set(t,r,e),this},t.prototype.setRotation=function(t,r,e){return this.transform.rotation.set(t,r,e),this},t.prototype.addScale=function(t,r,e){return this.transform.scale.x+=t,this.transform.scale.y+=r,this.transform.scale.y+=r,this},t.prototype.addPosition=function(t,r,e){return this.transform.position.x+=t,this.transform.position.y+=r,this.transform.position.z+=e,this},t.prototype.addRotation=function(t,r,e){return this.transform.rotation.x+=t,this.transform.rotation.y+=r,this.transform.rotation.z+=e,this},t.prototype.preRender=function(){return this.transform.updateMatrix(),this},t}(),T=function(){function t(t,r,e){this.buffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW),this.gl=t,this.size=r.length/e}return t.prototype.destroy=function(){this.gl.deleteBuffer(this.buffer)},t.prototype.bindToAttribute=function(t,r,e,i){void 0===i&&(i=this.size);var n=this.gl;n.enableVertexAttribArray(t),n.bindBuffer(n.ARRAY_BUFFER,this.buffer),n.vertexAttribPointer(t,i,n.FLOAT,!1,r,e),n.bindBuffer(n.ARRAY_BUFFER,null)},t}();var R=function(){function t(){}return t.createGeometry=function(r,e,i){return new _(t.createMesh(r,e,i))},t.createMesh=function(t,r,e){for(var n,o=t,s=[],a=0;a<=10;a++)n=.2*a-1,s.push(n),s.push(0),s.push(1),s.push(0),s.push(n),s.push(0),s.push(-1),s.push(0),n=1-.2*a,s.push(-1),s.push(0),s.push(n),s.push(0),s.push(1),s.push(0),s.push(n),s.push(0);e&&(s.push(-1.1),s.push(0),s.push(0),s.push(1),s.push(1.1),s.push(0),s.push(0),s.push(1),s.push(0),s.push(-1.1),s.push(0),s.push(2),s.push(0),s.push(1.1),s.push(0),s.push(2),s.push(0),s.push(0),s.push(-1.1),s.push(3),s.push(0),s.push(0),s.push(1.1),s.push(3));var h=Float32Array.BYTES_PER_ELEMENT*i.GRID_VERTEX_LEN,u=Float32Array.BYTES_PER_ELEMENT*i.GRID_VECTOR_SIZE,c=s.length/i.GRID_VERTEX_LEN,l={positions:new T(o,s,c),drawMode:o.LINES,vertexCount:c};return l.positions.bindToAttribute(i.ATTR_GRID_POSITION_LOC,h,i.DEFAULT_OFFSET,i.GRID_VECTOR_SIZE),l.positions.bindToAttribute(i.ATTR_GRID_COLOR_LOC,h,u,i.GRID_COLOR_SIZE),l},t}();const M=function(){function t(t,r){this.createdTexture=null,this.gl=null,this.TEXTURE_KEY="TEXTURE",this.createdTexture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.createdTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.generateMipmap(t.TEXTURE_2D),this.gl=t}return t.prototype.useTexture=function(t,r){var e=this.gl;e.activeTexture(e[""+this.TEXTURE_KEY+r]),e.bindTexture(e.TEXTURE_2D,this.createdTexture),e.uniform1i(t,r),e.bindTexture(e.TEXTURE_2D,null)},t.loadTexture=function(r,e){return new Promise((function(i){var n=new Image;n.onload=function(){i(new t(r,n))},n.src=e}))},t}(),x=function(){function t(t){this.surfaces=[],this.vertices=[],this.position=null,this.normal=null,this.uv=null,this.x=0,this.y=0,this.z=0,this.surfaces=t}return t.parseOBJ=function(r){var e=/^v\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/,i=/^vn\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/,n=/^vt\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/,o=/^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,s=r.split("\n"),a=[],h=[],u=[],c=[];return s.forEach((function(t){var r=null;if(null!==(r=e.exec(t)))a.push(A(parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3])));else if(null!==(r=i.exec(t)))u.push(A(parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3])));else if(null!==(r=n.exec(t)))h.push({x:parseFloat(r[1]),y:1-parseFloat(r[2])});else if(null!==(r=o.exec(t))){for(var s=[],l=1;l<10;l+=3){var f=r.slice(l,l+3),p=a[parseInt(f[0])-1],d=h[parseInt(f[1])-1],E=u[parseInt(f[2])-1];s.push(g(p,E,d))}c.push(function(t){return{vertices:t}}(s))}})),new t(c)},t.loadOBJ=function(r){return s(this,void 0,void 0,(function(){var e,i,n;return a(this,(function(o){switch(o.label){case 0:return[4,fetch(r)];case 1:return e=o.sent(),n=(i=t).parseOBJ,[4,e.text()];case 2:return[2,n.apply(i,[o.sent()])]}}))}))},t.prototype.vertexCount=function(){return 3*this.surfaces.length},t.prototype.positions=function(){var t=[];return this.surfaces.forEach((function(r){r.vertices.forEach((function(r){var e=r.position;t.push(e.x,e.y,e.z)}))})),t},t.prototype.normals=function(){var t=[];return this.surfaces.forEach((function(r){r.vertices.forEach((function(r){var e=r.normal;t.push(e.x,e.y,e.z)}))})),t},t.prototype.uvs=function(){var t=[];return this.surfaces.forEach((function(r){r.vertices.forEach((function(r){var e=r.uv;t.push(e.x,e.y)}))})),t},t}();function g(t,r,e){return{position:t,normal:r,uv:e}}function A(t,r,e){return{x:t,y:r,z:e}}const y=function(){function t(){}return t.createGeometry=function(r,e,i,n){return s(this,void 0,void 0,(function(){var o;return a(this,(function(s){switch(s.label){case 0:return o=_.bind,[4,t.createMesh(r,e,i,n)];case 1:return[2,new(o.apply(_,[void 0,s.sent()]))]}}))}))},t.createMesh=function(r,e,n,o){var h,u;return s(this,void 0,void 0,(function(){var s,c,l;return a(this,(function(a){switch(a.label){case 0:return[4,t.loadAttributes(r,n,o)];case 1:return s=a.sent(),c=s.vertices.vertexCount(),(l={positions:new T(r,s.vertices.positions(),c),normals:new T(r,s.vertices.normals(),c),uvs:new T(r,s.vertices.uvs(),c),texture:s.texture,drawMode:r.TRIANGLES,vertexCount:c}).positions.bindToAttribute(e.positionIndex,i.DEFAULT_STRIDE,i.DEFAULT_OFFSET),null===(h=l.normals)||void 0===h||h.bindToAttribute(e.normalIndex,i.DEFAULT_STRIDE,i.DEFAULT_OFFSET),null===(u=l.uvs)||void 0===u||u.bindToAttribute(e.uvIndex,i.DEFAULT_STRIDE,i.DEFAULT_OFFSET),[2,l]}}))}))},t.loadAttributes=function(t,r,e){return s(this,void 0,void 0,(function(){var i,n,o,s,h;return a(this,(function(a){switch(a.label){case 0:return[4,x.loadOBJ(r)];case 1:return i=a.sent(),[4,M.loadTexture(t,e)];case 2:return n=a.sent(),[4,Promise.all([i,n])];case 3:return o=a.sent(),s=o[0],h=o[1],[2,{vertices:s,texture:h}]}}))}))},t}();s(void 0,void 0,void 0,(function(){var r,e,i,n,o,s,h,c;return a(this,(function(a){switch(a.label){case 0:return(r=new u(t.WEBGL_CANVAS_ID)).fitScreen(.95,.9).setClearColor(0,0,0,1).clear(),e=r.getContext(),(i=new p(e)).transform.position.set(0,1,3),new d(e,i),n=new m(e,i.projection),o=R.createGeometry(e,n,!1),s=new v(e,i.projection),[4,y.createGeometry(e,s,t.PATH_ASSETS_SPHERE,t.PATH_ASSETS_DIFFUSE)];case 1:return(h=a.sent()).setScale(.15,.15,.15),(c=function(){i.updateViewMatrix(),r.clear(),n.activateShader().setCameraMatrix(i.viewMatrix).renderModel(o.preRender()),s.activateShader().setCameraMatrix(i.viewMatrix).renderModel(h.preRender()),requestAnimationFrame(c)})(),[2]}}))}))})();
//# sourceMappingURL=bundle.js.map