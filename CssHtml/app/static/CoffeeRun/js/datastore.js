(function (window) {
    'use strict';
    var App = window.App || {};
    var Promise = window.Promise;

    function DataStore() {
        // console.log("Running the DataStore function");
        this.data = {};
    }

    function promiseResolveWith(value) {
        var promise = new Promise(function (resolve, reject) {
            resolve(value);
        });
        return promise
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
        // var promise = new Promise(function (resolve, reject) {
        //     this.data[key] = val;
        //     // 构建Promise而该方法只要赋值不需要返回值
        //     // 所以只需要传入null
        //     resolve(null);
        // }.bind(this));

        return promiseResolveWith(null);
    }

    DataStore.prototype.get = function (key) {
        return promiseResolveWith(this.data[key]);
    }

    DataStore.prototype.getAll = function (key) {
        return promiseResolveWith(this.data);
    }

    DataStore.prototype.remove = function (key) {
        delete this.data[key];
        return promiseResolveWith(null)
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);