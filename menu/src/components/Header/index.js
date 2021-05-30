import React from 'react';
import { useLocation } from 'react-router'
import styles from './styles.module.scss';

export function Header() {
   const [title, setTitle] = React.useState('Ementa');
   const [nameImage, setNameImage] = React.useState('fundo_ementa');
   const location = useLocation();

   React.useEffect(() => {
      
      const {pathname} = location;

      switch(pathname){
         case '/':
            setTitle('Ementa');
            setNameImage('fundo_ementa');
            break;
         case '/drinks':
            setTitle('Bebidas');
            setNameImage('fundo_bebidas');
            break;
         case '/desserts':
            setTitle('Sobremesas');
            setNameImage('fundo_sobremesas');
            break;
         default:
            setTitle('Ementa');
            setNameImage('fundo_ementa');
      }
   }, [location])
   
   return (
      <>
         <div 
            className={styles.bg} 
            style={{ backgroundImage: `"url(${nameImage}.jpg)"` }}
         >
            <img src="logo.png" alt="Logo Carnes do Convento" />
            <p>Bem-vindo ao Carnes do Convento</p>
            <h1>{title}</h1>
         </div>

         <header className={styles.header}>
            <button 
               className={`${styles.btnMenu} `} 
               aria-label="Menu" 
            />
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

// export async function getServerSideProps() {
//    const [title, setTitle] = React.useState('Ementa');
//    const [nameImage, setNameImage] = React.useState('fundo_ementa');
//    const location = useLocation();

//    React.useEffect(() => {
//       const {pathname} = location;

//       switch(pathname){
//          case '/':
//             setTitle('Ementa');
//             setNameImage('fundo_ementa');
//             break;
//          case '/drinks':
//             setTitle('Bebidas');
//             setNameImage('fundo_bebidas');
//             break;
//          case '/desserts':
//             setTitle('Sobremesas');
//             setNameImage('fundo_sobremesas');
//             break;
//          default:
//             setTitle('Ementa');
//             setNameImage('fundo_ementa');
//       }
//    }, [location])

//    console.log(title)

//    return {
//       props: {
//          title,
//          nameImage
//       }
//    }
// }

