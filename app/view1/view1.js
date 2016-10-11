'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','SeatEatsConstants',function($scope,SeatEatsConstants)
{
  $scope.uploader="helloasdsadasd";
  $scope.options={
    async: {
      saveUrl: SeatEatsConstants.AppUrlApi+"postCall.php",
      removeUrl: "http://my-app.localhost/remove"
    }
  };


}]);