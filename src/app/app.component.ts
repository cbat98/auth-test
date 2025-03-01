import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { User } from './user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user?: User;
  loggingIn: boolean = false;
  loggedIn: boolean = false;

  logIn() {
    this.loggedIn = true;
    this.user = {
      name: "Charlie Batten",
      email: "c@chrl.uk",
      given_name: "Charlie",
      preferred_username: "chrl"
    };
  }

  logOut() {
    this.loggedIn = false;
  }
}
