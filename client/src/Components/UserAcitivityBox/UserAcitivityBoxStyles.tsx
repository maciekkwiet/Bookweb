import styled from 'styled-components';

import { TextCardComponent } from '../TextCard/TextCardStyles';

export const ActivityBox = styled(TextCardComponent)`
  display: flex;
  flex-direction: column;
  width: 32%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width: 35%;
    height: auto;
  } ;
`;
export const RatingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    padding: 0;
    flex-direction: column;
  }
  @media only screen and (max-width: ${(props) => props.theme.size.lg}) {
    flex-direction: column;
  } ;
`;

export const ActivityTitle = styled.span`
  margin: 2px 0 0 0;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  color: black;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 12px;
  } ;
`;
