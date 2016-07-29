const initialState = {
  pageName: 'Home',
}

export const reducer = (state = initialState, action)=> {
  const {type}=action
  console.log('this is reducer state')
  console.log(state)
  switch (type) {
    case 'FORM_TABLE':
      return{...state,resultTable :action.data}
    case "SET_USER_NAME":
      return {...state,userName: action.userName}
    case 'SET_PAGE_NAME':
      return {...state, pageName: action.pageName}
    default :
      return state
  }
}
