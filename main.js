const { app, BrowserWindow, Menu, globalShortcut } = require("electron");

//declaring the environment and mode//-//declaring the environment and mode//-//declaring the environment and mode//-//declaring the environment and mode//-
process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV === "development" ? true : false;
const isLinux = process.platform === "linux" ? true : false;
const isMac = process.platform === "darwin" ? true : false;
//declaring the environment and mode//-//declaring the environment and mode//-//declaring the environment and mode//-//declaring the environment and mode//-

//Window Declarations//-//Window Declarations//-//Window Declarations//-//Window Declarations//-//Window Declarations//-//Window Declarations//-
let mainWindow;
let aboutWindow;
//Window Declarations//-//Window Declarations//-//Window Declarations//-//Window Declarations//-//Window Declarations//-//Window Declarations//-
//Building Windows//-//Building Windows//-//Building Windows//-//Building Windows//-//Building Windows//-//Building Windows//-//Building Windows//-
function buildMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Shrinkinator",
    width: 700,
    height: 500,
    icon: "./assets/icons/Icon_256x256.png",
  });

  mainWindow.loadFile("./app/index.html");
}

function buildAboutWindow() {
  aboutWindow = new BrowserWindow({
    title: "about Shrinkinator",
    width: 320,
    height: 320,
    icon: "./assets/icons/Icon_256x256.png",
    backgroundColor: "white",
    resizable: false,
  });

  aboutWindow.loadFile("./app/about.html");
}
//Building Windows//-//Building Windows//-//Building Windows//-//Building Windows//-//Building Windows//-//Building Windows//-//Building Windows//-
//status////status////status////status////status////status////status////status////status////status////status////status//

app.on("ready", () => {
  buildMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);

  Menu.setApplicationMenu(mainMenu);

  globalShortcut.register("Ctrl+R", () => mainWindow.reload());
  globalShortcut.register("Ctrl+W", () => app.quit());
  globalShortcut.register(!isMac ? "Ctrl+Alt+i" : "Command+Alt+I", () =>
    mainWindow.toggleDevTools()
  );
  mainWindow.on("ready", () => (mainWindow = null));
});

//status////status////status////status////status////status////status////status////status////status////status////status//

//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu
const menu = [
  ...(isMac ? [{ role: "appMenu" }] : []),
  {
    role: "fileMenu",

    submenu: [
      {
        label: "back",
        click: () => rebuilt(),
      },
      {
        label: "Quit",
        click: () => app.quit(),
      },
    ],
  },

  {
    label: "About",
    click: () => buildAboutWindow(),
  },
];

const aboutM = [
  {
    label: "x",
    click: () => rebuilt(),
  },
];
//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu//menu

//mac efficient-mac efficient-window options// //mac efficient-mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options//

function rebuilt() {
  app.quit();
  buildMainWindow();
}

app.on("activate", () => {
  buildMainWindow();

  const aboutMenu = Menu.buildFromTemplate(aboutM);

  Menu.setApplicationMenu(aboutMenu);
});

app.on("about", () => {
  if (BrowserWindow.getAllWindows().length <= 2) {
    buildAboutWindow();
  }
});

//under process yet-need to reThink this algorithm//
// app.on("go", () => {
//   if (aboutWindow().length === 0) {
//     buildAboutWindow();
//   }

// });
//mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options////mac efficient-window options//

app.allowRendererProcessReuse = true;
