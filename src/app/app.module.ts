import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {
  BasicModule,
  RoutingModule,
  MaterialModule,
  TranslationModule
} from './modules';
import { HomeComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BasicModule,
    RoutingModule,
    MaterialModule,
    TranslationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
