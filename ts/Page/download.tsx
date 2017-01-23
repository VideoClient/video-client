import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {Tabs, Tab, AppBar} = MaterialUI
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = ReactLayout


export class DownloadPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
 
    render() {
        return <div style={{width: '100%'}}>
            <h1>下载管理</h1>
        </div>
    }
}