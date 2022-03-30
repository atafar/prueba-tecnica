import { Injectable } from '@angular/core';
import { Hero } from 'src/interfaces/hero.interface';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getAllHeroes(): Hero[] {
    return AppConstants.heroes;
  }

  getHeroById(id: number): Hero {
    let foundHero = AppConstants.heroes.find(hero => hero.id == id) as Hero;

    return foundHero;
  }

  searchHeroes(termino: string): Hero[] {

    let heroesArr: Hero[] = [];
    termino = termino.toLowerCase();

    AppConstants.heroes.forEach((hero: Hero) => {

      let nombre = hero.name.toLowerCase();

      nombre.indexOf(termino) >= 0 ? heroesArr.push(hero) : ""


    });

    return heroesArr;

  }

  createHero(hero: Hero) {
    const newId = AppConstants.heroes[AppConstants.heroes.length - 1].id + 1;
    hero.id = newId;
    AppConstants.heroes.push(hero);
  }

  editHero(hero: Hero) {
    let originalHero = this.getHeroById(hero.id);
    originalHero = hero;
  }

  deleteHero(heroId: number) {
    let i = 0;
    let heroIndex = 0;
    AppConstants.heroes.forEach(hero => {

      hero.id == heroId ? heroIndex = i : ""
      i++;
    });

    AppConstants.heroes.splice(heroIndex, 1);
  }
}
