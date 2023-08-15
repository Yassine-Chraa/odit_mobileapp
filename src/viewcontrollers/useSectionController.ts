import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ISection} from '../types/ISection';
import {createSectionAction, getSectionsAction} from '../redux/actions/task';

const useSectionController = () => {
  const dispatch: any = useDispatch();
  const [sectionRequest, setSectionRequest] = useState<ISection>({});
  const [showSectionForm, setShowSectionForm] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const getSections = (roomId: number) => {
    dispatch(getSectionsAction(roomId));
  };
  const sections = useSelector(
    (state: {sections: ISection[]}) => state.sections,
  );
  const createSection = (roomId: number) => {
    dispatch(createSectionAction({...sectionRequest, roomId}));
    setShowSectionForm(false);
    setSectionRequest({});
  };
  useEffect(() => {
    
  }, []);

  return {
    sections,
    showForm,
    getSections,
    sectionRequest,
    showSectionForm,
    setShowSectionForm,
    createSection,
    setSectionRequest,
    setShowForm
  };
};

export default useSectionController;
