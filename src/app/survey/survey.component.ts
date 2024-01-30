import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SurveyModule} from "./survey.module";
import {PickerComponent} from "@ctrl/ngx-emoji-mart";

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SurveyModule,
    FormsModule,
    PickerComponent
  ],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {
  name = 'Angular';
  message = '';
  showEmojiPicker = false;
  set: 'google' | 'twitter' | 'facebook' | 'apple'  = 'twitter';

/*  set = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]*/
//  set = 'twitter';
  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event:any) {
    console.log(this.message)
    const { message } = this;
    console.log(message);
    console.log(`${event.emoji.native}`)
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    // this.showEmojiPicker = false;
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur')
  }
}
