import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './views/start/start.component';
import { LoginComponent } from './views/login/login.component';
import { ClientpersonformComponent } from './views/clientpersonform/clientpersonform.component';
import { EntrarComponent } from './views/entrar/entrar.component';
import { GirlComponent } from './views/girl/girl.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'personForm', component: ClientpersonformComponent},
  {path: 'startGirl', component: StartComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'girl', component: GirlComponent, canActivate: [AuthGuard]}, //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
