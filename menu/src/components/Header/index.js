import styles from './styles.module.scss';

export function Header() {
   return (
      <>
         <div className={styles.bg}>
            <img src="logo.png" alt="Logo Carnes do Convento" />
            <p>Bem-vindo ao Carnes do Convento</p>
            <h1>Ementa</h1>
         </div>

         <header className={styles.header}>
            <button className={`${styles.btnMenu} ${styles.btnMenuActive}`} aria-label="Menu" />
            <div className="search">
               <form>
                  <input type="text" placeholder="Ex: Fraldinha..." name="search" id="search" />
                  <label htmlFor="search">
                     <img src="search.svg" alt="Icone de pesquisa" />
                  </label>
               </form>
            </div>
            <button id="language">PT</button>
         </header>
      </>
   );
}

