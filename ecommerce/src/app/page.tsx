import { Hero } from "app/components/shared/Hero/Hero.component";
import { Container } from "app/components/shared/container/Container";
import Image from "next/image";
import { Container as CategoryContainer } from "app/components/home/category/container"
import { Container as AboutContainer } from "app/components/home/about"
import { Card as CategoryCard } from "app/components/home/category/card"
import { Typography } from "app/components/shared/Typography";
import { PRODUCTS } from "app/data/products.data";
import { CATEGORIES } from "app/data/catergories.data";
import aboutStyles from "app/components/home/about/About.module.css";
export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <Typography.H2>Categorías</Typography.H2>
        <Container>
          <CategoryContainer>
            {
              CATEGORIES.map((category) => (
                <CategoryCard image={category.image} name={category.name} key={category.id} />
              ))
            }
          </CategoryContainer>
        </Container>
      </section>
      <AboutContainer >
        <Container className="flex justify-end">
          <div className={`${aboutStyles['about--text']} text-white`}>
            <Typography.H2 >Sobre Nosotros</Typography.H2>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              accusamus porro. Explicabo, molestiae reprehenderit. Ex similique odit
              dolorem aperiam praesentium modi libero perferendis. Aut ipsum ex
              dolores aliquid voluptate minus.
            </p>
          </div>
        </Container>
      </AboutContainer>
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
