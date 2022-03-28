import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/interfaces/hero.interface';
import { HeroService } from 'src/services/hero.service';

@Component({
  templateUrl: './editar-heroe.component.html',
  styleUrls: ['./editar-heroe.component.scss']
})
export class EditarHeroeComponent implements OnInit {

  myForm: FormGroup = this.fb.group({});

  constructor(
    public fb: FormBuilder,
    private heroService: HeroService,
    private route: ActivatedRoute
   
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
    const heroId = parseInt(this.route.snapshot.params.id);
    const data = this.heroService.getHeroById(heroId);
    this.setFormData(data);
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [
        // Validators.required,
        // Validators.minLength(3)
      ]],
      // bio: ['']
    })
  }

  setFormData(data: Hero) {
    console.log(data);
  }

  editar() {
    const editedHero = this.getHeroEdited();
    this.heroService.editHero(editedHero);
  }

  getHeroEdited(): Hero {
    return {
      id: 10,
      name: "Dark Moon"
    }
  }

}
