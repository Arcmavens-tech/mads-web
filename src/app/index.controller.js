(function() {
    'use strict';

    angular
        .module('madsapp')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController($scope, $mdSidenav) {
        var vm = this;
        $scope.toggleLeft = buildToggler('left');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }

        // Data

    }

})();