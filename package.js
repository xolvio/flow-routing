// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'useraccounts:flow-routing',
  summary: 'UserAccounts package providing routes configuration capability via kadira:flow-router.',
  version: '1.13.1',
  git: 'https://github.com/meteor-useraccounts/flow-routing.git',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');

  api.use([
    'check',
    'kadira:flow-router',
    'underscore',
    'useraccounts:core',
    'ecmascript',
  ], ['client', 'server']);

  api.imply([
    'kadira:flow-router@2.7.0',
    'useraccounts:core@1.13.1',
  ], ['client', 'server']);

  api.use([
     'react-meteor-data',
     'kadira:blaze-layout@2.3.0',
  ], ['client', 'server'], { weak: true });

  api.addFiles([
    'lib/core.jsx',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
    'lib/client/templates_helpers/at_input.js',
  ], ['client']);
});
