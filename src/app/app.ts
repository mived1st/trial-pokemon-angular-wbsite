import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from "../components/header/header";
import { Home } from "../components/home/home";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Home
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected title = 'pokemon-trial-project';
}
