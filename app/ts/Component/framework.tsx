import * as React from 'react'
import {LeftMenu} from './left-menu'
import {User} from './user'
import {AppBar, Drawer, MenuItem, TextField, IconButton, Dialog, FlatButton} from 'material-ui'
import {ActionSearch, NavigationArrowBack, NavigationMenu} from 'material-ui/svg-icons'
import {App} from '../Model/app'
const {Box, VBox, Page, Container} = require("react-layout-components")

export class Framework extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {open: false,  hidebar: false, dialog_open: false,
            icon: props.routes[1].path == 'home'? this.menu_icon : this.arrow_icon};
        App.framework = this
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    onMenuBtnClick() {
        if (this.state.icon == this.arrow_icon)
            this.props.router.goBack()
        else
            this.setState({open: true})
    }
    onMenuBackClick() {
        this.setState({open: !this.state.open})
    }
    onSearch(event) {
        if (event.keyCode == 13) {
            let video_name = event.target.value
            this.props.router.push('/search/'+video_name)
        }
    }
    onSearchBarFocus(event) {
        event.target.value = ''
    }
    setHidebar(arg: boolean) {
        this.setState({hidebar: arg})
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.icon === this.menu_icon && nextProps.routes.length>1 && nextProps.routes[1].path != 'home')
            this.setState({icon: this.arrow_icon})
        if (this.state.icon === this.arrow_icon && nextProps.routes.length>1 && nextProps.routes[1].path == 'home')
            this.setState({icon: this.menu_icon})
    }

    arrow_icon= <IconButton><NavigationArrowBack /></IconButton>
    menu_icon= <IconButton><NavigationMenu /></IconButton>
    static hide_appbar = {height: 0};
    static drawer_width = 300;

    private search_box = <Box alignItems='center'>
        <ActionSearch color='#fff'/>
        <TextField  onKeyDown={this.onSearch.bind(this)} 
                    onFocus={ this.onSearchBarFocus }
                    hintText='Search...'/>
    </Box>

    // 弹出对话框, 要求用户输入url
    handleOpen = () => {
        this.setState({dialog_open: true});
    };

    // url 输入结束
    handleClose = () => {
        this.setState({dialog_open: false});
        let text = this.refs['url-input'] as TextField
        if (text.getValue() != '') {
            App.goto('/watch/'+encodeURIComponent(text.getValue()))
        }
    };

    render() {
        const actions = [
        <FlatButton
            label="播放"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
        />,
        ];
        return <Page>
            <Drawer open={this.state.open} width={Framework.drawer_width} containerStyle={{overflow:'visible'}}>
                <User open_dialog={this.handleOpen} />
                <LeftMenu open={this.state.open} width={Framework.drawer_width} onBack={this.onMenuBackClick.bind(this)}/>
            </Drawer>
            <Container fit>
                <VBox fit>
                    <Box flex='none' style={this.state.hidebar ? Framework.hide_appbar : null}>
                        <AppBar title='主页' iconElementLeft={this.state.icon} onLeftIconButtonTouchTap={this.onMenuBtnClick.bind(this)} iconElementRight={this.search_box} />
                    </Box>
                    <Box flex='1' style={{height: '100%'}}>
                        {this.props.children}
                    </Box>
                </VBox>
            </Container>
            <Dialog
                title="您可以直接将网页上观看的视频网址粘贴在此"
                actions={actions}
                modal={false}
                open={this.state.dialog_open}
                onRequestClose={()=> this.setState({dialog_open: false})}>
                
                <TextField ref='url-input' fullWidth floatingLabelText="请输入播放页面的URL" />
            </Dialog>
        </Page>
    }
}