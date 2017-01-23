import { React, MaterialUI } from '../StdLib/solo-ui'
const { List, ListItem, Divider } = MaterialUI
import { ActionHome, ActionGrade, ActionHistory, FileCloudDownload, ActionSettings } from 'material-ui/svg-icons';

export class LeftMenu extends React.Component<any, any> {
    render() {
        return <div>
            <List>
                <ListItem primaryText="主页" href='#/categories' leftIcon={<ActionHome />} />
                <ListItem primaryText="我的最爱" leftIcon={<ActionGrade />} />
                <ListItem primaryText="历史观看" leftIcon={<ActionHistory />} />
                <ListItem primaryText="离线视频" leftIcon={<FileCloudDownload />} />
            </List>
            <Divider />
            <List>
                <ListItem primaryText="设置" leftIcon={<ActionSettings />} />
            </List>
        </div>
    }
}