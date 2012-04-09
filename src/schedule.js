(function($) {
    "use strict";
    $.fn.schedule = function(options) {
        var plugin = this;
        
        $.fn.schedule.defaults = {
            key: "value",
            callback: function ( elem, param ) {}
        };

        plugin.settings = {};


        function init() {
            plugin.settings = $.extend({}, $.fn.schedule.defaults, options);
            return plugin.each(function() {
                console.log('hello', this);
            });
        }

        
        function sanity() {
            return 'sane';
        }

        plugin.test = {
            sanity: sanity
        };
        

        return init();

    };
}(jQuery));
