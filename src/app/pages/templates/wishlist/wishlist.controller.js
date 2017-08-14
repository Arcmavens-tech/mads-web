(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('WishlistController', WishlistController);

    /** @ngInject */
    function WishlistController($state, $scope, WishlistData) {
        var vm = this;
        $scope.data = WishlistData;

    }
})();