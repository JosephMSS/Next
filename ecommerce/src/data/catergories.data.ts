export interface ICategory {
  id: number;
  name: string;
  image: string;
}
export const CATEGORIES: ICategory[] = [
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
];
