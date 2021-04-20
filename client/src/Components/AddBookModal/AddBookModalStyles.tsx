import styled from 'styled-components';
import { theme } from '../../Theme';

export const Flex = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  padding-top: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 7.5%;
`;

export const BookInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: solid 1.5px ${(props) => props.theme.colors.lightGray};
  border-radius: 5px;
  margin: 5px;
`;

export const Label = styled.label`
  padding: 0 5px;
`;

export const BookImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const AddImageInput = styled.input`
  display: none;
`;

export const AddImageLabel = styled.label`
  width: 90%;
  height: 90%;
  background: ${theme.backgrounds.darkTransparent};
  border-radius: 5px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookDescription = styled.textarea`
  margin: 1rem 10%;
  padding: 1rem;
  border-radius: 5px;
  height: 10%;
`;

export const ButtonWrapper = styled.div`
  padding: 1rem 7.5%;
`;
