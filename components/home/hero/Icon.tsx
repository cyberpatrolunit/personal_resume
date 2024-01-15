import { useEffect, useRef } from 'react';
import styles from "./icon.module.scss";
import { Application } from '@splinetool/runtime';

const Icon = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const app = new Application(canvasRef.current);
            app.load('https://prod.spline.design/VWaUX6oAcDMeSa1H/scene.splinecode');
        }
    }, []);

    return (
        <div className={styles.iconWrapper}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Icon;
