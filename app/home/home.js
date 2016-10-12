'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','SeatEatsConstants','$location','$state',function($scope,SeatEatsConstants,$location,$state)
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



  $scope.openRepo = function ()
  {

    //change state and show pictures there
      $state.go("repository");
  }

}]);