(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('CartController', CartController);

    /** @ngInject */
    function CartController($state, $scope, Cart, CartData) {
        var vm = this;
        $scope.cart = Cart;
        $scope.data = CartData;
        vm.cart = Cart.getCurrentCart();

    }
})();