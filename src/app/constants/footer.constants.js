/**
 * Created by Adi on 18/12/16.
 */

(function() {
    'use strict';

    var FooterData = {
        linkline1: [
            { name: "Contact Us", dest: "app.links({'link':'contact-us'})" },
            { name: "About Us", dest: "app.links({'link':'about-us'})" },
            { name: "FAQ", dest: "app.links({'link':'faq'})" }
        ],
        linkline2: [
            { name: "Return Policy", dest: "app.links({'link':'return-policy'})" },
            { name: "Privacy Policy", dest: "app.links({'link':'privacy-policy'})" },
            { name: "T & C", dest: "app.links({'link':'terms'})" }
        ],
        paymentIcons: [
            "assets/images/payment/pci-dss.png",
            "assets/images/payment/visa.png",
            "assets/images/payment/mastercard.png",
            "assets/images/payment/paytm.png"
        ]
    };

    angular
        .module('app.constants')
        .constant('FooterData', FooterData);
})();