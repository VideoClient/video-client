import React = require('react')
import {Tabs, Tab, AppBar, Card, CardHeader, CardText,FlatButton,TextField,SelectField,MenuItem} from 'material-ui'
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = require('react-layout-components')
import {remote} from 'electron';
import {App} from '../Model/app'

export class SettingsPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {qxd: 2}
    }

    openInNewWindow(path) {
        const BrowserWindow = remote.BrowserWindow;
        var win = new BrowserWindow({ width: 800, height: 600 });
        win.loadURL(path);
    }
    
    getDefaultPath():string {
        return App.getConfig().getDefaultVideoPath();
    }

    render() {
        return <div style={{width: '100%'}}>
            <div className='content-card'>
                <Card>
                    <CardHeader
                        title="应用基本设置"
                        actAsExpander={true}
                        showExpandableButton={true} />
                    <CardText>
                        <VBox>
                        <TextField
                            defaultValue={this.getDefaultPath()}
                            floatingLabelText="视频下载路径"
                        />
                        <SelectField 
                            floatingLabelText="优先选择清晰度"
                            value={this.state.qxd}
                            onChange={((e, i, v)=> this.setState({qxd: v})).bind(this)}
                        >
                            <MenuItem value={1} primaryText="标清" />
                            <MenuItem value={2} primaryText="高清" />
                            <MenuItem value={3} primaryText="超清" />
                        </SelectField>
                        </VBox>
                    </CardText>
                    <CardText expandable={true}>
                        <VBox>
                        <h4>Chrome Info</h4>
                        <Box>
                            <FlatButton onClick={()=>this.openInNewWindow('chrome://gpu')}>GPU info</FlatButton>
                            <FlatButton onClick={()=>this.openInNewWindow('chrome://media-internals/')}>Media</FlatButton>
                        </Box>
                        </VBox>
                    </CardText>
                </Card> 
            </div>
            <div className='content-card'>
                <Card>
                    <CardHeader 
                        title="扩展程序设置" 
                        actAsExpander={true}
                        showExpandableButton={true} />
                    <CardText>
                        <Box>

                        </Box>
                    </CardText>
                    <CardText expandable={true}>
                        
                    </CardText>
                </Card>
            </div>
            <div className='content-card'>
                <Card>
                    <CardText>
                        <h1>Video Client 多功能视频客户端</h1>
                        <h3>软件版本: v{process.env.npm_package_version}</h3>
                        <h3>作者: 西风逍遥游 (sunxfancy@gmail.com)</h3>
                    </CardText>
                </Card>
            </div>
        </div>
    }
}