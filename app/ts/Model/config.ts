const remote = require('electron').remote;
const app = remote.app;
import NeDB = require('nedb')
import path = require('path')

export class Config {
    constructor() {
        this.db = new NeDB({ filename: path.join(this.getDBPath(),'config.db'), autoload: true });
        this.init();
    }

    init() {
        this.db.findOne({name: 'config'}, (err, doc)=> {
            if (doc == null) this.reloadDefault()
            else this.doc = doc
        })
    }

    reloadDefault() {
        this.db.insert({
            name: 'config',
            video_path: this.getDefaultVideoPath(),
            quality: 2,
            plugin_path: this.getDefaultPluginPaths()
        })
    }

    getDefaultVideoPath(): string {
        return path.join(app.getPath('videos'), 'VideoClient')
    }
    getDBPath(): string {
        return path.join(app.getPath('userData'), 'DB')
    }
    getDefaultPluginPaths(): string[] {
        return [path.join(app.getAppPath(), '..', 'packages'),
                path.join(app.getPath('userData'), 'Plugins')]
    }

    getVideoPath(): string {
        return this.doc.video_path
    }
    getQuality(): number {
        return this.doc.quality
    }
    getPluginPaths(): string[] {
        return this.doc.plugin_path
    }

    doc: any
    db: NeDB
}