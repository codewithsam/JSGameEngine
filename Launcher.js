"use strict";
var Electron = require('electron');
var app = Electron.app;
require('electron-reload')(__dirname);
var Display = require("./src/Display");
var width = 300;
var height = width / 16 * 9;
var scale = 3;
var display = new Display("Main", width * scale, height * scale);
app.on('ready', function () {
    display.createDisplay();
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
//# sourceMappingURL=Launcher.js.map