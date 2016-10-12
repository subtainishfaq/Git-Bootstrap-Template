'use strict';

angular.module('myApp.view2', ['ngRoute'])


.controller('View2Ctrl', ['$scope','$state','repofilelist',function($scope,$state,repofilelist)
{
  console.log(repofilelist);
  $scope.photos = [
    {id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/300/400/"},
    {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/400/sports"},
    {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/300/400/nightlife"},
    {id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/300/400/"},
    {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/400/sports"},
    {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/300/400/nightlife"}
  ];
  $scope.doSomething=function ()
  {
    $state.go("edit");
  }

}]);