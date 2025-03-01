import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
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

  private readonly oidcSecurityService = inject(OidcSecurityService);

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData, accessToken, idToken, configId } = loginResponse;
        this.loggingIn = false;
        this.loggedIn = isAuthenticated;
        if (isAuthenticated) {
          this.user = {
            email: userData.email,
            name: userData.name,
            given_name: userData.given_name,
            preferred_username: userData.preferred_username,
          };
        }
      });
  }

  logIn() {
    this.loggingIn = true;
    this.oidcSecurityService.authorize();
  }

  logOut() {
    this.oidcSecurityService.logoff().subscribe((result) => {
      console.log("logging out");
      console.log(result);
    });
  }
}
