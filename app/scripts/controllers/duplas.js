'use strict';

/**
 * @ngdoc function
 * @name buracoApp.controller:DuplasCtrl
 * @description
 * # DuplasCtrl
 * Controller of the buracoApp
 */
angular.module('buracoApp')
  .controller('DuplasCtrl', function($scope, $http) {
   /* $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
  
    $scope.form = "insert";
    //assinatura do ajax
    $http({
        method: 'GET',
        url: 'jogadores.json'
    })
        .success(function(data, status, headers, config) {
            //recuperação de dados bem sucedida

          $scope.duplas = [];
          $scope.jogadores = data.jogadores;



        })
        .error(function(data, status, headers, config) {
            //algum erro ocorreu :(
        });

    $scope.insert = function() {
        var novaDupla = {
            jogador1: $scope.jogador1,
            jogador2: $scope.jogador2
        };
        $scope.duplas.push(novaDupla);
        $scope.cancel();
    }
    $scope.update = function() {
        $scope.duplas[$scope.index].jogador1 = $scope.jogador1;
        $scope.duplas[$scope.index].jogador2 = $scope.jogador2;
        $scope.cancel();
    }
    $scope.cancel = function() {
        $scope.index = "";
        $scope.form = "insert";
        $scope.jogador1 = "";
        $scope.jogador2 = "";


    };


    $scope.delete = function(index) {
        $scope.duplas.splice(index, 1);
        $scope.cancel();
    }

    $scope.edit = function(index) {

        $scope.index = index;
        $scope.form = "update";
        $scope.jogador1 = $scope.duplas[index].jogador1;
        $scope.jogador2 = $scope.duplas[index].jogador2;
    };



});
