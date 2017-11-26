import { NgModule }             from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { WDressesComponent } from './child-components/woman-dresses.component';
import { WSwimsuitsComponent } from './child-components/woman-swimsuits.component';
import { WAccessoriesComponent } from './child-components/woman-accessories.component';
import { WSkirtsComponent } from './child-components/woman-skirts.component';

import { WomanRoutingModule } from './woman-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WomanRoutingModule
  ],
  declarations: [
    WDressesComponent,
    WSwimsuitsComponent,
    WAccessoriesComponent,
    WSkirtsComponent
  ]
})

export class WomanModule{}
