import { Component } from '@angular/core';
import { Pokemons } from '../pokemons/pokemons';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy } from '@angular/core';
import { Counters } from '../counters/counters';

@Component({
  selector: 'app-home',
  imports: [
    Counters,
    Pokemons,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
