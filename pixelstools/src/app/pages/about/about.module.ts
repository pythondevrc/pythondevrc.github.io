import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { AboutPage } from './about';
import { PopoverPage } from '../about-popover/about-popover';
import { AboutPageRoutingModule } from './about-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPageRoutingModule
    ],
    declarations: [AboutPage, PopoverPage],
    bootstrap: [AboutPage]
})
export class AboutModule {}
