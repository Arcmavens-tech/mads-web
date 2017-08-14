(function() {
    'use strict';

    angular
        .module('app.services', [])
        .service('User', UserService);

    function UserService($firebaseArray, $firebaseObject) {
        var usersRef = firebase.database().ref('users');
        var users = $firebaseArray(usersRef);

        var Users = {
            getProfile: function(uid) {
                return $firebaseObject(usersRef.child(uid));
            },
            all: users
        };

        return Users;

    }

})();