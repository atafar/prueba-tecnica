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
