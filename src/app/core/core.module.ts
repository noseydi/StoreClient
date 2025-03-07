import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Layers/footer/footer.component';
import { NavebarComponent } from './Layers/navebar/navebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    NavebarComponent
  ]
})
export class CoreModule { }
