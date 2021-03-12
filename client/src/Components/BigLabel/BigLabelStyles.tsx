import styled from 'styled-components';

export const BigLabelComponent = styled.h2`
  font-family:${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.primary};
  height:2em;
  line-height:2em;
  font-size: 24px;
  background: ${(props) => props.theme.backgrounds.lightTransparent};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align:center;
`;
