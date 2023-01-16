import {app} from '@electron/remote'

import * as NeDB from 'nedb';
import * as path from 'path';

export class Config {
    constructor() {
        this.db = new NeDB({ filename: path.join(this.getDBPath(),'config.db')});
    }

    // 异步初始数据库
    async init(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await this.db.loadDatabase()
            this.db.findOne({name: 'config'}, async (err, doc)=> {
                if (err != null) reject(err) 
                else {
                    if (doc == null) {
                        this.doc = await this.reloadDefault()
                    } else this.doc = doc
                    resolve(this.doc)
                }
            })
        })
    }

    // 异步重新配置数据库
    async reloadDefault(): Promise<any> {
        return new Promise( (resolve, reject) => this.db.insert({
            name: 'config',
            video_path: this.getDefaultVideoPath(),
            quality: 2,
            plugin_path: this.getDefaultPluginPaths()
        }, (err, doc) => {
            if (err == null) resolve(doc)
            else reject(err)
        }))
    }

    getDefaultVideoPath(): string {
        return path.join(app.getPath('videos'), 'VideoClient')
    }
    getDBPath(): string {
        return path.join(app.getPath('userData'), 'DB')
    }
    getDefaultPluginPaths(): string[] {
        return [path.join(__dirname, '..', '..', '..', 'packages'),
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