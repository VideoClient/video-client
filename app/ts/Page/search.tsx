import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {Tabs, Tab, AppBar, Card, CardHeader, CardText} = MaterialUI
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = ReactLayout
import {YoukuAdapter} from '../Model/Adapter/youku'


export class SearchPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.update(props.params.q)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.q != this.q) {
            this.update(nextProps.params.q)
        }
    }
 
    private q: string
    update(q: string) {
        this.q = q
        this.youku.search_show(q, 1).then(video => {
            
        }).catch(reason => console.log(reason))
    }
    youku = new YoukuAdapter()

    render() {
        return <div style={{width: '100%'}}>
            <div className='content-card'>
                <Card>
                    <CardHeader title="搜索结果"/>
                    <CardText>
                        
                    </CardText>
                </Card> 
            </div>
        </div>
    }
}