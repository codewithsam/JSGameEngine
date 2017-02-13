/// <reference path="./../typings/electron.d.ts" />

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

class Display{
    private title:string;
    private width:number;
    private height:number;
    private canvas = {};
    public window;

    constructor(title,width,height){
        this.title = title;
        this.width = width;
        this.height = height;
        this.canvas = {
            width: width,
            height: height
        }
    }
    createDisplay(){
        this.window = new BrowserWindow({
            width: this.width,
            height: this.height,
            title: this.title,
            resizable: false,
            frame: false
        });
        this.window.loadURL(`file://${__dirname}/views/main.html`);
        this.window.setMenu(null);
        this.window.webContents.openDevTools();
        this.window.on('closed', function () {
            this.window = null;
        });
    }

}
export = Display;