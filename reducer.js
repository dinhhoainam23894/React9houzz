const reducer = (state = {tick: 'init', tack: 'init', toe: 'init'}, action) => {
  switch (action.type) {
    case 'TICK':
      return {...state, tick: "tick"};
    case 'TACK':
      return {...state, tack: "tack"};
    case 'TOE':
      return {...state, toe: "toe"};
    default:
      return state
  }
};

export default reducer;