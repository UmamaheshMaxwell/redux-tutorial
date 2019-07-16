import { TYPE_UPDATE_USER } from "../actions/userAction";
import { FETCH_USER } from "../actions/userAction";

const UserReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case TYPE_UPDATE_USER:
      return Object.assign({}, state, { name: payload });
    case FETCH_USER:
      return payload;
    default:
      return state;
  }
};

export default UserReducer;
