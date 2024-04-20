import Image from "next/image";
import Link from "next/link";
import styles from './Card.module.css'
interface ICardProps {
    image: string;
    name: string;
}
export const Card = ({ image, name }: ICardProps) => {
    return <div className={styles['category']}>
        <Image src={image} alt={`Imagen de ${name}`} width={500} height={500} />
        <Link href="#">{name}</Link>
    </div>
}