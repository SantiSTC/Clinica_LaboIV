import{a as A,c as m,d as g,f as h,g as p,h as M}from"./chunk-PJDM6MW4.js";import{b as v}from"./chunk-7IOWJCCY.js";import{f as s,h as y,t as b,w as $,x as R}from"./chunk-ZOOZBPEI.js";var j=(()=>{let r=class r{constructor(t){this.auth=t,this.uploadProgress$=y,this.downloadURL$=y,this.storage=R(A)}subirFoto(t,o,a,c="perfil"){return s(this,null,function*(){if(t){let n=t.type.split("/")[1];try{let e=`imagenes/${o}/${a}/${c}.${n}`;var u=p(this.storage,e);let l={customMetadata:{uploadedBy:a,uploadedAt:new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString()}};M(u,t,l).on("state_changed",d=>{let f=d.bytesTransferred/d.totalBytes*100;console.log(`Progreso de subida: ${f.toString()}%`)})}catch(e){console.error("Error al subir la foto",e)}finally{}}else throw console.error("No se seleccion\xF3 ning\xFAn archivo"),new Error("No se seleccion\xF3 ning\xFAn archivo")})}obtenerFotosDelUsuario(t,o){return s(this,null,function*(){try{let a=p(this.storage,`imagenes/${t}/${o}`),c=yield h(a);return yield Promise.all(c.items.map(n=>s(this,null,function*(){let e=yield m(n),l=g(n),i=(yield l).customMetadata?.uploadedBy||"Unknown",d=(yield l).customMetadata?.uploadedAt||"Unknown";return{url:e,uploadedBy:i,uploadedAt:d}})))}catch(a){throw console.error("Error al listar las fotos",a),a}})}obtenerTodasLasFotos(t){return s(this,null,function*(){let o=[],a=p(this.storage,`imagenes/${t}`),c=u=>s(this,null,function*(){let n=yield h(u),e=n.items.map(i=>s(this,null,function*(){let d=yield m(i),f=yield g(i),U=f.customMetadata?.uploadedBy||"Unknown",B=f.customMetadata?.uploadedAt||"Unknown";return{url:d,uploadedBy:U,uploadedAt:B}})),l=yield Promise.all(e);o=o.concat(l);for(let i of n.prefixes)yield c(i)});return yield c(a),o})}};r.\u0275fac=function(o){return new(o||r)($(v))},r.\u0275prov=b({token:r,factory:r.\u0275fac,providedIn:"root"});let w=r;return w})();export{j as a};
