import React from 'react';

import '../style/global.scss';
import { Header } from '../components/Header';

import styles from '../style/app.module.scss'
import HeaderNav from '../components/HeaderNav';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <HeaderNav />
    </div>
  )
}

export default MyApp
