import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import PersonReducer from "./reducers/personReducer";
import GameReducer from "./reducers/gameReducer";
import UserReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const InitializeStates = {
  game: { name: "Football" },
  person: { name: "Scott Desatnick", email: "scott.desatnick@ef.com" },
  users: []
};

const allReducers = combineReducers({
  game: GameReducer,
  person: PersonReducer,
  users: UserReducer
});

const middleware = [thunk];
const store = createStore(
  allReducers,
  InitializeStates,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//

export default store;
