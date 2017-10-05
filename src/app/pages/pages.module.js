(function() {
    'use strict';

    angular
        .module('app.pages', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.home', {
                url: '/',
                views: {
                    'content@app': {
                        templateUrl: 'app/pages/templates/home/home.html',
                        controller: 'HomeController as vm'
                    }
                }
            }).state('app.account', {
                url: '/account',
                views: {
                    'content@app': {
                        templateUrl: 'app/pages/templates/account/account.html',
                        controller: 'AccountController as vm'
                    }
                }
            }).state('app.cart', {
                url: '/cart',
                views: {
                    'main@': {
                        templateUrl: 'app/core/layouts/contentWithHeader.html',
                        controller: 'IndexController as vm'
                    },
                    'header@app.cart': {
                        templateUrl: 'app/navigation/header.html',
                        controller: 'NavigationController as vm'
                    },
                    'content@app.cart': {
                        templateUrl: 'app/pages/templates/cart/cart.html',
                        controller: 'CartController as vm'
                    },
                    'left-drawer@app.cart': {
                        templateUrl: 'app/drawers/left-drawer.html',
                        controller: 'DrawerController as vm'
                    }
                }
            }).state('app.wishlist', {
                url: '/wishlist',
                views: {
                    'main@': {
                        templateUrl: 'app/core/layouts/contentWithHeader.html',
                        controller: 'IndexController as vm'
                    },
                    'header@app.wishlist': {
                        templateUrl: 'app/navigation/header.html',
                        controller: 'NavigationController as vm'
                    },
                    'content@app.wishlist': {
                        templateUrl: 'app/pages/templates/wishlist/wishlist.html',
                        controller: 'WishlistController as vm'
                    },
                    'left-drawer@app.wishlist': {
                        templateUrl: 'app/drawers/left-drawer.html',
                        controller: 'DrawerController as vm'
                    }
                }
            })
            .state('app.list', {
                url: '/list/:query',
                params: { query: '' },
                views: {
                    'content@app': {
                        templateUrl: 'app/pages/templates/list/list.html',
                        controller: 'ListController as vm'
                    }
                }
            })
            .state('app.detail', {
                url: '/detail/:productId',
                params: { productId: '' },
                views: {
                    'content@app': {
                        templateUrl: 'app/pages/templates/detail/detail.html',
                        controller: 'ProductDetailController as vm'
                    }
                }
                // resolve: {
                //     product: function getProduct($stateParams, Products, $q) {
                //         var productId = $stateParams.productId;
                //         var deferred = $q.defer();
                //         Products.getProduct(productId).$loaded().then(function success(response) {
                //             deferred.resolve(response);
                //         }, function error(error) {
                //             deferred.reject(error);
                //         });
                //         return deferred.promise;
                //     }
                // }
            })
            .state('app.links', {
                url: '/links/:link',
                params: { link: '' },
                views: {
                    'content@app': {
                        templateUrl: 'app/pages/templates/links/links.html',
                        controller: 'LinksController as vm'
                    }
                }
            });
    }
})();