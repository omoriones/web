import React from 'react'
import classes from './comment.module.css'

// Definir una interfaz para las props
interface CommentProps {
  title: string
  text: string
}

export const Comment: React.FC<CommentProps> = ({ title, text }) => {
  return (
    <div className={classes.comment}>
      <h5 className={classes.commentTitle}>{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}
