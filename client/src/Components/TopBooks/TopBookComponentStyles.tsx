import styled from 'styled-components';

import { TextCardComponent } from '../TextCard/TextCardStyles';

export const TopBooksDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.backgrounds.bigCardGradient};
`;
export const TopBooksComponent = styled(TextCardComponent)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3%;
  display: block;
  width: 70vw;
  min-height: 80vh;
  margin: 0px auto;
  padding: 3%;
`;
export const TopBooksTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.default};
  margin: 2% 7%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 25px;
  }
`;

export const TitleDiv = styled.div`
  background: ${(props) => props.theme.backgrounds.lightTransparent};
`;
