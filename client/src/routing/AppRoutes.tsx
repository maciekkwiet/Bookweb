import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { RegisterPage } from '../Pages/RegisterPage';
import { AppRoute } from './AppRoute.enum';
import { HomePage } from '../Pages/HomePage';
import { MyBooksPage } from '../Pages/MyBooksPage';
import { RankingPage } from '../Pages/RankingPage';
import { AuthorPage } from '../Pages/AuthorPage';
import { BookPage } from '../Pages/BookPage/BookPage';
import { BooksCatalogPage } from '../Pages/BooksCatalogPage';
import { ProvidersCatalogPage } from '../Pages/ProvidersCatalogPage';
import { AddNewBookPage } from '../Pages/AddNewBookPage';
import { AddReviewPage } from '../Pages/AddReviewPage/AddReviewPage';
import { LoggedHomePage } from '../Pages/LoggedHomePage';
import Navbar from '../Components/Navbar/Navbar';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Home} exact component={HomePage} />
        <Route path={AppRoute.Register} component={RegisterPage} />
        <Route path={AppRoute.MyBooks} component={MyBooksPage} />
        <Route path={AppRoute.Ranking} component={RankingPage} />
        <Route path={AppRoute.Author} component={AuthorPage} />
        <Route path={AppRoute.Book} component={BookPage} />
        <Route path={AppRoute.BooksCatalog} component={BooksCatalogPage} />
        <Route path={AppRoute.ProvidersCatalog} component={ProvidersCatalogPage} />
        <Route path={AppRoute.AddNewBook} component={AddNewBookPage} />
        <Route path={AppRoute.AddReview} component={AddReviewPage} />
        <Route path={AppRoute.WojtekPage} component={LoggedHomePage} />
        <Route path={AppRoute.testPage} component={Navbar} />
        <Redirect to={AppRoute.Home} />
      </Switch>
    </BrowserRouter>
  );
};
