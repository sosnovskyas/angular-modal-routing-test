import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';

const ngApp = angular.module('app', [uiRouter, uiBootstrap]);

// including config
require('./app.config.js')(ngApp);