const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow(){
    const mainWindow = new BrowserWindow({
        width:1280,
        height:960,
        icon:path.join(__dirname, 'asset', 'icon.png'),
        autoHideMenuBar: true
    })

    mainWindow.loadURL('http://server.zerodots.net:8123/')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})