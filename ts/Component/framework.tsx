import {React, ReactLayout} from '../StdLib/solo-ui'
const {Box, VBox, Page, Container} = ReactLayout
import {LeftMenu} from './left-menu'

export class Framework extends React.Component<any, any> {
    render() {
        return <Page>
            <Container fit>
                <VBox flex={1}>
                    <img src="img/colorful.jpg" style={{width:"100%"}}/>
                    <LeftMenu/>
                </VBox>
                <Box flex={6}>
                    {this.props.children}
                </Box>
            </Container>
        </Page>
    }
}