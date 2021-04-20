import { Background, CloseModalButton, ModalWrapper } from './ModalStyles';

export const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper>
            {children}
            <CloseModalButton aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
