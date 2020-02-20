import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newuser', component: NewuserComponent},
  {path: 'data', component: DataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
