import classes from './linkPrimary.module.css'

interface LinkPrimaryProps {
  label: string
  href: string
  iconSrc?: string
  target?: string
}

export const LinkPrimary: React.FC<LinkPrimaryProps> = ({
  label,
  href,
  iconSrc,
  target,
}) => {
  return !iconSrc ? (
    <a
      href={href}
      className={classes.linkPrimary}
      target={target}
      rel="noopener noreferrer"
    >
      <p>{label}</p>
    </a>
  ) : (
    <a
      href={href}
      className={classes.linkPrimary}
      target={target}
      rel="noopener noreferrer"
    >
      <p>{label}</p>
      <img className={classes.linkPrimaryIcon} src={iconSrc} />
    </a>
  )
}
