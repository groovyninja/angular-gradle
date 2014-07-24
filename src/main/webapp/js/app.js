(function(){'use strict';
    var app = angular.module('gemStore', []);

    var gem = {
        name  : 'Product 1',
        price : 100
    };

    app.controller('StoreController', function(){
        this.product = gem;
    });

})();