import User from '../../types/User';

export default (
  user: User | false = false,
  action: {type: String; payload: User},
) => {
  switch (action.type) {
    default:
      return user;
  }
};
