import { useRef } from 'react';
import { Background, CloseModalButton, ModalWrapper } from './ModalStyles';

export const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <CloseModalButton aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
            {children}
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
