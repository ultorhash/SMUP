import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateLoader,
  TranslateModule,
  TranslateStore
} from '@ngx-translate/core';
import { LangCodes } from '../enums';

export const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    TranslateModule.forChild({
      defaultLanguage: LangCodes.POLAND,
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateStore],
  exports: [TranslateModule]
})
export class TranslationModule {}
