const { app, BrowserWindow, Menu } = require("electron");

//declaring the environment
process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV === "development" ? true : false;
const isLinux = process.platform === "linux" ? true : false;
const isMac = process.platform === "darwin" ? true : false;

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

//status////status////status////status////status////status////status////status////status////status////status////status//

app.on("ready", () => {
  buildMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);

  Menu.setApplicationMenu(mainMenu);

  mainWindow.on("ready", () => (mainWindow = null));
});
//status////status////status////status////status////status////status////status////status////status////status////status//

//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu
const menu = [
  ...(isMac ? [{ role: "appMenu" }] : []),
  {
    label: "file",
    submenu: [
      {
        label: "Quit",
        click: () => app.quit(),
      },
    ],
  },
];
//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu

//mac efficient-mac efficient-window options// //mac efficient-mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options//

app.on("window-all-closed", () => {
  if (!isMac) {
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
