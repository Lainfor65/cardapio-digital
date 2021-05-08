import styles from './styles.module.css';
import Link from 'next/link'

const index = () => {
   return (
      <header className={styles.header}>
         <Link to="#">
            Menu
         </Link>
         <Link to="#">
            Bebidas
         </Link>
         <Link to="#">
            Sobremesas
         </Link>
      </header>
   )
}

export default index
