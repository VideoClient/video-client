import { React, MaterialUI } from '../StdLib/solo-ui'
const { List, ListItem, Divider, Drawer } = MaterialUI
import { ActionHome, ActionGrade, ActionHistory, FileCloudDownload, ActionSettings, 
    NavigationChevronLeft, NavigationChevronRight } from 'material-ui/svg-icons';

export class LeftMenu extends React.Component<any, any> {
    static closeIcon = <NavigationChevronRight />
    static openIcon = <NavigationChevronLeft />
    render() {
        let ss = {}
        if (!this.props.open)
            ss = {marginLeft: this.props.width+10, width: 64, overflow:'hidden'}
        let myUrl = 'local:///home/sxf/%E7%90%85%E7%90%8A%E6%A6%9C%2001.mp4'
        return <div style={ss}>
            <div style={{width: this.props.width}}>
                <List>
                    <ListItem primaryText="主页" href='#/home' leftIcon={<ActionHome />} />
                    <ListItem primaryText="我的收藏" href='#/favorite' leftIcon={<ActionGrade />} />
                    <ListItem primaryText="历史观看" href='#/history' leftIcon={<ActionHistory />} />
                    <ListItem primaryText="离线视频" href='#/download' leftIcon={<FileCloudDownload />} />
                </List>
                <Divider />
                <List>
                    <ListItem primaryText="设置" href='#/settings' leftIcon={<ActionSettings />} />
                    <ListItem primaryText="播放器" href={'#/watch/'+encodeURIComponent(myUrl)} leftIcon={<ActionSettings />} />
                    <ListItem primaryText="隐藏侧边栏" onTouchTap={this.props.onBack} 
                        leftIcon={this.props.open? LeftMenu.openIcon: LeftMenu.closeIcon} />
                </List>
            </div>
        </div>
            
    }
}