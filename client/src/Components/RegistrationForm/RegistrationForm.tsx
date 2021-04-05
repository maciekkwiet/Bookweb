import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  RegistrationFormContainer,
  RegistrationInput,
  RegistrationButton,
  RegistrationFormTitle,
  RegistrationErrorMessage,
} from './RegistrationFormStyles';

interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Nazwa użytkownika jest wymagana!'),
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
      name: '',
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
          id="name"
          name="name"
          placeholder="podaj nazwę użytkownika"
          type="name"
          onChange={formik.handleChange}
          data-testid="inputId"
          value={formik.values.name}
        />
        <RegistrationErrorMessage>
          {formik.errors.name && formik.touched.name ? formik.errors.name : null}
        </RegistrationErrorMessage>

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
