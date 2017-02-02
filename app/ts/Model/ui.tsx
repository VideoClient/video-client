import React = require('react')
import {Categories, Discovery} from '../Page'

export interface HomeTab {
    name: string
    showName: string
    com: JSX.Element
}

export class HomePageTabs {
    regTab(name:string, showName:string, com:JSX.Element) {
        this.tabs.push({name: name, showName: showName, com: com})
        this.selfUpdate()
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
    tabs: HomeTab[]
    loadDefaultTabs() {
        this.tabs = this.getDefaultTabs()
    }
    getDefaultTabs() {
        return [
            {showName:"分类", name:"categories", com: <Categories key={1} />},
            {showName:"发现", name:"discovery", com: <Discovery key={2} />},
            {showName:"电影", name:"movie", com: <Discovery key={3} />},
            {showName:"电视剧", name:"series", com: <Discovery key={4} />},
            {showName:"动漫", name:"animate", com: <Discovery key={5} />},
            {showName:"电视", name:"tv", com: <Discovery key={6} />},
            {showName:"直播", name:"online", com: <Discovery key={7} />}
        ]
    }
}