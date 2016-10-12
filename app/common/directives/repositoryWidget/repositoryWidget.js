(function () {
    angular.module("tmx-app").directive('ncmClaimWidget', [contactPartial]);

    function contactPartial() {
        var directive = {
            scope: {
                form: "=",
                readonly: "=",
                disabled: "=",
                contactsList: "=",
                regions: "="

            },
            templateUrl: "common/directives/ClaimWidget/claimWidget.html",
            controller: ["$scope", "AddressGeographyService", claimCtrl],
            controllerAs: "claimCtrl"
        };
        return directive;
    }


    function claimCtrl($scope, AddressGeographyService) {
        var vm = this;
        vm.scope = $scope;
        vm.ContactList = vm.scope.contactsList;
        vm.options = [
            {
                LookupId: 1,
                VisibleValue: "Yes"
            },
            {
                LookupId: 0,
                VisibleValue: "No"
            }
        ];


        vm.form = vm.scope.form;
        console.log(vm.scope.contactsList);
        vm.addNewContact = function () {
            if (true) {
                var obj = {

                    SpendTypeId: null,
                    Defined_Ratio: null,
                    Activity: null,
                    Based: null,

                };
                vm.ContactList.push(obj);
            }
        };
        vm.addContact = function () {
            vm.addNewContact();

        }
        vm.deleteContact = function (item, index) {
            if (vm.ContactList.length > 1) {
                vm.ContactList.remove(index);

            }
        };


        vm.markPrimary = function (index) {

        };


        vm.ContactList = vm.scope.contactsList;
        if (vm.ContactList.length == 0) {
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