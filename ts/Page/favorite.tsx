import * as React from 'react'
import {Button, Card, CardActions, CardHeader, CardMedia, CardContent} from '@mui/material'

import {Categories, DiscoveryPage} from '.'
const {Box, VBox, Page, Container} = require('react-layout-components')


export class FavoritePage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
 
    render() {
        return <div style={{width: '100%'}}>
            <div className='content-card'>
                <Card>
                    <CardHeader title="收藏的视频"/>
                    
                </Card> 
            </div>
        </div>
    }
}