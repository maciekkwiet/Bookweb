import { ImageComponent } from './ImageStyles';

export type ImageComponentProps = {
  src: string;
  alt: string;
};

export const Image = ({ src, alt }: ImageComponentProps) => {
  return <ImageComponent src={src} alt={alt} />;
};
