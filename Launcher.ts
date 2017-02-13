const Electron = require('electron');
const app = Electron.app;
require('electron-reload')(__dirname);

import Display = require("./src/Display");

let width:number = 300;
let height:number = width / 16*9;
let scale = 3;

let display = new Display("Main", width*scale,height*scale);

app.on('ready', function () {
    display.createDisplay();
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});