"use strict";
var {app, BrowserWindow} = require('electron');
var mainWindow = null;
app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});
app.on('open-file', function (e) {
    if (mainWindow) {
        mainWindow.show();
        mainWindow.focus();
    }
    else {
        openMainWindow();
    }
});
app.on('activate-with-no-open-windows', function () {
    if (mainWindow) {
        mainWindow.show();
    }
    else {
    }
});
app.on('ready', openMainWindow);
function openMainWindow() {
    mainWindow = new BrowserWindow({ width: 1024, height: 768 });
    mainWindow.maximize();
    mainWindow.loadURL('file://' + __dirname + '/index.html#/home');
    mainWindow.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}