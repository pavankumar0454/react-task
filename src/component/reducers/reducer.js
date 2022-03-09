const initialState = {
  users: [],
  unRegisteredUsers: [],
  userMemberships: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "DELETE REGISTERED USERS") {
    return {
      ...state,
      users: [],
      unRegisteredUsers: [],
    };
  }

  if (action.type === "UNREGISTERED") {
    return {
      ...state,
      unRegisteredUsers: action.payload,
    };
  }

  if (action.type === "MEMBERSHIP DEETAILS") {
    const membershipList = action.payload;
    const newArrUsers = [];
    const newArrUnRegistered = [];

       state.users.forEach((item) => {
        const check = membershipList.filter((el) => el.userId === item.id)
        if(check){
            newArrUsers.push({...item, projectId: check[0]?.projectId || []});
        } 
      });

 
    state.unRegisteredUsers.forEach((item) => {
        const check = membershipList.filter((el) => el.userId === item.id)
        if(check){
            newArrUnRegistered.push({ ...item, projectId: check[0]?.projectId || []});
        } 
    })

    return {
      ...state,
      users: newArrUsers,
      unRegisteredUsers: newArrUnRegistered,
      userMemberships: membershipList,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      ...state,
      users: action.payload,
      error: "",
    };
  }

  if (action.type === "FAILURE") {
    return {
      ...state,
      users: [],
      error: action.payload,
    };
  }

  return state;
};

export default reducer;
