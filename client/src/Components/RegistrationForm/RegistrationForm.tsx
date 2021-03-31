import { useFormik } from 'formik';
import {
  RegistrationFormContainer,
  RegistrationInput,
  RegistrationButton,
  RegistrationFormTitle,
  RegistrationErrorMessage,
} from './RegistrationFormStyles';
import * as Yup from 'yup';

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Niewłaściwy adres email').required('Email jest wymagany!'),
  password: Yup.string().min(8, 'Hasło musi mieś conajmniej 8 znaków!').required('Hasło jest wymagane!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Hasło musi się zgadzać!')
    .required('Powtórzenie hasła jest wyamgane!'),
});

type RegistrationFormType = {
  onSubmit: (values: Values) => void;
};

export const RegistrationForm = ({ onSubmit }: RegistrationFormType) => {
  const handleSubmit = async (values: Values) => {
    onSubmit(values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: SignupSchema,
  });

  return (
    <RegistrationFormContainer>
      <RegistrationFormTitle>Nie masz jeszcze konta?</RegistrationFormTitle>

      <form onSubmit={formik.handleSubmit}>
        <RegistrationInput
          id="email"
          name="email"
          placeholder="podaj email"
          type="email"
          onChange={formik.handleChange}
          data-testid="inputId"
          value={formik.values.email}
        />
        <RegistrationErrorMessage>
          {formik.errors.email && formik.touched.email ? formik.errors.email : null}
        </RegistrationErrorMessage>

        <RegistrationInput
          id="password"
          name="password"
          placeholder="wpisz hasło"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <RegistrationErrorMessage>
          {formik.errors.password && formik.touched.password ? formik.errors.password : null}
        </RegistrationErrorMessage>

        <RegistrationInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="powtórz hasło"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <RegistrationErrorMessage>
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? formik.errors.confirmPassword : null}
        </RegistrationErrorMessage>

        <RegistrationButton type="submit" data-testid="buttonId">
          Zarejestruj
        </RegistrationButton>
      </form>
    </RegistrationFormContainer>
  );
};

// (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
//   setSubmitting(true);
//   fetch('http://localhost:8080/api/users/register', {
//     method: 'post',
//     mode: 'no-cors',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       values,
//     }),
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       alert(result);
//     });
//   setSubmitting(false);
// }
