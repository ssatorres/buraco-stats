'use strict';

/**
 * @ngdoc function
 * @name buracoApp.controller:JogadoresCtrl
 * @description
 * # JogadoresCtrl
 * Controller of the buracoApp
 */
angular.module('buracoApp')


.controller('JogadoresCtrl', function($scope, $http) {
    /*$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
*/

    $scope.form = "insert";
    //assinatura do ajax
    $http({
        method: 'GET',
        url: 'jogadores.json'
    })
        .success(function(data, status, headers, config) {
            //recuperação de dados bem sucedida

            $scope.jogadores = data.jogadores;

        })
        .error(function(data, status, headers, config) {
            //algum erro ocorreu :(
        });

    $scope.insert = function() {
        var novoJogador = {
            id: $scope.id,
            nome: $scope.nome
        };
        $scope.jogadores.push(novoJogador);
        $scope.cancel();
    }
    $scope.update = function() {
        $scope.jogadores[$scope.index].id = $scope.id;
        $scope.jogadores[$scope.index].nome = $scope.nome;
        $scope.cancel();
    }
    $scope.cancel = function() {
        $scope.index = "";
        $scope.form = "insert";
         $scope.id = "";
        $scope.nome = "";


    };


    $scope.delete = function(index) {
        $scope.jogadores.splice(index, 1);
        $scope.cancel();
    }

    $scope.edit = function(index) {

        $scope.index = index;
        $scope.form = "update";
        $scope.id = $scope.jogadores[index].id;
        $scope.nome = $scope.jogadores[index].nome;
    };



});
