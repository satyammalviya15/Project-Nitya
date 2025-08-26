'use client';

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

function Robot() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main>
      <section className='relative flex h-25 items-center justify-center bg-white'>
        {!isLoaded && (
          <div className="z-20 text-black text-xl font-medium">
            Loading robot...
          </div>
        )}
        <Spline 
          className='absolute z-10'
          scene='https://prod.spline.design/gnwulYtcLQRhCwsF/scene.splinecode'
          onLoad={() => setIsLoaded(true)}
        />
      </section>
    </main>
  );
}

export default Robot;
