import {React, ReactLayout, MaterialUI} from '../StdLib/solo-ui'
const {Box, VBox, Page, Container} = ReactLayout
import {LeftMenu} from './left-menu'
import {User} from './user'
const {AppBar, Drawer, MenuItem, TextField, IconButton} = MaterialUI
import {ActionSearch, NavigationArrowBack, NavigationMenu} from 'material-ui/svg-icons';
import {YoukuAdapter} from '../Model/Adapter/youku'

export class Framework extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {open: false, icon: this.menu_icon};
    }
    onMenuBtnClick() {
        if (this.state.icon == this.arrow_icon)
            this.props.history.goBack()
        else
            this.setState({open: true})
    }
    onMenuBackClick() {
        this.setState({open: !this.state.open})
    }
    onSearch(event) {
        if (event.keyCode == 13) {
            let video_name = event.target.value
            this.youku.search(video_name, 1).then(video => {
                
            }).catch(reason => console.log(reason))
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (this.state.icon === this.menu_icon && nextProps.routes.length>1 && nextProps.routes[1].path != 'home')
            this.setState({icon: this.arrow_icon})
        if (this.state.icon === this.arrow_icon && nextProps.routes.length>1 && nextProps.routes[1].path == 'home')
            this.setState({icon: this.menu_icon})
    }

    arrow_icon= <IconButton><NavigationArrowBack /></IconButton>
    menu_icon= <IconButton><NavigationMenu /></IconButton>
    youku = new YoukuAdapter()
    
    static drawer_width = 300;
    private search_box = <Box alignItems='center'>
        <ActionSearch color='#fff'/>
        <TextField  onKeyDown={this.onSearch.bind(this)} 
                    onFocus={(event)=> event.target.value = '' }
                    hintText='Search...'/>
    </Box>
    render() {
        return <Page>
            <Drawer open={this.state.open} width={Framework.drawer_width} containerStyle={{overflow:'visible'}}>
                <User/>
                <LeftMenu open={this.state.open} width={Framework.drawer_width} onBack={this.onMenuBackClick.bind(this)}/>
            </Drawer>
            <AppBar title='主页' iconElementLeft={this.state.icon} onLeftIconButtonTouchTap={this.onMenuBtnClick.bind(this)} iconElementRight={this.search_box} />
            <Container>
                {this.props.children}
            </Container>
        </Page>
    }
}