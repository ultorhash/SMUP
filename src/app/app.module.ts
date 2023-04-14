import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {
  RoutingModule,
  LibraryModule
} from './modules';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutingModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
