import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProjectsAction} from '../redux/actions/project';
import {IProject} from '../types/IProject';
import {useFocusEffect} from '@react-navigation/native';
import {getTasksAction} from '../redux/actions/task';
import {ITask} from '../types/ITask';

const useHomeController = () => {
  const dispatch: any = useDispatch();

  const getProjects = async () => {
    dispatch(getProjectsAction());
  };
  const getTasks = async () => {
    dispatch(getTasksAction());
  };
  const projects = useSelector(
    (state: {projects: Array<IProject>}) => state.projects,
  );
  const tasks = useSelector((state: {tasks: Array<ITask>}) => state.tasks);

  useEffect(() => {
    getProjects();
    getTasks();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getProjects();
      getTasks();
    }, []),
  );

  return {projects,tasks};
};

export default useHomeController;
