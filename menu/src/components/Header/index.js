import styles from './styles.module.css'

const index = () => {
   return (
      <>
         <div className={styles.bg}>
               <img src="logo.png" alt="Logo Carnes do COnvento" />
               <p>Bem-vindo ao Carnes do Convento</p>
               <h1>Menu</h1>
            </div>

         <header className={styles.header}>
            <button aria-label="Menu"></button>
            <div className="search">
               <form><input type="text" />Pesquisa</form>
               <img src="icon-search" alt="Icone de pesquisa" />
            </div>
            <button id="language">PT</button>
         </header>
      </>
   )
}

export default index
