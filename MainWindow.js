const { BrowserWindow, ipcMain } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(file, isDev) {
    super({
      title: 'SysTop',
      x: isDev && 1150,
      y: isDev && 200,
      width: isDev ? 750 : 355,
      height: 500,
      icon: './assets/icons/icon.png',
      resizable: isDev ? true : false,
      backgroundColor: 'white',
      show: false,
      opacity: 0.9,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    this.loadFile(file);

    if (isDev) {
      this.webContents.openDevTools();
    }
  }
}

module.exports = MainWindow;
