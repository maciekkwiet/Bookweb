import styled from 'styled-components';

export const BoxBooksComponent = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.backgrounds.darkTransparent};
  box-shadow: ${(props) => props.theme.shadows.inset};
  width: 45vw;
  height: 30vw;
  border-radius: 25px;
  padding: 30px 50px;
`;

export const BoxBooksTitle = styled.h2`
  margin: 10px 20px;
  padding: 0;
  font-size: 32px;
  text-align: left;
`;

export const BoxBooksParagraph = styled.p`
  margin: 5px 0 0 5px;
  padding: 0;
  font-size: 24px;
  text-align: left;
`;
export const BoxBooksImage = styled.img`
  position: absolute;
  top: 55%;
  left: 8%;
  z-index: 1;
  margin: 30px 0 0 0;
  padding: 0;
  width: 65%;
`;
