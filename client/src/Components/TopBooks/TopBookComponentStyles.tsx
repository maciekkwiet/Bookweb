import styled from 'styled-components';

import { TextCardComponent } from '../TextCard/TextCardStyles';

export const TopBooksDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1%;
  // @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
  //   height: 30vh;
  // }
`;
export const TopBooksComponent = styled(TextCardComponent)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1%;
  // @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
  //   height: 30vh;
  // }
`;
export const TopBooksTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.default};
  margin: 2% 5%;
  font-weight: normal;
  text-decoration: underline;
`;
