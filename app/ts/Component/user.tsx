import * as React from 'react'
import { List, ListItem, Divider, Drawer, Paper, IconButton } from 'material-ui'
import { FileFolderOpen, NavigationFullscreen, ImagePhotoCamera, NavigationFullscreenExit, ImageBrightness2, NotificationSync, 
    NavigationChevronLeft, NavigationChevronRight, FileCloud } from 'material-ui/svg-icons';
const {Box, VBox, Page, Container} = require('react-layout-components')
import {remote} from 'electron'
import {App} from '../Model/app'
export class User extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }
    open_file() {
        remote.dialog.showOpenDialog({title: '播放本地视频', properties: ['openFile']}, (files) => {
            for (let f of files) {
                let url = 'local://' + f
                console.log('goto: ', url)
                App.goto('/watch/'+encodeURIComponent(url))
            }
        })
    }

    fullscreen() {
        let w = remote.getCurrentWindow()
        w.setFullScreen(!w.isFullScreen())
    }

    render() {
        return <VBox>
            <VBox className='left-menu-box' center>
                <Paper className='user-icon' zDepth={2} circle>
                    <img src="img/user.jpg"/>
                </Paper>
                <h2>西风逍遥游</h2>
            </VBox>
            <Box className='left-menu-toolbar' center>
                <IconButton tooltip='播放本地视频' iconStyle={styles.smallIcon} style={styles.small} onClick={this.open_file}><FileFolderOpen/></IconButton>
                <IconButton tooltip='播放网络视频' iconStyle={styles.smallIcon} style={styles.small} onClick={this.props.open_dialog}><FileCloud/></IconButton>
                <IconButton tooltip='全屏' iconStyle={styles.smallIcon} style={styles.small} onClick={this.fullscreen} ><NavigationFullscreen/></IconButton>
                <IconButton tooltip='截图' iconStyle={styles.smallIcon} style={styles.small} ><ImagePhotoCamera/></IconButton>
                <IconButton tooltip='夜间模式' iconStyle={styles.smallIcon} style={styles.small} ><ImageBrightness2/></IconButton>
                <IconButton tooltip='立即获取最新数据' iconStyle={styles.smallIcon} style={styles.small} ><NotificationSync/></IconButton>
            </Box>
        </VBox>
    }

}

const styles = {
  smallIcon: {
    width: 28,
    height: 28,
  },
  small: {
    width: 36,
    height: 36,
    padding: 4,
  },
};