import {RouterModule, Routes} from '@angular/router';
import {SurveyComponent} from "./survey/survey.component";
import {ApplicationConfig} from "@angular/core";
import {SurveyListComponent} from "./survey/surveylist/surveylist.component";

export const routes: Routes = [
  { path: 'first-page', component: SurveyListComponent },
  // Varsayılan rota
  { path: '', redirectTo: '/first-page', pathMatch: 'full' },
  // Joker rota
  { path: '**', redirectTo: '/first-page' },
  {
    path: 'crud',
    loadChildren: () => import('./survey/survey.module')
      .then(mod => mod.SurveyModule)
  },
];

