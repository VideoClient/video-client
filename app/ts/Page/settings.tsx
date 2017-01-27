import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {Tabs, Tab, AppBar, Card, CardHeader, CardText,FlatButton} = MaterialUI
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = ReactLayout


export class SettingsPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
 
    render() {
        return <div style={{width: '100%'}}>
            <div className='content-card'>
                <Card>
                    <CardHeader
                        title="应用基本设置"
                        actAsExpander={true}
                        showExpandableButton={true} />
                    <CardText>
                        <Box>
                            <FlatButton href='chrome://gpu'>GPU info</FlatButton>
                            <FlatButton href='chrome://media-internals/'>Media</FlatButton>
                            
                        </Box>
                    </CardText>
                    <CardText expandable={true}>
                        
                    </CardText>
                </Card> 
            </div>
        </div>
    }
}