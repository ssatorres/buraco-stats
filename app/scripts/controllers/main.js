'use strict';

/**
 * @ngdoc function
 * @name buracoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buracoApp
 */
angular.module('buracoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
