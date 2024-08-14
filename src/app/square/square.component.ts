import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
// constructor() {
//   setInterval(() => {
//     let rando = Math.random();
//   }, 500);
// }
  @Input()
  value: 'X' | 'O' = "X";
}
