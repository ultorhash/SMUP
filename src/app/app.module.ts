import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {
  BasicModule,
  RoutingModule,
  MaterialModule,
  TranslationModule
} from './modules';
import { 
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  AboutComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
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
