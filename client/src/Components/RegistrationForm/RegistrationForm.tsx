import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  RegistrationFormContainer,
  RegistrationInput,
  RegistrationButton,
  RegistrationFormTitle,
  RegistrationErrorMessage
} from './RegistrationFormStyles';



interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nazwa użytkownika jest wymagana!'),
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
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setSubmitting(true);
          const { name, email, password } = values;
          axios.post('http://localhost:8080/api/users/register', {
            name,
            email,
            password,
          })
            .then(res => {
              alert(res.data)
            }, (error) => {
              alert(error);
            })

          setSubmitting(false);

        }}
      >
        {({ errors, touched, values, handleChange, handleSubmit, }) => (

          <Form onSubmit={handleSubmit}>

            <RegistrationInput
              id="name"
              name="name"
              placeholder="podaj nazwę użytkownika"
              type="name"
              onChange={handleChange}
              data-testid="inputId"
              value={values.name} />
            <RegistrationErrorMessage>{errors.name && touched.name ? errors.name : null}
            </RegistrationErrorMessage>

            <RegistrationInput
              id="email"
              name="email"
              placeholder="podaj adres email"
              type="email"
              onChange={handleChange}
              data-testid="inputId"
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

            <RegistrationButton
              type="submit"
              data-testid="buttonId"

            >Zarejestruj</RegistrationButton>
          </Form>

        )}
      </Formik>
    </RegistrationFormContainer >
  );
};
