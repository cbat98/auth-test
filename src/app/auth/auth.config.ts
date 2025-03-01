import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
              authority: 'https://auth.chrl.uk/application/o/auth-test/.well-known/openid-configuration',
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: 'dJoec3Wn8MXlQ4S2oTXayWKR59T4AwxQtLzFKRoD',
              scope: 'openid email profile', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
          }
}
