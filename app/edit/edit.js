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

  $("#chessboard div").hover(
      function(e) {
        var div = $(e.currentTarget);
        kendo.fx(div.find(".description").css("display", "block")).tile("left", div.find(".icon")).play();
      },

      function(e) {
        var div = $(e.currentTarget);
        kendo.fx(div.find(".description")).tile("left", div.find(".icon")).reverse();
      });



  $scope.uploader="helloasdsadasd";
  $scope.options={
    async: {
      saveUrl: SeatEatsConstants.AppUrlApi+"postCall.php",
      removeUrl: "http://my-app.localhost/remove"
    }
  };
  $scope.openRepo = function ()
  {

    //change state and show pictures there
    $location.path("/view2");
  }

}]);