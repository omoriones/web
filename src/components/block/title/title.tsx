import React from 'react'
import classes from './title.module.css'

// Definir una interfaz para las props
interface TitleProps {
  number?: string
  title: string
}

export const Title: React.FC<TitleProps> = ({ number, title }) => {
  return (
    <div className={classes.title}>
      <h5>{number}</h5>
      <div className={classes.titleContainer}>
        <h3>{title}</h3>
      </div>
    </div>
  )
}
