import { Link } from 'react-router-dom'

import { useState, useRef } from 'react'
import { LinkIcon } from '../link/linkIcon/linkIcon'
import classes from './card.module.css'

interface CardProps {
  projectName: string
  projectSubtitle: string
  access: string
  totalImages: number // Número total de imágenes
}

export const Card: React.FC<CardProps> = ({
  projectName,
  projectSubtitle,
  access,
  totalImages,
}) => {
  const projectNameLowercase = projectName.toLowerCase()
  const href = access === 'private' ? '/private' : '/' + projectNameLowercase

  const [imageIndex, setImageIndex] = useState(1)
  const intervalRef = useRef<number | null>(null)

  const startImageRotation = () => {
    if (totalImages <= 1) return // Si solo hay 1 imagen, no hacer nada

    let nextIndex = 2 // Cambia a la segunda imagen de inmediato
    setImageIndex(nextIndex)

    intervalRef.current = setInterval(() => {
      setImageIndex(prevIndex => {
        const newIndex = prevIndex + 1
        return newIndex > totalImages ? 1 : newIndex // Vuelve a 1 si se pasa del total
      })
    }, 700)
  }

  const stopImageRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setImageIndex(1) // Volver a la primera imagen
  }

  return (
    <Link
      to={href}
      className={classes.card}
      onMouseEnter={startImageRotation}
      onMouseLeave={stopImageRotation}
    >
      <img
        src={`src/assets/images/${projectNameLowercase}/cover-${projectNameLowercase}-0${imageIndex}.jpg`}
        className={classes.cardImage}
        alt={`${projectName}`}
      />
      <div className={classes.cardInfo}>
        <div className={classes.cardInfoText}>
          <h3>{projectName}</h3>
          <p>{projectSubtitle}</p>
        </div>
        {access === 'private' ? (
          <LinkIcon iconSrc={'src/assets/icons/lock.svg'} />
        ) : (
          <LinkIcon iconSrc={'src/assets/icons/arrow-right.svg'} />
        )}
      </div>
    </Link>
  )
}
