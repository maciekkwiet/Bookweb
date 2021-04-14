import styled from 'styled-components';

export const FooterComponent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  background: ${(props) => props.theme.backgrounds.headerAndFooter};
  justify-content: start-flex;
  padding: 2%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    justify-content: center;
  }
`;

export const FooterTitle = styled.span`
  font-family: ${(props) => props.theme.fonts.default};
  font-size: 16px;
  color: ${(props) => props.theme.fonts.primary};
  margin-top: 0%;
  margin-bottom 0;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 10px;
  }
`;
