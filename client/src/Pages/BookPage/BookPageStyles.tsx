import styled from 'styled-components';
import { theme } from '../../Theme';

export const Flex = styled.div`
  background: ${theme.backgrounds.bigCardGradient};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export const Title = styled.div`
  padding-top: 2rem;
`;

export const BookInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 10% 0 10%;
`;

export const Information = styled.div`
  display: flex;
  height: 50%;
`;

export const Cover = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  width: 35%;
  padding: 2rem 0;
  background: red;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  width: 45%;
  padding: 2rem 0;
  background: wheat;
`;

export const InfoLine = styled.p`
  margin: 0;
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 20%;
  background: blanchedalmond;
`;

export const Description = styled.div`
  background: seashell;
  padding: 1rem;
`;

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 10% 0 10%;
`;

export const ReviewTitle = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;

export const Review = styled.div`
  height: 30px;
  width: 100%;
  background: purple;
`;
