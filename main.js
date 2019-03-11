const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const url = require("url");
const serialport = require('serialport');

let win;
let production = process.argv.filter(val => (val == '--prod' || val == '--production')).length > 0

const listPorts = async () => {
  const ports = await serialport.list()
  console.log("PORTS", ports)
}
listPorts()

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  // load the dist folder from Angular
  if (production) {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, `/dist/index.html`),
        protocol: "file:",
        slashes: true
      })
    );
  } else {
    require('electron-reload')(__dirname);
    win.loadURL('http://localhost:4200/index.html');
  }

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
