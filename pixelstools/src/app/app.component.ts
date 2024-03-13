import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { Platform, ToastController } from '@ionic/angular';

import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Lands',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'Foresting',
      url: '/app/tabs/foresting',
      icon: 'leaf'
    },
    {
      title: 'Foresting Time',
      url: '/app/tabs/forestime',
      icon: 'hammer'
    }
  ];
  dark = false;

  constructor(
    private platform: Platform,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    await this.storage.create();

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        StatusBar.hide();
        SplashScreen.hide();
      }
    });
  }

}
