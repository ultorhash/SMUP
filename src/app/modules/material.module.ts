import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from  '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
