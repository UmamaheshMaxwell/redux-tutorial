export const TYPE_UPDATE_USER = "UPDATE_USER";
export const FETCH_USER = "FETCH_USER";
const UPDATE_USER = { type: TYPE_UPDATE_USER, payload: "Cricket" };

export const FETCH_USERS = dispatch => {
  fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(response => {
      dispatch({ type: FETCH_USER, payload: response.data });
    });
};

export default UPDATE_USER;
