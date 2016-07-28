const initialState = {
  pageName: 'Home',
}

export const reducer = (state = initialState, action)=> {
  const {type}=action
  console.log(state)
  switch (type) {
    case 'FORM_PUMP_TABLE':
      return{...state,pumpTable :action.pumpTable}
    case "SET_USER_NAME":
      return {...state,userName: action.userName}
    case 'SET_PAGE_NAME':
      return {...state, pageName: action.pageName}
    default :
      return state
  }
}
