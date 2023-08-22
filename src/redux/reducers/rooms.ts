import {IRoom} from '../../types/IRoom';

export default (
  rooms: Array<IRoom> | false = false,
  action: {type: String; payload: any},
) => {
  switch (action.type) {
    case 'Get Rooms':
      return action.payload;
    case 'Set Room':
      if (rooms) {
        const _room = rooms[action.payload.index];
        console.log(_room.members);
        const members = [..._room.members!, action.payload.data];
        return [...rooms, {..._room, members}];
      }
    default:
      return rooms;
  }
};
