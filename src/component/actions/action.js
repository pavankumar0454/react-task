import axios from "axios";

export const deleteUsers = () => {
  return {
    type: "DELETE REGISTERED USERS",
  };
};

export const success = (users) => {
  return {
    type: "SUCCESS",
    payload: users,
  };
};

export const unRegisteredDetails = (data) => {
  return {
    type: "UNREGISTERED",
    payload: data,
  };
};

export const membershipDetails = (data) => {
  return {
    type: "MEMBERSHIP DEETAILS",
    payload: data,
  };
};

export const failure = (err) => {
  return {
    type: "FAILURE",
    payload: err,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers")
      .then((res) => {
        const response = res.data;
        dispatch(success(response));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(failure(errorMsg));
      });
  };
};

export const fetchUnRegisteredUsers = () => {
  return (dispatch) => {
    axios
      .get("https://5c3ce12c29429300143fe570.mockapi.io/api/unregisteredusers")
      .then((res) => {
        const response = res.data;
        dispatch(unRegisteredDetails(response));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(failure(errorMsg));
      });
  };
};

export const validateUsers = () => {
  return (dispatch) => {
    axios
      .get("https://5c3ce12c29429300143fe570.mockapi.io/api/projectmemberships")
      .then((res) => {
        const response = res.data;
        dispatch(membershipDetails(response));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(failure(errorMsg));
      });
  };
};
