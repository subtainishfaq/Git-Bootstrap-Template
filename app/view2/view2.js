'use strict';

angular.module('myApp.view2', ['ngRoute'])


.controller('View2Ctrl', ['$scope','$state','repofilelist',function($scope,$state,repofilelist)
{
  console.log(repofilelist);
  $scope.photos = repofilelist.data;
  $scope.isUploadForm=false;

  if (repofilelist.data.length==0)
  {

  }
  $scope.doSomething=function ()
  {
    $state.go("edit");
  };
  $scope.showUploadForm=function ()
  {
    $scope.isUploadForm=true;
  };



}]);