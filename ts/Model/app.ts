import {Config} from './config'
import {ResourceLoader} from './resource'
import {Framework} from '../Component/framework'
// import {Plugins} from './plugins.ts'
import {HomePageTabs} from './ui'
import {Cache} from './cache'
import {CategoryModel} from './category'

export class App {
    private static instance = new App()
    private config = new Config()
    private resource_loader = new ResourceLoader()
    // private plugins = new Plugins()
    private hometabs = new HomePageTabs()
    private cache = new Cache()
    private category = new CategoryModel()
    public static framework: Framework
    
    public static get() {return App.instance}
    public static getConfig() {return App.get().config}
    public static getResourceLoader() {return App.get().resource_loader}
    public static getFramework() {return App.framework}
    // public static getPlugins() {return App.get().plugins}
    public static getHomeTabs() {return App.get().hometabs}
    public static getCache() {return App.get().cache}
    public static goto(path) {App.framework.props.router.push(path)}
    public static getCategory() {return App.get().category}

    constructor() {
        this.loadAll()
    }
    public async loadAll() {
        await this.config.init()
        this.cache.load()
        // await this.plugins.load()
    }

}