import classes from './video.module.css'

interface VideoProps {
  name?: string
  tag?: JSX.Element
}

export const Video: React.FC<VideoProps> = ({ name, tag }) => {
  return (
    <div className={classes.videoContainer}>
      <video className={classes.video} autoPlay muted loop>
        <source src={name} type="video/mp4" />
      </video>
      {tag}
    </div>
  )
}
