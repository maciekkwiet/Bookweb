import styled from 'styled-components';
import { theme } from '../../Theme';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.backgrounds.lightTransparent};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 768px;
  background: ${theme.backgrounds.mainGradient};
  border-radius: 25px;
  z-index: 15;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: relative;
  left: 90%;
  width: 32px;
  height: 32px;
  padding-top: 1rem;
  z-index: 15;
`;
