import { useState, useEffect } from 'react'
import { Header } from '../Components/Header/Header';
import { Navbar } from '../Components/Navbar/Navbar';
import { SearchingBar } from '../Components/SearchingBar/SearchingBar';
import { Shelf } from '../Components/Shelf/Shelf';
import { ShelfImage } from '../Components/Shelf/ShelfStyles'
import { ForYouBox } from '../Components/Box/ForYouBox'
import { BoxComponentProps } from '../Components/Box/Box'
import {
  LoggedHomePageWrapper,
  MyBooksWrapper,
  ContentWrapper,
  MyBooksBigLabel,
  AsideBigLabel,
  AsideWrapper,
  ForYouContainer,
  Footer,
} from './LoggedHomePageStyles'

export const LoggedHomePage = () => {

  const handleSubmit = () => { };

  const [forYouBooks, setForYouBooks] = useState<BoxComponentProps[]>([]);

  useEffect(() => {
    loadForYouBooks()
  }, []);

  const loadForYouBooks = async () => {
    const response = await fetch('');
    const data = await response.json();
    setForYouBooks(data);
  }

  return (
    <LoggedHomePageWrapper>
      <Header isLogged={true} />
      <Navbar />
      <SearchingBar onSubmit={handleSubmit} />
      <ContentWrapper>
        <MyBooksWrapper>
          <MyBooksBigLabel title='Moje książki' />
          <Shelf title='Chcę przeczytać' apiUrl='' />
          <Shelf title='Właśnie czytam' apiUrl='' />
          <Shelf title='Przeczytane' apiUrl='' />
        </MyBooksWrapper>
        <AsideWrapper>
          <ShelfImage src={process.env.PUBLIC_URL + '/shelf.png'} />
          <AsideBigLabel title='Polecane dla Ciebie' />
          <ForYouContainer >
            <ForYouBox
              title='Securing DevOps'
              author='Julien Vehent'
              rate={5}
              review='An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps teams highest priority is understanding those risks  ...'
              image='https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg' />
            <ForYouBox
              title='Securing DevOps'
              author='Julien Vehent'
              rate={5}
              review='An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps teams highest priority is understanding those risks  ...'
              image='https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg' />
            <ForYouBox
              title='Securing DevOps'
              author='Julien Vehent'
              rate={5}
              review='An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps teams highest priority is understanding those risks  ...'
              image='https://i.pinimg.com/originals/b8/97/bb/b897bb0a2205457970b91ce831b04756.jpg' />
            {forYouBooks.map(book => (
              <ForYouBox
                key={book.title}
                title={book.title}
                author={book.author}
                rate={book.rate}
                review={book.review}
                image={book.image}
              />

            ))}
          </ForYouContainer>
          <AsideBigLabel title='Aktywność znajomych' />
        </AsideWrapper>
      </ContentWrapper>
      <Footer>&copy; CodersCamp VI BookWeb</Footer>
    </LoggedHomePageWrapper>
  );
};