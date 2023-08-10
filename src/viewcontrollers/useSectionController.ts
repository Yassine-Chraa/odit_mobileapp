import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ISection} from '../types/ISection';
import {getSectionsAction} from '../redux/actions/task';

const useSectionController = () => {
  const dispatch: any = useDispatch();

  const getSections = (roomId: number) => {
    dispatch(getSectionsAction(roomId));
  };
  const sections = useSelector(
    (state: {sections: ISection[]}) => state.sections,
  );

  useEffect(() => {
  }, []);

  return {sections, getSections};
};

export default useSectionController;
