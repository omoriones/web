
import classes from './linkHeader.module.css';


interface LinkHeaderProps {
    label?: string;
    href: string;
	 alt?: string;
    iconSrc?: string;
	 onClick?: () => void;
	 rotate?: boolean;
}


export const LinkHeader: React.FC<LinkHeaderProps> = ({ label, href, alt, iconSrc, onClick, rotate }) => {

  return (

    (!iconSrc) ? 
		<a href={href} className={classes.link}><p>{label}</p></a> : 
		(!onClick) ?
			<a href={href} className={`${classes.toggle} ${classes.link}`}><p>{label}</p><img className={classes.toggleIcon} src={iconSrc} onClick={onClick} alt={alt}/></a> :
			(rotate) ?
				<a className={`${classes.toggle} ${classes.link}`} onClick={onClick}><p>{label}</p><img className={classes.toggleIcon} src={iconSrc} alt={alt}/></a> :
				<a className={`${classes.toggleRotate} ${classes.link}`} onClick={onClick}><p>{label}</p><img className={classes.toggleIcon} src={iconSrc} alt={alt}/></a>

  );

};