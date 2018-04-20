myApp.factory('compass', function ($rootScope, cordovaReady) {
  return {
    watchHeading: cordovaReady(function (onSuccess, onError, options) {
      var watchID = navigator.compass.watchHeading(function () {
        var that = this,
          args = arguments;

        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(that, args);
          });
        }
      }, function () {
        var that = this,
          args = arguments;

        if (onError) {
          $rootScope.$apply(function () {
            onError.apply(that, args);
          });
        }
      },
      {
    frequency: 3000
});
    })
  };
});