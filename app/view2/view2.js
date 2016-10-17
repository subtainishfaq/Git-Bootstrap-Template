'use strict';

angular.module('myApp.view2', ['ngRoute','ngFileUpload'])


.controller('View2Ctrl', ['$scope','$state','repofilelist','SeatEatsConstants','repo','Upload', '$timeout',function($scope,$state,repofilelist,SeatEatsConstants,repo,Upload, $timeout)
{
  console.log(repofilelist);
  $scope.photos = repofilelist.data;

  $scope.FileName={};
  $scope.FileName.name=undefined;
  $scope.isDisable=false;


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


  $scope.optionsConfig={
    async: {
      saveUrl: url+"config.ini",
    },

    multiple: false
  };

  $scope.uploadFiles = function(file, errFiles) {
    $scope.f = file;
    $scope.errFile = errFiles && errFiles[0];
    if (file && $scope.FileName.name.length>0 && $scope.FileName.name.indexOf(".png") !== -1) {
      $scope.isDisable=true;

      file.upload = Upload.upload({
        url: url+$scope.FileName.name,
        data: {file: file}
      });

      file.upload.then(function (response) {

        $timeout(function () {
          file.result = response.data;
          $scope.isDisable=false;

        });
      }, function (response) {
        $scope.isDisable=false;

        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      }, function (evt) {
        $scope.isDisable=false;

        file.progress = Math.min(100, parseInt(100.0 *
            evt.loaded / evt.total));
      });
    }
    else
    {
      alert("check file is selected or name is entered properly?");
      $scope.isDisable=false;

    };


  }

}]);