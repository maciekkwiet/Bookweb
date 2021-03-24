import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { LoginPage } from '../Pages/LoginPage';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Login} exact component={LoginPage} />
        <Redirect to={AppRoute.Home} />
      </Switch>
    </BrowserRouter>
  );
};
