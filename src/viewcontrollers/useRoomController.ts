import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {IRoom} from '../types/IRoom';
import {useNavigation} from '@react-navigation/native';
import {addMemberAction, createRoomAction, getRoomAction} from '../redux/actions/room';
import {IProject} from '../types/IProject';
import {IRoomMember} from '../types/IRoomMember';

const useRoomController: (
  type?: 'RoomMembers' | 'default',
  roomMembers?: IRoomMember[],
) => any = (type = 'default', roomMembers = []) => {
  const dispatch: any = useDispatch();
  const navigation: any = useNavigation();
  if (type == 'default') {
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
    const projectMembers = useSelector(
      (state: {project: IProject}) => state.project.members,
    );

    const members = projectMembers?.filter(member => {
      const temp = !roomMembers.find(roomMember => {
        return roomMember.memberId == member.id;
      });
      return temp;
    });
    const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

    const handleRemoveMember = (index: number) => {
      const updatedMembers = [...selectedMembers];
      updatedMembers.splice(index, 1);
      setSelectedMembers(updatedMembers);
    };

    const addMembers = async (roomId: number) => {
      console.log(selectedMembers);
      const res = await dispatch(getRoomAction(roomId))
      console.log(res)
      if(selectedMembers.length <= 0){
        Toast.show({
          type: 'success',
          text1: 'Select a member!',
          position: 'top',
        });
      }else{
        try {
          selectedMembers.forEach(async member => {
            const res = await dispatch(addMemberAction(roomId, member));
            if (!res) throw 'something went wrong !';
          });
          const res = await dispatch(getRoomAction(roomId))
          console.log(res)
         navigation.navigate('RoomDetails',{room:res})
          Toast.show({
            type: 'success',
            text1: 'Members added to the room successfully',
            position: 'top',
          });
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: `something went wrong !`,
            position: 'top',
          });
        }
      }
      
    };
    return {
      members,
      setSelectedMembers,
      handleRemoveMember,
      addMembers,
    };
  }
};

export default useRoomController;
