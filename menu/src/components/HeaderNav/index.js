import Link from 'next/link';
import styles from './styles.module.scss'

const index = () => {
   return (
      <nav className={styles.nav}>
         <Link to="/menu">Menu</Link>
         <Link to="/drinks">Bebidas</Link>
         <Link to="/desserts">Sobremesas</Link>
      </nav>
   )
}

export default index
