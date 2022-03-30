import { Injectable } from '@angular/core';
import { Hero } from 'src/interfaces/hero.interface';
import { AppConstants } from 'src/app/app.constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getAllHeroes(): Observable<Hero[]> {
    return of(AppConstants.heroes);
  }

  getHeroById(id: number): Observable<Hero> {
    let foundHero = AppConstants.heroes.find(hero => hero.id == id) as Hero;

    return of(foundHero);
  }

  searchHeroes(termino: string): Observable<Hero[]> {

    let heroesArr: Hero[] = [];
    termino = termino.toLowerCase();

    AppConstants.heroes.forEach((hero: Hero) => {

      let nombre = hero.name.toLowerCase();

      nombre.indexOf(termino) >= 0 ? heroesArr.push(hero) : ""


    });

    return of(heroesArr);

  }

  createHero(hero: Hero) {
    const newId = AppConstants.heroes[AppConstants.heroes.length - 1].id + 1;
    hero.id = newId;
    AppConstants.heroes.push(hero);

    return of();
  }

  editHero(hero: Hero) {
    this.getHeroById(hero.id).subscribe(result => {
      let originalHero = result;
      originalHero = hero;
    });

    return of();
  }

  deleteHero(heroId: number) {
    let i = 0;
    let heroIndex = 0;
    AppConstants.heroes.forEach(hero => {
      if (hero.id == heroId) {
        heroIndex = i
      }
      i++;
    });

    AppConstants.heroes.splice(heroIndex, 1);

    return of();
  }
}
