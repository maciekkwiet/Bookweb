import { useHistory } from 'react-router-dom';
import { Button } from '../Button/Button';

export type TagComponentProps = {
  children: string;
  url: string;
}

export const Tag = ({children, url}: TagComponentProps) => {
  const history = useHistory();
  const handleClick = () => history.push(url);
  return (
    <Button onClick={handleClick}>
      { children }
    </Button>
  )
}