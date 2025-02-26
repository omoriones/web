import classes from './image.module.css';

interface ImageProps {
    name?: string;
    tag?: JSX.Element;
	 alt?: string;
}

export const Image: React.FC<ImageProps> = ({ name, tag, alt }) => {

  return (

    <div className={classes.imageContainer}>
      <img src={name} className={classes.image} alt={alt}/>
      {tag}
    </div>

  );

};