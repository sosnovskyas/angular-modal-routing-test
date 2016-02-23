import angular from 'angular';
// angular-ui-bootstrap require bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';

const ngApp = angular.module('app', [uiRouter, uiBootstrap]);

// including config
require('./app.config')(ngApp);
//require('./app.modalCtrl.controller')(ngApp);
//require('./app.modalInstanceCtrl.controller')(ngApp);
