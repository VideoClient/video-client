import { React, MaterialUI, ReactLayout } from '../StdLib/solo-ui'
const {Tabs, Tab, AppBar} = MaterialUI
import {Categories, Discovery} from '.'
const {Box, VBox, Page, Container} = ReactLayout

export class HomePage extends React.Component<any, any> {
    render() {
        return <Tabs style={{width: '100%'}}>
            <Tab label="分类" data-route="categories"><Categories/></Tab>
            <Tab label="发现" data-route="discovery"><Discovery/></Tab>
        </Tabs>
    }
}