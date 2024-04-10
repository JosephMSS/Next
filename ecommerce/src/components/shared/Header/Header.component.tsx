import Link from "next/link";
import { Container, } from "../container/Container";
import styles from "./Header.module.css";
const pages = [
  {
    name: "Inicio",
    url: "/",
  },
  {
    name: "Nosotros",
    url: "/about",
  },
  {
    name: "Tienda",
    url: "/store",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Galería",
    url: "/gallery",
  },
  {
    name: "Contacto",
    url: "/contact",
  },
];
export const Header = () => {
  return (
    <>
      <header>
        <h1 className='
          text-8xl 
          font-playfair 
          font-bold 
          text-center 
          my-20
          tracking-tighter
          '>Tienda <span className="text-primary">Muebles</span></h1>
      </header>

      <div className={styles['nav-border']}>
        <Container>
          <nav className={styles['nav-container']}>
            {pages.map((pages) => {
              return (<Link href={pages.url} key={pages.url} >
                {pages.name}
              </Link>);
            })}
          </nav>
        </Container>
      </div>
    </>
  );
};
