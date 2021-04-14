import styled from 'styled-components';

export const RegistrationFormContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.backgrounds.darkTransparent};
  box-shadow: ${(props) => props.theme.shadows.inset};
  width: 35%;
  height: auto;
  border-radius: 25px;
  padding: 50px;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width: 90%;
    margin-top: 2%;
    padding: 10px;
  }
`;

export const RegistrationFormTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 24px;
  text-align: center;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 20px;
  }
`;

export const RegistrationInput = styled.input`
  width: 100%;
  font-size: 14px;
  margin: 0px 0 0 0;
  box-sizing: border-box;
  padding: 0.5em;
  border: solid 1.5px ${(props) => props.theme.colors.lightGray};
  border-radius: 5px;
`;
export const RegistrationButton = styled.button`
  align-self: start;
  box-sizing: border-box;
  font-size: 16px;
  margin: 0px 0 0 0;
  border-radius: 5px;
  padding: 0.5em 2em;
  border: solid 1.5px ${(props) => props.theme.colors.lightGray};
  &:hover {
    box-shadow: 0px 0px 2px #eaeaea;
    color: #333333;
    background: #f7f7f7;
  }
`;

export const RegistrationErrorMessage = styled.div`
  color: red;
  font-size:12px;
  height:2em;
  width:20vw;
  margin 5px 0 0 0;
`;

export const RegistrationDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5em 0em;
  flex-wrap: wrap;
  background: ${(props) => props.theme.backgrounds.mainGradient};
  width: '100%';
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    flex-direction: column;
    padding: 2em 0em;
  }
`;
