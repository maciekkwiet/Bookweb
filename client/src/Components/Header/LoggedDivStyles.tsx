import styled from 'styled-components';

export const LogDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1%;
`;

export const UserName = styled.span`
  text-align: center;
  margin-top: 10%;
  font-family: ${(props) => props.theme.fonts.default};
  font-size: 20px;
  line-height: 16px;
  padding: 4%;
`;
