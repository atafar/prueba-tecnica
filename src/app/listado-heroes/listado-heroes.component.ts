import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from 'src/interfaces/hero.interface';
import { HeroService } from 'src/services/hero.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.scss']
})
export class ListadoHeroesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'opciones'];
  dataSource: MatTableDataSource<Hero> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private heroService: HeroService,
    public dialog: MatDialog
  ) { }

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

  openDeleteDialog(hero: Hero): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: hero
    });

    dialogRef.afterClosed().subscribe(result => {
      result.delete ? this.deleteHero(result.id) : "";
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
