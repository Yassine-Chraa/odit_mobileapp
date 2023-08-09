import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createProjectAction, getProjectAction} from '../redux/actions/project';
import {IProject} from '../types/IProject';
import {useNavigation} from '@react-navigation/native';

const useProjectController = () => {
  const dispatch: any = useDispatch();
  const navigation: any = useNavigation();
  const [projectRequest, setProjectRequest] = useState<IProject>({
    isPublic: false,
  });

  const createProject = () => {
    dispatch(createProjectAction(projectRequest));
    navigation.navigate('ProjectDetails');
  };
  const getProject = (projectId: number) => {
    dispatch(getProjectAction(projectId));
  };
  const project = useSelector((state: {project: IProject}) => state.project);
  useEffect(() => {
  }, []);

  return {project, projectRequest, setProjectRequest, createProject,getProject};
};

export default useProjectController;
