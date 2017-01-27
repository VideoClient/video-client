import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const { List, ListItem, Divider, Drawer, Paper, FlatButton } = MaterialUI
import { NavigationFullscreen, ImagePhotoCamera, NavigationFullscreenExit, ImageBrightness2, NotificationSync, 
    NavigationChevronLeft, NavigationChevronRight } from 'material-ui/svg-icons';
const {Box, VBox, Page, Container} = ReactLayout
import {Video} from '../Model/resource'

export class ShowBox extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.video = props.video
    }
    private video: Video
    render() {
        return <a className='category-box'>
            <img src={this.video.thumbnail} alt={this.video.name}/>
            <h4>{this.video.name}</h4>
        </a>
    }
}