(function() {
    'use strict';

    angular
        .module('madsapp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        // State definitions
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'main@': {
                        templateUrl: 'app/core/layouts/contentWithHeaderFooter.html',
                        controller: 'IndexController as vm'
                    },
                    'header@app': {
                        templateUrl: 'app/navigation/header.html',
                        controller: 'NavigationController as vm'
                    },
                    'footer@app': {
                        templateUrl: 'app/navigation/footer.html',
                        controller: 'NavigationController as vm'
                    },
                    'left-drawer@app': {
                        templateUrl: 'app/drawers/left-drawer.html',
                        controller: 'DrawerController as vm'
                    }
                }
            });
    }

})();