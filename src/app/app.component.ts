import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SurveyComponent} from "./survey/survey.component";
import {SurveyListComponent} from "./survey/surveylist/surveylist.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SurveyComponent, SurveyListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TcKimlikEmojiAngularExample';
}
