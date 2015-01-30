define(function (require) {
	'use strict';

    var ChromeCommand = require('background/enum/chromeCommand');
    var SignedInUser = require('background/model/signInManager.js');

    //strategy: it looks like there's an
    var SaveStreamItemButton = Backbone.Model.extend({

        defaults: {
            enabled: false,
            stream: null
        },

        initialize: function () {
            this.listenTo(this.get('stream').get('items'), 'remove reset change:active', this._setEnabled);
        }
    });

    return SaveStreamItemButton;
});
