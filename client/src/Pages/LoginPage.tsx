import axios from 'axios';

import { RegistrationForm } from '../Components/RegistrationForm/RegistrationForm';

const createUser = (values: any) => {
  const { name, email, password } = values;
  axios
    .post('http://localhost:8080/api/users/register', {
      email: 'testll1c@wp.pl',
      name: 'Klarac',
      password: 'test1test1c',
    })
    .then((response: any) => console.log(response));
};
export const LoginPage = () => {
  const onSubmitLoginForm = (values) => {
    const { name, email, password } = values;
    const reqBody = {
      email: 'teyst1cfccssssc@wp.pl',
      name: 'Klarac',
      password: 'test1test1c',
    };
    axios
      .post('http://localhost:8080/api/users/register', reqBody)
      .then((response: any) => console.log('FFFF', response))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <RegistrationForm onSubmit={onSubmitLoginForm} />
    </div>
  );
};
