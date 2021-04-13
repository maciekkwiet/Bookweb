import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { format } from 'date-fns';

import { BigLabel } from '../../Components/BigLabel/BigLabel';
import StarRating from '../../Components/Star/StarRating';
import { Button } from '../../Components/Button/Button';
// import { Avatar } from '../../Components/Avatar/Avatar';
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
  release_date: string;
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
      const bookResult: any = await axios('http://localhost:8080/api/books/details/' + id);
      const rateResult: any = await axios('http://localhost:8080/api/books/average/' + id);
      const reviewResult: any = await axios('http://localhost:8080/api/reviews/all/' + id);
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
            {/* Wydawnictwa brak na ten moment */}
            {/* <InfoLine>Wydawnictwo: {'getWydawnictwoByBookId'}</InfoLine> */}
            <InfoLine>Data wydania: {format(bookData?.release_date ?? new Date(), 'YYYY-MM-DD')}</InfoLine>
            <InfoLine>Liczba stron: {bookData?.num_pages}</InfoLine>
            <InfoLine>ISBN: {bookData?.isbn}</InfoLine>
            <InfoLine>Srednia ocen: {bookData?.average ?? 0}</InfoLine>
            <Stars>
              {bookData && (
                <StarRating
                  disabled
                  rate={bookData?.average}
                  getNumberOfStars={(e) => {
                    return;
                  }}
                ></StarRating>
              )}
            </Stars>
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
                  {/* Zmienilem avatar component na zwylky ostylownany img */}
                  {/* <Avatar /> */}
                  <Avatar src={review.avatar} />
                </AvatarBox>
                <UserName>{`${review.name} ${review.surname}`}</UserName>
                <WhenAdded>{format(review.added_at, 'YYYY-MM-DD')}</WhenAdded>
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
