const {app} = require('electron')

export class Config {
    getDefaultVideoPath(): string {
        return app.getPath('videos')
    }
    getDBPath(): string {
        return app.getPath('userData')
    }

}