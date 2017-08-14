(function() {
    'use strict';

    angular
        .module('app.services')
        .service('Products', ProductService);

    function ProductService($firebaseArray, $firebaseObject) {
        var productRef = firebase.database().ref('products');
        var products = $firebaseArray(productRef);

        var Products = {
            getProduct: function(uid) {
                return $firebaseObject(productRef.child(uid));
            },
            all: products
        };

        return Products;

    }

})();