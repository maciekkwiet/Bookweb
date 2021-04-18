import styled from 'styled-components';
import { MyBooksWrapper } from '../MyBooksPageStyles';
import { theme } from '../../Theme';

export const Flex = styled.div`
  background: ${theme.backgrounds.darkTransparent};
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  padding-top: 2rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 15% 0 15%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
`;

export const Information = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Cover = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  width: 35%;
  padding: 2rem 0;
  @media screen and (max-width: 768px) {
    width: 40%;
    padding: 0.5rem;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7%;
  width: 45%;
  padding: 2rem 0 2rem 2rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0.5rem;
  }
`;

export const InfoLine = styled.p`
  margin: 0;
  padding-left: 20%;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0;
    text-align: center;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Text = styled.p`
  margin-right: 1rem;
`;

export const Review = styled.div`
  padding: 2rem 15% 0 15%;
  height: 200px;
`;

export const ReviewInput = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: solid 1.5px ${theme.colors.lightGray};
  border-radius: 5px;
`;

export const AddReview = styled.div`
  padding: 2rem 15% 0 15%;
`;

export const BookPageContainer = styled(MyBooksWrapper)`
padding:0;
overflow:hidden;
margin:7vh auto;

`;
