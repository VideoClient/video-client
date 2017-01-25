import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {Tabs, Tab, AppBar, Card, CardHeader, CardText} = MaterialUI
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = ReactLayout
import { Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video'

export class PlayerPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        let video_id = 'a204f79c5bf211e3b8b7'
    }
 
    render() {
        return <div style={{width: '100%'}}>
            <Video controls autoPlay loop muted
                poster="https://r1.ykimg.com/050C000057708A7767BC3C53950879B3"
                onCanPlayThrough={() => {
                    // Do stuff 
                }}>
                <source src="http://sourcefile.webm" type="video/webm" />
            </Video>
        </div>
    }
}