'use strict';

/**
 * @ngdoc function
 * @name buracoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the buracoApp
 */
angular.module('buracoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
