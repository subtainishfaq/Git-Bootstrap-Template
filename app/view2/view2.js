'use strict';

angular.module('myApp.view2', ['ngRoute'])


.controller('View2Ctrl', ['$scope','$state','repofilelist','SeatEatsConstants','repo',function($scope,$state,repofilelist,SeatEatsConstants,repo)
{
  console.log(repofilelist);
  $scope.photos = repofilelist.data;
  $scope.isUploadForm=false;
var url=SeatEatsConstants.AppUrlApi+"postassets/postfile.php?repo="+repo+"&file=";

  $scope.showUploadForm=function ()
  {
    $scope.isUploadForm=true;
  };

  $scope.cancleUploadForm=function ()
  {
    $state.go($state.current, {}, {reload: true});
    $scope.isUploadForm=false;
  };

  $scope.optionsBackground={
       async: {
          saveUrl: url+"background.png",
              },
       multiple: false
  };

  $scope.optionsFirstAd={
    async: {
      saveUrl: url+"firstAd.png",
    },
      multiple: false
  };
  $scope.optionsSecondAd={
    async: {
      saveUrl: url+"secondad.png",
    },
      multiple: false
  };
  $scope.optionsThirdAd={
    async: {
      saveUrl: url+"thirdad.png",
    },
    multiple: false
  };
  $scope.optionsFourthAd={
    async: {
      saveUrl: url+"fourthad.png",
    },
    multiple: false
  };
  $scope.optionsFifthAd={
    async: {
      saveUrl: url+"fifthad.png",
    },
    multiple: false
  };



}]);