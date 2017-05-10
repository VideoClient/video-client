import React = require('react')
import {FlatButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui'
const {Box, VBox, Page, Container, ScrollView} = require('react-layout-components')
import {Link} from 'react-router'

export class Category extends React.Component<any, any> {
    // 传入一个名字作为参数
    constructor(props) {
        super(props)
        if (Category.path_map[this.props.kind]==null) 
            throw "类别名字错误（无此类）: " + this.props.kind
    }

    render() {
        let arr = Category.path_map[this.props.kind]
        return <Link className='category-box' to={arr[0]}>
            <img src={arr[1]} alt={this.props.kind}/>
            <h4>{this.props.kind}</h4>
        </Link>
    }

    public static path_map = {
        '电影': ['/home/movie', 'img/film.png'],
        '连续剧': ['/home/series', 'img/series.svg'],
        '科技': ['/home/', 'img/science.png'],
        '纪录片': ['/home/', 'img/book.svg'],
        '教育': ['/home/', 'img/education.png'],
        '娱乐': ['/home/', 'img/game.png'],
        '动漫': ['/home/animate', 'img/animate.png'],
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
        let i = 0
        for (let key in Category.path_map) {
            others.push(
                <div key={"other"+(i++)} className='content-card'>
                    <Card>
                        <CardHeader title={key+"精选"}/>
                        <CardText >
                            
                        </CardText>
                    </Card> 
                </div>
            )
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

            {others}

        </ScrollView>
    }
}



export class SubCategories extends React.Component<any, any> {
    
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
                    <CardText>
                        
                    </CardText>
                </Card> 
            </div>)
        }

        return <ScrollView fit style={{width: "100%"}}>
            <div className='content-card'>
                <Card>
                    <CardHeader
                        title="子类别"
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

            {others}

        </ScrollView>
    }
}