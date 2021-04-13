import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { RootState } from '../../app/store';
import { Axios } from '../../helpers/axios';
import { format } from 'date-fns';
import { BigLabel } from '../../Components/BigLabel/BigLabel';
import StarRating from '../../Components/Star/StarRating';
import { Button } from '../../Components/Button/Button';
import {
  Flex,
  Title,
  Description,
  Information,
  Cover,
  BookImage,
  Info,
  InfoLine,
  Rating,
  Text,
  Review,
  ReviewInput,
  AddReview,
} from '../AddReviewPage/AddReviewStyles';

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
  const { addToast } = useToasts();
  const history = useHistory();
  // Czy to tak sie uzywa useSelector by pobrac id ze store?
  const userId = useSelector((state: RootState) => state.user.user?.id);

  const handleClick = () => {
    const date = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    const reviewInfo = {
      content: userReview,
      header: 'test',
      score: userStars,
      added_at: date,
      user_id: userId,
      book_id: id,
    };

    Axios.post('http://localhost:8080/api/reviews/', reviewInfo).then(() => {
      history.push('/');
      addToast(`Review added for ${bookData?.title}`, {
        appearance: 'success',
        autoDismiss: true,
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const bookResult: any = await Axios('http://localhost:8080/api/books/details/' + id);
      const rateResult: any = await Axios('http://localhost:8080/api/books/average/' + id);
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
        <Information>
          <Cover>
            <BookImage src={bookData?.cover} />
          </Cover>
          <Info>
            <InfoLine>{`${bookData?.name ?? ''} ${bookData?.surname ?? ''}`}</InfoLine>
            <InfoLine>Data wydania: {format(bookData?.release_date ?? new Date(), 'YYYY-MM-DD')}</InfoLine>
            <InfoLine>Liczba stron: {bookData?.num_pages}</InfoLine>
            <InfoLine>ISBN: {bookData?.isbn}</InfoLine>
            <InfoLine>Srednia ocen: {bookData?.average ?? 0}</InfoLine>
          </Info>
        </Information>
        <Rating>
          <Text>Twoja ocena:</Text>
          <StarRating rate={0} getNumberOfStars={setUserStars} />
        </Rating>
      </Description>
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
