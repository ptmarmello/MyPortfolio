
import React from 'react';

import styles from './hero.module.css';
export default function Hero({left, right}) {
  return (
    <div className={styles['hero-container']}>
        <div>{left}</div>
        <div>{right}</div>
    </div>
  );
}
