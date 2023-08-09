import {IUserTokens} from '../../types/IUserTokens';

export default (
  tokens: IUserTokens | false = false,
  action: {type: String; payload: IUserTokens | false},
) => {
  switch (action.type) {
    case 'Set Tokens':
      return action.payload;
    default:
      return tokens;
  }
};
