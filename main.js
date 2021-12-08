const { app, BrowserWindow } = require("electron");

//declaring the environment
process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV === "development" ? true : false;
const isLinux = process.platform === "linux" ? true : false;

let mainWindow;
function buildMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Shrinkinator",
    width: 700,
    height: 400,
    icon: "./assets/icons/Icon_256x256.png",
  });

  mainWindow.loadFile("./app/index.html");
}

app.on("ready", buildMainWindow);

//mac efficient-mac efficient-window options// //mac efficient-mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options//

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    buildMainWindow();
  }
});
//mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options//

app.allowRendererProcessReuse = true;
