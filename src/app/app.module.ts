import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    MobilesComponent,
    BikesComponent,
    TelevisionsComponent,
    PageNotFoundComponent,
    TestComponent,
    Test1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
