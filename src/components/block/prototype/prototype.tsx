import React from "react";
import classes from './prototype.module.css';


// Definir una interfaz para las props
interface PrototypeProps {
    title: string;
    name01: JSX.Element;
    name02?: JSX.Element;
    name03?: JSX.Element;
  }

export const Prototype: React.FC<PrototypeProps> = ({ title, name01, name02, name03 }) => {

    return (

      <div className={classes.prototype}>
        <small>{title}</small>
        <div className={classes.prototypeContainer}>
            {name01}
            {name02}
            {name03}
        </div>
      </div>

    );

  };