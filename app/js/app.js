/**
 * Роутер
 */
var app = angular.module('app', ['ngStorage', 'ui.router']);
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/templates/main.html',
            controller: 'MainCtrl as main',
            resolve: {
                products: ['product', function (product) {
                        return product.getProduct();
                      }
                    ]
            }
        })
        .state('product', {
            url: '/product/:productId',
            templateUrl: 'app/templates/details.html',
            controller: 'ProductCtrl as product'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'app/templates/cart.html',
            controller: 'CartCtrl as cart'
        })
        .state('buy', {
            url: '/buy',
            templateUrl: 'app/templates/buy.html',
            controller: 'BuyCtrl as buy'
        })



}]);