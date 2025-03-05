import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0) // Esto hace que la página se desplace hasta arriba
  }, [location])

  return null // Este componente no renderiza nada
}

export default ScrollToTop
