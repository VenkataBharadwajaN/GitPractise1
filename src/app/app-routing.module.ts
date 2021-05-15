import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  { path:'home',component:HomeComponent },
  {
    path:'registration',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'test',component:TestComponent
  },
  {
    path:'test1',component:Test1Component
  },
  {
    path:'products',component:ProductComponent,children:[
      {
          path:'mobiles',component:MobilesComponent
      },
      {
        path:'bikes',component:BikesComponent
      },
      {
      path:'televisions',component:TelevisionsComponent
      },
      {
        path:'',redirectTo:'/products/bikes',pathMatch:'full'
      },
    ]
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**',component:PageNotFoundComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
