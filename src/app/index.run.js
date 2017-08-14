(function() {
    'use strict';

    angular
        .module('madsapp')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, AppTheme, AppData) {

        var config = {
            apiKey: "AIzaSyA8N1iziFesSzn_BdPgo0doeyiA74TnHIs",
            authDomain: "madsapp-f344e.firebaseapp.com",
            databaseURL: "https://madsapp-f344e.firebaseio.com",
            projectId: "madsapp-f344e",
            storageBucket: "madsapp-f344e.appspot.com",
            messagingSenderId: "359812391398"
        };

        firebase.initializeApp(config);

        $rootScope.theme = AppTheme;

    }
})();