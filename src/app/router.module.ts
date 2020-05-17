import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
  },
  {
    path: 'second-component',
    component: SecondComponent,
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
];

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'path', component: FeatureComponent },
//   { path: '**', component: PageNotFoundComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
