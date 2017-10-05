(function() {
    'use strict';

    angular
        .module('madsapp')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, AppTheme, AppData) {

        var config = {
            apiKey: "AIzaSyA2flrp_Kv5xsfC_pxbWJovXKnoafJ3m0s",
            authDomain: "mads-store.firebaseapp.com",
            databaseURL: "https://mads-store.firebaseio.com",
            projectId: "mads-store",
            storageBucket: "mads-store.appspot.com",
            messagingSenderId: "975051914897"
        };
        firebase.initializeApp(config);

        $rootScope.theme = AppTheme;

    }
})();