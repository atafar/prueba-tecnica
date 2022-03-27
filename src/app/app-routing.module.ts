import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoHeroesComponent } from './listado-heroes/listado-heroes.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ListadoHeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
