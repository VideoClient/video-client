import React = require('react')
import {Tabs, Tab, AppBar, Card, CardHeader, CardText} from 'material-ui'
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = require('react-layout-components')
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';

export class PlayerPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        let video_id = 'a204f79c5bf211e3b8b7'
        this.state = {src: null}
        this.update(this.props.params.v)
    }

    update(v) {
        let url = decodeURIComponent(v)
        if (url.startsWith('local')) this.setState({src: url})
        if (url.endsWith('.mp4') || url.endsWith('webm')) {
            this.setState({src: url})
        } else {
            
        }
    }
 
    render() {
        return <Box fit>
            <Video controls autoPlay style={{height:'auto', width: '100%'}} >
                <source src={this.state.src} />
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