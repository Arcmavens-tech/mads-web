(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LinksController', LinksController);

    /** @ngInject */
    function LinksController($stateParams) {
        var vm = this;

        vm.link = $stateParams.link;

        activate();
        // Data
        function activate() {
            if (vm.link == 'privacy-policy') {
                vm.src = 'app/pages/templates/links/privacy-policy.html';
            } else if (vm.link == 'faq') {
                vm.src = 'app/pages/templates/links/faq.html';
            } else if (vm.link == 'terms') {
                vm.src = 'app/pages/templates/links/terms-conditions.html';
            } else if (vm.link == 'about-us') {
                vm.src = 'app/pages/templates/links/about-us.html';
            } else if (vm.link == 'contact-us') {
                vm.src = 'app/pages/templates/links/contact-us.html';
            } else if (vm.link == 'pricing-policy') {
                vm.src = 'app/pages/templates/links/pricing-policy.html';
            } else if (vm.link == 'return-policy') {
                vm.src = 'app/pages/templates/links/return-policy.html';
            } else if (vm.link == 'offers') {
                vm.src = 'app/pages/templates/links/offers.html';
            } else if (vm.link == 'feedback') {
                vm.src = 'app/pages/templates/links/feedback.html';
            }
        }
        //////////
    }
})();