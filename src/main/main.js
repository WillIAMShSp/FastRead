const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const Notebook = require("./Notebook");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5555");
  } else {
    win.loadFile("../../dist/index.html");
  }
};

ipcMain.handle("create-notebook", (event) => {
  Notebook.createNotebook();
});

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
