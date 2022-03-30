import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarHeroeComponent } from './pages/editar-heroe/editar-heroe.component';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { NuevoHeroeComponent } from './pages/nuevo-heroe/nuevo-heroe.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ListadoHeroesComponent },
  { path: 'edit/:id', component: EditarHeroeComponent },
  { path: 'new-hero', component: NuevoHeroeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
