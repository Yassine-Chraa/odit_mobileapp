import IUser from "../../types/IUser";

export default (
  user: IUser | false = false,
  action: {type: String; payload: IUser | false},
) => {
  switch (action.type) {
    case 'Get Profile':
      return action.payload;
    default:
      return user;
  }
};
