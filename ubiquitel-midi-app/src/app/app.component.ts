import { Component, OnInit } from '@angular/core';
import * as WebMidi from 'webmidi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    WebMidi.enable(function (err) {
      if (err) {
        console.error(err, 'error enabling web midi module');
        return;
      }
      console.log('inputs', WebMidi.inputs);
      console.log('outputs', WebMidi.outputs);
    });
  }
}
