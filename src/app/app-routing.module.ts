import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetayComponent } from './components/detay/detay.component';
import { CarsComponent } from './components/cars/cars.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './services/auth.guard';
import { GrupComponent } from './components/grup/grup.component';
import { DersComponent } from './components/ders/ders.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"cars",component:CarsComponent},
  {path:"detay",component:DetayComponent},
  {path:"adminss",
  component:AdminComponent,
  canActivate:[AuthGuard],
  data:{
    yetkiler:['Admin']
  }
},
{path:"admin",
  component:GrupComponent,
  canActivate:[AuthGuard],
  data:{
    yetkiler:['Admin']
  }
},
{path:"ders/:gId",
component:DersComponent,

},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
