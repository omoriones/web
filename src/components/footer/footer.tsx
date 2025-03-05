import { LinkTertiary } from '../link/linkTertiary'
import classes from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <LinkTertiary
        label={'Linkedin'}
        href={'https://www.linkedin.com/in/omoriones/'}
      />
      <LinkTertiary
        label={'omoriones@gmail.com'}
        href={'mailto:omoriones@gmail.com'}
      />
    </footer>
  )
}
