import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import { ITask } from '../types/ITask';

const useTaskController = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [taskRequest, setTaskRequest] = useState<ITask>({});
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

  const closeForm = () => {
    setShowForm(false);
    console.log(showForm);
  };
  const openForm = () => setShowForm(true);

  const createTask = () => {};
  useEffect(() => {}, []);

  return {
    showForm,
    openForm,
    closeForm,
    member,
    members,
    taskRequest,
    addMember,
    setMember,
    setTaskRequest,
    handleRemoveMember,
    createTask,
  };
};

export default useTaskController;
