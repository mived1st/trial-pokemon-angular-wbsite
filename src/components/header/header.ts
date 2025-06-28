import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
