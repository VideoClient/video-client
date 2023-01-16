import * as React from 'react'
import {Tabs, Tab, AppBar, Card, CardHeader} from '@mui/material'
import {Categories, DiscoveryPage} from '.'
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

    private player:any

    componentWillReceiveProps(nextProps) {
        if (decodeURIComponent(nextProps.params.v) != this.state.src) {
            this.setState(this.update(nextProps.params.v))
        }
    }

    update(v): any {
        let url = decodeURIComponent(v)
        console.log('url: ', url)
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
            })
            return {src: ''}
        }
    }

    // screenshot for html5video
    screenshot() {
        let canvas = this.refs['cav'] as HTMLCanvasElement
        let ctx = canvas.getContext('2d');
        if (this.refs['video'] != null) {
            let video = (this.refs['video'] as Video).videoEl as HTMLVideoElement
            ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
            console.log(canvas)
        }
    }
 
    // componentDidMount() {
    //     var prebuilt
    //     if (process.platform == 'linux') 
    //         prebuilt = require(path.join(__dirname, '..', '..', '..', 'WCjs', 'WebChimera.js.node'));
    //     else prebuilt = require('wcjs-prebuilt')
    //     console.log(prebuilt)
    //     this.player = new wjs("#player").addPlayer({
    //         autoplay: true,
    //         wcjs: prebuilt
    //     });
    //     console.log(this.state.src)
    //     this.player.addPlaylist(this.state.src);
    // }

    render() {
        // default Html5 player
        let video
        if (this.state.src != null) 
            video = <Video ref='video' controls autoPlay style={{height:'auto', width: '100%'}} >
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
            {video}
        </Box>
    }
}