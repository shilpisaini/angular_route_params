import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/animals',
    pathMatch: 'full'
  },
  { 
    path: "animals/:animal", component: AnimalsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
