import styled from 'styled-components';

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
  font-family: ${(props) => props.theme.fonts.default};
`;

export const AuthorName = styled.h1`
  font-size: 15px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 17px;
`;
