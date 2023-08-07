import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

const membersLimit = 4;
const useTaskController = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [membersNumber, setMembersNumber] = useState<number>(1);

  const addMoreMembers = () => {
    setMembersNumber((prev: number) => prev + 1);
  };
  const closeForm = () => {
    setShowForm(false)
    console.log(showForm)
  };
  const openForm = () => setShowForm(true);

  useEffect(() => {}, []);

  return {membersNumber, addMoreMembers, membersLimit,showForm, openForm, closeForm};
};

export default useTaskController;
