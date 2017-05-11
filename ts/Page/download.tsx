import React = require('react')
import {Tabs, Tab, AppBar, Card, CardHeader, CardText} from 'material-ui'
import {Categories, DiscoveryPage} from '.'
const {Box, VBox, Page, Container} = require('react-layout-components')


export class DownloadPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
 
    render() {
        return <div style={{width: '100%'}}>
            <div className='content-card'>
                <Card>
                    <CardHeader title="下载管理"/>
                    <CardText>
                        
                    </CardText>
                </Card> 
            </div>
        </div>
    }
}