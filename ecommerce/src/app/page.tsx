import { Hero } from "app/components/shared/Hero/Hero.component";
import { Container } from "app/components/shared/container/Container";
import Image from "next/image";
import Link from "next/link";
import styles from './Category.module.css'
const PRODUCTS = [
  {
    image: "/img/producto1.jpg",
    name: "Producto 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid voluptate minus.",
    price: 10000
  }
  ,
  {
    image: "/img/producto2.jpg",
    name: "Producto 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid voluptate minus.",
    price: 20000
  }
  ,
  {
    image: "/img/producto3.jpg",
    name: "Producto 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid voluptate minus.",
    price: 30000
  }
  ,
  {
    image: "/img/producto4.jpg",
    name: "Producto 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid voluptate minus.",
    price: 40000
  }
  ,
  {
    image: "/img/producto5.jpg",
    name: "Producto 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid voluptate minus.",
    price: 50000
  }
  ,
  {
    image: "/img/producto6.jpg",
    name: "Producto 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid voluptate minus.",
    price: 60000
  }
]
const CATEGORIES = [
  {
    id: 1,
    name: "Oficina",
    image: "/img/categoria1.jpg",
  },
  {
    id: 2,
    name: "Hogar",
    image: "/img/categoria2.jpg",
  },
  {
    id: 3,
    name: "Cocina",
    image: "/img/categoria3.jpg",
  },

]
export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <h2 className=" text-6xl 
          font-playfair 
          font-bold 
          text-center 
          my-20
          tracking-tighter">Categorías</h2>
        <Container>
          <div className={styles['category-container']}>

            {
              CATEGORIES.map((category) => (
                <div key={category.id} className={styles['category']}>
                  <Image src={category.image} alt={`Imagen de ${category.name}`} width={500} height={500} />
                  <Link href="#">{category.name}</Link>
                </div>
              ))
            }
          </div>
        </Container>
      </section>
      <section>
        <h2>Sobre Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
          accusamus porro. Explicabo, molestiae reprehenderit. Ex similique odit
          dolorem aperiam praesentium modi libero perferendis. Aut ipsum ex
          dolores aliquid voluptate minus.
        </p>
      </section>
      <main className="">
        <h2>Nuestros Productos</h2>

        <div>
          {
            PRODUCTS.map((product) => {
              return (
                <div key={product.name}>
                  <Image src={product.image} alt={`Imagen de ${product.name}`} width={500} height={500} />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <a href="#">Agregar al Carrito</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </main >
    </>
  );
}
