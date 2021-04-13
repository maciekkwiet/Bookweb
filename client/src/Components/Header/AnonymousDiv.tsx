import { Axios } from '../../helpers/axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';

import { LogInput, LogDiv, LogButton, ErrorMessageEmail, ErrorMessagePassword } from './AnonymousDivStyles';

interface Values {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Niewłaściwy adres email').required('Email jest wymagany!'),
  password: Yup.string().min(8, 'Hasło musi zawierać conajmniej 8 znaków!').required('Hasło jest wymagane!'),
});

export const AnonymousDiv = () => {
  const { addToast } = useToasts();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values: Values) => {
      try {
        const { data } = await Axios.post('/api/users/login', { email: values.email, password: values.password }, {});
        localStorage.setItem('token', data.token);
      } catch (e) {
        addToast(`Nieprawidłowa nazwa użytkownika lub hasło`, {
          appearance: 'error',
        });
      }
    },
    validationSchema: SignupSchema,
  });

  return (
    <LogDiv>
      <form onSubmit={formik.handleSubmit}>
        <LogInput
          type={'email'}
          name={'email'}
          placeholder={'adres e-mail'}
          required={true}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <ErrorMessageEmail>{formik.errors.email && formik.touched.email ? formik.errors.email : ''}</ErrorMessageEmail>

        <LogInput
          type={'password'}
          name={'password'}
          placeholder={'hasło'}
          required={true}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <ErrorMessagePassword>
          {formik.errors.password && formik.touched.password ? formik.errors.password : ''}
        </ErrorMessagePassword>
        <LogButton type="submit">ZALOGUJ</LogButton>
      </form>
    </LogDiv>
  );
};
