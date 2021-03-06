import { useHistory } from 'react-router-dom';
import { Button } from '../Button/Button';

export type TagComponentProps = {
  url: string;
  text: string;
};

export const Tag = ({ url, text }: TagComponentProps) => {
  const history = useHistory();
  const handleUrl = () => history.push(`/${url}`);

  return <Button onClick={handleUrl}>{text}</Button>;
};
