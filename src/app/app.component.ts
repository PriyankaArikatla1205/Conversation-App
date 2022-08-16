import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }
  sendData() {
    this.http.get("https://backend.skill2030.com/asees/activities?id=2965").subscribe()
  }

  title = 'conversation-app';
}
