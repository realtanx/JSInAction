(function (window) {
    let App = window.App || {};

    function DataStore() {
        console.log('DataStore constructor called!');
        this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };

    DataStore.prototype.remove = (key) => {
        delete this.data[key];
    };

    DataStore.prototype.get = (key) => {
        return this.data[key];
    };

    DataStore.prototype.getAll = () => {
        return this.data;
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);