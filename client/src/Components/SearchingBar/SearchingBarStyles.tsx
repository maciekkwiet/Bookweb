import styled from 'styled-components'
import Input from '../Input/Input'
import { Button } from '../Button/Button'

export const SearchingBarComponent = styled.div`
width:100%;
height:7vh;
font-size:2vh;
background-color:${(props) => props.theme.backgrounds.bright};
display:flex;
align-items:center;
font-family: ${(props) => props.theme.fonts.default};
`

export const SearchingBarInput = styled(Input)`
box-sizing:border-box;
width:40vw;
height:4vh;
padding: 0.2em 1em;
margin:0 0 0 60px;
outline:none;
`

export const SearchingBarButton = styled(Button)`
box-sizing:border-box;
margin:0 0 0 30px;
width:10vw;
height:4vh;
line-height:4vh;
padding: 0 0.5em;
font-size:2vh;
border: solid 1.5px ${(props) => props.theme.colors.lightGray};
border-radius: 5px;
`

