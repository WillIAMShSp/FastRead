const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("filesystem", {
  createNotebook: () => ipcRenderer.invoke("create-notebook"),
});
