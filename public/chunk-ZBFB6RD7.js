import{a as R}from"./chunk-QSIJ5AVY.js";import{a as O}from"./chunk-3SQFKCHV.js";import"./chunk-DGYUBMNP.js";import{b as $,c as N}from"./chunk-7YO6BCT5.js";import"./chunk-I2SBAJLK.js";import{$ as k,A as w,D as y,E,Ha as F,Ja as B,Ka as P,M as D,N as c,O as p,V as h,Z as x,_ as I,a as b,aa as _,ba as C,ca as i,da as r,ea as u,fa as j,ga as g,ha as d,ia as T,ka as a,la as m,ma as f,ta as H,va as V,x as S,xa as A}from"./chunk-BMMUWXGF.js";import"./chunk-5G567QLT.js";var L=(()=>{let o=class o{transform(e,t){return e[t]}};o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=w({name:"dynamicProperty",type:o,pure:!0,standalone:!0});let n=o;return n})();function M(n,o){if(n&1){let l=j();i(0,"div",14)(1,"div",18),g("click",function(){y(l);let t=d();return E(t.cerrarSesion())}),u(2,"img",19),i(3,"p",20),a(4,"Cerrar Sesi\xF3n"),r()()()}}function J(n,o){if(n&1&&(i(0,"div",23)(1,"p",24),a(2),r(),i(3,"p",25),a(4),V(5,"dynamicProperty"),r()()),n&2){let l=o.$implicit,e=d(2).$implicit;c(2),f("",l.toUpperCase(),":"),c(2),m(A(5,2,e.datosDinamicos,l))}}function q(n,o){if(n&1&&_(0,J,6,5,"div",23,k),n&2){let l=d().$implicit,e=d(2);C(e.getObjectKeys(l.datosDinamicos))}}function G(n,o){n&1&&(i(0,"p"),a(1,"No hay datos din\xE1micos para este registro."),r())}function Q(n,o){if(n&1&&(i(0,"div",21)(1,"p",22),a(2),r(),i(3,"div",23)(4,"p",24),a(5,"Especialista encargado:"),r(),i(6,"p",25),a(7),r()(),i(8,"p",25),a(9,"Datos de la fecha "),i(10,"b"),a(11),r()(),i(12,"div",26)(13,"p",24),a(14,"Peso:"),r(),i(15,"p",25),a(16),r()(),i(17,"div",23)(18,"p",24),a(19,"Altura:"),r(),i(20,"p",25),a(21),r()(),i(22,"div",23)(23,"p",24),a(24,"Temperatura:"),r(),i(25,"p",25),a(26),r()(),i(27,"div",23)(28,"p",24),a(29,"Presi\xF3n:"),r(),i(30,"p",25),a(31),r()(),a(32),h(33,q,2,0)(34,G,2,0),r(),u(35,"div",27)),n&2){let l=o.$implicit,e=o.$index,t=d(2);c(2),f("Registro ",t.historiaClinica.length-e,""),c(5),m(t.getNombreDelEspecialista(l.especialistaDni)),c(4),m(l.fecha),c(5),m(l.peso),c(5),m(l.altura),c(5),m(l.temperatura),c(5),m(l.presion),c(),f(" ",t.ver(l.datosDinamicos)," "),c(),x(33,l.datosDinamicos&&t.getObjectKeys(l.datosDinamicos).length>0?33:34)}}function W(n,o){if(n&1&&_(0,Q,36,9,null,null,I),n&2){let l=d();C(l.historiaClinica)}}function X(n,o){n&1&&(i(0,"div",21)(1,"p",24),a(2,"Tu historia clinica esta vacia :/"),r()())}var se=(()=>{let o=class o{constructor(e,t,s,v,U,z){this.firestore=e,this.activatedRoute=t,this.auth=s,this.storage=v,this.router=U,this.hc=z,this.email="",this.isAuthenticated=!1,this.userSubscription=new b,this.subscriptions=[],this.cerrandoSesion=!1,this.historiaClinica=[],this.usuarios=[],this.datosDinamicos=[]}ngOnInit(){this.pacienteDni=this.activatedRoute.snapshot.paramMap.get("paciente"),this.userSubscription=this.auth.userActual$.subscribe(e=>{this.isAuthenticated=!!e,this.email=e?.email||""}),this.subscriptions.push(this.firestore.traer("usuarios").subscribe(e=>{this.usuarios=e;for(let t=0;t<this.usuarios.length;t++)if(this.usuarios[t].email===this.email){this.user=this.usuarios[t];break}this.storage.obtenerFotosDelUsuario(this.user.type,this.user.dni.toString()).then(t=>{this.user.foto1=t[0].url}),this.user.type=="paciente"&&this.user.dni!=this.pacienteDni&&this.router.navigate(["perfil",this.user.dni])})),this.subscriptions.push(this.firestore.traer(`historia_clinica/${this.pacienteDni}/datos`).subscribe(e=>{e!=null&&e!=null?(this.historiaClinica=e,console.log("Historia Cl\xEDnica completa:",JSON.stringify(this.historiaClinica,null,2)),this.historiaClinica.forEach((t,s)=>{console.log(`Datos din\xE1micos del item ${s}:`,t.datosDinamicos)})):console.log("DATA DE HISTORIA CLINICA = NULL")}))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}getNombreDelEspecialista(e){let t="";return this.usuarios.forEach(s=>{s.type=="especialista"&&s.dni==e&&(t=s.name+" "+s.lastname)}),t}getNombreDelPaciente(e){let t="";return this.usuarios.forEach(s=>{(s.type=="paciente"||s.type=="admin")&&s.dni==e&&(t=s.name+" "+s.lastname)}),t}getObjectKeys(e){return Object.keys(e)}irAPerfil(){this.router.navigate(["perfil",this.user.dni])}toggleCerrandoSesion(){this.cerrandoSesion=!this.cerrandoSesion}cerrarSesion(){this.auth.logout(),this.router.navigateByUrl("login")}ver(e){console.log("Datos din\xE1micos del item:",e)}};o.\u0275fac=function(t){return new(t||o)(p(N),p(F),p($),p(O),p(B),p(R))},o.\u0275cmp=S({type:o,selectors:[["app-ver-historia-clinica"]],standalone:!0,features:[H],decls:23,vars:4,consts:[[1,"min-h-screen","w-screen","flex","flex-col","overflow-x-hidden"],[1,"h-16","min-h-16","w-full","flex","flex-row","items-center","justify-between","px-6","bg-customDarkBlue","z-50"],[1,"h-full","flex","flex-1","items-center","flex-row","gap-4"],["src","/assets/clinica.png","alt","",1,"h-7","w-7"],[1,"text-slate-100","font-bold","text-xl"],[1,"w-full","h-full","flex","flex-1","items-center","justify-end","flex-row","gap-12"],["routerLink","/home",1,"group","h-8","w-24","rounded-full","font-semibold","bg-slate-100","text-customDarkBlue","flex","flex-row","gap-1","justify-center","items-center","shadow-2xl","hover:bg-customBlue","hover:text-slate-100","transition-colors"],["src","/assets/home-azul.png",1,"h-4","w-4","block","group-hover:hidden"],["src","/assets/home.png",1,"hidden","h-4","w-4","group-hover:block"],[1,"text-sm","font-semibold","mt-px"],[1,"rounded-full","flex","justify-center","items-center","shadow-2xl","pr-6",3,"click"],["alt","",1,"h-10","w-10","rounded-full","absolute",3,"src"],[1,"h-full","w-12","flex","justify-center","items-center","-ml-3"],["src","/assets/volver.png","alt","",1,"h-3","w-3","-rotate-90","cursor-pointer",3,"click"],[1,"w-full","flex","justify-end"],[1,"h-full","w-full","flex","flex-col","items-center","justify-start","bg-slate-200","gap-5","px-12","pb-12","pt-20"],[1,"text-customDarkBlue","font-bold","text-xl"],[1,"w-[600px]","h-auto","rounded-md","bg-white","shadow-md","flex","flex-col","items-center","px-5","py-10","gap-5","mt-5"],[1,"w-32","h-10","rounded-md","flex","justify-center","items-center","flex-row","gap-1.5","cursor-pointer","mr-[2%]","mt-1","bg-red-600","hover:bg-red-800","transition-all",3,"click"],["src","/assets/volver.png","alt","",1,"h-4","w-4","cursor-pointer"],[1,"text-sm","font-medium","text-white","whitespace-nowrap"],[1,"w-full","h-auto","flex","flex-col","items-center","justify-start","gap-3"],[1,"font-bold","text-lg","text-white","bg-customDarkBlue","rounded-md","w-full","py-2","text-center"],[1,"flex","flex-row","gap-1.5"],[1,"font-medium","text-lg","text-customDarkBlue"],[1,"font-semibold","text-lg","text-customDarkBlue"],[1,"flex","flex-row","gap-1.5","mt-4"],[1,"h-px","w-full","bg-zinc-700"]],template:function(t,s){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),u(3,"img",3),i(4,"h1",4),a(5,"Clinica"),r()(),i(6,"div",5)(7,"button",6),u(8,"img",7)(9,"img",8),i(10,"p",9),a(11,"Home"),r()(),i(12,"button",10),g("click",function(){return s.irAPerfil()}),u(13,"img",11),r()(),i(14,"div",12)(15,"img",13),g("click",function(){return s.toggleCerrandoSesion()}),r()()(),h(16,M,5,0,"div",14),i(17,"div",15)(18,"p",16),a(19),r(),i(20,"div",17),h(21,W,2,0)(22,X,3,0),r()()()),t&2&&(c(13),T("src",s.user.foto1,D),c(3),x(16,s.cerrandoSesion?16:-1),c(3),f("Ver la historia clinica del paciente ",s.getNombreDelPaciente(s.pacienteDni),""),c(2),x(21,s.historiaClinica?21:22))},dependencies:[P,L]});let n=o;return n})();export{se as VerHistoriaClinicaComponent};
