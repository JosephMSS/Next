import styles from '../About.module.css';
interface ContainerProps {
    children: React.ReactElement[] | React.ReactElement;

}
export const Container = ({ children }: ContainerProps) => {
    return <section className={`${styles['about--container']} ${styles['about']}`}>
        {children}
    </section>
}      