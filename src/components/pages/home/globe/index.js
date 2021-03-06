import { useEffect } from 'react';

const Globe = () => {

    useEffect(() => {
        const initGlobe = require('./globe.js').default;
        
        initGlobe();
    }, []);

    return (
        <div className="globe js-globe">
			<ul className="globe-list js-list"></ul>
			<canvas className="globe-canvas js-canvas"></canvas>
		</div>
    );
}

export default Globe;