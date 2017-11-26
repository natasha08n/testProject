import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MSuitsComponent } from './child-components/men-suits.component';
import { MPajamasComponent } from './child-components/men-pajamas.component';
import { MThermalUnderwareComponent } from './child-components/men-thermal-underwear.component';
import { MShortsComponent } from './child-components/men-shorts.component';

import { MenRoutingModule } from './men-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MenRoutingModule
  ],
  declarations: [
    MShortsComponent,
    MSuitsComponent,
    MThermalUnderwareComponent,
    MPajamasComponent
  ]
})

export class MenModule{}
