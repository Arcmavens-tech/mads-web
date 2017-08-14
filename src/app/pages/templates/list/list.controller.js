(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($state, $scope, Cart, CartData) {
        var vm = this;
        $scope.cart = Cart;
        $scope.data = CartData;
        vm.cart = Cart.getCurrentCart();

    }
})();