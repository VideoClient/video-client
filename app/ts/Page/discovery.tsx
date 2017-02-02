import React = require('react')
import {FlatButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui'
const {Box, VBox, Page, Container, ScrollView} = require('react-layout-components')

export class Discovery extends React.Component<any, any> {
    render() {
        return <Box fit style={{background: 'blue'}}>
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
        </Box>
    }
}