import {REPO_INFO, BRANCHES_INFO, AUTH} from '../constants/constants';

export function repoInfo(user_name) {
  return {
    type: REPO_INFO,
    payload: {user_name}
  }
}

export function branchesInfo(repo_name, user_name) {
  return {
    type: BRANCHES_INFO,
    payload: {repo_name, user_name}
  }
}

export function setRepoName(repo_name) {
  return {
    type: AUTH,
    payload: repo_name
  }
}
