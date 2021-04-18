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
import { MyBooksPageWrapper } from '../MyBooksPageStyles';
import { Header } from '../../Components/Header/Header';
import { Navbar } from '../../Components/Navbar/Navbar';
import { SearchingBarComponent } from '../../Components/SearchingBar/SearchingBarStyles'
import { Footer } from '../MyBooksPageStyles'
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
  BookPageContainer,
} from '../AddReviewPage/AddReviewStyles';

type Book = {
  id: number;
  isbn: number;
  title: string;
  description?: string;
  release_date: Date;
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
  const userId = useSelector((state: RootState) => state.user.user?.id);

  const handleClick = async () => {
    const date = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    const reviewInfo = {
      content: userReview,
      header: '',
      score: userStars,
      added_at: date,
      user_id: userId,
      book_id: id,
    };

    try {
      await Axios.post('/api/reviews/', reviewInfo);
      history.push('/');
      addToast(`Dodano recenzje dla ${bookData?.title}`, {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (err) {
      addToast(`Nie udało się dodać recenzji dla ${bookData?.title}`, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const bookResult: any = await Axios('/api/books/details/' + id);
      const rateResult: any = await Axios('/api/books/average/' + id);
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
    <MyBooksPageWrapper>
      <Header isLogged={true} />
      <Navbar />
      <SearchingBarComponent />
      <BookPageContainer>
        <Flex>
          <Title>
            <BigLabel title={bookData?.title ?? ' '}></BigLabel>
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
      </BookPageContainer>
      <Footer>&copy; CodersCamp VI BookWeb</Footer>
    </MyBooksPageWrapper>
  );
};
