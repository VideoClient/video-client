const {app} = require('electron')

export class Config {
    getDefaultVideoPath(): string {
        return app.getPath('videos')
    }
}