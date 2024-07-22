import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Projects() {
  const images = [
    'https://github.com/itradebtc/doctorsimages/blob/main/Dental%20App.png?raw=true',
    'https://github.com/itradebtc/doctorsimages/blob/main/First%20Portfolio.png?raw=true',
    'https://github.com/itradebtc/doctorsimages/blob/main/Time%20Tracker.png?raw=true',
    'https://github.com/itradebtc/doctorsimages/blob/main/Password%20Generator.png?raw=true',
    'https://github.com/itradebtc/doctorsimages/blob/main/Birthday%20Countdown.png?raw=true',
    'https://github.com/itradebtc/doctorsimages/blob/main/Digital%20Cloak.png?raw=true',
    'https://github.com/itradebtc/doctorsimages/blob/main/Screenshot%202023-08-22%20at%204.26.47%20PM.png?raw=true',
    // Add more image paths here
  ];

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>Hotel Gallery</h1>
        
        <div className={styles.gallery}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <Image src={image} alt={`Hotel Image ${index + 1}`} width={300} height={200} />
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
}
