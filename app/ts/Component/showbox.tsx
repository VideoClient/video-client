import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const { List, ListItem, Divider, Drawer, Paper, FlatButton } = MaterialUI
import { NavigationFullscreen, ImagePhotoCamera, NavigationFullscreenExit, ImageBrightness2, NotificationSync, 
    NavigationChevronLeft, NavigationChevronRight } from 'material-ui/svg-icons';
const {Box, VBox, Page, Container} = ReactLayout
import {VideoCollection} from '../Model/resource'

export class ShowBox extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.videos = props.videos
    }
    private videos: VideoCollection
    render() {
        return <a className='category-box'>
            <img src={this.videos.poster} alt={this.videos.name}/>
            <h4>{this.videos.name}</h4>
        </a>
    }
}