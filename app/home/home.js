'use strict';

angular.module('myApp.home', ['ngRoute'])

/*
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])
*/

.controller('HomeCtrl', ['$scope','SeatEatsConstants','$location','$state','repolist',function($scope,SeatEatsConstants,$location,$state,repolist)
{


$scope.repoList=repolist;
  $scope.openRepo = function ()
  {

    //change state and show pictures there
      $state.go("repository");
  }

  $scope.removeRepo = function (item, index) {
      if ($scope.repoList.length > 0) {
          $scope.repoList.remove(index);

      }
  }

    $scope.addNewRepo = function () {
        if (true) {
            var obj = "repository"+($scope.repoList.length+1);
            $scope.repoList.push(obj);
        }
    };







    Array.prototype.remove = function (from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };




}]);