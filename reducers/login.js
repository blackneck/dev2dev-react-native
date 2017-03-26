export default (state = 'sasha', action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return action.username;

    default:
      return state;
  }
};
