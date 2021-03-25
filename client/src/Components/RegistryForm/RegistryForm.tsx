
import { Formik, Form, FormikHelpers } from 'formik';
import { RegistrationFormContainer, RegistrationInput, RegistrationErrorEmail, RegistrationErrorPassword, RegistrationErrorConfirmPassword, RegistrationButton, RegistrationFormTitle } from './RegistryFormStyles';
import * as Yup from 'yup';

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Niewłaściwy adres email")
    .required("EMail jest wymagany!"),
  password: Yup.string()
    .min(8, 'Hasło musi mieś conajmniej 8 znaków!')
    .required('Hasło jest wymagane!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Hasło musi się zgadzać!')
    .required('Required'),
});

export const RegistryForm = () => {
  return (
    <RegistrationFormContainer>
      <RegistrationFormTitle>NIe masz jeszcze konta?</RegistrationFormTitle>
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
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <RegistrationInput
              id="email"
              name="email"
              placeholder="podaj email"
              type="email"
              onChange={handleChange}
              value={values.email} />
            {errors.email && touched.email ? <RegistrationErrorEmail>{errors.email}</RegistrationErrorEmail> : null}


            <RegistrationInput
              id="password"
              name="password"
              placeholder="wpisz hasło"
              type="password"
              onChange={handleChange}
              value={values.password} />
            {errors.password && touched.password ? <RegistrationErrorPassword>{errors.password}</RegistrationErrorPassword> : null}

            <RegistrationInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="powtórz hasło"
              onChange={handleChange}
              value={values.confirmPassword} />
            {errors.confirmPassword && touched.confirmPassword ? <RegistrationErrorConfirmPassword>{errors.confirmPassword}</RegistrationErrorConfirmPassword> : null}

            <RegistrationButton type="submit">Zarejestruj</RegistrationButton>
          </Form>
        )}
      </Formik>
    </RegistrationFormContainer >
  );
};