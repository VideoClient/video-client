import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {FlatButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} = MaterialUI
const {Box, VBox, Page, Container, ScrollView} = ReactLayout

export class Category extends React.Component<any, any> {
    render() {
        return <div>
            
        </div>
    }
}

export class Categories extends React.Component<any, any> {
    render() {
        return <ScrollView>
            <div className='content-card'>
                <Card>
                    <CardHeader
                        title="视频分类大全"
                        actAsExpander={true}
                        showExpandableButton={true}/>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardText expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card> 
            </div>

            <div className='content-card'>
                <Card>
                    <CardHeader
                        title="电影精选"
                        actAsExpander={true}
                        showExpandableButton={true}/>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardText expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card> 
            </div>
        </ScrollView>
    }
}