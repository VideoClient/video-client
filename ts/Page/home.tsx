import * as React from 'react'
import {Tabs, Tab, AppBar} from '@mui/material'
const {Box, VBox, Page, Container} = require('react-layout-components')
import {App, HomePageTabs} from '../Model'

export interface IHomePageProps {
    tabname: string
    params: any
    router: any
}

export interface IHomePageStates {
    slideIndex: number
    slideName: string
    tabs: HomePageTabs
}

export class HomePage extends React.Component<IHomePageProps, IHomePageStates> {
    constructor(props: IHomePageProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        let tabname = props.params.tab
        if (tabname == null) tabname = 'categories'
        App.getHomeTabs().onChangeTabs(this.updateTabs.bind(this))
        if (App.getHomeTabs().tabs == null) App.getHomeTabs().loadDefaultTabs()
        this.state = {slideName: tabname, tabs: App.getHomeTabs(), slideIndex: this.map_value(tabname) }
        console.log(this.state.tabs)
    }

    updateTabs() {
        this.setState({tabs: App.getHomeTabs()})
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.tab != this.state.slideName) {
            let tabname = nextProps.params.tab
            this.setState({ slideIndex: this.map_value(tabname), slideName: tabname })
        }
    }

    map_value(name: string):number {
        let t = App.getHomeTabs().getTabs()
        for (let i = 0; i < t.length; ++i)
            if (name == t[i].name)
                return i
        return 0
    }

    handleChange(e :React.SyntheticEvent, value) {
        // this.setState({slideIndex: value, slideName: e.currentTarget.props['data-route']})
        // this.props.router.push("/home/"+tab.props['data-route'])
    }

    static tabs = [
        <Tab key={0} label="分类" data-route="categories" value={0}></Tab>,
        <Tab key={1} label="发现" data-route="discovery" value={1}></Tab>,
        <Tab key={2} label="电影" data-route="movie" value={2}></Tab>,
        <Tab key={3} label="电视剧" data-route="series" value={3}></Tab>,
        <Tab key={4} label="动漫" data-route="animate" value={4}></Tab>,
        <Tab key={5} label="电视" data-route="tv" value={5}></Tab>,
        <Tab key={6} label="直播" data-route="online" value={6}></Tab>
    ]

    tabsRenderer() {
        let tabs = this.state.tabs.getTabs()
        let tab_coms = []
        let num = 0
        for (let i of tabs) {
            tab_coms.push(<Tab key={i.defaultKey} label={i.showName} data-route={i.name} value={num} />) 
            num++
        }
        return tab_coms
    }

    render() {
        //
        return <Container style={{width: '100%'}}><VBox style={{width: '100%', height: '100%'}}>
            <Box flex='none'>
                <Tabs style={{width: '100%'}} onChange={this.handleChange} value={this.state.slideIndex}>
                    {this.tabsRenderer()}
                </Tabs>
            </Box>
            <Box flex='1' fit style={{height: '100%'}}>
                {/* <SwipeableViews style={{height: '100%', width: '100%'}} index={this.state.slideIndex} onChangeIndex={this.handleChange} >
                    {this.state.tabs.getAllComs()}
                </SwipeableViews> */}
            </Box>
        </VBox></Container>
    }
}