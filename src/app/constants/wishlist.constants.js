/**
 * Created by Adi on 18/12/16.
 */

(function() {
    'use strict';

    var WishlistData = {
        "empty": {
            "icon": "fa-heart-o",
            "notify_text": "Your wishlist is empty !",
            "button_text": "START SHOPPING"
        }

    };

    angular
        .module('app.constants')
        .constant('WishlistData', WishlistData);
})();