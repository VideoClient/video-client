import React = require('react')
import { List, ListItem, Divider, Drawer, Paper, FlatButton } from 'material-ui'
import { NavigationFullscreen, ImagePhotoCamera, NavigationFullscreenExit, ImageBrightness2, NotificationSync, 
    NavigationChevronLeft, NavigationChevronRight } from 'material-ui/svg-icons';
const {Box, VBox, Page, Container} = require('react-layout-components')
import {Video} from '../Model/resource'

export interface VideoBoxProps {
    video: Video
}

export class VideoBox extends React.Component<VideoBoxProps, any> {
    constructor(props) {
        super(props)
    }
    render() {
        return <a className='category-box'>
            <img src={this.props.video.thumbnail} alt={this.props.video.name}/>
            <h4>{this.props.video.name}</h4>
        </a>
    }
}