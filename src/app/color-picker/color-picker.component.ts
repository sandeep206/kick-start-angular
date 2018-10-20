import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export enum Color {
  RED,
  BLUE
};


@Component({
  selector: 'color-picker',
  template: `
    <div class="color-title" [ngStyle]="{color: color}">Pick a color</div>
    <div class="color-picker">
      <div class="color-sample color-sample-blue" (click)="choose('${Color.RED}')">RED</div>
      <div class="color-sample color-sample-red" (click)="choose('${Color.BLUE}')">Blue</div>
    </div>
  `
})
export class ColorPickerComponent implements OnInit {

  @Input()
  color:string;
  constructor() { }

  ngOnInit() {
  }

  @Output('color')
  colorOutput = new EventEmitter();

  choose(color:string) {
    this.color = color;
    console.log(color);
    this.colorOutput.emit(color);
  }

  reset() {
    this.color = 'black';
    console.log(this.color);
  }
}
