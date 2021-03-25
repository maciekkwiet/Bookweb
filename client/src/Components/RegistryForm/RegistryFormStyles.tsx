import styled from 'styled-components';



export const RegistrationFormContainer = styled.div`
position:relative;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  font-family:${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.backgrounds.darkTransparent};
  box-shadow: ${(props) => props.theme.shadows.inset};
  width:27vw;
  height:30vw;
  border-radius:25px;
  padding:0 50px;
`;

export const RegistrationFormTitle = styled.h2`
margin:0;
font-size: 24px;
text-align:center;
`;

export const RegistrationInput = styled.input`
width:100%;
font-size:16px;
margin:0 0 40px 0;
box-sizing:border-box;
padding: 0.5em;
border: solid 1.5px ${(props) => props.theme.colors.lightGray};
border-radius: 5px;
`
export const RegistrationButton = styled.button`
align-self:start;
box-sizing:border-box;
font-size:16px;
margin:0;
border-radius:5px;
padding: 0.5em 2em;
border: solid 1.5px ${(props) => props.theme.colors.lightGray};
`

export const RegistrationErrorEmail = styled.div`
color: ${(props) => props.theme.colors.primary};
position:absolute;
left:15%;
top:38%;
font-size:14px;
`
export const RegistrationErrorPassword = styled.div`
color: ${(props) => props.theme.colors.primary};
position:absolute;
left:15%;
top:56%;
font-size:14px;
`
export const RegistrationErrorConfirmPassword = styled.div`
color: ${(props) => props.theme.colors.primary};
position:absolute;
left:15%;
top:73%;
font-size:14px;
`