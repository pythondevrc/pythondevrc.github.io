import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ForestingPage } from './foresting';
import { ForestingPageRoutingModule } from './foresting-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ForestingPageRoutingModule
    ],
    declarations: [ForestingPage],
    bootstrap: [ForestingPage]
})
export class ForestingModule {}
