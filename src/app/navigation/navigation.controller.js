(function() {
    'use strict';

    angular
        .module('madsapp')
        .controller('NavigationController', NavigationController);

    /** @ngInject */
    function NavigationController($scope, $sessionStorage, Cart, Dialog, $mdSidenav, FooterData) {
        var vm = this;
        vm.login = login;
        $scope.data = FooterData;
        $scope.cart = Cart;
        $scope.toggleLeft = buildToggler('left');
        vm.showSearch = false;
        vm.showSearchBar = showSearchBar;
        activate();

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }

        function activate() {
            vm.cart = Cart.getCurrentCart();
        }

        function login() {
            Dialog.showLogin();
        }

        function showSearchBar() {

        }

        // Data

    }

})();