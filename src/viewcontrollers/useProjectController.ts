import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  createProjectAction,
  getProjectAction,
  sendInvitationAction,
} from '../redux/actions/project';
import {IProject} from '../types/IProject';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const useProjectController = () => {
  const dispatch: any = useDispatch();
  const navigation: any = useNavigation();
  const [projectRequest, setProjectRequest] = useState<IProject>({
    isPublic: false,
  });
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

  const createProject = async () => {
    if (!projectRequest.description || !projectRequest.title) {
      Toast.show({
        type: 'error',
        text1: "Name and description can't be empty !",
        position: 'top',
      });
    } else {
      const data = await dispatch(createProjectAction(projectRequest));
      if (data) {
        members.forEach(async member => {
          const res = await dispatch(sendInvitationAction(data.id, member));
          if (!res) throw 'error';
        });
        navigation.navigate('ProjectDetails', {projectId: data.id});
        setProjectRequest({});
      }
    }
  };

  const getProject = (projectId: number) => {
    dispatch(getProjectAction(projectId));
  };
  const project = useSelector((state: {project: IProject}) => state.project);
  useEffect(() => {}, []);

  return {
    project,
    member,
    members,
    projectRequest,
    setProjectRequest,
    createProject,
    getProject,
    setMember,
    addMember,
    handleRemoveMember,
  };
};

export default useProjectController;
