import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from 'src/services/hero.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EditarHeroeComponent } from './pages/editar-heroe/editar-heroe.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './pages/listado-heroes/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NuevoHeroeComponent } from './pages/nuevo-heroe/nuevo-heroe.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AppComponent,
    ListadoHeroesComponent,
    EditarHeroeComponent,
    DeleteDialogComponent,
    NuevoHeroeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
