import { REPO_INFO, BRANCHES_INFO, AUTH } from '../constants/constants';

export const INITIAL_STATE = {all: [], branch: [], userName: null}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REPO_INFO:
      if(action.payload.status === 200) {
        return { ...state, all: action.payload.data };
      } else return { ...state };
    case BRANCHES_INFO:
      if(action.payload.status === 200) {
        return { ...state, branch: action.payload.data };
      } else return { ...state };
    case AUTH:
      return {...state, userName: action.payload };
    default:
      return state;
  }
}
