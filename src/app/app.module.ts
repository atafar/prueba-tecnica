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
import { EditarHeroeComponent } from './editar-heroe/editar-heroe.component';



@NgModule({
  declarations: [
    AppComponent,
    ListadoHeroesComponent,
    EditarHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
