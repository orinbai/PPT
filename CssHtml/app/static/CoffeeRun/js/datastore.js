(function (window) {
    'use strict';
    var App = window.App || {};

    function DataStore() {
        console.log("Running the DataStore function");
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);