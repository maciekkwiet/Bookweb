import styled from 'styled-components';
import { theme } from '../../Theme';

export const Flex = styled.div`
  background: ${theme.backgrounds.bigCardGradient};
  box-sizing: border-box;
  width: 100%;
  height: 100vmax;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  padding-top: 2rem;
`;

export const Description = styled.div`
  display: flex;
  justify-content: stretch;
  padding: 2rem 4rem 0 4rem;
  height: 30%;
`;

export const Rating = styled.div`
  padding: 2rem 4rem 0 4rem;
  display: flex;
`;

export const Text = styled.p`
  margin-right: 1rem;
`;

export const Review = styled.div`
  padding: 2rem 4rem 0 4rem;
  height: 30%;
`;

export const ReviewInput = styled.textarea`
  width: 100%;
  height: 85%;
  padding: 1rem;
  border: solid 1.5px ${theme.colors.lightGray};
  border-radius: 5px;
`;

export const AddReview = styled.div`
  padding: 2rem 4rem 0 4rem;
`;
