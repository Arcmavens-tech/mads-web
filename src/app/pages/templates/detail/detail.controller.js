(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('ProductDetailController', ProductDetailController);

    /** @ngInject */
    function ProductDetailController($state, $scope, $stateParams, product, $sessionStorage, Cart) {
        var vm = this;

        vm.addToCart = addToCart;

        activate();

        function activate() {
            $scope.product = product;
            vm.cart = Cart.getCurrentCart();
            $scope.selectedColor = product.details.colors[0];
            $scope.selectedSize = product.details.sizes[0];
        }


        function addToCart() {
            $scope.product.color = $scope.selectedColor;
            $scope.product.size = $scope.selectedSize;
            Cart.addItem($scope.product);
        }

    }
})();