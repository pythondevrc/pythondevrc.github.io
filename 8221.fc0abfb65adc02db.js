"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8221],{8221:(h,i,r)=>{r.r(i),r.d(i,{SupportModule:()=>M});var m=r(4755),u=r(5030),n=r(7151),l=r(6775),g=r(5861),t=r(9523);const c=[{path:"",component:(()=>{class o{constructor(e,s){this.alertCtrl=e,this.toastCtrl=s,this.submitted=!1}ionViewDidEnter(){var e=this;return(0,g.Z)(function*(){yield(yield e.toastCtrl.create({message:"This does not actually send a support request.",duration:3e3})).present()})()}submit(e){var s=this;return(0,g.Z)(function*(){s.submitted=!0,e.valid&&(s.supportMessage="",s.submitted=!1,yield(yield s.toastCtrl.create({message:"Your support request has been sent.",duration:3e3})).present())})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.Br),t.Y36(n.yF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["page-support"]],decls:17,vars:1,consts:[["slot","start"],[1,"support-logo"],["src","assets/img/appicon.svg","alt","Ionic Logo"],[1,"support-form"],["novalidate","",3,"ngSubmit"],["submitForm","ngForm"],["label","Enter your support message below","labelPlacement","stacked","fill","solid","name","supportQuestion","rows","6","errorText","Support message is required","required","",3,"ngModel","ngModelChange"],["supportQuestion","ngModel"],[1,"ion-padding"],["expand","block","type","submit"]],template:function(e,s){if(1&e){const d=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Support"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"div",1),t._UZ(8,"img",2),t.qZA(),t.TgZ(9,"div",3)(10,"form",4,5),t.NdJ("ngSubmit",function(){t.CHM(d);const a=t.MAs(11);return t.KtG(s.submit(a))}),t.TgZ(12,"ion-textarea",6,7),t.NdJ("ngModelChange",function(a){return s.supportMessage=a}),t.qZA(),t.TgZ(14,"div",8)(15,"ion-button",9),t._uU(16,"Submit"),t.qZA()()()()()}2&e&&(t.xp6(12),t.Q6J("ngModel",s.supportMessage))},dependencies:[u._Y,u.JJ,u.JL,u.Q7,u.On,u.F,n.YG,n.Sm,n.W2,n.Gu,n.fG,n.g2,n.wd,n.sr,n.j9],styles:[".support-logo[_ngcontent-%COMP%]{min-height:200px;padding:20px 0;text-align:center}.support-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}.support-form[_ngcontent-%COMP%]{padding:16px}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(c),l.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,u.u5,n.Pc,f]}),o})()}}]);