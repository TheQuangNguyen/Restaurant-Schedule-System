import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// Register new employee
export const register = ({
  firstName,
  lastName,
  email,
  password,
  jobPosition
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "applicaton/json"
    }
  };

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    jobPosition
  });

  try {
    const res = await axios.post("/api/employee", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};
