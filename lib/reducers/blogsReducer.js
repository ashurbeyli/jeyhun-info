const initState = {
  data: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_BLOGS_DATA' :
      return {...state, data: action.data};
    default :
      return state;
  }
};