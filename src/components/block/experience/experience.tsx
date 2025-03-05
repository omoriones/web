import React from 'react'
import classes from './experience.module.css'

// Definir una interfaz para las props
interface CommentProps {
  position: string
  company: string
  dates: string
  text: string
}

export const Experience: React.FC<CommentProps> = ({
  position,
  company,
  dates,
  text,
}) => {
  return (
    <div className={classes.experience}>
      <div className={classes.experienceLeftContainer}>
        <h5>{position}</h5>
        <p>{company}</p>
        <small>{dates}</small>
      </div>
      <p>{text}</p>
    </div>
  )
}
