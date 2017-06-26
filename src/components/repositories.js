import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {repoInfo} from '../actions/index';
import {connect} from 'react-redux';
import {Header, Container, Grid, List} from 'semantic-ui-react';

class Repositories extends Component {
  renderRepos() {
    return this.props.repos.all.map((repo) => {
      return (
        <List.Item key={repo.id}>
          <List.Icon name='github' size='large' verticalAlign='middle'/>
          <List.Content>
            <List.Header >
              <Link to={`/repositories/${repo.name}`}>{repo.name}</Link>
            </List.Header>
            <List.Description>
              {repo.description}
            </List.Description>
            <List.Description>
              {repo.language}
            </List.Description>
          </List.Content>
        </List.Item>
      );
    });
  }

  renderEmptyRepos() {
    return <List.Item >
      <List.Content>
        <Container textAlign='center'>
          Repository with such name doesn't exist
        </Container>
      </List.Content>
    </List.Item>
  }

  render() {
    let repoList;
    if (this.props.repos.all.length === 0) {
      repoList = this.renderEmptyRepos();
    } else {
      repoList = this.renderRepos();
    }

    return (
      <Grid padded columns={3}>
        <Grid.Row>
          <Grid.Column/>
          <Grid.Column>
            <Header textAlign='center' as='h3'>List of repositories</Header>

            <List divided relaxed>
              {repoList}
            </List>

            <Header textAlign='center' as='h4'>Click on repository to see the branches</Header>

            <Container textAlign='center'>
              <Link to="/">
                Click to main
              </Link>
            </Container>
          </Grid.Column>
          <Grid.Column/>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {repos: state.repos}
}

export default connect(mapStateToProps, {repoInfo})(Repositories);
