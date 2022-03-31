import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { UpperCaseFormatDirective } from 'src/app/shared/upper-case-format.directive';
import { AppConstants } from 'src/app/app.constants';

import { EditarHeroeComponent } from './editar-heroe.component';
import { HeroService } from 'src/services/hero.service';

describe('EditarHeroeComponent', () => {
  let component: EditarHeroeComponent;
  let fixture: ComponentFixture<EditarHeroeComponent>;
  let heroService: HeroService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        EditarHeroeComponent,
        NavbarComponent,
        UpperCaseFormatDirective
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatToolbarModule
      ],
      providers: [
        HeroService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    heroService = fixture.debugElement.injector.get(HeroService);
  });

  it('Debe existir el componente EditarHeroe', () => {
    expect(component).toBeTruthy();
  });

  it('No debe validar el formulario si el nombre no está relleno.', () => {
    component.myForm.controls.name.setValue("");
    component.myForm.controls.bio.setValue("");
    expect(component.myForm.valid).toBeFalsy();
  });

  it('Debe validar el formulario si el nombre está relleno y los patrones son correctos.', () => {
    component.myForm.controls.name.setValue("Ant-Man");
    component.myForm.controls.bio.setValue("Puede reducir el tamaño de su cuerpo al de una hormiga.");
    expect(component.myForm.valid).toBeTruthy();
  });

  it('Debe mostrar el título "Editar héroe"', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toEqual('Editar héroe');
  });

  
});
