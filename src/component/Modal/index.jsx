import React, { useState } from "react";
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
      
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root');

        let subtitle;
        const [modalIsOpen, setIsOpen] = useState(false);
      
        function openModal() {
          setIsOpen(!modalIsOpen);
        }
      
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color = '#f00';
        }
      
        function closeModal() {
          setIsOpen(!modalIsOpen);
        }
      
        return (
          <div>
            <button onClick={openModal}>{props.modalHandle ?? 'click'}</button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="my Component Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.modalTitle ?? 'pass in modalTitle as props'}</h2>
              <button onClick={closeModal}>{props.modalCloseButton ?? 'X'}</button>
              <div>{props.children ?? 'wrap the children/content in ModalEffect as children props'}</div>
            </Modal>
          </div>
        );
}
