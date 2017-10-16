define(
    [
        'uiComponent'
    ],
    function (Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Rubic_SimpleCheckout/newsletter'
            },

            isEnabled: function () {
                return window.checkoutConfig.newsletterEnabled;
            },

            isCheckedByDefault: function () {
                return window.checkoutConfig.newsletterChecked;
            },

            getCheckoutLabel: function () {
                return window.checkoutConfig.newsletterLabel;
            }
        });
    }
);