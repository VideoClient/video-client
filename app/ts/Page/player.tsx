import React = require('react')
import {Tabs, Tab, AppBar, Card, CardHeader, CardText} from 'material-ui'
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = require('react-layout-components')
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
import {YouGet} from '../Tools/you-get'

export interface PlayerPageState {
    title: string
    site: string
    origial_url: string
    src: string
    urls: string[]
}

export class PlayerPage extends React.Component<any, PlayerPageState> {
    constructor(props) {
        super(props);
        let video_id = 'a204f79c5bf211e3b8b7'
        this.state = this.update(this.props.params.v)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.url != this.state.src) {
            this.setState(this.update(nextProps.params.url))
        }
    }

    update(v): any {
        let url = decodeURIComponent(v)
        if (url.startsWith('local')) return {src: url}
        if (url.endsWith('.mp4') || url.endsWith('.webm')) {
            return {src: url}
        } else {
            YouGet.get().showJson(url).then((value) => {
                // console.log(value)
                let i = value.lastIndexOf('Real URLs:') + 11
                value = value.substr(i)
                console.log(value)
                let urls = value.split('\n')
                this.setState({urls: urls, src: urls[0]})
                // if (data.streams['webm'] != null) {
                    
                // } else 
                // if (data.streams['mp4'] != null) {
                //     let d = data.streams.mp4
                //     let piece = d.pieces[0]
                //     let paths = []
                //     for (let seg of piece.segs) {
                //         paths.push(seg.path)
                //     }
                //     this.setState({paths: paths, src: paths[0]})
                // }
            })
            return {url: ''}
        }
    }
 
    render() {
        let video
        if (this.state.src != null) 
            video = <Video controls autoPlay style={{height:'auto', width: '100%'}} >
                <source src={this.state.src} />
                <Overlay />
                <Controls>
                    <Play />
                    <Seek />
                    <Time />
                    <Mute />
                    <Fullscreen />
                </Controls>
            </Video>
        return <Box fit>
            { video }
        </Box>
    }
}