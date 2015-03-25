app.factory('product', function ($http) {
    return {
        getProduct: function (callback) {
            $http.get('app/data/products.json').success(callback);
        }
    };
});