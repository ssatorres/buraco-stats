'use strict';

describe('Controller: JogosCtrl', function () {

  // load the controller's module
  beforeEach(module('buracoApp'));

  var JogosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JogosCtrl = $controller('JogosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
