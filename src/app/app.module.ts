import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPreviewerComponent } from './color-previewer/color-previewer.component';
import { ColorSampleComponent } from './color-sample/color-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ColorPreviewerComponent,
    ColorSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
