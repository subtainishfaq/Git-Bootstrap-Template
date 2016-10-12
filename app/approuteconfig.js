/**
 * Created by subtainishfaq on 10/12/16.
 */
(function() {



    angular.module('myApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

        /**
         * Default path for any unmatched url
         */
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',
                {
                    resolve: {
                        // create an Object property called "messages"
                        // which will later be used for Dependency Injection
                        // inside our Controller. Inject any Services we need as usual.
                        repolist: function (homeService) {
                            // Return our Service call, that returns a Promise
                           return ["repository1","repository2"]// return homeService.getRepoList();
                        }
                    },
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl',

            })
            .state('repository', {
                url: '/view2',
                templateUrl: 'view2/view2.html',
                controller: 'View2Ctrl'
            })
            .state('edit', {
                url: '/edit',
                templateUrl: 'edit/edit.html',
                controller: 'EditCtrl'
            })
        // ... more routes .state

    }])
})();
