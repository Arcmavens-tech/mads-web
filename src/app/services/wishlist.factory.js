(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('Wishlist', WishlistFactory);

    function WishlistFactory($sessionStorage) {
        var factory = {};

        factory.getCurrentWishlist = getCurrentWishlist;
        factory.removeItem = removeItem;
        factory.addItem = addItem;

        return factory;

        function getCurrentWishlist() {
            if (!$sessionStorage.wishlist) {
                $sessionStorage.wishlist = { count: 0, items: [] };
            }
            return $sessionStorage.wishlist;
        }

        function removeItem(item) {
            var wishlist = getCurrentWishlist();
            var index = wishlist.items.indexOf(item)
            wishlist.items.splice(index, 1);
            wishlist.count -= 1;
        }

        function addItem(item) {
            var wishlist = getCurrentWishlist();
            wishlist.items.push(item);
            wishlist.count += 1;
        }

    }

})();