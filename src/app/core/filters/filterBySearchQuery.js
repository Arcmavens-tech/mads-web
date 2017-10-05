(function() {
    'use strict';

    angular
        .module('core.filters', [])
        .filter('filterByBranch', filterByBranch);

    /** @ngInject */
    function filterByBranch() {
        return function(items, ids) {

            if (items.length === 0 || !ids) {
                return items;
            }

            if (ids.length === 0) {
                return items;
            }

            var filtered = [];

            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var match = false;

                for (var j = 0; j < ids.length; j++) {
                    var id = ids[j];
                    if (filterBranch(item, id)) {
                        match = true;
                        break;
                    }
                }

                if (match) {
                    filtered.push(item);
                }

            }

            return filtered;

        };
    }

    function filterBranch(item, query) {
        var lowercaseQuery = angular.lowercase(query);
        return (item.branch.toLowerCase().search(lowercaseQuery) != -1);
    }

})();