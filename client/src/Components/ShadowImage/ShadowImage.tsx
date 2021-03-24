import { ShadowImageComponent } from './ShadowImageStyles';

export type ShadowImageComponentProps = {
  src: string;
  alt: string;
};

export const ShadowImage = ({ src, alt }: ShadowImageComponentProps) => {
  return <ShadowImageComponent src={src} alt={alt} />;
};
