import React, {Component} from 'react';
import {connect} from 'react-redux';
import {branchesInfo} from '../actions/index';
import {Link} from 'react-router-dom';
import {
  Header,
  Button,
  Form,
  Grid,
  Menu,
  List
} from 'semantic-ui-react';

class RepoBranches extends Component {
  componentWillMount() {
    this.props.branchesInfo(this.props.match.params.repo_name, this.props.repos.userName);
  }

  renderBranches() {
    return this.props.repos.branch.map((branch) => {
      return (
        <List.Item key={branch.name}>
          <List.Content>
            <List.Description>
              {branch.name}
            </List.Description>
          </List.Content>
        </List.Item>

      );
    });
  }

  render() {
    return (
      <Grid centered textAlign='center' padded columns={3}>
        <Grid.Row>
          <Grid.Column/>
          <Grid.Column>
            <Header as='h3'>Branches of {this.props.match.params.repo_name}</Header>

            <List divided relaxed>
              {this.renderBranches()}
            </List>

            <List>
              <List.Item>
                <Link to="/repositories">
                  To repositories
                </Link>
              </List.Item>
              <List.Item>
                <Link to="/">
                  Click to main</Link>
              </List.Item>
            </List>

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

export default connect(mapStateToProps, {branchesInfo})(RepoBranches);
