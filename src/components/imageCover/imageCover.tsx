import { useState, useEffect } from "react";
import classes from "./imageCover.module.css";

interface ImageCoverProps {
    src: string; // Ejemplo: "src/assets/images/hypo/cover-hypo"
	 alt: string;
}

export const ImageCover: React.FC<ImageCoverProps> = ({ src, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const totalImages = 8; // Número total de imágenes en el loop

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex % totalImages) + 1);
        }, 700); // Cambia de imagen cada 2 segundos

        return () => clearInterval(interval);
    }, []);

    const currentImage = `${src}-0${currentIndex}.png`;

    return (
        <div className={classes.imageCoverContainer}>
            <img src={currentImage} className={classes.imageCoverImage} alt={alt} />
        </div>
    );
};
