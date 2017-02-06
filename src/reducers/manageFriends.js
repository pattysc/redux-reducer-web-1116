export function manageFriends(state, action){
  if(action.type === 'ADD_FRIEND'){
    return Object.assign({}, state, {friends: state.friends.concat(action.payload)})
  }
  else if(action.type === 'REMOVE_FRIEND'){
    let index = state.friends.findIndex((f) => { return f.id === action.payload})
    let copy = state.friends
    let newarr = copy.slice(0, index).concat(copy.slice(index + 1))

    return Object.assign({}, state, {friends: newarr})
  }else{
    return state
  }
}
