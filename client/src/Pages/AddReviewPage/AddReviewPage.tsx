import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
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

const BookDescriptionProps = {
  image: 'https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg',
  author: 'Krzysztof Stanowski',
  releaseDate: '12.02.1020',
  numberOfPages: '250',
  isbn: '46546546321',
  averageRating: '7.5',
};

export const AddReviewPage = ({ id = '12' }) => {
  //stan dla danych na bcend useState({})
  //<Array<smth>>
  const [bookData, setBookData] = useState([]);

  const [content, setContent] = useState('');
  // const history = useHistory();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userReview = { content };

  //   fetch('http://localhost:8080/reviews/review', {
  //     method: 'POST',
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(userReview),
  //   }).then(() => {
  //     history.push('/')
  //   })
  // }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8080/api/books/' + id);
      setBookData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Flex>
      <Title>
        <BigLabel title={'a'}></BigLabel>
      </Title>
      <Description>
        <BookDescription {...BookDescriptionProps} />
      </Description>
      <Rating>
        <Text>Twoja ocena:</Text>
        <StarRating />
      </Rating>
      <Review>
        <ReviewInput placeholder="Napisz recenzje..." onChange={(e) => setContent(e.target.value)}></ReviewInput>
      </Review>
      <AddReview>
        <Button children="Opublikuj" onClick={() => console.log({ bookData })}></Button>
      </AddReview>
    </Flex>
  );
};

// Zmienic tlo i zmienic szerokosc w description
// Posprawdzac czy nazwy column w tabelach zgadzaja sie z tymi w plikach
