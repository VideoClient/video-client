const remote = require('electron').remote;
const app = remote.app;
const fs = remote.require('fs');
import path = require('path')
import {App} from './app'
export interface Plugin {
    name: string
    version: string
    onActive(store: any):Promise<any>
    onDeactive(store: any):Promise<any>
    onLoaded(): Promise<any>
    __package: any
}
import request = require('request');

export class Plugins {
    static index_url = "https://github.com/VideoClient/video-client-pm/raw/master/index.json"

    constructor() {
    }

    async load() {
        return new Promise((resolve, reject) => {
            this.path = App.getConfig().getPluginPaths()
            this.plugins = new Map<string, Plugin>()
            console.log(this.path)
            for (let i of this.path) {
                fs.readdir(i, (err, files) => {
                    if (!err)
                        files.forEach(file => {
                            let subdir = path.join(i, file)
                            if (fs.statSync(subdir).isDirectory()) 
                                this.scan_package(subdir)
                                    .then(v=> {
                                        let plugin = this.loadPlugin(subdir)
                                        plugin.__package = v
                                        this.plugins[v.name] = plugin
                                        console.log(plugin)
                                    })
                                    .catch(e=> reject(e))
                            });
                })
            }

            request.get(Plugins.index_url, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    this.index = body
                }
                console.log(body)
                resolve()
            });
        })
    }

    async scan_package(p: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(p, 'package.json'), 'utf8', (err, data) => {
                if (err) 
                    if (err.code === "ENOENT") return;
                    else reject(err)
                let d = JSON.parse(data)
                d.pluginPath = p
                resolve(d)
            })
        })
    }

    loadPlugin(p: string) {
        let plugin = require(p)(require('./index'))
        console.log(plugin)
        if (plugin['regTab']) App.getHomeTabs().regTab(plugin['regTab'])
        return plugin
    }

    install(name: string) {
        
    }
    
    save() {

    }

    index: any
    plugins: Map<string, Plugin>
    path: string[]
}