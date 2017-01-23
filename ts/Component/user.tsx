import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const { List, ListItem, Divider, Drawer, Paper } = MaterialUI
import { ActionHome, ActionGrade, ActionHistory, FileCloudDownload, ActionSettings, 
    NavigationChevronLeft, NavigationChevronRight } from 'material-ui/svg-icons';
const {Box, VBox, Page, Container} = ReactLayout

export class User extends React.Component<any, any> {
    render() {
        return <div>
            <VBox className='left-menu-box' center>
                <Paper className='user-icon' zDepth={2} circle>
                    <img src="img/user.jpg"/>
                </Paper>
                <h2>西风逍遥游</h2>
            </VBox>
            <Box className='left-menu-toolbar' center></Box>
        </div>
    }
}