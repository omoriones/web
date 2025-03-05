import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState<string | null>(null) // Evita el render inicial con un tema incorrecto

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light'
    setTheme(storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return { theme, toggleTheme }
}
