(function () {
    angular.module("myApp").directive('repositoryWidget', [repoPartial]);

    function repoPartial() {
        var directive = {
            scope: {
                repoList: "=",
                onRemove:"=",
                onAdd: "=",
                openRepo:"="

            },
            templateUrl: "common/directives/repositoryWidget/repositoryWidget.html",
            controller: ["$scope", repoCtrl],
            controllerAs: "repoCtrl"
        };
        return directive;
    }


    function repoCtrl($scope) {
        var vm = this;
        vm.scope = $scope;
        vm.repoList = vm.scope.repoList;






    }

})();