'use strict';

angular.module('myApp.edit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit', {
    templateUrl: 'edit/edit.html',
    controller: 'EditCtrl'
  });
}])

.controller('EditCtrl', ['$scope','SeatEatsConstants','$location',function($scope,SeatEatsConstants,$location)
{




  $scope.options={
    async: {
      saveUrl: SeatEatsConstants.AppUrlApi+"postCall.php",
      removeUrl: SeatEatsConstants.AppUrlApi+ "removefile.php"
    }
  };

}]);