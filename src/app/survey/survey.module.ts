import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SurveyRoutingModule} from "./survey-routing.module";
import {SurveyListComponent} from "./surveylist/surveylist.component";

@NgModule({
  declarations: [
  //  SurveyListComponent
  ],
  imports: [
    CommonModule,
   // BrowserAnimationsModule,
   // BrowserModule,
    ReactiveFormsModule,
   // BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SurveyRoutingModule,
    SurveyListComponent
  ]
})
export class SurveyModule { }
