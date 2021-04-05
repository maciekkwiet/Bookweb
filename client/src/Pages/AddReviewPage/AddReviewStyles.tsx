import styled from 'styled-components';
import { theme } from '../../Theme';
import { BigLabel } from '../../Components/BigLabel/BigLabel';
// import { BookDescription } from '../../Components/BookDescription/BookDescription'
import StarRating from '../../Components/Star/StarRating';
import { Button } from '../../Components/Button/Button';

export const Wrapper = styled.div`
  background: ${theme.backgrounds.mainGradient};
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 1rem 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'title title title title'
    'desc desc desc desc'
    'text star . .'
    'area area area area'
    'send . . .';
`;

export const BookTitle = styled(BigLabel)`
  grid-area: title;
`;

export const BookInfo = styled.div`
  grid-area: desc;
  width: 100%;
  height: 30vh;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: text;
`;

export const Rating = styled(StarRating)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: star;
`;

export const BookReview = styled.textarea`
  grid-area: area;
  height: 30vh;
  margin: 2rem;
  padding: 1rem;
  border: solid 1.5px ${(props) => props.theme.colors.lightGray};
  border-radius: 5px;
`;
export const ReviewButton = styled(Button)`
  margin-left: 2rem;
  grid-area: send;
`;
