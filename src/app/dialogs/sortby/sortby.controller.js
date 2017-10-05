(function() {
    'use strict';

    angular
        .module('madsapp')
        .controller('SortByController', SortByController);

    /** @ngInject */
    function SortByController($scope) {
        var vm = this;

        $scope.sortTypes = ["Prices: Low to High", "Prices: High to Low"];
        activate();

        function activate() {

        }

        // Data

    }

})();