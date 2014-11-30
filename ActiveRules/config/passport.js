/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  twitter: {
    name: 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options: {
        'consumerKey' 		: 'VSLsrUzj6VADEsvgqvTVEKmUB', //Consumer Key (API Key)
        'consumerSecret' 	: 'mgFyiPlI2pPUaHWwxkbKZ9oyBzjNRwTYayN0FrMrqWqUOd2sd6', // Consumer Secret (API Secret)
        'callbackURL' 		: 'http://dev.izzup.com/auth/twitter/callback'
    }
  },

  github: {
    name: 'GitHub',
    protocol: 'oauth2',
    strategy: require('passport-github').Strategy,
    options: {
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret'
    }
  },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
        'clientID' 		: '189004527780605', // your App ID
        'clientSecret'          : '871f00ae1438a39e9ebd7049d56ec561', // your App Secret
        'callbackURL'           : 'http://dev.izzup.com/auth/facebook/callback'
    }
  },

  google: {
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    scope: 'https://www.googleapis.com/auth/plus.login',
    options: {
        'clientID' 		: '79458853238-alafa1a2a6gcmur5l1f6lusrmoljs83e.apps.googleusercontent.com', // CLIENT ID
        'clientSecret'          : 'z6x8LtMDuIH8-gw-tK-N18_q', // CLIENT SECRET
        'callbackURL'           : 'http://dev.izzup.com/auth/google/callback'
    }
  }
};
