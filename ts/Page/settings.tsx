import * as React from 'react'
import {Card, CardHeader, CardContent,Button,TextField,Select,MenuItem, RadioGroup} from '@mui/material'
import {Categories, DiscoveryPage} from '.'
const {Box, VBox, Page, Container} = require('react-layout-components')
import {BrowserWindow} from '@electron/remote';
import {App} from '../Model'

export class SettingsPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {qxd: 2}
    }

    openInNewWindow(path) {
        var win = new BrowserWindow({ width: 800, height: 600 });
        win.loadURL(path);
    }
    
    getDefaultPath():string {
        return App.getConfig().getDefaultVideoPath();
    }

    renderPlugins() {
        // let ps = App.getPlugins().plugins
        // console.log('ps', ps)
        // let ret = []
        // for (let i in ps) {
        //     let p:Plugin = ps[i]
        //     if (p!=null)
        //     ret.push(
        //         <div key={i}> 
        //             <h2>{i}</h2>
        //             <h3>{p.version}</h3>
        //         </div>
        //     )
        // }
        // return ret
    }

    render() {
        return <div style={{width: '100%'}}>
            <div className='content-card'>
                <Card>
                    <CardHeader
                        title="应用基本设置"
                        actAsExpander={true}
                        showExpandableButton={true} />
                    <CardContent>
                        <VBox>
                        <TextField
                            defaultValue={this.getDefaultPath()}
                            label="视频下载路径"
                        />
                        <Select 
                            label="优先选择清晰度"
                            value={this.state.qxd}
                            onChange={((e, i, v)=> this.setState({qxd: v})).bind(this)}
                        >
                            <MenuItem value={1}>标清</MenuItem>
                            <MenuItem value={2}>高清</MenuItem>
                            <MenuItem value={3}>超清</MenuItem>
                        </Select>
                        </VBox>
                    </CardContent>
                    <CardContent>
                        <VBox>
                        <h4>Chrome Info</h4>
                        <Box>
                            <Button onClick={()=>this.openInNewWindow('chrome://gpu')}>GPU info</Button>
                            <Button onClick={()=>this.openInNewWindow('chrome://media-internals/')}>Media</Button>
                        </Box>
                        </VBox>
                    </CardContent>
                </Card> 
            </div>
            <div className='content-card'>
                <Card>
                    <CardHeader 
                        title="扩展程序设置" 
                        actAsExpander={true}
                        showExpandableButton={true} />
                    <CardContent>
                        <VBox>
                            {this.renderPlugins()}
                        </VBox>
                    </CardContent>
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </div>
            <div className='content-card'>
                <Card>
                    <CardContent>
                        <h1>Video Client 多功能视频客户端</h1>
                        <h3>软件版本: v{process.env.npm_package_version}</h3>
                    </CardContent>
                </Card>
            </div>
        </div>
    }
}