(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($state, $scope, Dialog, Wishlist) {
        var vm = this;
        $scope.products = [{
                id: 456,
                image: "assets/images/tshirts/1.jpg",
                price: 699,
                title: "Plain Green Jaspe"
            },
            {
                id: 123,
                image: "assets/images/tshirts/1r.jpg",
                price: 699,
                title: "Plain Green Jaspe"
            }
        ];

        $scope.applyFilters = function() {
            Dialog.showFilters();
        };

        $scope.applySort = function() {
            Dialog.showSortBy();
        };

        $scope.addToWishlist = function(product) {
            if (!product.inWishlist) {
                product.inWishlist = true;
                Wishlist.addItem(product);
            } else {
                product.inWishlist = false;
                Wishlist.removeItem(product);
            }
        };

    }
})();