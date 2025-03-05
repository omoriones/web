import { Link } from "react-router-dom";

import classes from './linkHeader.module.css';


interface LinkHeaderProps {
    label?: string;
    href: string;
	 alt?: string;
    iconSrc?: string;
	 onClick?: () => void;
}


export const LinkHeader: React.FC<LinkHeaderProps> = ({ label, href, alt, iconSrc, onClick }) => {

	const handleClick = (e: React.MouseEvent) => {
		// Previene la acción de scroll si `href` es una cadena vacía
		if (href === "") {
		  e.preventDefault();
		}
		if (onClick) {
		  onClick(); // Ejecuta la acción del onClick, si existe
		}
	 };

  return (

    (!iconSrc) ? 
		<Link to={href} className={classes.link} onClick={handleClick}><p>{label}</p></Link> : 
		(!onClick) ?
			<Link to={href} className={`${classes.toggle} ${classes.link}`} onClick={handleClick}><p>{label}</p><img className={classes.toggleIcon} src={iconSrc} onClick={onClick} alt={alt}/></Link> :
			<Link to={""} className={`${classes.toggleRotate} ${classes.link}`} onClick={handleClick} ><p>{label}</p><img className={classes.toggleIcon} src={iconSrc} alt={alt}/></Link>

  );

};