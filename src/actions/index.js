import axios from 'axios';

import {REPO_INFO, BRANCHES_INFO, AUTH} from '../constants/constants';

const ROOT_URL = 'https://api.github.com';

export function repoInfo(user_name) {
  const request = axios.get(`${ROOT_URL}/users/${user_name}/repos`);

  return {
    type: REPO_INFO,
    payload: request
  }
}

export function branchesInfo(repo_name, user_name) {
  const request = axios.get(`${ROOT_URL}/repos/${user_name}/${repo_name}/branches`);

  return {
    type: BRANCHES_INFO,
    payload: request
  }
}

export function setRepoName(repo_name) {
  return {
    type: AUTH,
    payload: repo_name
  }
}
