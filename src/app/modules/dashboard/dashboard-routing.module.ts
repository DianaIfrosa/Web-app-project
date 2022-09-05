import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DIYideaComponent } from './diyidea/diyidea.component';

const routes: Routes = [{
  path: '',
  //redirectTo: 'dashboard',
  component: DashboardComponent,
},
/*{
  path: 'dashboard',
  //component: DashboardComponent,
  redirectTo: '',
},*/
{
  path: 'diyidea/:id',
  component: DIYideaComponent,
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
