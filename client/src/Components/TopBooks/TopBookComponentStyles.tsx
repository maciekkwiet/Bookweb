import styled from 'styled-components';

import { TextCardComponent } from '../TextCard/TextCardStyles';

export const TopBooksDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.backgrounds.bigCardGradient};
  // @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
  //   height: 30vh;
  // }
`;
export const TopBooksComponent = styled(TextCardComponent)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  // @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
  //   height: 30vh;
  // }
`;
export const TopBooksTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.default};
  margin: 2% 7%;
`;

export const TitleDiv = styled.div`
  background: ${(props) => props.theme.backgrounds.lightTransparent};
`;
