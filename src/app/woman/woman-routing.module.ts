import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";

import { WomanComponent } from './woman.component';
import { WDressesComponent } from './child-components/woman-dresses.component';
import { WSwimsuitsComponent } from './child-components/woman-swimsuits.component';
import { WAccessoriesComponent } from './child-components/woman-accessories.component';
import { WSkirtsComponent } from './child-components/woman-skirts.component';


const womanRoutes: Routes = [
  {
    path: 'woman',
    component: WomanComponent,
    children: [
      {path: 'dresses', component: WDressesComponent},
      {path: 'accessories', component: WAccessoriesComponent},
      {path: 'skirts', component: WSkirtsComponent},
      {path: 'swimsuits', component: WSwimsuitsComponent}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(womanRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class WomanRoutingModule{}
