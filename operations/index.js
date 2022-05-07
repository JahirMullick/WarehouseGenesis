const {app} = require('electron');
const electron = require('electron');
const { BrowserWindow } = require('electron/main');
const URL = require('url');
const path = require('path');

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow();
    mainWindow.loadURL(URL.format(
        {
            pathname: path.join(__dirname, 'payment.html'),
            protocol:'file',
            slashes: true
        }
    ));
})
