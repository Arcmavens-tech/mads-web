(function() {
    'use strict';

    angular
        .module('app.services')
        .service('Orders', OrderService);

    function OrderService($firebaseArray, $firebaseObject) {
        var orderRef = firebase.database().ref('orders');
        var orders = $firebaseArray(orderRef);

        var Orders = {
            getOrder: function(uid) {
                return $firebaseObject(orderRef.child(uid));
            },
            all: orders
        };

        return Orders;

    }

})();