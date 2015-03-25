/**
 * Контроллер для отображение детального
 */
app.controller('ProductCtrl', function ($stateParams, product, Cart, $localStorage) {
    var _this = this;
    this.productId = $stateParams.productId - 1;
    product.getProduct(function (rez) {
        _this.products = rez;
        return _this.products;
    })

    this.a = Cart;
    this.cart = function (product) {
        var cnt = 0;
        angular.forEach(_this.a, function (value, key) {
            if (_this.productId + 1 === value.id) {
                cnt += 1;
            }
        });
        if (cnt === 0) {
            _this.a.push({
                id: _this.products[_this.productId].id,
                name: _this.products[_this.productId].name,
                price: _this.products[_this.productId].price,
                quantity: 1
            });
            $localStorage.cart = _this.a;
        }
    };

    this.buttonBuy = function (id) {
        var cnt = 0;
        angular.forEach(_this.a, function (value, key) {
            if (id == value.id) {
                cnt++;
            }
        });
        if (cnt === 0) {
            return false;
        } else {
            return true;
        }
    }
});