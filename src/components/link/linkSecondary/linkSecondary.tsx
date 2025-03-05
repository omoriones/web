import classes from './linkSecondary.module.css'

interface LinkSecondaryProps {
  label?: string
  href: string
  iconSrc?: string
  target?: string
}

export const LinkSecondary: React.FC<LinkSecondaryProps> = ({
  label,
  href,
  iconSrc,
  target,
}) => {
  return !iconSrc ? (
    <a
      href={href}
      className={classes.linkSecondary}
      target={target}
      rel="noopener noreferrer"
    >
      <p>{label}</p>
    </a>
  ) : (
    <a
      href={href}
      className={classes.linkSecondary}
      target={target}
      rel="noopener noreferrer"
    >
      <p>{label}</p>
      <img className={classes.linkSecondaryIcon} src={iconSrc} />
    </a>
  )
}
