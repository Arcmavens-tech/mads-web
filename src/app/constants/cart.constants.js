/**
 * Created by Adi on 18/12/16.
 */

(function() {
    'use strict';

    var CartData = {
        "empty": {
            "icon": "fa-shopping-bag",
            "notify_text": "Your bag is empty !",
            "button_text": "START SHOPPING"
        }
    };

    angular
        .module('app.constants')
        .constant('CartData', CartData);
})();