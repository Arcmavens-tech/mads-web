(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('Dialog', DialogFactory);

    function DialogFactory() {
        var factory = {};

        factory.showLogin = showLogin;

        return factory;

        function showLogin() {
            // return $mdDialog.show({
            //     controller: "LoginController as vm",
            //     templateUrl: 'app/dialogs/login/login.html',
            //     parent: angular.element(document.body),
            //     fullscreen: true,
            //     clickOutsideToClose: true
            // }).then(function() {
            //     $rootScope.$broadcast('login');
            // });
        }



    }

})();