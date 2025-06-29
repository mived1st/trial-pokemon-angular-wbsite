import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidenav } from "../components/sidenav/sidenav";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Sidenav
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {}