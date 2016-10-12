/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("myApp").factory('repositoryService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var repository = {};

    repository.getRepoFileList= function (repo)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'getRepoFileList.php?repo='+repo);
        return promise;
    };
 /*   repository.createRepo= function (index)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'createRepository.php?index='+index);
        return promise;
    };
    repository.removeRepository= function (index)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'removeRepository.php?index='+index);
        return promise;
    };
*/
    return repository;

}]);