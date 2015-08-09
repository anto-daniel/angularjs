(function () {
    "use strict";
    /*global angular*/
    var app = angular.module('store', []),
        gem;
    app.controller('StoreController', function () {
        this.product = gem;
    });

    gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: '........'
    };
}());
