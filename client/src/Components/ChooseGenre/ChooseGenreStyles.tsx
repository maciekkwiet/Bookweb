import Select from 'react-select';
import styled from 'styled-components';

import { theme } from '../../Theme';

export const Container = styled.div`
  background-color: red;
  padding: 0.5em;
  text-align: center;
`;
export const SubmitButton = styled.button`
  width: 40%;
  padding: 0.5em;
  border-radius: 5px;
  font-family: ${theme.fonts.default};
`;
export const SelectGenre = styled(Select)`
  font-size: 1em;
  width: 40%;
  margin: 0.5em auto;
`;
