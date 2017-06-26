import React, {Component} from 'react';
import {
  Header,
  Button,
  Form,
  Grid,
  Menu,
  List
} from 'semantic-ui-react';

class MainLoginPage extends Component {
  render() {
    return <Grid centered textAlign='center' padded columns={3}>
      <Grid.Row>
        <Grid.Column width={3}/>
        <Grid.Column width={10}>
          <Menu fluid vertical>
            <Menu.Item className='header'>
              <Header as='h1'>Authorization via github</Header>

              <List>
                <List.Item>
                  <a href='https://github.com/login/oauth/authorize?client_id=101dedae7a6ab3244a70&scope=public_repo'>Login</a>
                </List.Item>
              </List>

            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={3}/>
      </Grid.Row>
    </Grid>
  }
}

export default MainLoginPage;
