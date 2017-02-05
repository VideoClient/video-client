import {Video, VideoCollection} from './resource';
import {App} from './app';
import NeDB = require('nedb')
import path = require('path')

export class Cache {
    constructor() {
        
    }

    load() {
        this.db = new NeDB({ filename: path.join(App.getConfig().getDBPath(),'cache.db'), autoload: true})
        this.db.ensureIndex({ fieldName: 'url' })
        this.mdb = new NeDB()
        this.mdb.ensureIndex({ fieldName: 'key' })
    }

    async check(input: String | Video | VideoCollection) : Promise<Video | VideoCollection> {
        return new Promise<Video | VideoCollection>((resolve, reject) => {
            if (input instanceof Video || input instanceof VideoCollection) {
                this.db.findOne({url: input.url}, (err, doc:any) => {
                    if (err) reject(err); else resolve(doc);
                })
            } else if (input instanceof String) {
                this.db.findOne({url: input}, (err, doc:any) => {
                    if (err) reject(err); else resolve(doc);
                })
            }
        })
    }

    insert(input: Video | VideoCollection) {
        this.db.insert(input)
    }

    saveList(key: string, input:  Video[] | VideoCollection[]) {
        let indexs = []
        for (let i of input) {
            indexs.push(i.url)
            this.insert(i)
        }
        this.mdb.insert({key: key, index: indexs})
    }

    async loadList(key: string) {
        return new Promise<Video | VideoCollection>((resolve, reject) => {
            this.mdb.findOne({key: key}, (err, doc:any) => {
                if (err) return reject(err)
                this.db.find({ url: { $in: doc.index }}, function (err, docs) {
                    if (err) return reject(err)
                    resolve(docs)
                });
            })
        })
    }
    private db: Nedb
    private mdb: Nedb
}