import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {Tabs, Tab, AppBar, Card, CardHeader, CardText} = MaterialUI
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = ReactLayout

export class PlayerPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        let video_id = 'a204f79c5bf211e3b8b7'
    }
 
    render() {
        return <div style={{width: '100%'}}>
            <video controls autoPlay style={{height:'98%', width: '100%'}}>
                <source src={decodeURIComponent(this.props.params.v)} type="video/mp4" />
            </video>
        </div>
    }
}