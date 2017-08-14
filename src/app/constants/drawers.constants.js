/**
 * Created by Adi on 18/12/16.
 */

(function() {
    'use strict';

    var LeftDrawerData = {
        title: "MADS",
        categories: [{
                name: "Whats New",
                subCategories: [
                    { name: "Men", query: "app.list({query:'whats-new-men'})" },
                    { name: "Women", query: "app.list({query:'whats-new-women'})" }
                ]
            },
            {
                name: "Men",
                subCategories: [
                    { name: "Plain T's", query: "app.list({query:'men-plain-ts'})" },
                    { name: "Street Style", query: "app.list({query:'men-street-style'})" },
                    { name: "Tank Tops", query: "app.list({query:'men-tank-tops'})" }
                ]
            },
            {
                name: "Women",
                subCategories: [
                    { name: "Plain T's", query: "app.list({query:'women-plain-ts'})" },
                    { name: "Street Style", query: "app.list({query:'women-street-style'})" },
                    { name: "Tank Tops", query: "app.list({query:'women-tank-tops'})" }
                ]
            },
            {
                name: "Accessories",
                subCategories: [
                    { name: "Fitness", query: "app.list({query:'fitness-accessories'})" },
                    { name: "Style", query: "app.list({query:'style-accessories'})" }
                ]
            }
        ],
        links: [
            { name: "My Account", dest: "app.account" },
            { name: "Offers", dest: "app.links({'link':'offers'})" },
            { name: "Feedback", dest: "app.links({'link':'feedback'})" },
            { name: "Contact Us", dest: "app.links({'link':'contact-us'})" },
            { name: "About Us", dest: "app.links({'link':'about-us'})" }
        ]
    };

    angular
        .module('app.constants')
        .constant('LeftDrawerData', LeftDrawerData);
})();