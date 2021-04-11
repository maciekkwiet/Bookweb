import { useEffect, useState } from 'react';
import axios from 'axios';

import { BigLabel } from '../../Components/BigLabel/BigLabel';
import StarRating from '../../Components/Star/StarRating';
import { Button } from '../../Components/Button/Button';
import {
  Flex,
  Title,
  BookInformation,
  Information,
  Cover,
  Info,
  InfoLine,
  Stars,
  Buttons,
  Description,
  ReviewTitle,
  Reviews,
  Review,
} from './BookPageStyles';
import { useParams } from 'react-router-dom';

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

export const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<Book>();

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
        <BigLabel title={'placeholder'} />
      </Title>
      <BookInformation>
        <Information>
          <Cover>
            <img src="https://res.cloudinary.com/bookwebproject/image/upload/v1618084797/null_y0y0lg.png" alt="bla" />
          </Cover>
          <Info>
            <InfoLine>{`${bookData?.name} ${bookData?.surname}`}</InfoLine>
            <InfoLine>{'wydaw'}</InfoLine>
            <InfoLine>{'data'}</InfoLine>
            <InfoLine>{'stron'}</InfoLine>
            <InfoLine>{'isbn'}</InfoLine>
            <InfoLine>{'srednia'}</InfoLine>
            <Stars>
              <StarRating getNumberOfStars={(e) => console.log(e)}></StarRating>
            </Stars>
          </Info>
          <Buttons>
            <Button onClick={() => console.log('dodaj na polke')} children={'Dodaj na polke'}></Button>
            <Button onClick={() => console.log('ocen ksiazke')} children={'Ocen ksiazke'}></Button>
          </Buttons>
        </Information>
        <Description>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, corrupti impedit. Dicta enim id pariatur
            perferendis tenetur nobis culpa et iste quo, perspiciatis repudiandae placeat vel magnam, quia tempore
            corrupti? Ex cumque repellat impedit! Voluptates, expedita placeat tempore quasi ad dolorum voluptate
            reiciendis ratione quia possimus eum sed at in aliquam accusantium commodi, eos accusamus cupiditate eveniet
            inventore dolores reprehenderit? Labore molestias quod, explicabo consectetur animi repudiandae corrupti
            placeat hic dicta recusandae ratione eligendi dolorem doloremque eius sunt excepturi voluptatibus facilis
            earum fugit, aperiam eveniet ab porro, modi nisi? Officia. Animi tempora iste eius ipsa ut molestiae
            consectetur, molestias, natus inventore veritatis nam sequi ex placeat pariatur sapiente deserunt. Adipisci
            aliquid ipsa perferendis eos recusandae velit laudantium magnam facere tempora! Dignissimos facere nisi
            modi, ut tenetur quas earum nihil quidem non quia illo aspernatur praesentium assumenda. Repellat laboriosam
            tempore ipsa voluptates, quaerat, odio explicabo repellendus quasi eveniet praesentium maxime doloribus?
          </p>
        </Description>
      </BookInformation>
      <Reviews>
        <ReviewTitle>Opinie czytelnikow:</ReviewTitle>
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </Reviews>
    </Flex>
  );
};
