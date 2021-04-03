import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Login} component={LoginPage} />
        <Route path={AppRoute.Home} component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};
