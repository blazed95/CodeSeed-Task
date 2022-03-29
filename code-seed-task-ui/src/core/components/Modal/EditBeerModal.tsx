import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BeerInterface } from '../../interfaces/beer.interface';
import Form from '../Form/Form';
import './EditBeerModal.scss';
// import { Wrapper, Header, StyledModal, HeaderText, CloseButton, Content, Backdrop } from './modal.style';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  beer: BeerInterface;
}

export const EditBeerModal: FunctionComponent<ModalProps> = ({ isShown, hide, beer }) => {

  const modalContent = <Form action='UPDATE' beer={beer} hideModal={hide}></Form>;

  const modal = (
    <React.Fragment>
      <div className='backdrop'></div>
      <div className='wrapper'>
        <div className='modal'>
          <div className='header'>
            <div className='header-text'>Update Beer</div>
            <button onClick={hide} className='close-button'>
              X
            </button>
          </div>
          <div className='content'>{modalContent}</div>
        </div>
      </div>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
