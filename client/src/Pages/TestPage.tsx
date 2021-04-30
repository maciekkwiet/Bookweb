import { useState } from 'react';
import { Button } from '../Components/Button/Button';
import { AddBookModal } from '../Components/AddBookModal/AddBookModal';

export const TestPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Button onClick={handleOpenModal} children={'open modal'}></Button>
      <AddBookModal showModal={showModal} setShowModal={setShowModal}></AddBookModal>
    </>
  );
};
