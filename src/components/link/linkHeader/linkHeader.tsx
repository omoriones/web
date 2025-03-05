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

  return (

    (!iconSrc) ? 
		<Link to={href} className={classes.link}><p>{label}</p></Link> : 
		(!onClick) ?
			<Link to={href} className={`${classes.toggle} ${classes.link}`}><p>{label}</p><img className={classes.toggleIcon} src={iconSrc} onClick={onClick} alt={alt}/></Link> :
			<Link className={`${classes.toggleRotate} ${classes.link}`} onClick={onClick} to={""}><p>{label}</p><img className={classes.toggleIcon} src={iconSrc} alt={alt}/></Link>

  );

};