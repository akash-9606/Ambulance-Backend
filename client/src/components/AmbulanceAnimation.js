import React, { useState } from 'react';
import '../styles/AmbulanceAnimation.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ambulanceAnimation from '../animations/ambulance-animation.lottie';

function AmbulanceScene() {
    const [isReady, setIsReady] = useState(false);

    return (
        <div className="ambulance-container">
            {!isReady && <div></div>}
            <DotLottieReact
                src={ambulanceAnimation}
                loop
                autoplay
                onDOMLoaded={() => setIsReady(true)}
                style={{ width: '500px', height: '400px' }}
            />
        </div>
    );
}

export default AmbulanceScene;
