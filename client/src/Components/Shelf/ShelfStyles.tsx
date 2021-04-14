import styled from 'styled-components';
import { BoxBooksComponent } from '../BoxBooks/BoxBooksStyles';

export const ShelfComponent = styled(BoxBooksComponent)`
display:flex;
flex-wrap:wrap;
 height:auto;
 padding: 30px;
 margin:5vh auto;
`;

export const ShelfTitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-content: flex-end;
  width: 40%;
  margin: 0;
  padding: 30px 0 0 20px;
  font-size: 24px;
  text-align: left;
`;

export const ShelfImage = styled.img`
  background: ${(props) => props.theme.backgrounds.lightTransparent};
  margin: 0 0 30px 30px;
  padding: 0;
  width: 50%;
  border-radius: 10px;
`;
