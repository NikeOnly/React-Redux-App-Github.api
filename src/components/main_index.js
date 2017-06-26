import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setRepoName, repoInfo} from '../actions/index';
import MainLoginPage from './main_login_page'
import MainRepoPage from './main_repo_page'

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}

class MainIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repoName: ''
    }
  }

  onFindRepos(e) {
    e.preventDefault();

    this.props.repoInfo(this.state.repoName)
    this.props.history.push({pathname: '/repositories'})
  }

  handleInput(event) {
    this.setState({repoName: event.target.value})
    this.props.setRepoName(event.target.value)
  }

  render() {
    const access = getUrlVars();
    const mainPage = !access.code
      ? <MainLoginPage/>
      : <MainRepoPage
          onFindRepos={this.onFindRepos.bind(this)}
          repoName={this.state.repoName}
          handleInput={this.handleInput.bind(this)}
        />        

    return <div>
      {mainPage}
    </div>
  }
}

function mapStateToProps(state) {
  return {repos: state.repos}
}

export default connect(mapStateToProps, {setRepoName, repoInfo})(MainIndex);
