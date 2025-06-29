import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from "../../components/header/header";
import { Home } from "../../components/home/home";

@Component({
  selector: 'app-sidenav',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    Header,
    Home
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css'
})
export class Sidenav {
  showFiller = false;
}
