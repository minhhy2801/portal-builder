const { app, BrowserWindow } = require('electron')
function createWindow() {
    const win = new BrowserWindow({
        resizable: false,
        webPreferences: {
            webSecurity: true
        }
    })

    win.loadFile('./dist/index.html')

    // Open the DevTools.
    win.webContents.openDevTools() 
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})