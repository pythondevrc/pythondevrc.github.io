import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { ForestingPage } from './foresting';
import { PopoverPage } from '../about-popover/about-popover';
import { ForestingPageRoutingModule } from './foresting-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ForestingPageRoutingModule
    ],
    declarations: [ForestingPage, PopoverPage],
    bootstrap: [ForestingPage]
})
export class ForestingModule {}
