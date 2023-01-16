import * as React from 'react'
import {Video} from '../Model/resource'

export interface VideoBoxProps {
    video: Video
}

export class VideoBox extends React.Component<VideoBoxProps, any> {
    constructor(props) {
        super(props)
    }
    render() {
        return <a className='category-box'>
            <img src={this.props.video.thumbnail} alt={this.props.video.name}/>
            <h4>{this.props.video.name}</h4>
        </a>
    }
}