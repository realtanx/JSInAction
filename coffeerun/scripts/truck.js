(function (window) {
    let App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    };

    Truck.prototype.createOrder = (order) => {
        console.log("create order: " + order.email);
        // this.db.add
    }

    Truck.prototype.deliverOrder = (customerId) => {
        console.log("deliver order: " + customerId);
        // this.db.remove
    };

    Truck.prototype.printOrders = () => {
        let orderEmails = Object.keys(this.db.getAll());
        console.log("Truck order id: " + this.truckId + "with orders: ");

        orderEmails.forEach(function (email) {
            console.log(this.db.get(email));
        }.bind(this));
    };

    App.Truck = Truck;
    window.App = App;
})(window);