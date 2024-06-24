import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewSeguroComponent } from './components/view-seguro/view-seguro.component';
import { AddSeguroComponent } from './components/add-seguro/add-seguro.component';
import { UpdateSeguroComponent } from './components/update-seguro/update-seguro.component';

const routes: Routes = [
  { path: '', component: ViewUserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'update/:id', component: UpdateUserComponent},

  { path: 'seguros', component: ViewSeguroComponent },
  { path: 'addseguro', component: AddSeguroComponent },
  { path: 'updateseguro/:id', component: UpdateSeguroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
