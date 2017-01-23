import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {Tabs, Tab, AppBar} = MaterialUI
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = ReactLayout
import SwipeableViews from 'react-swipeable-views'


export class HomePage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(value: number) {
        this.setState({
            slideIndex: value,
        });
    }
    render() {
        return <div style={{width: '100%'}}>
            <Tabs style={{width: '100%'}} onChange={this.handleChange} value={this.state.slideIndex}>
                <Tab label="分类" data-route="/home/categories" value={0}></Tab>
                <Tab label="发现" data-route="/home/discovery" value={1}></Tab>
                <Tab label="电影" data-route="/home/movie" value={2}></Tab>
                <Tab label="电视剧" data-route="/home/series" value={3}></Tab>
                <Tab label="动漫" data-route="/home/animate" value={4}></Tab>
                <Tab label="电视" data-route="/home/tv" value={5}></Tab>
                <Tab label="直播" data-route="/home/online" value={6}></Tab>
            </Tabs>
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>  
                <Categories/>
                <Discovery/>
                <Discovery/>
                <Discovery/>
                <Discovery/>
                <Discovery/>
                <Discovery/>
            </SwipeableViews>
        </div>
    }
}