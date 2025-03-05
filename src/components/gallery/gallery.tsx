import { Image } from '../image'
import { Video } from '../video'
import classes from './gallery.module.css'

interface GalleryProps {
  mediaName01: string
  tag01?: JSX.Element
  mediaType01: string
  alt01?: string
  mediaName02?: string
  tag02?: JSX.Element
  mediaType02?: string
  alt02?: string
  mediaName03?: string
  tag03?: JSX.Element
  mediaType03?: string
  alt03?: string
}

export const Gallery: React.FC<GalleryProps> = ({
  mediaName01,
  tag01,
  mediaType01,
  alt01,
  mediaName02,
  tag02,
  mediaType02,
  alt02,
  mediaName03,
  tag03,
  mediaType03,
  alt03,
}) => {
  return (
    <div className={classes.gallery}>
      {mediaType01 === 'image' ? (
        <Image name={mediaName01} tag={tag01} alt={alt01} />
      ) : (
        <Video name={mediaName01} tag={tag01} />
      )}
      {mediaName02 &&
        (mediaType02 === 'image' ? (
          <Image name={mediaName02} tag={tag02} alt={alt02} />
        ) : (
          <Video name={mediaName02} tag={tag02} />
        ))}
      {mediaName03 &&
        (mediaType03 === 'image' ? (
          <Image name={mediaName03} tag={tag03} alt={alt03} />
        ) : (
          <Video name={mediaName03} tag={tag03} />
        ))}
    </div>
  )
}
