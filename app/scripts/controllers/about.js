'use strict';

/**
 * @ngdoc function
 * @name todoChallengeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoChallengeApp
 */
angular.module('todoChallengeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
