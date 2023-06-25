import User from '../../types/User';

export default (
  user: User | false = false,
  action: {type: String; payload: User},
) => {
  switch (action.type) {
    case 'Get Current User':
      return action.payload;
    case 'StoreUser': 
      return action.payload
    default:
      return user;
  }
};
