(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.00,
            description: 'Some gems have hidden qualities beyond their cluster, beyond their shine...Dodeca is one of those gems',
            images: [
                {
                    full: 'dodecahedron-01-full.jpg',
                    thumb: 'dodecahedron-01-thumb.jpg'
                },
            ],
            canPurchase: true,
        },
        {
            name: 'Pentagonal gem',
            price: 5.95,
            description: 'Origin of the Pentagonal Gem is unknown, hence its low value. It has very high shine and 12 sides,',
            images: [
                {
                    full: 'pentagonal-01-full.jpg',
                    thumb: 'pentagonal-01-thumb.jpg'
                },
            ],

            canPurchase: false,
        }
    ];
})();
