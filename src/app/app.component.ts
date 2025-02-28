import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username = 'there';
  loggedIn: boolean = false;

  private readonly oidcSecurityService = inject(OidcSecurityService);

  ngOnInit() {
    this.oidcSecurityService
    .checkAuth()
    .subscribe((loginResponse: LoginResponse) => {
      const { isAuthenticated, userData, accessToken, idToken, configId } = loginResponse;
      console.table(loginResponse);
    });
  }

  logIn() {
    this.loggedIn = true;
    this.username = 'Charlie';

    this.oidcSecurityService.authorize();
  }

  logOut() {
    this.loggedIn = false;
    this.username = 'there';

    this.oidcSecurityService.logoff().subscribe((result) => {
      console.log("logging out");
      console.log(result);
    });
  }
}
