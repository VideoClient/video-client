import React = require('react')
import {Tabs, Tab, AppBar, Card, CardHeader, CardText} from 'material-ui'
import {Categories, Discovery} from '.'
const {Box, VBox, Page, ScrollView, Container} = require('react-layout-components')
import {ISearchAdapter} from '../Model/res-adapter'
import {Video, VideoCollection} from '../Model/resource'
import {ShowBox} from '../Component/showbox'
import {App} from '../Model'

export class SearchPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.update(props.params.q)
        this.state = {videos: []}
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.q != this.q) {
            this.update(nextProps.params.q)
        }
    }
 
    private q: string
    update(q: string) {
        this.q = q
        App.getCache().loadList(q).then((v) => this.setState({videos: v}))
        .catch(e => {
            App.getResourceLoader().search_show(q, 1).then(v => {
                console.log(v)
                this.setState({videos: v})
                App.getCache().saveList(q, v)
            }).catch(reason => console.log(reason))
        })
    }
    

    render() {
        let shows = []
        for (var vc in this.state.videos) {
            shows.push(<ShowBox key={vc} videos={this.state.videos[vc]} />)
        }
        if (shows.length == 0) shows.push(<h2>努力搜索中...</h2>)
        return <ScrollView fit>
            <div className='content-card'>
                <Card>
                    <CardHeader title="搜索结果"/>
                    <CardText>
                        <Box wrap>
                            {shows}
                        </Box>
                    </CardText>
                </Card> 
            </div>
        </ScrollView>
    }
}