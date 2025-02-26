import classes from './projectMain.module.css';

interface ProjectMainProps {
  subtitle: string;
  title: string;
  description: string;
  prototype01?: JSX.Element;
  prototype02?: JSX.Element;
}

export const ProjectMain: React.FC<ProjectMainProps> = ({ subtitle, title, description, prototype01, prototype02 }) => {

  return (

    <div className={classes.projectMain}>
        <div className={classes.projectMainContainer01}>
            <small>{subtitle}</small>
            <div className={classes.projectMainContainerTitleDescription}>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </div>
        <div className={classes.projectMainContainer02}>
          {prototype01}
          {prototype02}
        </div>
    </div>

  );

};