import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {Tabs, Tab, AppBar, Card, CardHeader, CardText} = MaterialUI
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = ReactLayout


export class HistoryPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
 
    render() {
        return <div style={{width: '100%'}}>
            <div className='content-card'>
                <Card>
                    <CardHeader title="历史记录"/>
                    <CardText>
                        
                    </CardText>
                </Card> 
            </div>
        </div>
    }
}