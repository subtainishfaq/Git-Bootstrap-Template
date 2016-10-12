'use strict';

angular.module('myApp.home', ['ngRoute'])


.controller('HomeCtrl', ['$scope','SeatEatsConstants','$location','$state','repolist','homeService',function($scope,SeatEatsConstants,$location,$state,repolist,homeService)
{


$scope.repoList=repolist.data;
$scope.dataLoading=false;
  $scope.openRepo = function (item,index)
  {

    //change state and show pictures there
      $state.go("repository",{ repo : item });
  };

  $scope.removeRepo = function (item, index)
  {
      $scope.dataLoading=true;
      if ($scope.repoList.length > 0)
      {
      homeService.removeRepository(index).then(function(response)
      {
        console.log(response);
          $scope.dataLoading=false;
          $scope.repoList.remove(index);



      });


      }
  }

    $scope.addNewRepo = function ()
    {
        $scope.dataLoading=true;
        homeService.removeRepository(($scope.repoList.length + 1)).then(function(response)
        {
            console.log(response);
            var obj = "repository" + ($scope.repoList.length + 1);
            $scope.repoList.push(obj);


        });

    };







    Array.prototype.remove = function (from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };




}]);