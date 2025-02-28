import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username = 'there';
  loggedIn: boolean = false;

  logIn() {
    this.loggedIn = true;
    this.username = 'Charlie';
  }

  logOut() {
    this.loggedIn = false;
    this.username = 'there';
  }
}
