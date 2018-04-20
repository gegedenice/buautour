cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.phonegap.plugins.barcodescanner.BarcodeScanner",
    "file": "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
    "pluginId": "com.phonegap.plugins.barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  },
  {
    "id": "cordova-plugin-ezar-videooverlay.videoOverlay",
    "file": "plugins/cordova-plugin-ezar-videooverlay/www/videoOverlay.js",
    "pluginId": "cordova-plugin-ezar-videooverlay",
    "merges": [
      "ezar"
    ]
  },
  {
    "id": "cordova-plugin-ezar-videooverlay.camera",
    "file": "plugins/cordova-plugin-ezar-videooverlay/www/camera.js",
    "pluginId": "cordova-plugin-ezar-videooverlay",
    "clobbers": [
      "camera"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-device-orientation.CompassError",
    "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "CompassError"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.CompassHeading",
    "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "CompassHeading"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.compass",
    "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "navigator.compass"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.phonegap.plugins.barcodescanner": "6.0.5",
  "cordova-plugin-ezar-videooverlay": "1.0.0",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device-orientation": "2.0.1",
  "cordova-plugin-inappbrowser": "3.0.0"
};
// BOTTOM OF METADATA
});