import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from  '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class MaterialModule {}
