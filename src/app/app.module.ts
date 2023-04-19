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
import { CapitalizePipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CapitalizePipe
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
