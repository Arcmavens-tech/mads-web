/**
 * Created by Adi on 18/12/16.
 */

(function() {
    'use strict';

    var AppTheme = {
        "primary": "cyan",
        "icon_dark": "grey-800",
        "icon_light": "grey-600"
    };

    angular
        .module('app.constants')
        .constant('AppTheme', AppTheme);
})();