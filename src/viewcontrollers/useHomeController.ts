import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProjectsAction} from '../redux/actions/project';
import {IProject} from '../types/IProject';

const useHomeController = () => {
  const dispatch: any = useDispatch();

  const projects = useSelector(
    (state: {projects: Array<IProject>}) => state.projects,
  );
  const getProjects = async () => {
    dispatch(getProjectsAction());
  };
  const getTasks = async () => {
  };

  useEffect(() => {
    getProjects();
    getTasks();
  }, []);

  return {projects};
};

export default useHomeController;
