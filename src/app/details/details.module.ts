import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsviewComponent } from './detailsview/detailsview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailsviewComponent],
  exports: [DetailsviewComponent]
})
export class DetailsModule { }
