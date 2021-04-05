import {
  Wrapper,
  Grid,
  BookTitle,
  BookInfo,
  Text,
  Rating,
  BookReview,
  ReviewButton,
} from '../AddReviewPage/AddReviewStyles';

// const BookDescriptionProps = {
//   image: 'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
//   author: 'Krzysztof Stanowski',
//   releaseDate: '12.02.1020',
//   numberOfPages: '250',
//   isbn: '46546546321',
//   averageRating: '7.5',
// };

const basePropsData = {
  type: 'text',
  placeholder: 'Napisz co myślisz o tej książce....',
};

export const AddReviewPage = ({ title = 'Title' }) => {
  return (
    <Wrapper>
      <Grid>
        <BookTitle title={title}></BookTitle>
        <BookInfo />
        <Text>Twoja ocena</Text>
        <Rating />
        <BookReview {...basePropsData}></BookReview>
        <ReviewButton
          children="Opublikuj"
          onClick={() => {
            return 0;
          }}
        ></ReviewButton>
      </Grid>
    </Wrapper>
  );
};
