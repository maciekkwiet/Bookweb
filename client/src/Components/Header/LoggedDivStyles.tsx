import styled from 'styled-components';

export const LogDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1%;
  height: 100%;
`;

export const UserName = styled.span`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.default};
  font-size: 30px;
  line-height: 16px;
  padding: 10%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    display: none;
  }
`;
