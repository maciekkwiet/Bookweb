
import { Formik, Form, FormikHelpers } from 'formik';
import { RegistrationFormContainer, RegistrationInput, RegistrationButton, RegistrationFormTitle, RegistrationErrorMessage } from './RegistrationFormStyles';
import * as Yup from 'yup';
import axios from 'axios';

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Niewłaściwy adres email")
    .required("Email jest wymagany!"),
  password: Yup.string()
    .min(8, 'Hasło musi mieś conajmniej 8 znaków!')
    .required('Hasło jest wymagane!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Hasło musi się zgadzać!')
    .required('Powtórzenie hasła jest wyamgane!'),
});



export const RegistrationForm = () => {
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
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {


          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
          }, 500);



        }}
      >
        {({ errors, touched, values, handleChange }) => (

          <Form >
            <RegistrationInput
              id="email"
              name="email"
              placeholder="podaj email"
              type="email"
              onChange={handleChange}
              value={values.email} />
            <RegistrationErrorMessage>{errors.email && touched.email ? errors.email : null}
            </RegistrationErrorMessage>


            <RegistrationInput
              id="password"
              name="password"
              placeholder="wpisz hasło"
              type="password"
              onChange={handleChange}
              value={values.password} />
            <RegistrationErrorMessage>{errors.password && touched.password ? errors.password : null}
            </RegistrationErrorMessage>


            <RegistrationInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="powtórz hasło"
              onChange={handleChange}
              value={values.confirmPassword} />
            <RegistrationErrorMessage>{errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
            </RegistrationErrorMessage>

            <RegistrationButton type="submit">Zarejestruj</RegistrationButton>
          </Form>

        )}
      </Formik>
    </RegistrationFormContainer >
  );
};