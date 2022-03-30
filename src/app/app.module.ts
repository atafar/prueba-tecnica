import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from 'src/services/hero.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoHeroesComponent } from './listado-heroes/listado-heroes.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EditarHeroeComponent } from './pages/editar-heroe/editar-heroe.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './listado-heroes/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { NuevoHeroeComponent } from './nuevo-heroe/nuevo-heroe.component';



@NgModule({
  declarations: [
    AppComponent,
    ListadoHeroesComponent,
    EditarHeroeComponent,
    DeleteDialogComponent,
    NuevoHeroeComponent
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
    MatInputModule

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
