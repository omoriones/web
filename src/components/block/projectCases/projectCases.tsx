import React from "react";
import classes from './projectCases.module.css';


// Definir una interfaz para las props
interface ProjectCasesProps {
    title: string;
    text: string;
    button: JSX.Element;
  }

export const ProjectCases: React.FC<ProjectCasesProps> = ({ title, text, button }) => {
    return (

      <div className={classes.projectCases}>
        <h3>{title}</h3>
        <div className={classes.projectCasesContainer}>
            <p>{text}</p>
            {button}
        </div>
      </div>

    );
  };