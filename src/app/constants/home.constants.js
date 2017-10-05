/**
 * Created by Adi on 18/12/16.
 */

(function() {
    'use strict';

    var HomeData = {
        banners: [{ src: '1.jpg', link: "app.list({'query':'offer-499'})" },
            { src: '1r.jpg', link: "app.list({'query':'offer-799'})" },
            { src: '2.jpg', link: "app.list({'query':'offer-50%'})" },
            { src: '2r.jpg', link: "app.list({'query':'offer-accessories'})" }
        ]

    };

    angular
        .module('app.constants')
        .constant('HomeData', HomeData);
})();