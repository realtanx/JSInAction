(function (window) {
    let App = window.App || {};

    function RemoteDataStore(url) {
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = (key, val) => {

    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);