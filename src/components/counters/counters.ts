import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counters',
  imports: [
    MatButton
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './counters.html',
  styleUrl: './counters.css'
})
export class Counters {
  likeValue = 0;
  shareValue = 0;

  like() {
    this.likeValue++;
  }
  share() {
    this.shareValue++;
  }
}
