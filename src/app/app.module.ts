import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TagComponent } from './components/tag/tag.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    CartPageComponent,
    FoodPageComponent,
    NotFoundComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
