/**
 * Главный контроллер
 */
app.controller('MainCtrl', function (product, Cart, $localStorage) {
    var _this = this;

    /**
     * Получение из json файла данных
     */
    product.getProduct(function (rez) {
        _this.products = rez;
        return _this.products;
    });

    /**
     * Добавление в массив товара
     */
    this.a = Cart;
    this.cart = function (product) {
        var cnt = 0;
        angular.forEach(_this.a, function (value, key) {
            if (product === value.id) {
                cnt += 1;
            }
        });
        if (cnt === 0) {
            _this.a.push({
                id: _this.products[product - 1].id,
                name: _this.products[product - 1].name,
                price: _this.products[product - 1].price,
                quantity: 1
            });
            $localStorage.cart = _this.a;
        }
    };

    /**
     * Смена кнопки товара на главном экране
     */
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