import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

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
    path:'products',component:ProductComponent
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
