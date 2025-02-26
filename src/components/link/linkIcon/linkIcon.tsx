
import classes from './linkIcon.module.css';


interface LinkIconProps {
    iconSrc: string;
}


export const LinkIcon: React.FC<LinkIconProps> = ({ iconSrc }) => {

  return (

    <div className={classes.linkIcon}><img className={classes.linkIconIcon} src={iconSrc}/></div>

  );

};