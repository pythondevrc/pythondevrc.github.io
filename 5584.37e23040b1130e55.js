"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5584],{5584:(P,u,a)=>{a.r(u),a.d(u,{ForestingModule:()=>M});var p=a(4755),e=a(7151),g=a(5030),n=a(9523),d=a(6550),m=a(9287);let c=(()=>{class t{constructor(o,i){this.sanitizer=o,this.datalandService=i,this.mapNumber=1,this.selectedMaps="1"}ngOnInit(){this.datalandService.obtenerDatos().subscribe(o=>{this.lands=o,this.loadMap()}),this.loadGame()}loadMap(){this.mapUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://play.pixels.xyz/pixels/share/${this.mapNumber}`)}loadGame(){this.gameUrl=this.sanitizer.bypassSecurityTrustResourceUrl("https://play.pixels.xyz")}nextMap(){do{this.mapNumber++}while(this.mapNumber<=5e3&&!this.isMapValid(this.mapNumber));this.mapNumber<=5e3?this.loadMap():this.mapNumber<=0?(this.mapNumber=5e3,this.loadMap()):(this.mapNumber=1,this.loadMap())}previousMap(){do{this.mapNumber--}while(this.mapNumber>=1&&!this.isMapValid(this.mapNumber));this.mapNumber>=1?this.loadMap():this.mapNumber>=5e3?(this.mapNumber=1,this.loadMap()):(this.mapNumber=5e3,this.loadMap())}isMapValid(o){const i=this.lands.find(s=>s.numero===o);return i&&!0===i.foresting}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(d.H7),n.Y36(m.h))},t.\u0275cmp=n.Xpm({type:t,selectors:[["page-foresting"]],decls:20,vars:3,consts:[["slot","start"],[1,"floating-button",3,"click"],["name","arrow-back"],[1,"floating-input"],["type","number","placeholder","N\xfamero del mapa",3,"ngModel","ngModelChange"],["name","search"],["slot","end"],["name","arrow-forward"],[2,"height","100%"],["size","12"],["width","100%","height","100%","frameborder","0",3,"src"],["allow-same-origin","true","sandbox","allow-same-origin allow-scripts","width","100%","height","100%","frameborder","0",3,"src"]],template:function(o,i){1&o&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),n.NdJ("click",function(){return i.previousMap()}),n._UZ(4,"ion-icon",2),n.qZA()(),n.TgZ(5,"div",3)(6,"ion-item")(7,"ion-input",4),n.NdJ("ngModelChange",function(f){return i.mapNumber=f}),n.qZA(),n.TgZ(8,"ion-button",1),n.NdJ("click",function(){return i.loadMap()}),n._UZ(9,"ion-icon",5),n.qZA()()(),n.TgZ(10,"ion-buttons",6)(11,"ion-button",1),n.NdJ("click",function(){return i.nextMap()}),n._UZ(12,"ion-icon",7),n.qZA()()()(),n.TgZ(13,"ion-content")(14,"ion-grid",8)(15,"ion-row",8)(16,"ion-col",9),n._UZ(17,"iframe",10),n.qZA(),n.TgZ(18,"ion-col",9),n._UZ(19,"iframe",11),n.qZA()()()()),2&o&&(n.xp6(7),n.Q6J("ngModel",i.mapNumber),n.xp6(10),n.Q6J("src",i.mapUrl,n.uOi),n.xp6(2),n.Q6J("src",i.gameUrl,n.uOi))},dependencies:[g.JJ,g.On,e.YG,e.Sm,e.wI,e.W2,e.jY,e.Gu,e.gu,e.pK,e.Ie,e.Nd,e.sr,e.as],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: transparent;--color: white;text-align:center;position:absolute;top:0;right:0;left:0}.floating-input[_ngcontent-%COMP%]{--background: transparent;align-items:center}.floating-input[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: transparent;border-radius:10px;padding:5px}.floating-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--background: transparent;text-align:center;color:#fff;border:none;border-radius:10px}.floating-input[_ngcontent-%COMP%]   .floating-button[_ngcontent-%COMP%]{--background: transparent;border-radius:50%}ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{--color: white}.about-header[_ngcontent-%COMP%]{position:relative;width:100%;height:30%}.about-header[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%]{position:absolute;inset:0;transition:opacity .5s ease-in-out;background-repeat:no-repeat;background-position:center;background-size:cover;opacity:0}.about-header[_ngcontent-%COMP%]   .madison[_ngcontent-%COMP%]{background-image:url(/assets/img/about/madison.jpg)}.about-header[_ngcontent-%COMP%]   .austin[_ngcontent-%COMP%]{background-image:url(/assets/img/about/austin.jpg)}.about-header[_ngcontent-%COMP%]   .chicago[_ngcontent-%COMP%]{background-image:url(/assets/img/about/chicago.jpg)}.about-header[_ngcontent-%COMP%]   .seattle[_ngcontent-%COMP%]{background-image:url(/assets/img/about/seattle.jpg)}.about-info[_ngcontent-%COMP%]{position:relative;margin-top:-10px;border-radius:10px;background:var(--ion-background-color, #ffffff);z-index:2}.about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0}.about-info[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding-top:0}.about-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-dark);line-height:130%}.about-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-margin-end:32px;margin-inline-end:32px}#date-input-popover[_ngcontent-%COMP%]{--offset-y: -var(--ion-safe-area-bottom);--max-width: 90%;--width: 336px}.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]{--ion-padding: 19px}.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}"]}),t})();var l=a(6775);const b=[{path:"",component:c}];let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.Bz.forChild(b),l.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t,bootstrap:[c]}),t.\u0275inj=n.cJS({imports:[p.ez,g.u5,e.Pc,h]}),t})()}}]);