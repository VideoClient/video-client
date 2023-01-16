import * as React from 'react'
import { List, ListItem,ListItemIcon, Divider } from '@mui/material'
import { Home, Grade, History, CloudDownload, Settings, ChevronLeft, ChevronRight } from '@mui/icons-material';

export class LeftMenu extends React.Component<any, any> {
    static closeIcon = <ChevronRight />
    static openIcon = <ChevronLeft />
    render() {
        let ss = {}
        if (!this.props.open)
            ss = {marginLeft: this.props.width+10, width: 64, overflow:'hidden'}
        return <div style={ss}>
            <div style={{width: this.props.width}}>
                {/* <List>
                    <ListItem href='#/home'><ListItemIcon><Home /></ListItemIcon>主页</ListItem>
                    <ListItem href='#/favorite'><ListItemIcon><Grade /></ListItemIcon>我的收藏</ListItem>
                    <ListItem href='#/history'><ListItemIcon><History /></ListItemIcon>历史观看</ListItem>
                    <ListItem href='#/download'><ListItemIcon><CloudDownload /></ListItemIcon>离线视频</ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem href='#/settings'><ListItemIcon><Settings /></ListItemIcon>设置</ListItem>
                    <ListItem onClick={this.props.onBack}><ListItemIcon>{this.props.open? LeftMenu.openIcon: LeftMenu.closeIcon}</ListItemIcon>隐藏侧边栏</ListItem>
                </List> */}
            </div>
        </div>
            
    }
}