(function() {
    'use strict';

    angular
        .module('app.services')
        .service('Auth', AuthenticationService);

    function AuthenticationService($firebaseAuth, $rootScope) {
        var auth = $firebaseAuth();

        var Auth = {
            logout: function() {
                auth.$signOut().then(function() {
                    $rootScope.$broadcast('logout');
                });
            },
            auth: auth
        };

        return Auth;

    }
})();