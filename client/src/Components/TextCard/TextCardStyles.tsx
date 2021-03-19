import styled from 'styled-components';
import { theme } from '../../Theme';

export const TextCardComponent = styled.div`
  width: 755px;
  height: 180px;
  box-shadow: ${(props) => props.theme.borders.textCardBoxShadow};
  border-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.textCardRadius};
  background: ${(props) => props.theme.backgrounds.darkTransparent};
  text-align: justify;
  padding: 20px;
  color: ${(props) => props.theme.colors.fontTextCard};
`;

export const AuthorName = styled.h1`
  font-family: ${(props) => props.theme.fonts.default};
  font-weight: ${(props) => props.theme.fonts.normalFontWeight};
  font-style: ${(props) => props.theme.fonts.normalFontStyle};
  font-size: ${(props) => props.theme.fonts.fontSizeAuthorName};
  line-height: ${(props) => props.theme.fonts.fontHeightAuthorName};
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.default};
  font-weight: ${(props) => props.theme.fonts.normalFontWeight};
  font-style: ${(props) => props.theme.fonts.normalFontStyle};
  font-size: ${(props) => props.theme.fonts.fontSizeAuthorDescription};
  line-height: ${(props) => props.theme.fonts.fontHeightAuthorDescription};
`;
