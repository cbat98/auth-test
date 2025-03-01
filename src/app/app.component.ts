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
  loggedIn: boolean = false;

  private readonly oidcSecurityService = inject(OidcSecurityService);

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData, accessToken, idToken, configId } = loginResponse;
        this.loggedIn = isAuthenticated;
        if (isAuthenticated) {
          this.user = {
            email: userData.email,
            name: userData.name,
            given_name: userData.given_name,
            preferred_nickname: userData.preferred_nickname,
          };
        }
      });
  }

  logIn() {
    this.oidcSecurityService.authorize();
  }

  logOut() {
    this.oidcSecurityService.logoff().subscribe((result) => {
      console.log("logging out");
      console.log(result);
    });
  }
}
