import React from 'react';
import {ModalPopup} from '../../components';
import PopupSelectedQuestion from './PopupSelectedQuestion';

const ModalSelectedQuestionsScreen = () => {
  return (
    <ModalPopup>
      <PopupSelectedQuestion />
    </ModalPopup>
  );
};

export default ModalSelectedQuestionsScreen;
