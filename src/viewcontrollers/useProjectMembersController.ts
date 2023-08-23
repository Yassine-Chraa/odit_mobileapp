import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {IMember} from '../types/IMember';

const useProjectMembersController = (project_members: IMember[]) => {
  const dispatch: any = useDispatch();

  const [members, setMembers] = useState<IMember[]>([]);
  const [key, setKey] = useState('');
  const [showClose, setShowClose] = useState(false);

  const search = () => {
    console.log('search...');
    const _members = project_members?.filter(member => {
      const fullName = member.firstName + ' ' + member.lastName;
      const regex = new RegExp(key, 'i');

      return regex.test(fullName);
    });

    if (_members) {
      setMembers(_members);
      setShowClose(true);
    }
  };
  const clear = () => {
    if (project_members) setMembers(project_members);
    setKey('');
    setShowClose(false);
  };
  useEffect(() => {
    if (project_members) setMembers(project_members);
  }, []);
  useEffect(() => {
    if (showClose) setShowClose(false);
  }, [key]);

  return {
    members,
    key,
    showClose,
    setKey,
    search,
    clear,
  };
};

export default useProjectMembersController;
