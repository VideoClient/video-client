import * as React from "react"
const { Box, Page, Container } = require('react-layout-components')
import { List, ListItem } from 'material-ui/List';
import { ContentInbox, ActionGrade, ContentSend, ContentDrafts } from 'material-ui/svg-icons';

export class Welcome extends React.Component<any, any> {
    render() {
        return <Page>
            <Container fit>
                <Box flex={1} center>
                    <div>
                        <h1 className='logo'>Solo</h1>
                        <h3>Solo is a fast app builder for free.</h3>
                    </div>
                </Box>
                <Box flex={1} center style={{background:'#eee'}}>
                    <List>
                        <ListItem primaryText="New Project" href='#/new' leftIcon={<ContentInbox />} />
                        <ListItem primaryText="Open Project" href='#/app' leftIcon={<ActionGrade />} />
                        <ListItem primaryText="Import from Repository" leftIcon={<ContentSend />} />
                        <ListItem primaryText="Settings" leftIcon={<ContentDrafts />} />
                    </List>
                </Box>
            </Container>
        </Page>
    }
}