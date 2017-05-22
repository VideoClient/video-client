import React = require('react')
import {Categories, SubCategories, DiscoveryPage} from '../Page'

export interface HomeTab {
    name: string
    showName: string
    com: JSX.Element
    defaultKey: number
}

export class HomePageTabs {
    regTab(name:string | any, showName?:string, com?:JSX.Element, defaultKey?: number) {
        if (this.tabs == null) this.loadDefaultTabs()
        if (typeof name === 'object') 
            this.tabs.push(name as HomeTab)
        else if (typeof name === 'string')
            this.tabs.push({name: name, showName: showName, com: com, defaultKey: defaultKey})
        this.selfUpdate()
        console.log("reg new Tab", this.tabs)
    }
    getCom(index: number):JSX.Element {
        return this.tabs[index].com
    }
    getAllComs():JSX.Element[] {
        let ret:JSX.Element[] = []
        for (let t of this.tabs) {
            ret.push(t.com)
        }
        return ret
    }
    getTabs() {return this.tabs}
    selfUpdate() {
        if (this.callback != null)
            this.callback(this.tabs)
    }
    onChangeTabs(cb) {this.callback = cb}
    callback: Function = null
    tabs: HomeTab[] = null
    loadDefaultTabs() {
        this.tabs = this.getDefaultTabs()
    }
    getDefaultTabs() {
        return [
            {showName:"分类", name:"categories", com: <Categories key='1' style={{height: '100%'}} />, defaultKey: 1},
            {showName:"发现", name:"discovery", com: <DiscoveryPage key='2' />, defaultKey: 2},
            {showName:"电影", name:"movie", com: <SubCategories key='3' />, defaultKey: 3},
            {showName:"电视剧", name:"series", com: <DiscoveryPage key='4' />, defaultKey: 4},
            {showName:"动漫", name:"animate", com: <DiscoveryPage key='5' />, defaultKey: 5},
            {showName:"电视", name:"tv", com: <DiscoveryPage key='6' />, defaultKey: 6},
            {showName:"直播", name:"online", com: <DiscoveryPage key='7' />, defaultKey: 7}
        ]
    }
}