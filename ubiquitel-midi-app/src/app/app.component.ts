import { Component, OnInit } from '@angular/core';
import * as WebMidi from 'webmidi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    console.log(WebMidi, 'web midi');
  }
}
