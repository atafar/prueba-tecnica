import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/interfaces/hero.interface';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-nuevo-heroe',
  templateUrl: './nuevo-heroe.component.html',
  styleUrls: ['./nuevo-heroe.component.scss']
})
export class NuevoHeroeComponent implements OnInit {

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
    const data = this.heroService.getHeroById(this.heroId);
    this.setFormData(data);
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
      this.nuevoHeroe();
    }
  }

  nuevoHeroe() {
    const newHero = {
      id: 0,
      name: this.myForm.value.name,
      bio: this.myForm.value.bio
    }
    this.heroService.createHero(newHero);

    this.router.navigate(['/']);
    console.log(this.heroService.getHeroById(this.heroId));
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

}
