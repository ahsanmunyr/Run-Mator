import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,UPDATE_USER_DATA,
  SEEN_WALK_THROUGH,
} from '../Actions/actionType';

const INITIAL_STATE = {
  isUserLogin: false,
  isWalkThroughSeen: false,
  userData: null,
  accessToken: '',
};

export function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_SIGNUP:
      console.log('Reducer Data:', action);
      return {
        // ...state,
        userData: {
          username: action.payload.userData.username,
        },
        accessToken: action.payload.accessToken,
        isUserLogin: true,
      };
    case USER_LOGIN:
      return {
        ...state,
        userData: {
          username: action.payload.userData.username,
        },
        accessToken: action.payload.accessToken,
        isUserLogin: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        ...action.payload,
      };
    case SEEN_WALK_THROUGH:
      return {
        ...state,
        ...action.payload,
      };

    case UPDATE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
