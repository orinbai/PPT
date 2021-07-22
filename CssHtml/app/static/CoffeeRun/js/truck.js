(function (window) {
    'use strict';
    var App = window.App || {};

    function Truck (truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log("Adding order for " + order.emailAddress);
        return this.db.add(order.emailAddress, order);
    };

    Truck.prototype.deliverOrder = function (customerId) {
        console.log("Delivering order for " + customerId);
        return this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function (printFn) {
        // var customerIdArray = Object.keys(this.db.getAll());
        // console.log("Truck #" + this.truckId + ' has pending orders:');
        // customerIdArray.forEach(function (id) {
        //    console.log(this.db.get(id));
        // }.bind(this));
        return this.db.getAll()
        .then(function (orders) {
            var customerIdArray = Object.keys(orders);

            console.log('Truck #' + this.truckId + ' has pending orders:');
            customerIdArray.forEach(function (id) {
                console.log(orders[id]);
                // printFn 就是处理订单的列表，所以在后面的main.js里会
                // 在printOrders中传入checkList.addRow，因为函数域发生变化
                // 那么就需要用bind绑定checkList
                if (printFn) {
                    printFn(orders[id]);
                }
            }.bind(this));
        }.bind(this));
        
    };

    App.Truck = Truck;
    window.App = App;
})(window);