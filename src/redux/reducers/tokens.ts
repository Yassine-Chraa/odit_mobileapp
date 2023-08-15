import {IUserTokens} from '../../types/IUserTokens';

export default (
  tokens: IUserTokens | false = false,
  action: {type: String; payload: IUserTokens | false},
) => {
  switch (action.type) {
    case 'Set Tokens':
      return action.payload;
    case 'Set Access Token':
      return {...tokens,access_token:action.payload}
    default:
      return tokens;
  }
};
