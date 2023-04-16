import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {
  BasicModule,
  RoutingModule,
  MaterialModule,
  TranslationModule
} from './modules';
import { HomeComponent } from './components';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
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
