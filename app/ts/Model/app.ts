import {Config} from './config'
import {ResourceLoader} from './resource'

export class App {
    private static instance = new App()
    private static config = new Config()
    private static resource_loader = new ResourceLoader()
    public static get() {return App.instance}
    public static getConfig() {return App.config}
    public static getResourceLoader() {return App.resource_loader}
}