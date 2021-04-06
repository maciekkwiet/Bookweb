import { BigLabel } from '../../Components/BigLabel/BigLabel';
import { BookDescription } from '../../Components/BookDescription/BookDescription';
import { Button } from '../../Components/Button/Button';
import {
  Flex,
  Title,
  Description,
  Rating,
  Text,
  Review,
  ReviewInput,
  AddReview,
} from '../AddReviewPage/AddReviewStyles';
import StarRating from '../../Components/Star/StarRating';

const BookDescriptionProps = {
  image: 'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
  author: 'Krzysztof Stanowski',
  releaseDate: '12.02.1020',
  numberOfPages: '250',
  isbn: '46546546321',
  averageRating: '7.5',
};

const basePropsData = {
  placeholder: 'Napisz co myślisz o tej książce....',
};

export const AddReviewPage = ({ title = 'trza plugnac to pod bekend' }) => {
  return (
    <Flex>
      <Title>
        <BigLabel title={title}></BigLabel>
      </Title>
      <Description>
        <BookDescription {...BookDescriptionProps} />
      </Description>
      <Rating>
        <Text>Twoja ocena:</Text>
        <StarRating />
      </Rating>
      <Review>
        <ReviewInput {...basePropsData}></ReviewInput>
      </Review>
      <AddReview>
        <Button
          children="Opublikuj"
          onClick={() => {
            alert('Buuuu! Nic tu nie ma!');
          }}
        ></Button>
      </AddReview>
    </Flex>
  );
};
