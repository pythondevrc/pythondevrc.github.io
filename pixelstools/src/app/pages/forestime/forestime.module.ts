import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ForestimePage } from './forestime';
import { ForestimePageRoutingModule } from './forestime-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    ForestimePageRoutingModule
  ],
  declarations: [
    ForestimePage,
  ]
})
export class ForestimeModule { }
