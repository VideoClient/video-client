import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const { List, ListItem, Divider, Drawer, Paper, FlatButton } = MaterialUI
import { NavigationFullscreen, ImagePhotoCamera, NavigationFullscreenExit, ImageBrightness2, NotificationSync, 
    NavigationChevronLeft, NavigationChevronRight } from 'material-ui/svg-icons';
const {Box, VBox, Page, Container} = ReactLayout

export class User extends React.Component<any, any> {
    static btn_style = {minWidth: '36px'}
    render() {
        return <VBox>
            <VBox className='left-menu-box' center>
                <Paper className='user-icon' zDepth={2} circle>
                    <img src="img/user.jpg"/>
                </Paper>
                <h2>西风逍遥游</h2>
            </VBox>
            <Box className='left-menu-toolbar' center>
                <FlatButton style={User.btn_style} icon={<NavigationFullscreen/>}/>
                <FlatButton style={User.btn_style} icon={<ImagePhotoCamera/>}/>
                <FlatButton style={User.btn_style} icon={<ImageBrightness2/>}/>
                <FlatButton style={User.btn_style} icon={<NotificationSync/>}/>
            </Box>
        </VBox>
    }
}