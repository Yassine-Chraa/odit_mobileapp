import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {ITask} from '../types/ITask';
import {ISection} from '../types/ISection';
import {createSectionAction} from '../redux/actions/task';

const useTaskController = () => {
  const dispatch: any = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [showSectionForm, setShowSectionForm] = useState(false);
  const [taskRequest, setTaskRequest] = useState<ITask>({});
  const [sectionRequest, setSectionRequest] = useState<ISection>({});
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
  const createSection = (roomId: number) => {
    dispatch(createSectionAction({...sectionRequest, roomId}));
    setShowSectionForm(false);
  };
  useEffect(() => {}, []);

  return {
    showForm,
    sectionRequest,
    showSectionForm,
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
    setShowSectionForm,
    createSection,
    setSectionRequest,
  };
};

export default useTaskController;
