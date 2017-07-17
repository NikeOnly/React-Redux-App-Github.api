import { call, put, cancel, takeEvery, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'
import {REPO_INFO, BRANCHES_INFO} from '../constants/constants'

const ROOT_URL = 'https://api.github.com';

//REPOS

const repoInfo = (username) => {
  return axios.get(`${ROOT_URL}/users/${username}/repos`)
  .catch(error => {
    throw error
  })
};

function* getRepoInfo(action) {
  try {
    if (action.payload.user_name) {
      const response = yield call(repoInfo, action.payload.user_name)
      yield put({type: REPO_INFO, payload: response});
    } else {
      yield cancel();
    }
  } catch (error) {
    throw error;
  }
}

// BRANCHES

const branchesInfo = (user_name, repo_name) => {
  return axios.get(`${ROOT_URL}/repos/${user_name}/${repo_name}/branches`)
  .catch(error => {
    throw error
  })
};

function* getBranchesInfo(action) {
  try {
    if (action.payload.user_name && action.payload.repo_name) {
      const response = yield call(branchesInfo, action.payload.user_name, action.payload.repo_name);
      yield put({type: BRANCHES_INFO, payload: response});
    } else {
      yield cancel();
    }
  } catch (error) {
    throw error;
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(REPO_INFO, getRepoInfo),
    takeLatest(BRANCHES_INFO, getBranchesInfo)
  ])
}

export default rootSaga;
