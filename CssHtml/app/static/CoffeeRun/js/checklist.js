(function (window) {
    'use strick';

    var App = window.App || {}
    var $ = window.jQuery;

    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided.');
        }

        // console.log(this);
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    App.CheckList = CheckList;
    window.App = App;
})(window);