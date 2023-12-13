import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineBG = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const app = new Application(canvasRef.current);
            app.load('https://prod.spline.design/qQGEiViy9RKI4ueL/scene.splinecode');
        }
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default SplineBG;
