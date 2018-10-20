import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'color-previewer',
  template: `
    <div class="color-previewer" [ngStyle]="{color: color}">
      Preview Text Color {{ color }}
    </div>
  `,
  styleUrls: ['./color-previewer.component.css']
})
export class ColorPreviewerComponent implements OnInit {

  @Input()
  color: string;
  constructor() { }

  ngOnInit() {
  }

}
