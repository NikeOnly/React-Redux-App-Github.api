import React, {Component} from 'react';
import {
  Header,
  Button,
  Form,
  Grid,
  Menu
} from 'semantic-ui-react';

class MainRepoPage extends Component {
  render() {
    return (
      <Grid centered textAlign='center' padded columns={3}>
        <Grid.Row>
          <Grid.Column width={3}/>
          <Grid.Column width={10}>
            <Menu fluid vertical>
              <Menu.Item className='header'>
                <Header as='h1'>Something like the part of github</Header>

                <Form onSubmit={this.props.onFindRepos}>
                  <Form.Field>
                    <label>Type your github username (github.com/here_it_is)</label>
                    <input placeholder='Repository' value={this.props.repoName} onChange={this.props.handleInput}/>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>

              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={3}/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MainRepoPage;
