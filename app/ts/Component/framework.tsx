import {React, ReactLayout, MaterialUI} from '../StdLib/solo-ui'
const {Box, VBox, Page, Container} = ReactLayout
import {LeftMenu} from './left-menu'
import {User} from './user'
const {AppBar, Drawer} = MaterialUI

export class Framework extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    onMenuBtnClick() {
        this.setState({open: true})
    }
    onMenuBackClick() {
        this.setState({open: !this.state.open})
    }
    static drawer_width = 300;
    render() {
        return <Page>
            <Drawer open={this.state.open} width={Framework.drawer_width} containerStyle={{overflow:'visible'}}>
                <User/>
                <LeftMenu open={this.state.open} width={Framework.drawer_width} onBack={this.onMenuBackClick.bind(this)}/>
            </Drawer>
            <AppBar title='主页' onLeftIconButtonTouchTap={this.onMenuBtnClick.bind(this)} />
            <Container>
                {this.props.children}
            </Container>
        </Page>
    }
}