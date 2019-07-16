import { TYPE_UPDATE_PERSON } from "../actions/personAction";

const PersonReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case TYPE_UPDATE_PERSON:
      return { name: payload };

    default:
      return state;
  }
};

export default PersonReducer;
