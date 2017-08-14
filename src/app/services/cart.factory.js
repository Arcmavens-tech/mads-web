(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('Cart', CartFactory);

    function CartFactory($sessionStorage) {
        var factory = {};

        factory.getTotalPrice = getTotalPrice;
        factory.getCurrentCart = getCurrentCart;
        factory.removeItem = removeItem;
        factory.addItem = addItem;

        return factory;

        function getTotalPrice() {
            var cart = getCurrentCart();
            var totalCost = 0;
            for (var i = 0; i < cart.items.length; i++) {
                totalCost += parseInt(cart.items[i].price);
            }
            return totalCost;
        }

        function getCurrentCart() {
            if (!$sessionStorage.cart) {
                $sessionStorage.cart = { count: 0, items: [] };
            }
            return $sessionStorage.cart;
        }

        function removeItem(index) {
            var cart = getCurrentCart();
            cart.count -= 1;
            cart.items.splice(index, 1);
        }

        function addItem(item) {
            var cart = getCurrentCart();
            cart.count += 1;
            cart.items.push(item);
        }

    }

})();