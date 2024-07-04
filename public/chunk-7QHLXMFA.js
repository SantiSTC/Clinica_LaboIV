import{a as k}from"./chunk-67C5N37V.js";import{a as Q}from"./chunk-3SQFKCHV.js";import"./chunk-DGYUBMNP.js";import{b as U,c as H,e as R,f as W,g as G,j as q}from"./chunk-XFYYO32E.js";import{b as J,c as K}from"./chunk-7YO6BCT5.js";import"./chunk-I2SBAJLK.js";import{D as v,E as _,Ha as V,Ja as M,Ka as O,M as E,N as d,O as g,V as w,Z as S,_ as $,a as j,aa as F,ba as T,ca as s,da as o,ea as h,fa as y,ga as b,ha as f,ia as C,ka as l,la as x,m as D,ma as A,pa as B,qa as N,ra as z,ta as L,x as I}from"./chunk-BMMUWXGF.js";import"./chunk-FK6H3RFT.js";import"./chunk-5G567QLT.js";function X(a,u){if(a&1){let c=y();s(0,"div",14)(1,"div",34),b("click",function(){v(c);let i=f();return _(i.cerrarSesion())}),h(2,"img",35),s(3,"p",36),l(4,"Cerrar Sesi\xF3n"),o()()()}}function Y(a,u){if(a&1&&(s(0,"div",24)(1,"p",22),l(2,"Especialidades:"),o(),s(3,"p",23),l(4),o()()),a&2){let c=f();d(4),x(c.user.especialidad)}}function Z(a,u){if(a&1){let c=y();s(0,"div",24)(1,"p",22),l(2,"Obra Social:"),o(),s(3,"p",23),l(4),o()(),s(5,"div",37)(6,"button",38),b("click",function(){v(c);let i=f();return _(i.irAHistoriaClinico())}),l(7,"Ver historia clinica"),o()(),s(8,"div",37)(9,"button",38),b("click",function(){v(c);let i=f();return _(i.generatePDF())}),l(10,"Descargar historia clinica"),o()()}if(a&2){let c=f();d(4),x(c.user.obrasocial)}}function ee(a,u){if(a&1&&h(0,"img",27),a&2){let c=f();C("src",c.user.foto2,E)}}function te(a,u){if(a&1&&(s(0,"option",32),l(1),o()),a&2){let c=u.$implicit;C("value",c),d(),x(c)}}function ie(a,u){if(a&1){let c=y();s(0,"button",39),b("click",function(){v(c);let i=f();return _(i.downloadUserPDF(i.especialidadElegida))}),l(1),o()}if(a&2){let c=f();d(),A("Descargar turnos de ",c.especialidadElegida,"")}}function ne(a,u){a&1&&(s(0,"button",40),l(1,"Elije una especialidad"),o())}var fe=(()=>{let u=class u{constructor(r,i,e,n,t){this.auth=r,this.firestore=i,this.router=e,this.activatedRoute=n,this.storage=t,this.email="",this.isAuthenticated=!1,this.userSubscription=new j,this.subscriptions=[],this.cerrandoSesion=!1,this.usuarios=[],this.historiaClinica=[],this.especialidades=[],this.especialidadElegida="",this.clinicLogo="/assets/clinica.png"}irAHistoriaClinico(){this.router.navigate(["ver_hc",this.user.dni])}generatePDF(){let r=new k,i=new Image;i.src=this.clinicLogo,i&&r.addImage(i,"PNG",10,10,25,25),r.setFontSize(18),r.text("Historia Cl\xEDnica",50,18),r.setFontSize(12),r.text(`Paciente: ${this.getNombreDelPaciente(this.user.dni)}`,50,25),r.text(`Fecha de emisi\xF3n: ${new Date().toLocaleDateString()}`,50,32);let e=50;this.historiaClinica.forEach((t,m)=>{r.setFontSize(14),r.text(`Registro ${this.historiaClinica.length-m}`,10,e),e+=10,r.setFontSize(12),r.text(`Especialista: ${this.getNombreDelEspecialista(t.especialistaDni)}`,10,e),e+=7,r.text(`Fecha: ${t.fecha}`,10,e),e+=7,r.text(`Peso: ${t.peso}`,10,e),e+=7,r.text(`Altura: ${t.altura}`,10,e),e+=7,r.text(`Temperatura: ${t.temperatura}`,10,e),e+=7,r.text(`Presi\xF3n: ${t.presion}`,10,e),e+=10,t.datosDinamicos&&Object.keys(t.datosDinamicos).length>0&&Object.entries(t.datosDinamicos).forEach(([p,P])=>{r.text(`${p}: ${P}`,10,e),e+=7}),r.line(10,e,200,e),e+=10,e>270&&(r.addPage(),e=20)});let n="Historia_Clinica_"+this.dni+".pdf";r.save(n)}downloadUserPDF(r){let i=[];this.firestore.traer("turnos").pipe(D(1)).subscribe(e=>{e.forEach(p=>{p.paciente==this.user.dni&&i.push(p)});let n=new k;n.setFontSize(16),n.text("Datos del Paciente",20,20),n.setFontSize(12);let t=40,m=10;n.text(`Nombre: ${this.user.name}`,20,t),t+=m,n.text(`Apellido: ${this.user.lastname}`,20,t),t+=m,n.text(`Edad: ${this.user.edad}`,20,t),t+=m,n.text(`DNI: ${this.user.dni}`,20,t),t+=m,n.text(`Email: ${this.user.email}`,20,t),t+=m,n.text(`Obra Social: ${this.user.obrasocial||"No especificada"}`,20,t),t+=m*2,n.setFontSize(14),n.text("Turnos del Paciente",20,t),t+=m*1.5,i.length>0?i.forEach((p,P)=>{p.estadoDelTurno=="realizado"&&p.especialidad.toLowerCase()==r.toLowerCase()&&(n.setFontSize(12),n.text(`Fecha: ${p.dia}`,20,t),t+=m,n.text(`Hora: ${p.hora}`,20,t),t+=m,n.text(`Especialidad: ${r}`,20,t),t+=m,n.text(`Especialista: ${this.getNombreDelEspecialista(p.especialista)}`,20,t),t+=m,n.line(20,t,190,t),t+=m,t>270&&(n.addPage(),t=20))}):(n.setFontSize(12),n.text("No hay turnos registrados para este usuario en la especialidad elegida.",20,t)),n.save(`paciente_${this.user.dni}_turnos_${r}.pdf`)})}ngOnInit(){let r;this.dni=this.activatedRoute.snapshot.paramMap.get("dni"),this.userSubscription=this.auth.userActual$.subscribe(i=>{this.isAuthenticated=!!i,this.email=i?.email||""}),this.firestore.traer("turnos").pipe(D(1)).subscribe(i=>{r=i}),this.subscriptions.push(this.firestore.traer("usuarios").subscribe(i=>{this.usuarios=i;let e=i;for(let n=0;n<e.length;n++)if(e[n].email===this.email){this.user=e[n];break}this.user.dni!=this.dni&&this.router.navigate(["perfil",this.user.dni]),this.storage.obtenerFotosDelUsuario(this.user.type,this.user.dni.toString()).then(n=>{this.user.foto1=n[0].url}),r.forEach(n=>{n.paciente==this.user.dni&&n.estadoDelTurno=="realizado"&&(this.especialidades.includes(n.especialidad)||this.especialidades.push(n.especialidad))}),console.log("ESPECIALIDABDABD",this.especialidades)})),this.subscriptions.push(this.firestore.traer(`historia_clinica/${this.dni}/datos`).subscribe(i=>{i!=null&&i!=null?(this.historiaClinica=i,this.historiaClinica.forEach((e,n)=>{console.log(`Datos din\xE1micos del item ${n}:`,e.datosDinamicos)})):console.log("DATA DE HISTORIA CLINICA = NULL")}))}ngOnDestroy(){this.subscriptions.forEach(r=>r.unsubscribe())}getNombreDelEspecialista(r){let i="";return this.usuarios.forEach(e=>{e.type=="especialista"&&e.dni==r&&(i=e.name+" "+e.lastname)}),i}getNombreDelPaciente(r){let i="";return this.usuarios.forEach(e=>{(e.type=="paciente"||e.type=="admin")&&e.dni==r&&(i=e.name+" "+e.lastname)}),i}toggleCerrandoSesion(){this.cerrandoSesion=!this.cerrandoSesion}cerrarSesion(){this.auth.logout(),this.router.navigateByUrl("login")}};u.\u0275fac=function(i){return new(i||u)(g(J),g(K),g(M),g(V),g(Q))},u.\u0275cmp=I({type:u,selectors:[["app-perfil"]],standalone:!0,features:[L],decls:55,vars:10,consts:[[1,"h-screen","w-screen","flex","flex-col","overflow-x-hidden"],[1,"h-16","min-h-16","w-full","flex","flex-row","items-center","justify-between","px-6","bg-customDarkBlue","z-50"],[1,"h-full","flex","flex-1","items-center","flex-row","gap-4"],["src","/assets/clinica.png","alt","",1,"h-7","w-7"],[1,"text-slate-100","font-bold","text-xl"],[1,"w-full","h-full","flex","flex-1","items-center","justify-end","flex-row","gap-12"],["routerLink","/home",1,"group","h-8","w-24","rounded-full","font-semibold","bg-slate-100","text-customDarkBlue","flex","flex-row","gap-1","justify-center","items-center","shadow-2xl","hover:bg-customBlue","hover:text-slate-100","transition-colors"],["src","/assets/home-azul.png",1,"h-4","w-4","block","group-hover:hidden"],["src","/assets/home.png",1,"hidden","h-4","w-4","group-hover:block"],[1,"text-sm","font-semibold","mt-px"],["routerLink","/perfil",1,"rounded-full","flex","justify-center","items-center","shadow-2xl","pr-6"],["alt","",1,"h-10","w-10","rounded-full","sticky",3,"src"],[1,"h-full","w-12","flex","justify-center","items-center","-ml-3"],["src","/assets/volver.png","alt","",1,"h-3","w-3","-rotate-90","cursor-pointer",3,"click"],[1,"w-full","flex","justify-end"],[1,"h-full","w-full","flex","flex-col","bg-slate-200"],[1,"h-full","w-full","flex","justify-center","items-center","flex-row"],[1,"w-full","h-full","flex","items-center","justify-start","flex-col","p-8","gap-8"],[1,"flex","flex-col","items-center","justify-start","gap-7","bg-white","py-8","px-20","rounded-md"],[1,"text-customDarkBlue","font-bold","text-3xl"],[1,"flex","flex-col","gap-4","items-start"],[1,"mt-5","flex","flex-row","gap-1.5","justify-center","items-center"],[1,"text-lg","font-medium","text-customDarkBlue"],[1,"text-lg","font-bold","text-customDarkBlue"],[1,"flex","flex-row","gap-1.5","justify-center","items-center"],[1,"w-full","h-full","flex","items-center","justify-start","flex-col","py-8","pr-8","gap-4"],[1,"flex","flex-row","items-start","justify-center","gap-6","p-6","bg-white","rounded-md"],["alt","",1,"rounded-md","h-52","w-52",3,"src"],[1,"flex","flex-col","items-start","justify-center","gap-6","p-6","bg-white","rounded-md"],[1,"text-customDarkBlue","font-bold","text-base"],["name","especialidades","id","especialidades",1,"w-full","h-9","rounded-md","border-2","border-customDarkBlue","font-medium","text-customDarkBlue","px-2",3,"ngModelChange","ngModel"],["value","","disabled","","selected",""],[3,"value"],[1,"w-full","h-9","rounded-md","bg-customDarkBlue","text-white","font-semibold","flex","justify-center","items-center"],[1,"w-32","h-10","rounded-md","flex","justify-center","items-center","flex-row","gap-1.5","cursor-pointer","mr-[2%]","mt-1","bg-red-600","hover:bg-red-800","transition-all",3,"click"],["src","/assets/volver.png","alt","",1,"h-4","w-4","cursor-pointer"],[1,"text-sm","font-medium","text-white","whitespace-nowrap"],[1,"flex","justify-center","w-full"],[1,"bg-customDarkBlue","px-5","py-2.5","flex","justify-center","items-center","rounded-md","shadow-lg","text-white","font-semibold","hover:shadow-none","hover:bg-customLightBlue","hover:scale-95","transition-all","duration-300",3,"click"],[1,"w-full","h-9","rounded-md","bg-customDarkBlue","text-white","font-semibold","flex","justify-center","items-center",3,"click"],["disabled","",1,"w-full","h-9","rounded-md","bg-zinc-600","text-white","font-semibold","flex","justify-center","items-center"]],template:function(i,e){i&1&&(s(0,"div",0)(1,"div",1)(2,"div",2),h(3,"img",3),s(4,"h1",4),l(5,"Clinica"),o()(),s(6,"div",5)(7,"button",6),h(8,"img",7)(9,"img",8),s(10,"p",9),l(11,"Home"),o()(),s(12,"button",10),h(13,"img",11),o()(),s(14,"div",12)(15,"img",13),b("click",function(){return e.toggleCerrandoSesion()}),o()()(),w(16,X,5,0,"div",14),s(17,"div",15)(18,"div",16)(19,"div",17)(20,"div",18)(21,"p",19),l(22,"Mi perfil"),o(),s(23,"div",20)(24,"div",21)(25,"p",22),l(26,"Nombre:"),o(),s(27,"p",23),l(28),o()(),s(29,"div",24)(30,"p",22),l(31,"Edad:"),o(),s(32,"p",23),l(33),o()(),s(34,"div",24)(35,"p",22),l(36,"DNI:"),o(),s(37,"p",23),l(38),o()(),w(39,Y,5,1,"div",24)(40,Z,11,1),o()()(),s(41,"div",25)(42,"div",26),h(43,"img",27),w(44,ee,1,1,"img",27),o(),s(45,"div",28)(46,"p",29),l(47,"Descargar turnos de una especialidad en concreto:"),o(),s(48,"select",30),z("ngModelChange",function(t){return N(e.especialidadElegida,t)||(e.especialidadElegida=t),t}),s(49,"option",31),l(50,"Elije una de tus especialidades"),o(),F(51,te,2,2,"option",32,$),o(),w(53,ie,2,1,"button",33)(54,ne,2,0),o()()()()()),i&2&&(d(13),C("src",e.user.foto1,E),d(3),S(16,e.cerrandoSesion?16:-1),d(12),x(e.user.name+" "+e.user.lastname),d(5),x(e.user.edad),d(5),x(e.user.dni),d(),S(39,e.user.type=="especialista"?39:40),d(4),C("src",e.user.foto1,E),d(),S(44,e.user.type=="paciente"||e.user.type=="admin"?44:-1),d(4),B("ngModel",e.especialidadElegida),d(3),T(e.especialidades),d(2),S(53,e.especialidadElegida!=""?53:54))},dependencies:[O,q,W,G,R,U,H]});let a=u;return a})();export{fe as PerfilComponent};
