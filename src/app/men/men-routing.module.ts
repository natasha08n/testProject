import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';

import { MenComponent } from './men.component';
import { MSuitsComponent } from './child-components/men-suits.component';
import { MShortsComponent } from './child-components/men-shorts.component';
import { MPajamasComponent } from './child-components/men-pajamas.component';
import { MThermalUnderwareComponent } from './child-components/men-thermal-underwear.component';


const menRoutes: Routes = [
  {
    path: 'men',
    component: MenComponent,
    children: [
      {path: 'suits', component: MSuitsComponent},
      {path: 'pajamas', component: MPajamasComponent},
      {path: 'shorts', component: MShortsComponent},
      {path: 'thermal', component: MThermalUnderwareComponent}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(menRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MenRoutingModule{}
