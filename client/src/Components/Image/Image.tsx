import { ImageComponent } from './ImageStyles';

export type ImageComponentProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
};

export const Image = ({ src, alt, width, height }: ImageComponentProps) => {
  return <ImageComponent src={src} alt={alt} width={width} height={height} />;
};
