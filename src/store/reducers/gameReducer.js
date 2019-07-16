import { TYPE_UPDATE_GAME } from "../actions/gameAction";

const GameReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case TYPE_UPDATE_GAME:
      return {
        name: payload
      };

    default:
      return state;
  }
};

export default GameReducer;
