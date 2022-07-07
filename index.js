const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
  console.log('App is ready');
  // Create new window
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    resizable: false,
  });
  // Load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'UI/index.html'),
    protocol: 'file:',
    slashes: true
  }));
  //remove menu
  mainWindow.setMenu(null);
  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });
}
);