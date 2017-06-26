import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import MainIndex from './components/main_index';
import Repositories from './components/repositories';
import RepoBranches from './components/repo_branches';

export default class Routes extends Component {
  render() {
    return <div>
      <Route exact path='/' component={MainIndex}/>
      <Route exact path="/repositories" component={Repositories}/>
      <Route path="/repositories/:repo_name" component={RepoBranches}/>
    </div>
  }
}
