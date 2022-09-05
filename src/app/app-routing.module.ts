import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './other-components/home/home.component';
import { NotFoundComponent } from './other-components/not-found/not-found.component';
import { ProfileComponent } from './other-components/profile/profile.component';
 
const routes: Routes = [
  /* Rute simple */
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: ()=> import ('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',  
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,  
  },
  {
    path: 'login',
    redirectTo: 'auth/login'
  },
  {
    path: 'register',
    redirectTo: 'auth/register'
  },
  {
    path: 'auth',
    loadChildren: ()=> import ('src/app/modules/auth/auth.module').then(m => m.AuthModule), 
  },
  {
    path: 'diyidea/:id',
    redirectTo: 'dashboard/diyidea/:id',
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProfileComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
