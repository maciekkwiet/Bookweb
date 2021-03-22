import styled from 'styled-components';

import { theme } from '../../Theme';
import { TextCardComponent } from '../TextCard/TextCardStyles';

export const HeaderComponent = styled(TextCardComponent)`
  width: 630px;
  height: 485px;
  border-radius: 25px;
  background: ${(props) => props.theme.backgrounds.darkTransparent};
  text-align: justify;
  padding: 20px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.default};
`;

export const Head = styled.h1`
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
`;

export const HeaderList = styled.ul`
  font-size: 24px;
  line-height: 29px;
  list-style-type: square;
  text-transform: lowercase;
`;
