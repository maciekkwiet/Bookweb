import styled from 'styled-components';
import { BoxBooksComponent } from '../BoxBooks/BoxBooksStyles'

export const ShelfComponent = styled(BoxBooksComponent)`
display:flex;
 height:auto;
 padding: 30px;
`;

export const ShelfTitle = styled.h3`
  display:flex;
  justify-content:flex-start;
  align-content:flex-end;
  width:30%;
  margin: 0;
  padding: 40px 0 0 0;
  font-size: 20px;
  text-align: left;
`;

export const ShelfImage = styled.img`
  background: ${(props) => props.theme.backgrounds.lightTransparent};
  margin: 0 0 0 30px;
  padding: 0;
  width: 50%;
  border-radius:10px;
  
`;