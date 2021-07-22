(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders/';
    var truckID = 'ncc-1701';
    var App = window.App || {};
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    var remoteDS = new RemoteDataStore(SERVER_URL);
    var myTruck = new Truck(truckID, new DataStore());
    // var myTruck = new Truck(truckID, remoteDS);
    window.myTruck = myTruck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    var formHandler = new FormHandler(FORM_SELECTOR);

    // formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    formHandler.addSubmitHandler(function (data) {
        return myTruck.createOrder.call(myTruck, data)
        .then (function () {
            checkList.addRow.call(checkList, data);
        },
        {
            function () {
                alert('Server unreachable. Try again later.');
            }
        });
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);
    myTruck.printOrders(checkList.addRow.bind(checkList));
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