import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {FlatButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} = MaterialUI
const {Box, VBox, Page, Container, ScrollView} = ReactLayout


export class Category extends React.Component<any, any> {
    // 传入一个名字作为参数
    constructor(props) {
        super(props)
        if (Category.path_map[this.props.kind]==null) 
            throw "类别名字错误（无此类）: " + this.props.kind
    }

    render() {
        let arr = Category.path_map[this.props.kind]
        return <a className='category-box' href={arr[1]}>
            <img src={arr[0]} alt={this.props.kind}/>
            <h4>{this.props.kind}</h4>
        </a>
    }

    public static path_map = {
        '电影': ['img/film.png', '#/home/movie'],
        '连续剧': ['img/series.svg', '#/home/series'],
        '科技': ['img/science.png', '#/home/'],
        '纪录片': ['img/book.svg', '#/home/'],
        '教育': ['img/education.png', '#/home/'],
        '娱乐': ['img/game.png', '#/home/'],
        '动漫': ['img/animate.png', '#/home/animate'],
    }
    public static main_categories = ['电影', '连续剧', '动漫', '纪录片']
}

export class Categories extends React.Component<any, any> {
    
    render() {

        let main_cates = []
        for(var name of Category.main_categories) {
            main_cates.push(<Category key={name} kind={name}/>)
        }
        let extend_cates = []
        for(var name in Category.path_map) {
            if (!Category.main_categories.includes(name))
                extend_cates.push(<Category key={name} kind={name}/>)
        }

        let others = []
        for (var i = 0; i < 10; i++) {
            others.push(<div key={"other"+i} className='content-card'>
                <Card>
                    <CardHeader title="电影精选"/>
                    <CardText >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card> 
            </div>)
        }

        return <ScrollView fit>
            <div className='content-card'>
                <Card>
                    <CardHeader
                        title="视频分类大全"
                        actAsExpander={true}
                        showExpandableButton={true}/>
                    <CardText>
                        <Container wrap>
                            {main_cates}
                        </Container>
                    </CardText>
                    <CardText expandable={true}>
                        <Container>
                            {extend_cates}
                        </Container>
                    </CardText>
                </Card> 
            </div>

            <div className='content-card'>
                <Card>
                    <CardHeader title="电影精选"/>
                    <CardText >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card> 
            </div>

            {others}

        </ScrollView>
    }
}