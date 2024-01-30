import { ApplicationConfig } from '@angular/core';
import {RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideClientHydration} from "@angular/platform-browser";
import {SurveyComponent} from "./survey/survey.component";
import {AppComponent} from "./app.component";
import {SurveyModule} from "./survey/survey.module";
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
// @ts-ignore
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    RouterModule,
    AppComponent,
    SurveyModule,
    PickerComponent,
    //AngularEmojisModule
  //  SurveyComponent
  ]
};
