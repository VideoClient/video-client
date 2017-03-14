import React = require('react')
import {FlatButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui'
const {Box, VBox, Page, Container, ScrollView} = require('react-layout-components')
import {VideoCollection} from '../Model/resource'
import {App} from '../Model'

export interface IDetailPageProps {
    params: any
    router: any
}

export interface IDetailPageStates {
    title: string
    videos: VideoCollection
}

export class DetailPage extends React.Component<IDetailPageProps, IDetailPageStates> {
    constructor(props: IDetailPageProps) {
        super(props);
        this.state = {title: '', videos: null}
        this.update(decodeURIComponent(props.params.url))
    }

    componentWillUpdate(lastProp, nextProp) {
        let url = decodeURIComponent(nextProp.params.url)
        if (nextProp.params.url && this.state.videos && url != this.state.videos.url) {
            this.update(url)
        }
    }

    update(url: string) {
        App.getCache().check(url).then((vc:VideoCollection) => {
            this.setState({videos: vc})
            
        })
    }

    render() {
        return <div style={{width: '100%'}}>
             <div className='content-card'>
                <Card>
                    <CardHeader
                        title={this.state.title}
                        actAsExpander={true}
                        showExpandableButton={true}/>
                    <CardText>
                        
                    </CardText>
                </Card> 
            </div> 
        </div>
    }
}