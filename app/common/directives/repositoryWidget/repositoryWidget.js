(function () {
    angular.module("myApp").directive('repositoryWidget', [repoPartial]);

    function repoPartial() {
        var directive = {
            scope: {
                readonly: "=",
                disabled: "=",
                repoList: "=",
                onRemove:"=",
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
      


        vm.form = vm.scope.form;
        console.log(vm.scope.repoList);
        vm.addNewContact = function () {
            if (true) {
                var obj = {

                    SpendTypeId: null,
                    Defined_Ratio: null,
                    Activity: null,
                    Based: null,

                };
                vm.repoList.push(obj);
            }
        };
        vm.addContact = function () {
            vm.addNewContact();

        }
        vm.deleteContact = function (item, index) {
            if (vm.repoList.length > 1) {
                vm.repoList.remove(index);

            }
        };


        vm.markPrimary = function (index) {

        };


        vm.repoList = vm.scope.repoList;
        if (vm.repoList.length == 0) {
            vm.addNewContact();
        }

        vm.lookups = {};
        if (!angular.isDefined($scope.readonly)) {
            vm.scope.readonly = false;
        }
        if (!angular.isDefined($scope.disabled)) {
            vm.scope.disabled = false;
        }


        Array.prototype.remove = function (from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };


    }

})();