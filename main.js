const {app, BrowserWindow } = require('electron');
const path=require('path');
const url = require('url');
const mtg = require('mtgsdk');

// init Window
let win;

function createWindow() {

    //Create Browser Window
    win = new BrowserWindow({width:800, height:600});

    // Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // Open DevTools
    win.webContents.openDevTools();

    win.on('closed',() =>{
        win = null;
    });
}

// Run create window function
app.on('ready', createWindow);

// Closes the application
app.once('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});