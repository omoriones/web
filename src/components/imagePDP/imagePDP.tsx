import classes from './imagePDP.module.css'

interface ImagePDPProps {
  name01: string
  name02?: string
  name03?: string
  name04?: string
  name05?: string
  name06?: string
  name07?: string
  alt: string
}

export const ImagePDP: React.FC<ImagePDPProps> = ({
  name01,
  name02,
  name03,
  name04,
  name05,
  name06,
  name07,
  alt,
}) => {
  return (
    <div className={classes.imagePDPContainer}>
      <img src={name01} className={classes.imagePDPImage} alt={alt} />
      {name02 && (
        <img src={name02} className={classes.imagePDPImage} alt={alt} />
      )}
      {name03 && (
        <img src={name03} className={classes.imagePDPImage} alt={alt} />
      )}
      {name04 && (
        <img src={name04} className={classes.imagePDPImage} alt={alt} />
      )}
      {name05 && (
        <img src={name05} className={classes.imagePDPImage} alt={alt} />
      )}
      {name06 && (
        <img src={name06} className={classes.imagePDPImage} alt={alt} />
      )}
      {name07 && (
        <img src={name07} className={classes.imagePDPImage} alt={alt} />
      )}
    </div>
  )
}
