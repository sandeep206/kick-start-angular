import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <color-picker #colorPicker (color)="colorPreviewer.color = $event" [color]="color"></color-picker>
    <color-previewer #colorPreviewer ></color-previewer>
    
    <color-sample #sample></color-sample>
    <input type="text" placeholder="Type your code here"
    (keyup)="sample.color = input.value" #input >
    
    <input type="button" (click)="colorPicker.reset()" value="reset" />
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kick-starter';
  color: string = 'red';

}
