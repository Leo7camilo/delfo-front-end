export const environment = {
  production: true,
  apiUrl: 'https://delfos-api.herokuapp.com',
  tokenAllowedDomains: [ /delfos-api.herokuapp.com/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/],
  oauthCallbackUrl: 'https://delfos-api.herokuapp.com',
  logoutRedirectToUrl: 'https://delfos-api.herokuapp.com'
};
