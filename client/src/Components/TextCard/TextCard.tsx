import { TextCardComponent } from './TextCardStyles';
import { AuthorName } from './TextCardStyles';
import { Description } from './TextCardStyles';

export type TextCardComponentProps = {
  authorName: string;
  authorLastName: string;
  description: string;
};

export const TextCard = ({ authorName, authorLastName, description, ...otherProps }: TextCardComponentProps) => {
  return (
    <TextCardComponent>
      <AuthorName>
        {authorName} {authorLastName}
      </AuthorName>
      <Description>{description}</Description>
    </TextCardComponent>
  );
};
