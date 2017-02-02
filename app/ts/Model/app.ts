import {Config} from './config'
import {ResourceLoader} from './resource'
import {Framework} from '../Component/framework'
import {Plugins} from './plugins'
import {HomePageTabs} from './ui'
export class App {
    private static instance = new App()
    private config = new Config()
    private resource_loader = new ResourceLoader()
    private plugins = new Plugins()
    private hometabs = new HomePageTabs()

    public static framework: Framework
    public static get() {return App.instance}
    public static getConfig() {return App.get().config}
    public static getResourceLoader() {return App.get().resource_loader}
    public static getFramework() {return App.framework}
    public static getPlugins() {return App.get().plugins}
    public static getHomeTabs() {return App.get().hometabs}
    public static goto(path) {App.framework.props.router.push(path)}

    constructor() {
        this.loadAll()
    }
    public async loadAll(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await this.config.init()
            await this.plugins.load()
        })        
    }

}