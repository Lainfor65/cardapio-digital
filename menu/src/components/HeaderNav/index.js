import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss'

const HeaderNav = () => {
   return (
      <nav className={styles.nav}>
         <Link href="/">
            <a>
               <li>
                  <img src="/fork.svg" alt="Icone garfo" />
                  <p>Menu</p>
               </li>
            </a>
         </Link>
         <Link href="/drinks">
            <a>
               <li>
                  <img src="/cup.svg" alt="Icone copo" />
                  <p>Bebidas</p>
               </li>
            </a>
            
         </Link>
         <Link href="/desserts">
            <a>
               <li>
                  <img src="/spoon.svg" alt="Icone culher" />
                  <p>Sobremesas</p>              
               </li>
            </a>
         </Link>
      </nav>
   )
}

export default HeaderNav
