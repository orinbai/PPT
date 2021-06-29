(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App || {};
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var truckID = 'ncc-1701';
    var myTruck = new Truck(truckID, new DataStore());
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);

    // 获取 range 值
    // console.log(document.getElementById("caffeine").value)

    // 可以创建多个实例的例子
    // var App = window.App || {};
    // var launchCount = 0;

    // function Spaceship(shipname) {
    //     var Truck = App.Truck;
    //     var DataStore = App.DataStore;
    //     var myTruck = new Truck(shipname, new DataStore());
    //     window.myTruck = myTruck;
    // }

    // Spaceship.prototype.blastoff = function () {
    //     // 闭包允许访问 launchCount 属性
    //     launchCount++;
    //     console.log("Spaceship Launched!");
    // }

    // Spaceship.prototype.reportLaunchCount = function () {
    //     console.log("Total number of launches: " + launchCount);
    // }

    // App.Spaceship = Spaceship;
    // window.App = App;
})(window);