import React = require('react')
import {FlatButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui'
const {Box, VBox, Page, Container, ScrollView} = require('react-layout-components')

export class DiscoveryPage extends React.Component<any, any> {
    render() {
        return <div style={{width: '100%'}}>
            <h1>发现新大陆</h1>
            {/* <div className='content-card'>
                <Card>
                    <CardHeader
                        title="发现新大陆"
                        actAsExpander={true}
                        showExpandableButton={true}/>
                    <CardText>
                        
                    </CardText>
                    <CardText expandable={true}>
                        <Container>
                           
                        </Container>
                    </CardText>
                </Card> 
            </div> */}
        </div>
    }
}