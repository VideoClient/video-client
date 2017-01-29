const remote = require('electron').remote;
const app = remote.app;

export class Config {
    getDefaultVideoPath(): string {
        return app.getPath('videos')
    }
    getDBPath(): string {
        return app.getPath('userData')
    }

}