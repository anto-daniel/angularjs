(function () {
    "use strict";
    /*global angular*/
    var app = angular.module('store', []),
        gems;
    app.controller('StoreController', function () {
        this.product = gems;
    });

    gems = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Some gems have hidden qualities beyond their cluster, beyond their shine...Dodeca is one of those gems',
        canPurchase: false,
        soldOut: false
    };
}());
