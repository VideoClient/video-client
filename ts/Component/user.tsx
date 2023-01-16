import * as React from 'react'
import { List, ListItem, Divider, Drawer, Paper, IconButton } from '@mui/material'
import { FolderOpen, Fullscreen, PhotoCamera, FullscreenExit, Brightness2, Sync, Cloud } from '@mui/icons-material';
const {Box, VBox, Page, Container} = require('react-layout-components')
import {dialog, getCurrentWindow} from '@electron/remote'
import {App} from '../Model/app'
export class User extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }
    open_file() {
        // dialog.showOpenDialog({title: '播放本地视频', properties: ['openFile']}, (files) => {
        //     for (let f of files) {
        //         let url = 'local://' + f
        //         console.log('goto: ', url)
        //         App.goto('/watch/'+encodeURIComponent(url))
        //     }
        // })
    }

    fullscreen() {
        let w = getCurrentWindow()
        w.setFullScreen(!w.isFullScreen())
    }

    render() {
        return <VBox>
            {/* <VBox className='left-menu-box' center>
                <Paper className='user-icon' zDepth={2} circle>
                    <img src="img/user.jpg"/>
                </Paper>
                <h2>西风逍遥游</h2>
            </VBox>
            <Box className='left-menu-toolbar' center>
                <IconButton tooltip='播放本地视频' iconStyle={styles.smallIcon} style={styles.small} onClick={this.open_file}><FolderOpen/></IconButton>
                <IconButton tooltip='播放网络视频' iconStyle={styles.smallIcon} style={styles.small} onClick={this.props.open_dialog}><Cloud/></IconButton>
                <IconButton tooltip='全屏' iconStyle={styles.smallIcon} style={styles.small} onClick={this.fullscreen} ><Fullscreen/></IconButton>
                <IconButton tooltip='截图' iconStyle={styles.smallIcon} style={styles.small} ><PhotoCamera/></IconButton>
                <IconButton tooltip='夜间模式' iconStyle={styles.smallIcon} style={styles.small} ><Brightness2/></IconButton>
                <IconButton tooltip='立即获取最新数据' iconStyle={styles.smallIcon} style={styles.small} ><Sync/></IconButton>
            </Box> */}
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