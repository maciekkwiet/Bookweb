import {
  Grid,
  BookTitle,
  BookInfo,
  YourRating,
  Text,
  BookReview,
  ReviewButton,
  Cheat,
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
  type: 'text',
  placeholder: 'Napisz co myślisz o tej książce....',
};

export const AddReviewPage = ({ title = 'trza plugnac to pod bekend' }) => {
  return (
    <Grid>
      <BookTitle title={title}></BookTitle>
      <Cheat>
        <BookInfo {...BookDescriptionProps} />
      </Cheat>
      <YourRating>
        <Text>Twoja ocena</Text>
        <StarRating />
      </YourRating>
      <BookReview {...basePropsData}></BookReview>
      <ReviewButton
        children="Opublikuj"
        onClick={() => {
          alert('Buuuu! Nic tu nie ma!');
        }}
      ></ReviewButton>
    </Grid>
  );
};
