import React from "react";
// import { useState } from "react";
import Modal from "react-modal";
import './modal.scss'

Modal.setAppElement("#root");

export default function ModalEffect(props) {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
      // Make sure to bind modal
      Modal.setAppElement('#root');

        let subtitle;
 
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color = '#f00';
        }
        
        return (
          <div>
            {/* <button onClick={openModal}>{props.modalHandle }</button> */}
            <Modal
              isOpen={props.show}
              onAfterOpen={afterOpenModal}
              onRequestClose={props.closeModal.bind()}
              style={customStyles}
              contentLabel="my Component Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.modalTitle}</h2>
              <button onClick={props.closeModal.bind()} className='close-modal'>{props.modalCloseButton ?? 'X'}</button>
              <div className="modal__content">{props.children ?? 'wrap the children/content in ModalEffect as children props'}</div>
            </Modal>
          </div>
        );
}
