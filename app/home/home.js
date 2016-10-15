'use strict';

angular.module('myApp.home', ['ngRoute'])


.controller('HomeCtrl', ['$scope','SeatEatsConstants','$location','$state','repolist','homeService',function($scope,SeatEatsConstants,$location,$state,repolist,homeService)
{


$scope.repoList=repolist.data;
$scope.dataLoading=false;
  $scope.openRepo = function (item)
  {

    //change state and show pictures there
      $state.go("repository",{ "repo": item });
  };

  $scope.removeRepo = function (item, index)
  {
      $scope.dataLoading=true;

      if ($scope.repoList.length > 0)
      {
      homeService.removeRepository(index).then(function(response)
      {
          $scope.dataLoading=false;


          if(response.data.deleted)
          $scope.repoList.remove(index);



      });


      }
  }

    $scope.addNewRepo = function ()
    {
        $scope.dataLoading=true;

        homeService.createRepo(($scope.repoList.length + 1)).then(function(response)
        {
            $scope.dataLoading=false;

            if(response.data.created)
            $scope.repoList.push(obj);


        });

    };







    Array.prototype.remove = function (from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };




}]);