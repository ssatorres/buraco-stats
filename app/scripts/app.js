'use strict';

/**
 * @ngdoc overview
 * @name buracoApp
 * @description
 * # buracoApp
 *
 * Main module of the application.
 */
angular
  .module('buracoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/jogadores', {
        templateUrl: 'views/jogadores.html',
        controller: 'JogadoresCtrl'
      })
      .when('/duplas', {
        templateUrl: 'views/duplas.html',
        controller: 'DuplasCtrl'
      })
      .when('/jogos', {
        templateUrl: 'views/jogos.html',
        controller: 'JogosCtrl'
      })
      .when('/partidas', {
        templateUrl: 'views/partidas.html',
        controller: 'PartidasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
