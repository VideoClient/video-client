import React = require('react')
import {Tabs, Tab, AppBar, Card, CardHeader, CardText} from 'material-ui'
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = require('react-layout-components')
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';

export class PlayerPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        let video_id = 'a204f79c5bf211e3b8b7'
    }
 
    render() {
        return <Box fit>
            <Video controls autoPlay style={{height:'100%', width: '100%'}} >
                <source src={decodeURIComponent(this.props.params.v)} type="video/mp4" />

                <Overlay />
                <Controls>
                    <Play />
                    <Seek />
                    <Time />
                    <Mute />
                    <Fullscreen  />
                </Controls>
            </Video>
        </Box>
    }
}