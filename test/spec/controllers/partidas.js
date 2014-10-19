'use strict';

describe('Controller: PartidasCtrl', function () {

  // load the controller's module
  beforeEach(module('buracoApp'));

  var PartidasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartidasCtrl = $controller('PartidasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
