/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("myApp").factory('homeService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getRepoList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'getRepoList.php');
        return promise;
    };
    home.createRepo= function (index)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'createRepository.php?index='+index);
        return promise;
    };
    home.removeRepository= function (index)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'removeRepository.php?index='+index);
        return promise;
    };

    return home;

}]);