import React from 'react';

import '../style/global.scss';
import { Header } from '../components/Header';

import styles from '../style/app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
    </div>
  )
}

export default MyApp
