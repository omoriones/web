import classes from './linkInline.module.css'

interface linkInlineProps {
  label: string
  href: string
}

export const LinkInline: React.FC<linkInlineProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className={classes.linkInline}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}
