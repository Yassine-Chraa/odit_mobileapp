import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {IRoom} from '../types/IRoom';
import {useNavigation} from '@react-navigation/native';
import {createRoomAction} from '../redux/actions/room';
import {IProject} from '../types/IProject';
import {IMember} from '../types/IMember';

const useRoomController: (type?: 'RoomMembers' | 'default') => any = (
  type: 'RoomMembers' | 'default' = 'default',
) => {
  if (type == 'default') {
    const dispatch: any = useDispatch();
    const navigation: any = useNavigation();

    const [roomRequest, setRoomRequest] = useState<IRoom>({});
    const [member, setMember] = useState('');
    const [members, setMembers] = useState<string[]>([]);

    const addMember = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(member)) {
        Toast.show({
          type: 'error',
          text1: 'Enter a Valid Email',
          position: 'top',
        });
        return;
      }
      setMembers([...members, member]);
      setMember('');
    };

    const handleRemoveMember = (index: number) => {
      const updatedMembers = [...members];
      updatedMembers.splice(index, 1);
      setMembers(updatedMembers);
    };

    const createRoom = async (projectId: number) => {
      if (!roomRequest.description || !roomRequest.name) {
        Toast.show({
          type: 'error',
          text1: "Name and description can't be empty !",
          position: 'top',
        });
      } else {
        const data = await dispatch(
          createRoomAction({...roomRequest, projectId}),
        );
        console.log(data);
        if (data) {
          members.forEach(async member => {
            //Todo get memberid by email
            //add member to room
            //const res = await dispatch(sendInvitationAction(data.id, member));
            //if (!res) throw 'error';
          });
          navigation.navigate('Rooms');
          setRoomRequest({});
        }
      }
    };

    useEffect(() => {}, []);

    return {
      member,
      members,
      roomRequest,
      addMember,
      setMember,
      setRoomRequest,
      handleRemoveMember,
      createRoom,
    };
  }
  if (type == 'RoomMembers') {
    const _members = useSelector(
      (state: {project: IProject}) => state.project.members,
    );
    const members = _members?.filter((member)=>{
      //check if is a room member
    })
    const [selectedMembers, setSelectedMembers] = useState<IMember[]>([]);

    const handleRemoveMember = (index: number) => {
      const updatedMembers = [...selectedMembers];
      updatedMembers.splice(index, 1);
      setSelectedMembers(updatedMembers);
    };

    const addMembers = () => {
      for (let i = 0; i < selectedMembers.length; i++) {
        //dispatch addMember
      }
      //if no error go back to room details
    };
    return {
      members,
      selectedMembers,
      setSelectedMembers,
      handleRemoveMember,
    };
  }
};

export default useRoomController;
