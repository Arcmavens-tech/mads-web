(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('Dialog', DialogFactory);

    function DialogFactory($mdDialog) {
        var factory = {};

        factory.showLogin = showLogin;
        factory.showFilters = showFilters;
        factory.showSortBy = showSortBy;

        return factory;

        function showLogin() {
            return $mdDialog.show({
                controller: "LoginController as vm",
                templateUrl: 'app/dialogs/login/login.html',
                parent: angular.element(document.body),
                fullscreen: true,
                clickOutsideToClose: true
            }).then(function() {
                // $rootScope.$broadcast('login');
            });
        }

        function showFilters() {
            return $mdDialog.show({
                controller: "FilterController as vm",
                templateUrl: 'app/dialogs/filters/filters.html',
                parent: angular.element(document.body),
                fullscreen: true,
                clickOutsideToClose: true
            }).then(function() {});
        }

        function showSortBy() {
            return $mdDialog.show({
                controller: "SortByController as vm",
                templateUrl: 'app/dialogs/sortby/sortby.html',
                parent: angular.element(document.body),
                fullscreen: false,
                clickOutsideToClose: true
            }).then(function() {});
        }



    }

})();