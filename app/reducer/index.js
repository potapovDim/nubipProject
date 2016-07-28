const initialState = {
  pageName: 'Home',
}

const reducer = (state = initialState, action)=> {
  const {type}=action
  switch (type) {
    case "SET_USER_NAME":
      return {...state,userName: action.userName}
    case 'SET_PAGE_NAME':
      return {...state, pageName: action.pageName}
    default :
      return state
  }
}

export default reducer