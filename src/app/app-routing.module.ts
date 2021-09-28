import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent} ,
  {path: 'hero', component: HeroComponent,
   children: [{
      path: 'detail/:id', // child route path
      component: HeroDetailComponent // child route component that the router renders
    },
  ]},
  {path: 'dashboard', component: DashboardComponent} ,
  {path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
