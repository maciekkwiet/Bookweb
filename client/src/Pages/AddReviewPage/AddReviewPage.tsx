import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { BigLabel } from '../../Components/BigLabel/BigLabel';
import { BookDescription } from '../../Components/BookDescription/BookDescription';
import StarRating from '../../Components/Star/StarRating';
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
import { format } from 'date-fns';

type Book = {
  id: number;
  isbn: number;
  title: string;
  description?: string;
  release_date: string;
  num_pages?: number;
  cover?: string;
  author_id?: number;
  name?: string;
  surname?: string;
  average?: number;
};

export const AddReviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<Book>();
  const [userReview, setUserReview] = useState<string>('');
  const [userStars, setUserStars] = useState<number>(0);
  const history = useHistory();

  const handleClick = () => {
    const date = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    const reviewInfo = {
      content: userReview,
      header: 'test',
      score: userStars,
      added_at: date,
      user_id: 38,
      book_id: id,
    };

    axios.post('http://localhost:8080/api/reviews/', reviewInfo).then(() => {
      history.push('/');
    });
  };
  //token & inter...
  useEffect(() => {
    const fetchData = async () => {
      const bookResult: any = await axios('http://localhost:8080/api/books/details/' + id);
      const rateResult: any = await axios('http://localhost:8080/api/books/average/' + id);
      if (rateResult.data.length > 0) {
        const average = parseInt(rateResult.data[0].rating);
        setBookData({ ...bookResult.data[0], average });
      } else {
        setBookData(bookResult.data[0]);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Flex>
      <Title>
        <BigLabel title={bookData?.title ?? 'Loading...'}></BigLabel>
      </Title>
      <Description>
        <BookDescription
          author={`${bookData?.name ?? ''} ${bookData?.surname ?? ''}`}
          isbn={bookData?.isbn ?? 0}
          releaseDate={format(bookData?.release_date ?? new Date(), 'YYYY-MM-DD')}
          numberOfPages={bookData?.num_pages ?? 0}
          image={
            bookData?.cover ?? 'https://res.cloudinary.com/bookwebproject/image/upload/v1618084797/null_y0y0lg.png'
          }
          averageRating={bookData?.average ?? 0}
        />
      </Description>
      <Rating>
        <Text>Twoja ocena:</Text>
        <StarRating getNumberOfStars={setUserStars} />
      </Rating>
      <Review>
        <ReviewInput
          placeholder="Napisz co myślisz o tej książce...."
          onChange={(e) => setUserReview(e.target.value)}
        ></ReviewInput>
      </Review>
      <AddReview>
        <Button children="Opublikuj" onClick={handleClick}></Button>
      </AddReview>
    </Flex>
  );
};
