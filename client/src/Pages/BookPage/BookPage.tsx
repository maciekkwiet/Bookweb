import { useEffect, useState } from 'react';
import { Axios } from '../../helpers/axios';
import { useParams, useHistory } from 'react-router-dom';

import { BigLabel } from '../../Components/BigLabel/BigLabel';
import StarRating from '../../Components/Star/StarRating';
import { Button } from '../../Components/Button/Button';
import {
  Flex,
  Title,
  BookInformation,
  Information,
  Cover,
  BookImage,
  Info,
  InfoLine,
  Stars,
  Buttons,
  Description,
  ReviewsTitle,
  Reviews,
  Review,
  UserInfoBox,
  AvatarBox,
  Avatar,
  UserName,
  WhenAdded,
  ReviewText,
} from './BookPageStyles';

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
  reviews?: Array<{
    review_id: number;
    content: string;
    score: number;
    added_at: Date;
    user_id: number;
    avatar: string;
    name: string;
    surname: string;
  }>;
};

export const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<Book>();
  const history = useHistory();

  const handleRouteChange = () => {
    let path = `/addreview/${id}`;
    history.push(path);
  };

  useEffect(() => {
    const fetchData = async () => {
      const bookResult: any = await Axios('/api/books/details/' + id);
      const rateResult: any = await Axios('/api/books/average/' + id);
      const reviewResult: any = await Axios('/api/reviews/all/' + id);
      if (rateResult.data.length > 0) {
        const average = parseInt(rateResult.data[0].rating);
        const { data } = reviewResult;
        setBookData({ ...bookResult.data[0], average, reviews: data });
      } else {
        const { data } = reviewResult;
        setBookData({ ...bookResult.data[0], reviews: data });
      }
    };
    fetchData();
  }, [id]);

  return (
    <Flex>
      <Title>
        <BigLabel title={bookData?.title} />
      </Title>
      <BookInformation>
        <Information>
          <Cover>
            <BookImage src={bookData?.cover} />
          </Cover>
          <Info>
            <InfoLine>{`${bookData?.name ?? ''} ${bookData?.surname ?? ''}`}</InfoLine>
            <InfoLine>
              Data wydania: {bookData?.release_date.toString().slice(0, 10) ?? new Date().toISOString().slice(0, 10)}
            </InfoLine>
            <InfoLine>Liczba stron: {bookData?.num_pages}</InfoLine>
            <InfoLine>ISBN: {bookData?.isbn}</InfoLine>
            <InfoLine>Srednia ocen: {bookData?.average ?? 0}</InfoLine>
            <Stars>{bookData && <StarRating disabled rate={bookData?.average} getNumberOfStars></StarRating>}</Stars>
          </Info>
          <Buttons>
            <Button onClick={() => console.log('dodaj na polke')} children={'Dodaj na polke'}></Button>
            <Button disabled onClick={() => console.log('soonTM')} children={'Sprawdz gdzie zdobyc'}></Button>
            <Button onClick={handleRouteChange} children={'Ocen ksiazke'}></Button>
          </Buttons>
        </Information>
        <Description>
          <p>{bookData?.description}</p>
        </Description>
      </BookInformation>
      {bookData?.reviews && (
        <Reviews>
          <ReviewsTitle>Opinie czytelnikow:</ReviewsTitle>
          {bookData.reviews.map((review) => (
            <Review key={review.review_id}>
              <UserInfoBox>
                <AvatarBox>
                  <Avatar src={review.avatar} />
                </AvatarBox>
                <UserName>{`${review.name} ${review.surname}`}</UserName>
                <WhenAdded>{review.added_at.toString().slice(0, 10)}</WhenAdded>
                <StarRating disabled getNumberOfStars rate={review.score}></StarRating>
              </UserInfoBox>
              <ReviewText>{review.content}</ReviewText>
            </Review>
          ))}
        </Reviews>
      )}
    </Flex>
  );
};
