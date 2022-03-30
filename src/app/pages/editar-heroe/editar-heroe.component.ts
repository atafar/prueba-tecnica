import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/interfaces/hero.interface';
import { HeroService } from 'src/services/hero.service';

@Component({
  templateUrl: './editar-heroe.component.html',
  styleUrls: ['./editar-heroe.component.scss']
})
export class EditarHeroeComponent implements OnInit {

  myForm: FormGroup = this.fb.group({});
  heroId: number = 0;

  constructor(
    public fb: FormBuilder,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.reactiveForm();
    this.heroId = parseInt(this.route.snapshot.params.id);
    this.heroService.getHeroById(this.heroId).subscribe(data => this.setFormData(data));
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ]],
      bio: ['', [
        Validators.maxLength(150),
      ]]
    })
  }

  setFormData(hero: Hero) {
    console.log(hero);
    this.myForm.controls.name.setValue(hero.name);
    this.myForm.controls.bio.setValue(hero.bio);
  }

  guardar() {
    if (this.myForm.valid) {
      this.heroService.getHeroById(this.heroId).subscribe(result => this.editarHeroe(result));
    }
  }

  editarHeroe(result: Hero) {
    let editedHero = result;
    editedHero.name = this.myForm.value.name;
    editedHero.bio = this.myForm.value.bio;
    this.heroService.editHero(editedHero);
    this.router.navigate(['/']);
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

}
