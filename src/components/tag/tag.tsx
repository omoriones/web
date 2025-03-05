import classes from './tag.module.css'

interface TagProps {
  text: string
}

export const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className={classes.tag}>
      <small>{text}</small>
    </div>
  )
}
