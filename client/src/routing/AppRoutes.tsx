import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { RegisterPage } from '../Pages/RegisterPage';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Register} exact component={RegisterPage} />
        <Redirect to={AppRoute.Home} />
      </Switch>
    </BrowserRouter>
  );
};
