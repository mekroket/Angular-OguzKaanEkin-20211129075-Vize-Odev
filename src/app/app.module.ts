import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarsComponent } from './components/cars/cars.component';
import { DetayComponent } from './components/detay/detay.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { AuthGuard } from './services/auth.guard';
import { GrupComponent } from './components/grup/grup.component';
import { DersComponent } from './components/ders/ders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CarsComponent,
    DetayComponent,
    NavComponent,
    FooterComponent,
    AdminComponent,
    GrupComponent,
    DersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
