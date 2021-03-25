import styled from 'styled-components';
import { theme } from '../../Theme';

export const TextCardComponent = styled.div`
  width: 755px;
  height: 180px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  background: ${(props) => props.theme.backgrounds.darkTransparent};
  text-align: justify;
  padding: 20px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const AuthorName = styled.h1`
  font-family: ${(props) => props.theme.fonts.default};
  font-size: 15px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.default};
  font-size: 14px;
  line-height: 17px;
`;
