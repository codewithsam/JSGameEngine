/// <reference path="./../typings/electron.d.ts" />
"use strict";
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = electron.ipcMain;
var Display = (function () {
    function Display(title, width, height) {
        this.canvas = {};
        this.title = title;
        this.width = width;
        this.height = height;
        this.canvas = {
            width: width,
            height: height
        };
    }
    Display.prototype.createDisplay = function () {
        this.window = new BrowserWindow({
            width: this.width,
            height: this.height,
            title: this.title,
            resizable: false,
            frame: false
        });
        this.window.loadURL("file://" + __dirname + "/views/main.html");
        this.window.setMenu(null);
        this.window.webContents.openDevTools();
        this.window.on('closed', function () {
            this.window = null;
        });
    };
    return Display;
}());
module.exports = Display;
//# sourceMappingURL=Display.js.map