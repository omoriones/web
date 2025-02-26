
import { LinkHeader } from '../link/linkHeader';
import classes from './header.module.css';
import { useTheme } from '../../hooks/useTheme';

interface HeaderProps {
  level: string;
}


export const Header: React.FC<HeaderProps> = ( {level} ) => {

	const { theme, toggleTheme } = useTheme(); // Usa el hook para gestionar el tema


	return (
		
		<div className={classes.header}>

			{(level==="homepage") ? <LinkHeader label="Olivier Moriones" href="index"/> : <LinkHeader href="index" iconSrc='src/assets/icons/arrow-left.svg' alt="Go back icon"/> }

			<div className={classes.headerOptions}>
				<LinkHeader label="About" href="about"/>
				{(theme !== "light") ?
					<LinkHeader href="" iconSrc="src/assets/icons/moon.svg" onClick={toggleTheme} alt="Toggle icon to set light mode"/> :
					<LinkHeader href="" iconSrc="src/assets/icons/sun.svg" onClick={toggleTheme} rotate alt="Toggle icon to set dark mode"/>}
				
			</div>
		</div>

		);

	};