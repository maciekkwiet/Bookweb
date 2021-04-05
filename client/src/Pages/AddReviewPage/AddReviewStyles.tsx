import styled from 'styled-components';
import { theme } from '../../Theme';
import { BigLabel } from '../../Components/BigLabel/BigLabel';
import { BookDescription } from '../../Components/BookDescription/BookDescription';
import { Button } from '../../Components/Button/Button';

export const Grid = styled.div`
  background: ${theme.backgrounds.bigCardGradient};
  box-sizing: border-box;
  width: 100%;
  height: 100vmax;
  padding: 2rem 0;
  display: grid;
  row-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'title title'
    'desc desc'
    'rating .'
    'area area'
    'send .';
`;

export const BookTitle = styled(BigLabel)`
  grid-area: title;
`;

export const Cheat = styled.div`
  grid-area: desc;
  margin: 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookInfo = styled(BookDescription)`
  background: red;
`;

export const YourRating = styled.div`
  grid-area: rating;
  margin: 0 3rem;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin-right: 1rem;
`;

export const BookReview = styled.textarea`
  grid-area: area;
  margin: 0 3rem;
  padding: 1rem;
  border: solid 1.5px ${theme.colors.lightGray};
  border-radius: 5px;
  height: 70%;
`;
export const ReviewButton = styled(Button)`
  grid-area: send;
  margin: 0 3rem;
  height: 2rem;
  width: 50%;
`;
