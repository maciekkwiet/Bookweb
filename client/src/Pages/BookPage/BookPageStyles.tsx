import styled from 'styled-components';
import { MyBooksWrapper } from '../MyBooksPageStyles';
import { theme } from '../../Theme';

export const Flex = styled.div`
  background: ${theme.backgrounds.darkTransparent};
  box-sizing: border-box;
  min-width: 100%;
  min-height: 100vmax;
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

  @media screen and (max-width: 768px) {
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
    width: 50%;
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
  padding: 2rem 0;

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

export const Stars = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 20%;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0;
    justify-content: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 20%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    width: 70%;
    padding: 0.5rem 0;
  }
`;

export const Description = styled.div`
  padding: 1rem;
`;

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 10% 0 10%;

  @media screen and (max-width: 768px) {
    padding: 0;
    gap: 1rem;
  }
`;

export const ReviewsTitle = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.backgrounds.lightTransparent};
`;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background: ${theme.backgrounds.darkTransparent};
`;

export const AvatarBox = styled.div`
  height: 80%;
  width: 50px;
  padding-left: 50px;

  @media screen and (max-width: 768px) {
    padding-left: 5%;
    height: 50px;
    width: 50px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin: 0;
  padding: 0 15px 0 50px;
  width: 150px;

  @media screen and (max-width: 768px) {
    padding: 0 5% 0;
    width: 70px;
  }
`;

export const WhenAdded = styled.p`
  margin: 0;
  padding: 0 65px 0 50px;
  width: 15%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ReviewText = styled.p`
  margin: 0;
  padding: 1rem;
`;

export const BookPageContainer = styled(MyBooksWrapper)`
  padding:0;
  overflow:hidden;
  margin:7vh auto;
`
