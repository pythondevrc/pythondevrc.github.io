"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5484],{5484:(P,d,i)=>{i.r(d),i.d(d,{LoginModule:()=>h});var c=i(4755),g=i(5030),e=i(7151),r=i(6775),n=i(9523),p=i(6401);const m=[{path:"",component:(()=>{class o{constructor(t,l){this.userData=t,this.router=l,this.login={username:"",password:""},this.submitted=!1}onLogin(t){this.submitted=!0,t.valid&&(this.userData.login(this.login.username),this.router.navigateByUrl("/app/tabs/map"))}onSignup(){this.router.navigateByUrl("/signup")}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(p.m),n.Y36(r.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["page-login"]],decls:23,vars:2,consts:[["slot","start"],[1,"login-logo"],["src","assets/img/appicon.svg","alt","Ionic logo"],[1,"login-form"],["novalidate",""],["loginForm","ngForm"],["label","Username","labelPlacement","stacked","fill","solid","name","username","type","text","spellcheck","false","autocapitalize","off","errorText","Username is required","required","",3,"ngModel","ngModelChange"],["username","ngModel"],["label","Password","labelPlacement","stacked","fill","solid","name","password","type","password","errorText","Password is required","required","",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit","expand","block",3,"click"],["color","light","expand","block",3,"click"]],template:function(t,l){if(1&t){const M=n.EpF();n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Login"),n.qZA()()(),n.TgZ(6,"ion-content")(7,"div",1),n._UZ(8,"img",2),n.qZA(),n.TgZ(9,"div",3)(10,"form",4,5)(12,"ion-input",6,7),n.NdJ("ngModelChange",function(s){return l.login.username=s}),n.qZA(),n.TgZ(14,"ion-input",8,9),n.NdJ("ngModelChange",function(s){return l.login.password=s}),n.qZA(),n.TgZ(16,"ion-row")(17,"ion-col")(18,"ion-button",10),n.NdJ("click",function(){n.CHM(M);const s=n.MAs(11);return n.KtG(l.onLogin(s))}),n._uU(19,"Login"),n.qZA()(),n.TgZ(20,"ion-col")(21,"ion-button",11),n.NdJ("click",function(){return l.onSignup()}),n._uU(22,"Signup"),n.qZA()()()()()()}2&t&&(n.xp6(12),n.Q6J("ngModel",l.login.username),n.xp6(2),n.Q6J("ngModel",l.login.password))},dependencies:[g._Y,g.JJ,g.JL,g.Q7,g.On,g.F,e.YG,e.Sm,e.wI,e.W2,e.Gu,e.pK,e.fG,e.Nd,e.wd,e.sr,e.j9],styles:[".login-logo[_ngcontent-%COMP%]{min-height:200px;padding:20px 0;text-align:center}.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.login-form[_ngcontent-%COMP%]{padding:16px}ion-input[_ngcontent-%COMP%]{margin-bottom:10px}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[r.Bz.forChild(m),r.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[c.ez,g.u5,e.Pc,f]}),o})()}}]);