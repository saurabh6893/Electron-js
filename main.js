const { app, BrowserWindow } = require("electron");

process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV !== "production" ? true : false;
const isLinux = process.platform === "linux" ? true : false;

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Shrinkentor",
    width: 800,
    height: 500,
    icon: "./assets/icons/Icon_256x256.png",
    resizable: isDev ? true : false,
  });

  // alternate way..   mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  mainWindow.loadFile("./app/index.html");
}

app.on("ready", createMainWindow);
