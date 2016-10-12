'use strict';

angular.module('myApp.edit', ['ngRoute'])

/*.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit', {
    templateUrl: 'edit/edit.html',
    controller: 'EditCtrl'
  });
}])*/

.controller('EditCtrl', ['$scope','SeatEatsConstants','$location',function($scope,SeatEatsConstants,$location)
{




  $scope.options={
    async: {
      saveUrl: SeatEatsConstants.AppUrlApi+"postCall.php",
      removeUrl: SeatEatsConstants.AppUrlApi+ "removefile.php",
      autoUpload: false,


    },
    multiple: false,
    template: kendo.template($('#fileTemplate').html()),
    validation: {
      allowedExtensions: [".png"],
    },
    select: onSelect
  };



function onSelect(e) {
  readMultipleFiles(e.files[0]);


}


  function readMultipleFiles(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      // bind the file content
      $("#previmg").attr({ src: e.target.result });
    }
    reader.readAsDataURL(file.rawFile);
  }

}]);