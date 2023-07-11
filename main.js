const { app, BrowserWindow } = require('electron')
const path = require('path')

const argv = process.argv.slice(2)

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  if (!argv) return

  if (argv[1] === 'dev') {
    mainWindow.loadURL('http://localhost:3000')
  } else {
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './build/index.html'),
        protocol: 'file:',
        slashes: true
    }))
  }
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})