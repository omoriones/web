
import classes from './heroAbout.module.css';
import classesH from "../hero/hero.module.css";


export const HeroAbout = () => {
  return (
    <div className={classes.heroAbout}>
      <h1>Hola, my name is Oli, and I'm a <span className={classesH.orange}>senior product designer</span> specialised in design systems, 
		with 9 years of experience designing digital products.</h1>
    </div>
  )
}