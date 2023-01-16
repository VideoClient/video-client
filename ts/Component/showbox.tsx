import * as React from 'react'
import {VideoCollection} from '../Model/resource'
import {Link} from 'react-router-dom'


export interface ShowBoxProps {
    videos: VideoCollection
}

export class ShowBox extends React.Component<ShowBoxProps, any> {
    constructor(props) {
        super(props)
    }
    render() {
        return <Link to={'/watch/'+encodeURIComponent(this.props.videos.url)}  className='show-box'>
            <img src={this.props.videos.poster} alt={this.props.videos.name}/>
            <h4>{this.props.videos.name}</h4>
        </Link>
    }
}