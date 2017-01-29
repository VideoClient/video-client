

export interface Plugin {
    name: string
    version: string
    init() 
    onActive(store: any):Promise<any>
    onDeactive(store: any):Promise<any>
}

export class Plugins {
    loadAll() {

    }

    saveAll() {

    }
    plugins: Map<string, Plugin>
    
}