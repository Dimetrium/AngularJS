var app = angular.module('shop', []);

/*app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	
	$stateProvider
	.state('home', {
      url: "/",
      templateUrl: "partials/main.html"
    });
});
*/

app.factory('product', function ($http) {
    return {
        getProduct: function (callback) {
            $http.get('app/data/products.json').success(callback);
        }
    };
});

app.controller('shopController', function (product) {
    var _this = this;
    product.getProduct(function (rez) {
        _this.products = rez;
        return _this.products;
    })
});