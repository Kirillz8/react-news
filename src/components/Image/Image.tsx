import s from "./Image.module.css";

export type ImageProps = {
  image: string;
};

export const Image = ({ image }: ImageProps) => {
  return (
    <div className={s.wrapper}>
      {image ? <img src={image} alt="news" className={s.image} /> : null}
    </div>
  );
};
