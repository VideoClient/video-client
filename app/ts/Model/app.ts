import {Config} from './config'
import {ResourceLoader} from './resource'
import {Framework} from '../Component/framework'
export class App {
    private static instance = new App()
    private static config = new Config()
    private static resource_loader = new ResourceLoader()
    public static framework: Framework
    public static get() {return App.instance}
    public static getConfig() {return App.config}
    public static getResourceLoader() {return App.resource_loader}
    public static getFramework() {return App.framework}
    public static goto(path) {App.framework.props.router.push(path)}
}