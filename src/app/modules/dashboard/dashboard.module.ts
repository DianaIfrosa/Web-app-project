import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DIYideaComponent } from './diyidea/diyidea.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { SafePipe } from 'src/app/safe.pipe';
import { HoverDirective } from 'src/app/hover.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    DIYideaComponent,
    DashboardComponent,
    SafePipe,
    HoverDirective,
    MenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports:[
    SafePipe,
    HoverDirective
  ]
})
export class DashboardModule { }
