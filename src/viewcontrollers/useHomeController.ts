import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProjectsAction} from '../redux/actions/project';
import {IProject} from '../types/IProject';
import { ITask } from '../types/ITask';

const useHomeController = () => {
  const dispatch: any = useDispatch();

  const projects = useSelector(
    (state: {projects: Array<IProject>}) => state.projects,
  );
  const tasks = useSelector(
    (state: {tasks: Array<ITask>}) => state.tasks,
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
