
import classes from './linkTertiary.module.css';


interface linkTertiaryProps {
    label: string;
    href: string;
}


export const LinkTertiary: React.FC<linkTertiaryProps> = ({ label, href }) => {

  return (

    <a href={href} className={classes.linkTertiary} target="_blank" rel="noopener noreferrer"><h4>{label}</h4></a>

  );

};