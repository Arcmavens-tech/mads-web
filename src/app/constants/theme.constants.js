/**
 * Created by Adi on 18/12/16.
 */

(function() {
    'use strict';

    var AppTheme = {
        "primary": "cyan-900",
        "icon_dark": "grey-800"
    };

    angular
        .module('app.constants')
        .constant('AppTheme', AppTheme);
})();