import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css'
})
export class Pokemons {
  protected pokemons = [
    { name: 'Bulbasaur', type: 'Grass/Poison' },
    { name: 'Charmander', type: 'Fire' },
    { name: 'Squirtle', type: 'Water' },
    { name: 'Pidgey', type: 'Normal/Flying' },
    { name: 'Rattata', type: 'Normal' },
    { name: 'Jigglypuff', type: 'Normal/Fairy' }
  ];
}
