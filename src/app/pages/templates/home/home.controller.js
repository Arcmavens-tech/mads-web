(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($state, $scope, $filter, Products) {
        var vm = this;

        vm.arrayData = [
            { src: '1.jpg' },
            { src: '1r.jpg' },
            { src: '2.jpg' },
            { src: '2r.jpg' }
        ];



        vm.scroll = scroll;
        $scope.products = Products.all;
        $scope.currentPage = 0;
        $scope.pageSize = 9;
        $scope.numberOfPages = Math.ceil($scope.products.length / $scope.pageSize);

        $scope.filteredItems = [];
        $scope.groupedItems = [];
        $scope.pagedItems = [];

        var searchMatch = function(haystack, needle) {
            if (!needle) {
                return true;
            }
            return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
        };
        $scope.search = function(name) {
            $scope.filteredItems = $filter('filter')($scope.products, function(product) {
                for (var attr in product) {
                    if (searchMatch(product[name], $scope.query))
                        return true;
                }
                return false;
            });
            $scope.currentPage = 0;
            $scope.groupToPages();
        };
        $scope.myFilter = function(column, category) {
            $scope.filteredItems = $filter('filter')($scope.products, function(product) {
                for (var attr in product) {
                    if (searchMatch(product[column], category))
                        return true;
                }
                return false;
            });
            $scope.currentPage = 0;
            $scope.groupToPages();
        };
        $scope.groupToPages = function() {
            $scope.pagedItems = [];

            for (var i = 0; i < $scope.filteredItems.length; i++) {
                if (i % $scope.pageSize === 0) {
                    $scope.pagedItems[Math.floor(i / $scope.pageSize)] = [$scope.filteredItems[i]];
                } else {
                    $scope.pagedItems[Math.floor(i / $scope.pageSize)].push($scope.filteredItems[i]);
                }
            }
        };
        // functions have been describe process the data for display
        $scope.myFilter();
        $scope.search();

        function scroll(eID) {
            var elm = document.getElementById(eID);
            elm.scrollIntoView({ behavior: "smooth" });
        }

    }
})();