import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { RegistrationForm } from '../Components/RegistrationForm/RegistrationForm';
import { signupUser } from '../Actions/userSlice';
import { RootState } from '../app/store';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const status = useSelector((state: RootState) => state.user.status);

  const onSubmitLoginForm = (values) => {
    dispatch(signupUser(values));
  };

  useEffect(() => {
    if (status === 'success') {
      addToast('Congratulation you create your account in BookWeb app', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
    if (status === 'failed') {
      addToast('Sorry you can not create your account, please try again', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }, [status]);

  return (
    <div>
      <RegistrationForm onSubmit={onSubmitLoginForm} />
    </div>
  );
};
