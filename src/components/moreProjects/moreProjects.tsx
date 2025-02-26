import classes from './moreProjects.module.css';

interface MoreProjectsProps {
    card01: JSX.Element;
    card02: JSX.Element;
}

export const MoreProjects: React.FC<MoreProjectsProps> = ({ card01, card02 }) => {

  return (

    <div className={classes.moreProjects}>
        <div className={classes.moreProjectsContainer01}>
            <h3>Other projects</h3>
        </div>
        <div className={classes.moreProjectsContainer02}>
            {card01}
            {card02}
        </div>
    </div>

  );

};