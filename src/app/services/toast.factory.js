(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('Toast', ToastFactory);

    function ToastFactory($mdToast) {
        var factory = {};

        factory.showMessageToast = showMessageToast;

        return factory;

        function showMessageToast(message) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column"><div class="md-toast-content">' + message + '</div></md-toast>',
                hideDelay: 2500,
                position: 'bottom center',
                parent: '#dialog'
            });
        }



    }

})();