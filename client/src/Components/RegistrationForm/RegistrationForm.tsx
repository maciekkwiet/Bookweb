import { Formik, Form, FormikHelpers } from 'formik';
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

  return (
    <RegistrationFormContainer>
      <RegistrationFormTitle>Nie masz jeszcze konta?</RegistrationFormTitle>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <RegistrationInput
              id="email"
              name="email"
              placeholder="podaj email"
              type="email"
              onChange={handleChange}
              data-testid="inputId"
              value={values.email}
            />
            <RegistrationErrorMessage>{errors.email && touched.email ? errors.email : null}</RegistrationErrorMessage>

            <RegistrationInput
              id="password"
              name="password"
              placeholder="wpisz hasło"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            <RegistrationErrorMessage>
              {errors.password && touched.password ? errors.password : null}
            </RegistrationErrorMessage>

            <RegistrationInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="powtórz hasło"
              onChange={handleChange}
              value={values.confirmPassword}
            />
            <RegistrationErrorMessage>
              {errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
            </RegistrationErrorMessage>

            <RegistrationButton type="submit" data-testid="buttonId">
              Zarejestruj
            </RegistrationButton>
          </Form>
        )}
      </Formik>
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
