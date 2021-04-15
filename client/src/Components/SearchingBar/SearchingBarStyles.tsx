import styled from 'styled-components';

export const SearchingBarComponent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7vh;
  font-size: 2vh;
  background-color: ${(props) => props.theme.backgrounds.bright};
  font-family: ${(props) => props.theme.fonts.default};
`;
export const SearchingBarForm = styled.form`
  margin-left: 25%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SearchingBarInput = styled.input`
  box-sizing: border-box;
  width: 40vw;
  height: 4vh;
  padding: 0.2em 1em;
  margin: 0 0 0 60px;
  outline: none;
  border-radius: 5px;
`;

export const SearchingBarButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 0 30px;
  width: 10vw;
  height: 4vh;
  line-height: 4vh;
  padding: 0 0.5em;
  font-size: 2vh;
  border: solid 1.5px ${(props) => props.theme.colors.lightGray};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 2px #eaeaea;
    color: #333333;
    background: #f7f7f7;
  }

  &:active {
    box-shadow: inset 1px 1px 1px #dfdfdf;
  }
`;
