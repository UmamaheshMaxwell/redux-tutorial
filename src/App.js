import React, { Component } from "react";
import "./App.css";
import UPDATE_PERSON from "./store/actions/personAction";
import UPDATE_GAME from "./store/actions/gameAction";
import { FETCH_USERS } from "./store/actions/userAction";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const {
      game,
      person,
      users,
      onPersonClick,
      onGameClick,
      onFetchUsers
    } = this.props;
    return (
      <div className="App">
        <h1>Redux Tutorial</h1>
        <p>
          Person Name: {person.name}
          <button onClick={onPersonClick}>Update Person</button>
        </p>
        <p>
          Game Name: {game.name}
          <button onClick={onGameClick}>Update Game</button>
        </p>
        <p>
          Users:
          <button onClick={onFetchUsers}> Fetch Users</button>
        </p>

        {users.length === 0 ? (
          <p>"No Users Found"</p>
        ) : (
          users.map(user => (
            <p key={user.id}>
              {user.id} - {user.first_name} - {user.email}
            </p>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    game: state.game,
    person: state.person,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonClick: () => {
      dispatch(UPDATE_PERSON);
    },
    onGameClick: () => {
      dispatch(UPDATE_GAME);
    },
    onFetchUsers: () => {
      dispatch(FETCH_USERS);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
