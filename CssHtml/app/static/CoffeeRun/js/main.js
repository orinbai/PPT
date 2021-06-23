(function (window) {
    'use strict';
    // 暂时封闭，写个测试
    // var App = window.App || {};
    // var Truck = App.Truck;
    // var DataStore = App.DataStore;
    // truckID = 'ncc-1701';
    // var myTruck = new Truck(truckID, new DataStore());
    // window.myTruck = myTruck;

    var App = window.App || {};
    var launchCount = 0;

    function Spaceship(shipname) {
        var Truck = App.Truck;
        var DataStore = App.DataStore;
        var myTruck = new Truck(shipname, new DataStore());
        window.myTruck = myTruck;
    }

    Spaceship.prototype.blastoff = function () {
        // 闭包允许访问 launchCount 属性
        launchCount++;
        console.log("Spaceship Launched!");
    }

    Spaceship.prototype.reportLaunchCount = function () {
        console.log("Total number of launches: " + launchCount);
    }

    App.Spaceship = Spaceship;
    window.App = App;
})(window);