import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

//Lazy Loading method (exept NotFoundComponent)
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((mod) => mod.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((mod) => mod.ContactModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], //Eager loading
  exports: [RouterModule],
})
export class AppRoutingModule {}
