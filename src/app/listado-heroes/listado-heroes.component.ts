import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from 'src/interfaces/hero.interface';
import { HeroService } from 'src/services/hero.service';

@Component({
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.scss']
})
export class ListadoHeroesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'opciones'];
  dataSource: MatTableDataSource<Hero> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.setTableData();
  }

  ngAfterViewInit() {
    this.setTableData(); //TODO: Decidir aquí o ngOnInit
  }

  setTableData() {
    const heroes = this.heroService.getAllHeroes();
    this.dataSource = new MatTableDataSource(heroes);
    this.dataSource.paginator = this.paginator;
  }

  deleteHero(id: number) {
    this.heroService.deleteHero(id);
    this.setTableData();
  }

  addHero() {
    //TODO: Obtener último id (o el más grande) de la lista para añadirle un número más al nuevo héroe
  }

}
