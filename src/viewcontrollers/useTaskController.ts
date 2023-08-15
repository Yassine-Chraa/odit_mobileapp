import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {ITask} from '../types/ITask';
import {createTaskAction, getSectionsAction} from '../redux/actions/task';

const useTaskController = () => {
  const dispatch: any = useDispatch();
  const [taskRequest, setTaskRequest] = useState<ITask>({});
  const [member, setMember] = useState('');
  const [members, setMembers] = useState<string[]>([]);
  const [sectionId, setSectionId] = useState<string>('');

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
  const createTask = async (roomId: number) => {
    if (taskRequest.name && taskRequest.description) {
      if (taskRequest.name.length < 4) {
        Toast.show({
          type: 'error',
          text1: `Task name must be at least 3 characters long !!`,
          position: 'top',
        });
        return false;
      }
    } else {
      Toast.show({
        type: 'error',
        text1: `task name and description are required !`,
        position: 'top',
      });
      return false;
    }
    if (sectionId == '') {
      Toast.show({
        type: 'error',
        text1: `select a section !`,
        position: 'top',
      });
      return false;
    }
    if (
      taskRequest.startDate &&
      taskRequest.deadline &&
      taskRequest.startDate >= taskRequest.deadline
    ) {
      Toast.show({
        type: 'error',
        text1: `start date must be before deadline !`,
        position: 'top',
      });
      return false;
    }

    await dispatch(createTaskAction({...taskRequest, sectionId}, roomId));
    setTaskRequest({});
    return true;
  };

  useEffect(() => {}, []);

  return {
    member,
    members,
    sectionId,
    taskRequest,
    addMember,
    setMember,
    setTaskRequest,
    handleRemoveMember,
    createTask,
    setSectionId,
  };
};

export default useTaskController;
