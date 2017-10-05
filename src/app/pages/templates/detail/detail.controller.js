(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('ProductDetailController', ProductDetailController);

    /** @ngInject */
    function ProductDetailController($state, $scope, $stateParams) {
        var vm = this;

        $scope.product = { allPictures: ['1.jpg', '1r.jpg'] };

        activate();

        function activate() {}

    }
})();