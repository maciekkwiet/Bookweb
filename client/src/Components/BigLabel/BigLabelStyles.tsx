import styled from 'styled-components';

export const BigLabelComponent = styled.h2`
  font-family:${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.primary};
  height:2.5em;
  line-height:${(props) => props.theme.h2.lineHeight};
  font-size: ${(props) => props.theme.h2.fontSize};
  background: ${(props) => props.theme.backgrounds.lightTransparent};
  box-shadow: ${(props) => props.theme.shadows.inset};
  text-align:center;
`;
