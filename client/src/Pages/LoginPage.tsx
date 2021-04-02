import axios from 'axios';

import { RegistrationForm } from '../Components/RegistrationForm/RegistrationForm';

// const createUser = (values: any) => {
//   const { name, email, password } = values;
//   axios
//     .post('http://localhost:8080/api/users/register', {
//       email: 'testll1c@wp.pl',
//       name: 'Klarac',
//       password: 'test1test1c',
//     })
//     .then((response: any) => console.log(response));
// };
export const LoginPage = () => {
  const onSubmitLoginForm = async (values) => {
    const { name, email, password } = values;
    try {
      const { data } = await axios.post('http://localhost:8080/api/users/register', {
        email,
        name,
        password,
      });
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <div>
      <RegistrationForm onSubmit={onSubmitLoginForm} />
    </div>
  );
};
