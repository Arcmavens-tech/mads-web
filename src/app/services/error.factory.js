(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('Cart', CartFactory);

    function CartFactory($mdToast) {
        var factory = {};

        factory.showErrorToast = showErrorToast;

        return factory;

        function showErrorToast() {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column"><div class="md-toast-content">' + message + '</div></md-toast>',
                hideDelay: 5000,
                position: 'top right',
                parent: '#dialog'
            });
        }



    }

})();