(function() {
    'use strict';

    angular
        .module('madsapp')
        .controller('DrawerController', DrawerController);

    /** @ngInject */
    function DrawerController($scope, $mdSidenav, LeftDrawerData) {
        var vm = this;

        $scope.data = LeftDrawerData;
        $scope.toggleLeft = buildToggler('left');

        $scope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams, options) {
                $mdSidenav('left').close();
            });



        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }

        // Data

    }

})();