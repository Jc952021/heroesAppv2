import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [],
})
export class SearchPageComponent {
  heroes: Hero[] = [];
  heroSelected?: Hero;

  mySearch = new FormControl('');

  searchHero() {
    const value = this.mySearch.value || '';
    this.heroesService
      .getSuggestions(value)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent) {
  //si se seleccinoa una option que tenga de valor vacio, osea el option de no se encontro
    if (!event.option.value) {
      this.heroSelected = undefined;
      return;
    }
    //llenar el input con el nombre del superhero escogido
    this.mySearch.setValue(event.option.value.superhero)
    this.heroSelected = event.option.value
  }

  constructor(private heroesService: HeroesService) {}
}
